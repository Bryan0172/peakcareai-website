import { useEffect } from 'react'

// Dependency-freie, versions-unabhängige SEO-Komponente.
// react-helmet-async@3 benötigt React 19 — dieses Projekt ist React 18 → Helmet war funktionslos
// (setzte KEINE Titles/Meta/JSON-LD, im Browser verifiziert). Diese Komponente setzt document.title,
// Meta-Tags, Canonical, OpenGraph und injiziert per-Page JSON-LD direkt via useEffect.
// Googlebot rendert JS und übernimmt diese Werte. Wird wie <Helmet> im JSX platziert, rendert null.
export default function SEO({
  title, description, keywords, canonical, type = 'website',
  siteName, image, ogTitle, ogDescription, jsonLd,
}) {
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
