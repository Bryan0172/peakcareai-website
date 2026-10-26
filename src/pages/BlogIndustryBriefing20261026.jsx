import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

// Branchenbriefing 26.10.2026 in drei festen Sprachfassungen (DE/EN/BG), je eigene Route.
// Text: dot-Delta CHATGPT-PCAI-BRANCHENBRIEF-20261026-V1, Quellen G1/G2/R1-R3/C1 aus dem Delta.
// Feste Sprache je Route (lang-Prop), nicht ueber den globalen DE/EN-Umschalter.

export const BRIEFING_ROUTES = {
  de: '/blog/branchenbriefing-2026-10-26',
  en: '/blog/industry-briefing-2026-10-26',
  bg: '/blog/branshov-obzor-2026-10-26',
}

const SOURCES = [
  { n: 'G1', label: 'Google Search Central, Änderungsprotokoll (Eintrag 21.10.2026)', url: 'https://developers.google.com/search/updates' },
  { n: 'G2', label: 'Google Search Central, Control what you share with Google', url: 'https://developers.google.com/search/docs/crawling-indexing/control-what-you-share' },
  { n: 'R1', label: 'Hospitality Net, RoomPriceGenie, Oktober 2026', url: 'https://www.hospitalitynet.org/news/4135013/more-than-half-of-hotels-use-ai-to-price-rooms-but-only-1-in-10-would-rely-on-it-for-most-decisions-roompricegenie-finds' },
  { n: 'R2', label: 'RoomPriceGenie, State of Revenue Management 2026', url: 'https://roompricegenie.com/state-of-revenue-management-2026/' },
  { n: 'R3', label: 'Travolution, 21.10.2026 (aktualisiert 23.10.)', url: 'https://www.travolution.com/en/hospitality/more-than-half-of-hotels-use-ai-to-set-their-rates' },
  { n: 'C1', label: 'Cloudbeds, Pressemitteilung 20.10.2026', url: 'https://www.cloudbeds.com/press/meta-muse-integration/' },
]

const T = {
  de: {
    seoTitle: 'Branchenbriefing 26. Oktober 2026: KI-Preise, Google-Suchkontrollen, Cloudbeds | Peak Care AI',
    desc: 'Was unabhängige Hotels diese Woche prüfen sollten: Entscheidungsgrenzen für KI-Preise, Googles präzisierte Suchkontrollen und die angekündigte Cloudbeds-Muse-Anbindung.',
    crumb: 'Branchenbriefing', badge: 'Branchenbriefing', date: '26. Oktober 2026',
    h1: 'Peak Care AI Branchenbriefing', h1b: '26. Oktober 2026',
    lead: 'Was unabhängige Hotels in Deutschland, Österreich und der Schweiz diese Woche prüfen sollten.',
    next: 'Konsequenz',
    items: [
      { h: 'Preisautomatisierung braucht klare Entscheidungsgrenzen', src: ['R1', 'R2', 'R3'],
        p: 'Der ab 20. Oktober vorgestellte RoomPriceGenie-Bericht umfasst 450 Revenue-Entscheider, auch aus DACH. 53 % nutzen KI zur Preisunterstützung; nur 10 % würden ihr die meisten Entscheidungen überlassen. Die Erhebung erfolgte bereits im Mai/Juni, die Veröffentlichung ist neu. Es handelt sich um Auftragsforschung eines RMS-Anbieters, nicht um einen Nachfragebeleg für einzelne Hotels.',
        n: 'Einen konkreten Preisprozess prüfen: Wer setzt Mindestpreise, wer genehmigt Ausnahmen und wie werden fehlerhafte Änderungen korrigiert? Ergebnisse anhand des eigenen Hotels messen.' },
      { h: 'Google präzisiert bestehende Suchkontrollen', src: ['G1', 'G2'],
        p: 'Am 21. Oktober aktualisierte Google die Dokumentation zu Inhaltskontrollen, darunter robots-Metadaten, data-nosnippet und die Search-Generative-AI-Steuerung. Das ist eine Dokumentationsänderung, kein neuer Rankingmechanismus.',
        n: 'Mit der Webagentur prüfen, ob öffentliche Zimmer- und Angebotsseiten wie beabsichtigt zugänglich sind. Vertrauliche Gästeunterlagen benötigen Zugriffsschutz; Suchmaschinenregeln ersetzen diesen nicht. Maßnahmen für Google Search nicht ungeprüft auf andere KI-Dienste übertragen.' },
      { h: 'Cloudbeds kündigt einen weiteren KI-Direktbuchungsweg an', src: ['C1'],
        p: 'Die Mitteilung vom 20. Oktober sieht Live-Hoteldaten für Metas Muse und Buchungen über die eigene Cloudbeds Booking Engine vor. Geplanter Start: US-Kunden, Q1 2027. Ein DACH-Start ist nicht bestätigt.',
        n: 'Für die Anbieterwahl zählt schon jetzt: Sind Raten, Verfügbarkeit und Bedingungen konsistent abrufbar, und landet die Buchung nachvollziehbar im PMS? Der angekündigte Kanal rechtfertigt heute kein Versprechen zusätzlicher DACH-Buchungen.' },
    ],
    closing: 'Peak Care AI unterstützt Hotels bei der Prüfung ihrer KI-Bereitschaft, Schnittstellen und betrieblichen Abläufe. Unser Fazit: Zuerst Daten und Verantwortlichkeiten klären, dann Automatisierung am eigenen Betrieb erproben.',
    srcH: 'Quellen', srcDate: 'Quellenstand 26.10.2026', otherLang: 'Weitere Sprachen',
    ctaH: 'Wie steht Ihr Haus bei diesen drei Punkten?',
    ctaP: 'Peak Care AI unterstützt Hotels bei AI-Readiness-Assessments, Schnittstellen und Workflow-Automatisierung.',
    cta: 'Gespräch anfragen', cta2: 'AI-Readiness-Assessment',
  },
  en: {
    seoTitle: 'Industry Briefing 26 October 2026: AI pricing, Google search controls, Cloudbeds | Peak Care AI',
    desc: 'What independent hotels should check this week: decision limits for AI pricing, Google\'s clarified search controls and the announced Cloudbeds integration with Meta\'s Muse.',
    crumb: 'Industry Briefing', badge: 'Industry Briefing', date: '26 October 2026',
    h1: 'Peak Care AI Industry Briefing', h1b: '26 October 2026',
    lead: 'What independent hotels in Germany, Austria and Switzerland should check this week.',
    next: 'Action',
    items: [
      { h: 'Automated pricing needs clear decision limits', src: ['R1', 'R2', 'R3'],
        p: 'RoomPriceGenie\'s report, covered from 20 October, surveyed 450 revenue decision-makers, including DACH respondents. 53% use AI to support pricing; only 10% would trust it with most decisions. Fieldwork took place in May and June; the publication is new. This is research commissioned by an RMS supplier, not evidence of demand from an individual hotel.',
        n: 'Review one actual pricing process: who sets price floors, approves exceptions and corrects faulty changes? Measure outcomes at your own property.' },
      { h: 'Google clarifies existing search controls', src: ['G1', 'G2'],
        p: 'On 21 October, Google updated its content-control documentation, including robots metadata, data-nosnippet and the Search generative AI control. This is a documentation change, not a new ranking mechanism.',
        n: 'Check with your web agency that public room and offer pages remain accessible as intended. Confidential guest documents need access protection; search-engine directives are no substitute. Do not assume Google\'s controls apply to other AI services.' },
      { h: 'Cloudbeds announces another AI direct-booking route', src: ['C1'],
        p: 'Its 20 October announcement describes live hotel data for Meta\'s Muse, with bookings completed through the hotel\'s Cloudbeds Booking Engine. Rollout is planned for US customers in Q1 2027. A DACH launch has not been confirmed.',
        n: 'For technology selection, ask whether rates, availability and policies are consistently accessible and reservations reach the PMS with a traceable record. This future channel does not justify promises of additional DACH bookings today.' },
    ],
    closing: 'Peak Care AI helps hotels assess AI readiness, integrations and operational workflows. Our recommendation: establish reliable data and ownership, then test automation in your own operation.',
    srcH: 'Sources', srcDate: 'Checked 26 October 2026', otherLang: 'Other languages',
    ctaH: 'Where does your hotel stand on these three points?',
    ctaP: 'Peak Care AI helps hotels assess AI readiness, integrations and workflow automation.',
    cta: 'Request a conversation', cta2: 'AI Readiness Assessment',
  },
  bg: {
    seoTitle: 'Браншов обзор 26 октомври 2026 г.: ИИ цени, настройки на Google Search, Cloudbeds | Peak Care AI',
    desc: 'Какво да проверят тази седмица независимите хотели: граници за ценообразуването с ИИ, уточнените настройки на Google Search и обявената интеграция на Cloudbeds с Muse на Meta.',
    crumb: 'Браншов обзор', badge: 'Браншов обзор', date: '26 октомври 2026 г.',
    h1: 'Браншов обзор на Peak Care AI', h1b: '26 октомври 2026 г.',
    lead: 'Какво да проверят тази седмица независимите хотели.',
    next: 'Действие',
    items: [
      { h: 'Автоматичното ценообразуване изисква ясни граници', src: ['R1', 'R2', 'R3'],
        p: 'Докладът на RoomPriceGenie, отразен от 20 октомври, обхваща 450 ръководители, участващи в решенията за приходите, включително от региона DACH. 53% използват ИИ в подкрепа на ценообразуването; само 10% биха му поверили повечето решения. Анкетата е проведена през май и юни; нова е публикацията. Това е изследване по поръчка на доставчик на RMS, а не доказателство за търсене от конкретен хотел.',
        n: 'Проверете един реален процес: кой задава минималните цени, одобрява изключенията и коригира грешни промени? Измервайте резултатите в собствения хотел.' },
      { h: 'Google уточнява съществуващите настройки за търсенето', src: ['G1', 'G2'],
        p: 'На 21 октомври Google обнови документацията за контрол върху съдържанието, включително robots метаданни, data-nosnippet и настройката за генеративен ИИ в Google Search. Това е промяна в документацията, а не нов механизъм за класиране.',
        n: 'Проверете с уеб агенцията дали публичните страници за стаи и оферти са достъпни според намеренията ви. Поверителните документи на гостите изискват защита на достъпа; правилата за търсачки не я заменят. Не приемайте, че настройките на Google важат и за други ИИ услуги.' },
      { h: 'Cloudbeds обявява нов път за директни резервации чрез ИИ', src: ['C1'],
        p: 'Съобщението от 20 октомври предвижда актуални хотелски данни за Muse на Meta и резервации през собствения Cloudbeds Booking Engine на хотела. Началото е планирано за клиенти в САЩ през първото тримесечие на 2027 г. Старт в Европа не е потвърден.',
        n: 'При избор на софтуер проверете дали цените, наличностите и условията са последователни и достъпни, а резервацията постъпва проследимо в PMS. Бъдещият канал не е основание днес да се обещават допълнителни резервации.' },
    ],
    closing: 'Peak Care AI подпомага хотелите при оценка на готовността за ИИ, интеграциите и работните процеси. Нашата препоръка: първо надеждни данни и ясна отговорност, след това тестове на автоматизацията в реалния хотел.',
    srcH: 'Източници', srcDate: 'Проверени на 26 октомври 2026 г.', otherLang: 'Други езици',
    ctaH: 'Къде е вашият хотел по тези три точки?',
    ctaP: 'Peak Care AI подпомага хотелите при оценка на готовността за ИИ, интеграциите и автоматизацията на работните процеси.',
    cta: 'Запитване за разговор', cta2: 'Оценка на готовността за ИИ',
  },
}

const LANG_LABEL = { de: 'Deutsch', en: 'English', bg: 'Български' }

export default function BlogIndustryBriefing20261026({ lang }) {
  const t = T[lang]
  const url = 'https://peakcareai.com' + BRIEFING_ROUTES[lang]
  return (
    <>
      <SEO
        lang={lang}
        title={t.seoTitle}
        description={t.desc}
        type="article"
        canonical={url}
        jsonLd={[{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: `${t.h1} — ${t.h1b}`,
          inLanguage: lang,
          author: { '@type': 'Person', name: 'Andreas Donner', url: 'https://peakcareai.com/about' },
          publisher: { '@type': 'Organization', name: 'Peak Care AI', url: 'https://peakcareai.com' },
          datePublished: '2026-10-26',
          description: t.desc,
          citation: SOURCES.map((s) => s.url),
          workTranslation: Object.keys(BRIEFING_ROUTES).filter((l) => l !== lang)
            .map((l) => ({ '@type': 'Article', inLanguage: l, url: 'https://peakcareai.com' + BRIEFING_ROUTES[l] })),
        }]}
      />

      <section className="bg-navy-900 py-16">
        <div className="container-main max-w-3xl">
          <div className="flex items-center gap-3 mb-5">
            <Link to="/" className="text-white/40 hover:text-white/70 text-sm transition-colors">Home</Link>
            <span className="text-white/20">/</span>
            <Link to="/blog" className="text-white/40 hover:text-white/70 text-sm transition-colors">Blog</Link>
            <span className="text-white/20">/</span>
            <span className="text-gold-400 text-sm">{t.crumb}</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-5">
            {t.badge}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
            {t.h1}<br />
            <span className="text-gold-400">{t.h1b}</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed mb-6">{t.lead}</p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/40">
            <span>{t.otherLang}:</span>
            {Object.keys(BRIEFING_ROUTES).filter((l) => l !== lang).map((l) => (
              <Link key={l} to={BRIEFING_ROUTES[l]} hrefLang={l} className="text-white/70 hover:text-gold-400 underline">
                {LANG_LABEL[l]}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-white">
        <div className="container-main max-w-3xl">
          <article className="prose prose-slate max-w-none">
            {t.items.map((it, i) => (
              <div key={i} className="mb-10">
                <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">{i + 1}. {it.h}</h2>
                <p className="text-slate-600 leading-relaxed">
                  {it.p}{' '}
                  {it.src.map((n) => (
                    <a key={n} href={`#quelle-${n}`} className="text-navy-700 hover:text-gold-500">[{n}]</a>
                  ))}
                </p>
                <p className="text-slate-600 leading-relaxed"><strong>{t.next}:</strong> {it.n}</p>
              </div>
            ))}

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10">
              <p className="text-slate-600 leading-relaxed m-0">{t.closing}</p>
            </div>

            <h2 className="text-xl font-bold text-navy-900 mt-10 mb-4">{t.srcH}</h2>
            <ol className="text-sm text-slate-600 space-y-2 list-none pl-0">
              {SOURCES.map((s) => (
                <li key={s.n} id={`quelle-${s.n}`}>
                  [{s.n}]{' '}
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-navy-700 hover:text-gold-500 break-words">
                    {s.label}
                  </a>
                </li>
              ))}
            </ol>
            <p className="text-xs text-slate-400">{t.srcDate}</p>
          </article>
        </div>
      </section>

      <section className="bg-navy-900 py-16">
        <div className="container-main text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">{t.ctaH}</h2>
          <p className="text-white/55 mb-8 leading-relaxed">{t.ctaP}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold px-8 py-4 rounded-xl transition-colors">
              {t.cta} →
            </Link>
            <Link to="/assessment" className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-colors">
              {t.cta2}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
