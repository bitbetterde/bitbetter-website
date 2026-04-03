/**
 * Post-build script for the Website Carbon badge.
 *
 * Usage:
 *   node scripts/carbon-badge.mjs measure   — measure homepage transfer bytes, print to stdout
 *   node scripts/carbon-badge.mjs patch <co2> <percent> — replace placeholders in all HTML files
 *
 * The API call happens externally (e.g. via curl in CI) to avoid Cloudflare bot detection.
 * Placeholders in HTML: __CARBON_CO2__ and __CARBON_PERCENT__
 */

import { readFileSync, writeFileSync, readdirSync, createReadStream, statSync } from 'node:fs'
import { resolve, join } from 'node:path'
import { createServer, get as httpGet } from 'node:http'
import { pipeline } from 'node:stream/promises'
import { createGzip, gunzipSync } from 'node:zlib'

const DIST_DIR = resolve(import.meta.dirname, '..', 'dist')

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

async function measure() {
  const server = await startServer()
  const port = server.address().port
  try {
    const bytes = await measurePageTransfer(`http://127.0.0.1:${port}`)
    console.log(bytes)
  } finally {
    server.close()
  }
}

function patch(co2, percent) {
  const htmlFiles = findHtmlFiles(DIST_DIR)
  let patchedCount = 0
  for (const filePath of htmlFiles) {
    let content = readFileSync(filePath, 'utf-8')
    if (content.includes('__CARBON_CO2__')) {
      content = content.replaceAll('__CARBON_CO2__', co2)
      content = content.replaceAll('__CARBON_PERCENT__', percent)
      writeFileSync(filePath, content)
      patchedCount++
    }
  }
  console.log(`Patched ${patchedCount} HTML files.`)
}

const [command, ...args] = process.argv.slice(2)

if (command === 'measure') {
  await measure()
} else if (command === 'patch') {
  const [co2, percent] = args
  if (!co2 || !percent) {
    console.error('Usage: node carbon-badge.mjs patch <co2> <percent>')
    process.exit(1)
  }
  patch(co2, percent)
} else {
  console.error('Usage: node carbon-badge.mjs <measure|patch>')
  process.exit(1)
}
