/**
 * Carbon badge helper script.
 *
 * Usage:
 *   node scripts/carbon-badge.mjs update  — build, measure, call API, save to carbon.json
 *   node scripts/carbon-badge.mjs patch   — replace placeholders in dist/ using carbon.json
 */

import { readFileSync, writeFileSync, readdirSync, createReadStream, statSync } from 'node:fs'
import { resolve, join } from 'node:path'
import { createServer, get as httpGet } from 'node:http'
import { pipeline } from 'node:stream/promises'
import { createGzip, gunzipSync } from 'node:zlib'
import { execSync } from 'node:child_process'

const ROOT_DIR = resolve(import.meta.dirname, '..')
const DIST_DIR = join(ROOT_DIR, 'dist')
const CARBON_JSON = join(ROOT_DIR, 'carbon.json')
const GREEN_HOSTING = 1

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
}

const COMPRESSIBLE = new Set(['text/html', 'text/css', 'application/javascript', 'image/svg+xml'])

function startServer() {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      const filePath = join(DIST_DIR, req.url === '/' ? '/index.html' : req.url)
      try {
        statSync(filePath)
      } catch {
        res.writeHead(404)
        res.end()
        return
      }

      const ext = filePath.slice(filePath.lastIndexOf('.'))
      const mime = MIME_TYPES[ext] || 'application/octet-stream'
      const acceptsGzip = (req.headers['accept-encoding'] || '').includes('gzip')
      const shouldCompress = acceptsGzip && COMPRESSIBLE.has(mime)

      const headers = { 'Content-Type': mime }
      if (shouldCompress) {
        headers['Content-Encoding'] = 'gzip'
      }
      res.writeHead(200, headers)

      if (shouldCompress) {
        await pipeline(createReadStream(filePath), createGzip(), res)
      } else {
        await pipeline(createReadStream(filePath), res)
      }
    })

    server.listen(0, '127.0.0.1', () => {
      resolve(server)
    })
  })
}

function rawGet(url) {
  return new Promise((resolve, reject) => {
    httpGet(url, { headers: { 'Accept-Encoding': 'gzip' } }, (res) => {
      const chunks = []
      res.on('data', (chunk) => chunks.push(chunk))
      res.on('end', () => {
        const raw = Buffer.concat(chunks)
        let body = raw
        if (res.headers['content-encoding'] === 'gzip') {
          body = gunzipSync(raw)
        }
        resolve({ rawBytes: raw.length, body: body.toString('utf-8') })
      })
      res.on('error', reject)
    }).on('error', reject)
  })
}

function parseUnicodeRange(rangeStr) {
  const ranges = []
  for (const part of rangeStr.split(',')) {
    const trimmed = part.trim().replace(/^U\+/i, '')
    if (trimmed.includes('-')) {
      const [start, end] = trimmed.split('-')
      ranges.push([parseInt(start, 16), parseInt(end, 16)])
    } else {
      const cp = parseInt(trimmed, 16)
      ranges.push([cp, cp])
    }
  }
  return ranges
}

function textUsesRange(text, ranges) {
  for (const char of text) {
    const cp = char.codePointAt(0)
    for (const [start, end] of ranges) {
      if (cp >= start && cp <= end) return true
    }
  }
  return false
}

function getFontsForPage(cssBody, pageText) {
  const fonts = []
  for (const face of cssBody.matchAll(/@font-face\{[^}]+\}/g)) {
    const block = face[0]
    const src = block.match(/url\((\/_astro\/[^)]+\.woff2)\)/)
    const range = block.match(/unicode-range:([^}]+)/)
    if (!src) continue
    if (!range || textUsesRange(pageText, parseUnicodeRange(range[1]))) {
      fonts.push(src[1])
    }
  }
  return fonts
}

async function measurePageTransfer(baseUrl) {
  const html = await rawGet(baseUrl)
  let totalBytes = html.rawBytes

  const pageText = html.body
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, '')

  const subResources = new Set()
  for (const match of html.body.matchAll(/\/_astro\/[^"'\s)]+/g)) {
    subResources.add(match[0])
  }

  const fontPaths = new Set()
  for (const path of subResources) {
    const res = await rawGet(baseUrl + path)
    totalBytes += res.rawBytes

    if (path.endsWith('.css')) {
      for (const font of getFontsForPage(res.body, pageText)) {
        fontPaths.add(font)
      }
    }
  }

  for (const path of fontPaths) {
    const res = await rawGet(baseUrl + path)
    totalBytes += res.rawBytes
  }

  return totalBytes
}

function findHtmlFiles(dir) {
  const files = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...findHtmlFiles(fullPath))
    } else if (entry.name.endsWith('.html')) {
      files.push(fullPath)
    }
  }
  return files
}

async function update() {
  // Build the site
  console.log('Building site...')
  execSync('npm run build', { cwd: ROOT_DIR, stdio: 'inherit' })

  // Measure transfer size
  console.log('Measuring homepage transfer size...')
  const server = await startServer()
  let bytes
  try {
    bytes = await measurePageTransfer(`http://127.0.0.1:${server.address().port}`)
  } finally {
    server.close()
  }
  console.log(`  ${bytes} bytes (${(bytes / 1024).toFixed(1)} KB)`)

  // Call the API
  console.log('Fetching carbon data...')
  const url = `https://api.websitecarbon.com/data?bytes=${bytes}&green=${GREEN_HOSTING}`
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`API returned ${response.status}`)
  }
  const data = await response.json()

  const result = {
    co2: data.gco2e.toFixed(2),
    percent: (data.cleanerThan * 100).toFixed(0),
  }
  console.log(`  CO2: ${result.co2}g | Cleaner than: ${result.percent}%`)

  writeFileSync(CARBON_JSON, JSON.stringify(result, null, 2) + '\n')
  console.log('Saved to carbon.json')
}

function patch() {
  let data
  try {
    data = JSON.parse(readFileSync(CARBON_JSON, 'utf-8'))
  } catch {
    console.warn('carbon.json not found, using fallback values')
    data = { co2: '0.50', percent: '50' }
  }

  const htmlFiles = findHtmlFiles(DIST_DIR)
  let patchedCount = 0
  for (const filePath of htmlFiles) {
    let content = readFileSync(filePath, 'utf-8')
    if (content.includes('__CARBON_CO2__')) {
      content = content.replaceAll('__CARBON_CO2__', data.co2)
      content = content.replaceAll('__CARBON_PERCENT__', data.percent)
      writeFileSync(filePath, content)
      patchedCount++
    }
  }
  console.log(`Patched ${patchedCount} HTML files.`)
}

const command = process.argv[2]

if (command === 'update') {
  await update()
} else if (command === 'patch') {
  patch()
} else {
  console.error('Usage: node carbon-badge.mjs <update|patch>')
  process.exit(1)
}
