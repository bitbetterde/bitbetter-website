/**
 * Post-build script that measures the homepage's actual transfer size by
 * serving the built site locally with compression, then calls the Website
 * Carbon API and replaces placeholders in all HTML files.
 *
 * Placeholders: __CARBON_CO2__ and __CARBON_PERCENT__
 */

import { readFileSync, writeFileSync, readdirSync, createReadStream, statSync } from 'node:fs'
import { resolve, join } from 'node:path'
import { createServer, get as httpGet } from 'node:http'
import { pipeline } from 'node:stream/promises'
import { createGzip, gunzipSync } from 'node:zlib'

const DIST_DIR = resolve(import.meta.dirname, '..', 'dist')
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

/**
 * Start a minimal static file server with gzip compression,
 * mimicking what Caddy does in production.
 */
function startServer() {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      let filePath = join(DIST_DIR, req.url === '/' ? '/index.html' : req.url)
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

/**
 * Raw HTTP GET that returns { rawBytes, body } without auto-decompressing,
 * so we can measure actual wire transfer size.
 */
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

/**
 * Parse a unicode-range string like "U+0000-00FF,U+0131" into [start, end] pairs.
 */
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

/**
 * Check if any character in the text falls within the given unicode ranges.
 * This mimics the browser's unicode-range font loading behavior.
 */
function textUsesRange(text, ranges) {
  for (const char of text) {
    const cp = char.codePointAt(0)
    for (const [start, end] of ranges) {
      if (cp >= start && cp <= end) return true
    }
  }
  return false
}

/**
 * Extract font URLs from CSS that would actually be loaded for the given page text,
 * based on unicode-range matching (how browsers decide which @font-face subsets to fetch).
 */
function getFontsForPage(cssBody, pageText) {
  const fonts = []
  for (const face of cssBody.matchAll(/@font-face\{[^}]+\}/g)) {
    const block = face[0]
    const src = block.match(/url\((\/_astro\/[^)]+\.woff2)\)/)
    const range = block.match(/unicode-range:([^}]+)/)
    if (!src) continue
    // If no unicode-range is specified, the font always loads
    if (!range || textUsesRange(pageText, parseUnicodeRange(range[1]))) {
      fonts.push(src[1])
    }
  }
  return fonts
}

/**
 * Fetch a page and all its sub-resources, returning total transfer bytes.
 */
async function measurePageTransfer(baseUrl) {
  // Fetch the HTML
  const html = await rawGet(baseUrl)
  let totalBytes = html.rawBytes

  // Strip tags to get visible page text for unicode-range matching
  const pageText = html.body
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, '')

  // Find all sub-resource URLs (CSS, JS)
  const subResources = new Set()
  for (const match of html.body.matchAll(/\/_astro\/[^"'\s)]+/g)) {
    subResources.add(match[0])
  }

  // Fetch CSS/JS and discover which fonts would actually load
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

  // Fetch fonts that would actually be loaded by the browser
  for (const path of fontPaths) {
    const res = await rawGet(baseUrl + path)
    totalBytes += res.rawBytes
  }

  return totalBytes
}

async function fetchCarbonData(bytes) {
  const url = `https://api.websitecarbon.com/data?bytes=${bytes}&green=${GREEN_HOSTING}`
  console.log(`  Calling API: ${url}`)
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`API returned ${response.status}: ${await response.text()}`)
  }
  return response.json()
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

function patchHtmlFiles(htmlFiles, co2, percent) {
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
  return patchedCount
}

async function main() {
  console.log('Carbon Badge: starting local server...')
  const server = await startServer()
  const port = server.address().port
  const baseUrl = `http://127.0.0.1:${port}`
  console.log(`  Serving dist/ on ${baseUrl}`)

  try {
    console.log('Carbon Badge: measuring homepage transfer size...')
    const bytes = await measurePageTransfer(baseUrl)
    console.log(`  Total transfer: ${bytes} bytes (${(bytes / 1024).toFixed(1)} KB)`)

    console.log('Carbon Badge: fetching carbon data...')
    const data = await fetchCarbonData(bytes)
    console.log(`  CO2: ${data.gco2e}g | Rating: ${data.rating} | Cleaner than: ${(data.cleanerThan * 100).toFixed(0)}%`)

    const co2 = data.gco2e.toFixed(2)
    const percent = (data.cleanerThan * 100).toFixed(0)

    console.log('Carbon Badge: patching HTML files...')
    const htmlFiles = findHtmlFiles(DIST_DIR)
    const patchedCount = patchHtmlFiles(htmlFiles, co2, percent)
    console.log(`  Patched ${patchedCount} HTML files.`)
  } finally {
    server.close()
  }
}

main().catch((err) => {
  console.error('Carbon Badge: failed, using fallback values.', err.message)
  const htmlFiles = findHtmlFiles(DIST_DIR)
  patchHtmlFiles(htmlFiles, '0.50', '50')
})
