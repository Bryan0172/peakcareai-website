import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'

export default function Header() {
  const { lang, switchLang, t } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { to: '/services', label: t.nav.services },
    { to: '/hospitality', label: t.nav.hospitality },
    { to: '/webinar', label: t.nav.webinar, highlight: true },
    { to: '/hotel-ai-readiness-check', label: t.nav.readinessCheck },
    { to: '/about', label: t.nav.about },
    { to: '/contact', label: t.nav.contact },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-md border-white/10 shadow-xl'
          : 'bg-navy-900 border-transparent'
      }`}
    >
      {/* Gold accent line top */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

      <div className="container-main flex items-center justify-between h-16">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setMenuOpen(false)}>
          <div className="relative w-9 h-9 shrink-0">
            <div className="absolute inset-0 rounded-lg bg-gold-400/15 border border-gold-400/40 group-hover:bg-gold-400/25 transition-colors" />
            <svg className="absolute inset-0 w-9 h-9 p-2 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.798-1.442 2.798H4.24c-1.47 0-2.441-1.798-1.442-2.798L4.2 15.3" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-bold text-sm tracking-wide">Peak Care AI</span>
            <span className="text-gold-400 text-xs font-medium tracking-[0.1em] uppercase mt-0.5">AI Strategy & Automation</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                item.highlight
                  ? `px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${isActive ? 'text-gold-300 bg-gold-400/20' : 'text-gold-400 hover:text-gold-300 hover:bg-gold-400/10 animate-pulse'}`
                  : `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive ? 'text-gold-400 bg-white/10' : 'text-white/70 hover:text-white hover:bg-white/8'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right side: language switcher + CTA */}
        <div className="hidden lg:flex items-center gap-3">
          {/* DE / EN switcher */}
          <div className="flex items-center rounded-lg border border-white/15 overflow-hidden text-xs font-semibold">
            <button
              onClick={() => switchLang('de')}
              className={`px-3 py-1.5 transition-colors ${
                lang === 'de'
                  ? 'bg-gold-400 text-navy-900'
                  : 'text-white/50 hover:text-white hover:bg-white/10'
              }`}
            >
              DE
            </button>
            <div className="w-px h-4 bg-white/15" />
            <button
              onClick={() => switchLang('en')}
              className={`px-3 py-1.5 transition-colors ${
                lang === 'en'
                  ? 'bg-gold-400 text-navy-900'
                  : 'text-white/50 hover:text-white hover:bg-white/10'
              }`}
            >
              EN
            </button>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-500 text-navy-900 font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors duration-200 shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            {t.nav.cta}
          </Link>
        </div>

        {/* Mobile: lang switcher + hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <div className="flex items-center rounded-md border border-white/15 overflow-hidden text-xs font-semibold">
            <button
              onClick={() => switchLang('de')}
              className={`px-2.5 py-1 transition-colors ${
                lang === 'de' ? 'bg-gold-400 text-navy-900' : 'text-white/50 hover:text-white'
              }`}
            >
              DE
            </button>
            <div className="w-px h-3.5 bg-white/15" />
            <button
              onClick={() => switchLang('en')}
              className={`px-2.5 py-1 transition-colors ${
                lang === 'en' ? 'bg-gold-400 text-navy-900' : 'text-white/50 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-navy-800/95 backdrop-blur-md border-t border-white/10 px-4 pb-5 pt-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block py-3 text-sm font-medium border-b border-white/8 last:border-0 ${
                  isActive ? 'text-gold-400' : 'text-white/70 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 bg-gold-400 hover:bg-gold-500 text-navy-900 font-semibold text-sm px-5 py-3 rounded-lg mt-4 transition-colors"
          >
            {t.nav.cta}
          </Link>
        </div>
      )}
    </header>
  )
}
