import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

// Branchenbriefing 02.11.2026 in drei festen Sprachfassungen (DE/EN/BG), je eigene Route.
// Text: dot-Delta CHATGPT-PCAI-BRANCHENBRIEF-20261102-V1, Quellen S1-S3; BG Punkt 2+3 ohne DACH-Bindung (Regel 26.10., MARKETING 02.11.).
// Feste Sprache je Route (lang-Prop), nicht ueber den globalen DE/EN-Umschalter.

export const BRIEFING_ROUTES = {
  de: '/blog/branchenbriefing-2026-11-02',
  en: '/blog/industry-briefing-2026-11-02',
  bg: '/blog/branshov-obzor-2026-11-02',
}

const SOURCES = [
  { n: 'S1', label: 'Mews, Störungsbericht / incident report', url: 'https://status.mews.com/incidents/fbfgcpyj4q5j' },
  { n: 'S2', label: 'Expedia Group, Fall 2026 Product Release, 28.10.2026', url: 'https://ir.expediagroup.com/news-and-events/news/news-details/2026/Fall-2026-Product-Release-Expedia-Group-launches-AI-powered-tools-and-services-to-simplify-the-entire-trip-from-planning-and-booking-to-payment-and-support-/default.aspx' },
  { n: 'S3', label: 'PhocusWire, Matthew Parsons, 28.10.2026', url: 'https://www.phocuswire.com/news/technology/personal-ai-assistants-could-be-re-shopping-landmine-for-hotels?pk=pcww_email_newsletter_pcww-daily' },
]

const T = {
  de: {
    seoTitle: 'Branchenbriefing 2. November 2026: Mews-Störung, Expedia-KI, Re-Shopping | Peak Care AI',
    desc: 'Drei Prüfpunkte für unabhängige Hotels: verlässliche Gästekommunikation, korrekte OTA-Inhalte und belastbare Buchungskennzahlen.',
    crumb: 'Branchenbriefing', badge: 'Branchenbriefing', date: '2. November 2026',
    h1: 'Peak Care AI Branchenbriefing', h1b: '2. November 2026',
    lead: 'Drei Prüfpunkte für unabhängige Hotels: verlässliche Gästekommunikation, korrekte OTA-Inhalte und belastbare Buchungskennzahlen.',
    mean: 'Bedeutung', next: 'Konsequenz',
    items: [
      { h: 'Mews Guest Messenger: Störung behoben, Ausweichwege prüfen', src: ['S1'],
        p: 'Laut Mews konnten betroffene Häuser seit dem 27. Oktober, 15:34 CET, keine Gästenachrichten lesen oder beantworten. Am 28. Oktober um 11:25 CET wurde der Vorfall als behoben gemeldet. Welche Länder und Häuser betroffen waren, bleibt offen.',
        m: 'Ein Kommunikationsausfall kann den Ablauf vor der Anreise beeinträchtigen.',
        n: 'Prüfen Sie, wie die Rezeption einen Nachrichtenausfall erkennt, auf einen vorhandenen Ersatzkanal wechselt und anschließend offene Anliegen abgleicht. Keine Doppelzustellung wichtiger Zugangsinformationen auslösen.' },
      { h: 'Expedia erweitert KI-Vergleich und Unterkunftsfragen – zunächst USA', src: ['S2'],
        p: 'Die Veröffentlichung vom 28. Oktober beschreibt Property Expert und Hotels.com AI Compare; die FAQ bestätigt US-Web-/App-Verfügbarkeit. Eine DACH-Einführung ist nicht belegt.',
        m: 'Für Hotels mit US-Gästen kann die KI-Darstellung ihrer OTA-Inhalte relevant sein.',
        n: 'Vergleichen Sie Zimmermerkmale, Zusatzgebühren und Stornobedingungen zwischen Website und OTA. Prüfen Sie Antworten in einer tatsächlich zugänglichen Oberfläche; Angaben zum eigenen Hotel sind keine garantierte KI-Empfehlung.' },
      { h: 'KI-Re-Shopping: Beobachtungsthema für Revenue Management', src: ['S3'],
        p: 'Ein PhocusWire-Bericht vom 28. Oktober diskutiert Agenten, die nach einer Buchung weiter nach günstigeren Angeboten suchen. Negative Auswirkungen auf Hotels sind bislang wenig belegt; ein flächendeckender DACH-Rollout wird nicht nachgewiesen.',
        ml: 'Bedeutung – unsere Einschätzung',
        m: 'Buchungszuwachs allein kann künftig ein unvollständiges Nachfragesignal sein.',
        n: 'Brutto- und Nettobuchungen, Stornierungen und Neubuchungen getrennt auswerten. Ähnliche Buchungen nicht automatisch als KI-Aktivität einstufen und Stornoregeln nicht vorsorglich verschärfen.' },
    ],
    closing: 'Peak Care AI unterstützt Hotels dabei, Daten, Schnittstellen und Zuständigkeiten vor der Automatisierung zu prüfen. Entscheidend ist, ob ein Prozess im Alltag funktioniert und sein Ergebnis überprüfbar bleibt.',
    srcH: 'Quellen', srcDate: 'Stand 02.11.2026', otherLang: 'Weitere Sprachen',
    ctaH: 'Wie steht Ihr Haus bei diesen drei Punkten?',
    ctaP: 'Peak Care AI unterstützt Hotels bei AI-Readiness-Assessments, Schnittstellen und Workflow-Automatisierung.',
    cta: 'Gespräch anfragen', cta2: 'AI-Readiness-Assessment',
  },
  en: {
    seoTitle: 'Industry Briefing 2 November 2026: Mews incident, Expedia AI, re-shopping | Peak Care AI',
    desc: 'Three checks for independent hotels: reliable guest communication, accurate OTA content and meaningful booking metrics.',
    crumb: 'Industry Briefing', badge: 'Industry Briefing', date: '2 November 2026',
    h1: 'Peak Care AI Industry Briefing', h1b: '2 November 2026',
    lead: 'Three checks for independent hotels: reliable guest communication, accurate OTA content and meaningful booking metrics.',
    mean: 'Implication', next: 'Action',
    items: [
      { h: 'Mews Guest Messenger: incident resolved, check fallback procedures', src: ['S1'],
        p: 'Mews reports that affected properties could not read or answer guest messages from 27 October at 15:34 CET. The incident was marked resolved on 28 October at 11:25 CET. Affected countries and properties were not listed.',
        m: 'A messaging failure can disrupt pre-arrival workflows.',
        n: 'Check how reception detects a failure, switches to an existing alternative channel and reconciles outstanding requests afterwards. Avoid duplicate delivery of important access information.' },
      { h: 'Expedia expands AI comparisons and property questions – initially in the US', src: ['S2'],
        p: 'Its 28 October release describes Property Expert and Hotels.com AI Compare; the FAQ confirms US availability on web and app. A DACH launch is not established.',
        m: 'Hotels serving US travelers may need to check how their OTA content is represented.',
        n: 'Reconcile room features, extra charges and cancellation terms across the hotel website and OTA listings. Test answers on an interface you can actually access; a listing does not guarantee an AI recommendation.' },
      { h: 'AI re-shopping: an issue to monitor in revenue management', src: ['S3'],
        p: 'A 28 October PhocusWire article discusses agents continuing to search for lower prices after booking. Evidence of negative hotel impacts remains limited; a general DACH rollout is not demonstrated.',
        ml: 'Implication – our assessment',
        m: 'Gross booking growth may become an incomplete demand signal.',
        n: 'Track gross and net bookings, cancellations and rebookings separately. Similar reservations are not proof of AI activity, and the report is no reason to tighten cancellation terms pre-emptively.' },
    ],
    closing: 'Peak Care AI helps hotels assess data, integrations and ownership before automating. A useful workflow must work in daily operations and produce results that can be checked.',
    srcH: 'Sources', srcDate: 'Checked 2 November 2026', otherLang: 'Other languages',
    ctaH: 'Where does your property stand on these three points?',
    ctaP: 'Peak Care AI supports hotels with AI readiness assessments, integrations and workflow automation.',
    cta: 'Request a conversation', cta2: 'AI readiness assessment',
  },
  bg: {
    seoTitle: 'Браншов обзор 2 ноември 2026 г.: Mews, Expedia и ИИ, повторно търсене | Peak Care AI',
    desc: 'Три проверки за независимите хотели: надеждна комуникация с гостите, точна информация в платформите за резервации и смислени показатели за търсенето.',
    crumb: 'Браншов обзор', badge: 'Браншов обзор', date: '2 ноември 2026 г.',
    h1: 'Браншов обзор на Peak Care AI', h1b: '2 ноември 2026 г.',
    lead: 'Три проверки за независимите хотели: надеждна комуникация с гостите, точна информация в платформите за резервации и смислени показатели за търсенето.',
    mean: 'Значение', next: 'Действие',
    items: [
      { h: 'Mews Guest Messenger: проблемът е отстранен, проверете резервния процес', src: ['S1'],
        p: 'Според Mews засегнатите хотели не са могли да четат и да отговарят на съобщения от 27 октомври, 15:34 CET. Инцидентът е обявен за отстранен на 28 октомври в 11:25 CET. Не е публикуван списък на засегнатите държави и хотели.',
        m: 'Прекъсването на комуникацията може да затрудни подготовката за пристигане.',
        n: 'Проверете как рецепцията установява проблем, преминава към наличен алтернативен канал и след това преглежда неотговорените запитвания. Избягвайте дублирано изпращане на важна информация за достъп.' },
      { h: 'Expedia разширява сравненията и въпросите за хотели чрез ИИ – първоначално в САЩ', src: ['S2'],
        p: 'Публикацията от 28 октомври представя Property Expert и Hotels.com AI Compare; разделът с въпроси потвърждава достъпност в САЩ през уеб и приложение. Старт в Европа не е потвърден.',
        m: 'Хотелите с гости от САЩ следва да следят представянето на информацията си в тези платформи.',
        n: 'Сравнете характеристиките на стаите, допълнителните такси и условията за анулиране в сайта и платформите. Тествайте отговорите в реално достъпен интерфейс; наличието на хотелска страница не гарантира препоръка от ИИ.' },
      { h: 'Повторно търсене след резервация чрез ИИ: тема за наблюдение', src: ['S3'],
        p: 'Статия на PhocusWire от 28 октомври разглежда агенти, които продължават да търсят по-ниска цена след резервация. Засега има малко доказателства за отрицателно въздействие върху хотелите; масово внедряване в Европа не е установено.',
        ml: 'Значение – наша оценка',
        m: 'Броят на новите резервации сам по себе си може да не показва реалното търсене.',
        n: 'Следете отделно всички нови резервации, оставащите след анулиране, анулиранията и повторните резервации. Сходни записи не доказват използване на ИИ и не са основание за превантивно затягане на условията.' },
    ],
    closing: 'Peak Care AI подпомага хотелите при проверка на данните, интеграциите и отговорностите преди автоматизация. Полезният процес трябва да работи в ежедневието и резултатите му да могат да се проверяват.',
    srcH: 'Източници', srcDate: 'Проверено на 02.11.2026 г.', otherLang: 'Други езици',
    ctaH: 'Къде е вашият хотел по тези три точки?',
    ctaP: 'Peak Care AI подпомага хотелите при оценка на готовността за ИИ, интеграциите и автоматизацията на работните процеси.',
    cta: 'Запитване за разговор', cta2: 'Оценка на готовността за ИИ',
  },
}

const LANG_LABEL = { de: 'Deutsch', en: 'English', bg: 'Български' }

export default function BlogIndustryBriefing20261102({ lang }) {
  const t = T[lang]
  const url = 'https://peakcareai.com' + BRIEFING_ROUTES[lang]
  return (
    <>
      <SEO
        lang={lang}
        alternates={[...Object.keys(BRIEFING_ROUTES).map((l) => ({ hreflang: l, href: 'https://peakcareai.com' + BRIEFING_ROUTES[l] })), { hreflang: 'x-default', href: 'https://peakcareai.com' + BRIEFING_ROUTES.en }]}
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
          datePublished: '2026-11-02',
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
                <p className="text-slate-600 leading-relaxed"><strong>{it.ml || t.mean}:</strong> {it.m}</p>
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
