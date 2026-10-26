import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { useLang } from '../context/LanguageContext'

const CAL = 'https://calendly.com/peakcare-peak-care/ai-readiness-call-peak-care-ai'

const POSTS = [
  { to: '/blog/branchenbriefing-2026-10-26', lang: 'DE', date: '2026-10-26',
    title: 'Branchenbriefing 26. Oktober 2026',
    de: 'Entscheidungsgrenzen für KI-Preise, Googles präzisierte Suchkontrollen, Cloudbeds und Muse. Auch auf Englisch und Bulgarisch.',
    en: 'Decision limits for AI pricing, Google\'s clarified search controls, Cloudbeds and Muse. Also in English and Bulgarian.' },
  { to: '/blog/industry-briefing-2026-10-26', lang: 'EN', date: '2026-10-26',
    title: 'Industry Briefing 26 October 2026',
    de: 'Englische Fassung des Branchenbriefings vom 26. Oktober.',
    en: 'AI pricing limits, Google search controls, the Cloudbeds Muse announcement and three checks for independent hotels.' },
  { to: '/blog/branshov-obzor-2026-10-26', lang: 'BG', date: '2026-10-26',
    title: 'Браншов обзор, 26 октомври 2026 г.',
    de: 'Bulgarische Fassung des Branchenbriefings vom 26. Oktober.',
    en: 'Bulgarian edition of the 26 October industry briefing.' },
  { to: '/blog/branchenbriefing-2026-10-19', lang: 'DE', date: '2026-10-19',
    title: 'Branchenbriefing 19. Oktober 2026',
    de: 'Phishing mit Buchungsdaten, offizielle Sterne in KI-Antworten, erklärbare Preisempfehlungen. Auch auf Englisch und Bulgarisch.',
    en: 'Phishing with booking data, official stars in AI answers, explainable pricing. Also in English and Bulgarian.' },
  { to: '/blog/industry-briefing-2026-10-19', lang: 'EN', date: '2026-10-19',
    title: 'Industry Briefing 19 October 2026',
    de: 'Englische Fassung des Branchenbriefings vom 19. Oktober.',
    en: 'Booking-data phishing, hotel stars in AI answers, Mews pricing beta and four checks for independent hotels.' },
  { to: '/blog/branshov-obzor-2026-10-19', lang: 'BG', date: '2026-10-19',
    title: 'Браншов обзор, 19 октомври 2026 г.',
    de: 'Bulgarische Fassung des Branchenbriefings vom 19. Oktober.',
    en: 'Bulgarian edition of the 19 October industry briefing.' },
  { to: '/blog/eu-ai-act-provider-or-deployer', lang: 'EN', date: '2026-09-30',
    title: 'EU AI Act for hotels: provider or deployer?',
    de: 'Wessen Pflicht ist der KI-Hinweis im Gäste-Chat? Ein praktischer Test zu Art. 3 und Art. 50.',
    en: 'Whose duty is the AI disclosure in a guest chat? A practical test under Articles 3 and 50.' },
  { to: '/blog/eu-ai-act-hotels-2026', lang: 'EN', date: '2026-05-02',
    title: 'EU AI Act Article 50: what hotels must disclose',
    de: 'Welche KI-Systeme im Hotel betroffen sind und was dokumentiert werden sollte.',
    en: 'Which AI systems in a hotel are affected and what should be documented.' },
  { to: '/blog/eu-ai-act-hotel-checklist-2026', lang: 'EN', date: '2026-05-27',
    title: 'EU AI Act hotel checklist: what to document',
    de: 'Was ein unabhängiges Haus dokumentieren sollte und was dafür ausreicht.',
    en: 'What an independent hotel should document and what counts as sufficient.' },
  { to: '/blog/shadow-ai-hotels', lang: 'DE', date: '2026-05-18',
    title: 'Shadow AI in Hotels: Was Ihr Team bereits nutzt',
    de: 'Welche KI Ihr Team schon im Alltag einsetzt und wie Sie Datenschutz und Verantwortung regeln.',
    en: 'Which AI your team already uses day to day, and how to settle data protection and responsibility.' },
  { to: '/blog/hotel-ai-vendor-questions', lang: 'EN', date: '2026-05-27',
    title: 'Questions to ask any AI vendor before signing',
    de: '15 Fragen zu Daten, Pflichten, Kosten und Umsetzung, bevor ein Hotel unterschreibt.',
    en: '15 questions on data, obligations, cost and implementation before a hotel signs.' },
]

export default function BlogIndex() {
  const { lang } = useLang()
  const de = lang === 'de'
  const tx = de
    ? { title: 'Fachbeiträge: KI im Hotel | Peak Care AI', h1: 'Fachbeiträge: KI im Hotel',
        intro: 'Wie Hotels Anfragen schneller beantworten, KI im Team sicher einsetzen und was der EU AI Act tatsächlich verlangt.',
        upd: 'Stand', cta_h2: 'Fragen zu Ihrem Haus?', cta: 'Vertrauliches Gespräch anfragen' }
    : { title: 'Articles: AI in hotels | Peak Care AI', h1: 'Articles: AI in hotels',
        intro: 'How hotels answer enquiries faster, use AI safely in the team, and what the EU AI Act actually requires.',
        upd: 'Updated', cta_h2: 'Questions about your hotel?', cta: 'Request a confidential conversation' }

  return (
    <>
      <SEO
        title={tx.title}
        description={tx.intro}
        canonical="https://peakcareai.com/blog"
      />

      <section className="bg-navy-900 py-20">
        <div className="container-main">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{tx.h1}</h1>
            <p className="text-white/65 text-lg leading-relaxed">{tx.intro}</p>
          </div>
        </div>
      </section>

      <section className="section-white">
        <div className="container-main">
          <ul className="max-w-3xl mx-auto divide-y divide-slate-100">
            {POSTS.map((p) => (
              <li key={p.to} className="py-6">
                <Link to={p.to} className="group block">
                  <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">{tx.upd} {p.date} · {p.lang}</p>
                  <h2 className="text-xl font-bold text-navy-900 group-hover:text-gold-600 mb-2">{p.title}</h2>
                  <p className="text-slate-600 leading-relaxed">{de ? p.de : p.en}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy-900 py-20">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold text-white mb-8">{tx.cta_h2}</h2>
          <a href={CAL} target="_blank" rel="noopener noreferrer" className="btn-primary">{tx.cta}</a>
        </div>
      </section>
    </>
  )
}
