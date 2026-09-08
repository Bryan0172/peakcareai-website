import { useEffect } from 'react'
import { useLang } from '../context/LanguageContext'

// Dependency-freie, versions-unabhängige SEO-Komponente.
// react-helmet-async@3 benötigt React 19 — dieses Projekt ist React 18 → Helmet war funktionslos
// (setzte KEINE Titles/Meta/JSON-LD, im Browser verifiziert). Diese Komponente setzt document.title,
// Meta-Tags, Canonical, OpenGraph und injiziert per-Page JSON-LD direkt via useEffect.
// Googlebot rendert JS und übernimmt diese Werte. Wird wie <Helmet> im JSX platziert, rendert null.
export default function SEO({
  title, description, keywords, canonical, type = 'website',
  siteName, image, ogTitle, ogDescription, jsonLd, lang: langOverride,
}) {
  // Fix 03.09.2026 (SEO/GEO, REQ-2026-07-28-BC-PRIVATE-MARKETS-FIX-..., Punkt 1 -- selbe
  // Fehlerklasse+Loesung wie peak-care-neuclaude Commit b8bbe6f, nur umgekehrtes Vorzeichen:
  // <html lang> stand statisch auf "en" in index.html, obwohl der Prerender aktuell jede
  // Route mit deutschem Inhalt ausliefert (LanguageContext faellt beim Prerendern auf 'de'
  // zurueck). Dynamisch aus dem tatsaechlich gerenderten Sprachzustand setzen, damit es
  // korrekt bleibt, sobald echte Pro-Route-Sprachlogik dazukommt, statt den Fehler nur
  // umzudrehen (en->de hartkodiert waere derselbe Bug mit vertauschten Vorzeichen).
  //
  // Fix 08.09.2026 (SEO/GEO, Andreas-Hinweis A442-SEO Punkt 3): der 03.09.-Fix nahm den
  // globalen LanguageContext-Wert ungeprueft fuer JEDE Seite -- richtig fuer die vier
  // wirklich zweisprachigen Seiten (Services/Hospitality/CorporateAI/Contact, alle rufen
  // useLang() fuer ihren Inhalt auf), falsch fuer die englischsprachigen Blogartikel, die
  // gar keine deutsche Fassung haben und useLang() nirgends aufrufen -- die meldeten trotzdem
  // lang="de", weil der Prerender kontextweit auf 'de' faellt. Optionaler expliziter
  // `lang`-Prop ueberschreibt den Context-Wert fuer Seiten mit fester Sprache.
  const { lang: contextLang } = useLang() || {}
  const lang = langOverride || contextLang

  useEffect(() => {
    if (lang) document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    if (title) {
      document.title = title
      setMeta('property', 'og:title', ogTitle || title)
    }
    if (description) {
      setMeta('name', 'description', description)
      setMeta('property', 'og:description', ogDescription || description)
    }
    if (keywords) setMeta('name', 'keywords', keywords)
    setMeta('property', 'og:type', type)
    if (siteName) setMeta('property', 'og:site_name', siteName)
    if (canonical) {
      setMeta('property', 'og:url', canonical)
      setLink('canonical', canonical)
    }
    if (image) {
      setMeta('property', 'og:image', image)
    }
    // JSON-LD: zuvor injizierte (anderer Route) entfernen, dann die dieser Seite setzen
    const arr = Array.isArray(jsonLd) ? jsonLd : (jsonLd ? [jsonLd] : [])
    document.head.querySelectorAll('script[data-seo-jsonld]').forEach((s) => s.remove())
    arr.forEach((obj) => {
      if (!obj) return
      const s = document.createElement('script')
      s.type = 'application/ld+json'
      s.setAttribute('data-seo-jsonld', '')
      s.textContent = JSON.stringify(obj)
      document.head.appendChild(s)
    })
  }, [title, description, keywords, canonical, type, siteName, image, ogTitle, ogDescription, JSON.stringify(jsonLd)])

  return null
}

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}
