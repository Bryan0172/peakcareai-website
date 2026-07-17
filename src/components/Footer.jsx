import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLang()
  const f = t.footer

  return (
    <footer className="bg-navy-900 text-white/70">
      <div className="container-main py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <div className="text-white font-bold text-base tracking-wide">Peak Care AI</div>
              <div className="text-gold-400 text-xs font-medium tracking-widest uppercase mt-0.5">AI Strategy & Automation for Hospitality</div>
            </div>
            <p className="text-sm leading-relaxed text-white/50">{f.tagline}</p>
          </div>

          {/* Services links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">{f.sections.services}</h4>
            <ul className="space-y-2.5">
              {f.links.services.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-white/55 hover:text-gold-400 transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">{f.sections.focus}</h4>
            <ul className="space-y-2.5">
              {f.links.focus.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-white/55 hover:text-gold-400 transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">{f.sections.legal}</h4>
            <ul className="space-y-2.5">
              {f.links.legal.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-white/55 hover:text-gold-400 transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/35">
          <p>© {new Date().getFullYear()} {f.copyright}</p>
          <p className="text-white/30">{f.legal_entity}</p>
        </div>
      </div>
    </footer>
  )
}
