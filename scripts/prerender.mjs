// Post-Build-Prerender für peakcareai.com (Vite-SPA → statisches HTML je Route).
// Grund: ohne Prerendering sieht Googlebot nur die leere SPA-Shell mit dem GLOBALEN Titel
// (verifiziert 06.07.: /hotel-ai-readiness-check, /about, /services liefern alle denselben
// Head, keinen Canonical) → PCAI-Money-Pages können nicht ranken. SEO.jsx setzt Titel/Meta/
// Canonical nur clientseitig. Dieses Skript rendert den gebauten SPA lokal mit Headless-Browser
// und schreibt je Route eine flache dist/<route>.html mit echtem Titel/H1/Inhalt/Canonical.
// Portiert vom (bewährten) peak-care.com-Prerender. Assets bleiben unberührt; Client hydratisiert.
import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST = path.resolve(__dirname, '..', 'dist')
const PORT = 4179
const ORIGIN = 'https://peakcareai.com'
// Globaler Fallback-Titel aus index.html (Home nutzt ihn legitim; andere Seiten müssen abweichen).
const GENERIC_TITLE = 'AI for Hotels — More Revenue, Leaner Operations, Less OTA Dependency | Peak Care AI'

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.gif': 'image/gif', '.woff2': 'font/woff2',
  '.woff': 'font/woff', '.ttf': 'font/ttf', '.ico': 'image/x-icon', '.xml': 'application/xml',
  '.txt': 'text/plain', '.map': 'application/json',
}

function serveStatic() {
  return http.createServer((req, res) => {
    try {
      const urlPath = decodeURIComponent((req.url || '/').split('?')[0])
      const fp = path.join(DIST, urlPath)
      if (fp.startsWith(DIST) && fs.existsSync(fp) && fs.statSync(fp).isFile()) {
        res.setHeader('Content-Type', MIME[path.extname(fp).toLowerCase()] || 'application/octet-stream')
        return fs.createReadStream(fp).pipe(res)
      }
      res.setHeader('Content-Type', 'text/html') // SPA-Fallback
      fs.createReadStream(path.join(DIST, 'index.html')).pipe(res)
    } catch {
      res.statusCode = 500; res.end('err')
    }
  })
}

function getRoutes() {
  const set = new Set(['/'])
  try {
    const sm = fs.readFileSync(path.join(DIST, 'sitemap.xml'), 'utf8')
    for (const m of sm.matchAll(/<loc>([^<]+)<\/loc>/g)) {
      const p = m[1].replace(/^https?:\/\/[^/]+/, '') || '/'
      set.add(p.replace(/\/$/, '') || '/')
    }
  } catch (e) { console.warn('sitemap.xml nicht lesbar:', e.message) }
  // Router-Routen, die evtl. nicht in der Sitemap stehen
  ;['/services', '/hospitality', '/corporate-ai', '/about', '/contact', '/webinar',
    '/webinar/eu-ai-act-for-hotels', '/assessment', '/hotel-ai-readiness-check',
    '/ai-offer-assistant-hotels', '/privacy', '/imprint',
    '/blog/eu-ai-act-hotels-2026', '/blog/shadow-ai-hotels',
    '/blog/eu-ai-act-hotel-checklist-2026', '/blog/hotel-ai-vendor-questions',
    // NICHT: /blog/hotel-staffing-crisis-ai-solutions + /blog/hotel-tech-stack-ai-integration
    // — Komponenten existieren, sind aber NICHT im Router verdrahtet → würden Home-Duplikate
    // erzeugen. Erst in Router+Sitemap aufnehmen, dann hier ergänzen. (06.07.)
  ].forEach((r) => set.add(r))
  return [...set]
}

const routes = getRoutes()
const server = serveStatic()
await new Promise((r) => server.listen(PORT, r))
console.log(`Prerender: ${routes.length} Routen, Server auf :${PORT}`)

let ok = 0, fail = 0, generic = 0
let browser
try {
  browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] })
for (const route of routes) {
  const page = await browser.newPage()
  try {
    await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'domcontentloaded', timeout: 15000 })
    // auf echten, per-Route-Inhalt warten (Titel != generisch ODER H1 vorhanden)
    await page.waitForFunction(
      (gt) => {
        const t = document.title || ''
        return (t && t !== gt) || !!document.querySelector('h1')
      },
      { timeout: 15000 }, GENERIC_TITLE,
    ).catch(() => {})
    // Settle: SEO.jsx-useEffect setzt den Per-Seiten-Titel erst nach dem Paint. Kurz gezielt
    // darauf warten (löst sofort aus, wenn Titel schon steht; max 4s bei Home/generisch).
    await page.waitForFunction(
      (gt) => (document.title || '') !== gt,
      { timeout: 4000 }, GENERIC_TITLE,
    ).catch(() => {})
    const title = await page.title()
    if (title === GENERIC_TITLE && route !== '/') generic++
    // Canonical/OG:url normalisieren: jede Seite bekommt ihren Self-Canonical (non-slash).
    const canon = ORIGIN + (route === '/' ? '/' : route)
    await page.evaluate((c) => {
      let l = document.head.querySelector('link[rel="canonical"]')
      if (!l) { l = document.createElement('link'); l.setAttribute('rel', 'canonical'); document.head.appendChild(l) }
      l.setAttribute('href', c)
      const o = document.head.querySelector('meta[property="og:url"]')
      if (o) o.setAttribute('content', c)
    }, canon)
    const html = '<!DOCTYPE html>\n' + (await page.evaluate(() => document.documentElement.outerHTML))
    // Flache Datei-Form (<route>.html): Netlify liefert /route direkt mit 200 (kein Trailing-Slash-301),
    // Canonical (non-slash) = ausgelieferte URL = Sitemap. (Muster vom PC-Fix 06.07.)
    if (route === '/') {
      fs.writeFileSync(path.join(DIST, 'index.html'), html)
    } else {
      const outFile = path.join(DIST, route + '.html')
      fs.mkdirSync(path.dirname(outFile), { recursive: true })
      fs.writeFileSync(outFile, html)
    }
    console.log(`  ✅ ${route} → "${title.slice(0, 55)}"`)
    ok++
  } catch (e) {
    console.log(`  ❌ ${route}: ${String(e).slice(0, 90)}`)
    fail++
  } finally {
    await page.close()
  }
}
  await browser.close()
} catch (e) {
  console.warn('⚠️ Prerender uebersprungen (Headless-Browser-Fehler) — Build laeuft trotzdem weiter, SPA bleibt funktionsfaehig:', String(e).slice(0, 140))
} finally {
  try { server.close() } catch {}
  try { if (browser) await browser.close() } catch {}
}
console.log(`Prerender fertig: ${ok} ok · ${fail} Fehler · ${generic} mit generischem Titel (sollte ~0 sein) · ${routes.length} Routen`)
// Bewusst KEIN process.exit(1): Prerender-Probleme duerfen Build/Deploy NICHT blockieren.
