import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

// Branchenbriefing 19.10.2026 in drei festen Sprachfassungen (DE/EN/BG), je eigene Route.
// Text: dot-Delta CHATGPT-PCAI-PUBLIKATION-20261019-0852-V1, Quellen von MARKETING 19.10. gegengelesen.
// Feste Sprache je Route (lang-Prop), nicht ueber den globalen DE/EN-Umschalter.

export const BRIEFING_ROUTES = {
  de: '/blog/branchenbriefing-2026-10-19',
  en: '/blog/industry-briefing-2026-10-19',
  bg: '/blog/branshov-obzor-2026-10-19',
}

const SOURCES = [
  { n: 1, label: 'TLfDI, Pressemitteilung 14.10.2026', url: 'https://www.pressebox.de/inaktiv/thueringer-landesbeauftragter-fuer-den-datenschutz/Achtung-Datenpannen-im-Bereich-Hotellerie-und-Tourismus/boxid/1316401' },
  { n: 2, label: 'Interalpen-Hotel Tyrol, 16.10.2026', url: 'https://www.interalpen.com/blog-detail/hinweis-zu-einem-it-sicherheitsvorfall/' },
  { n: 3, label: 'Hotelstars Union, 13.10.2026', url: 'https://www.hotelstars.eu/de/news/pressemitteilungen-hsu/artikel/ki-liebt-die-offiziellen-hotelsterne' },
  { n: 4, label: 'Mews Community, 13.10.2026', url: 'https://community.mews.com/t/help-shape-explainability-for-mews-rms-pricing-recommendations/8030' },
  { n: 5, label: 'PhocusWire, 14.10.2026', url: 'https://www.phocuswire.com/news/technology/hotel-adoption-of-general-purpose-ai-tools-outpaces-specialized-solutions' },
]

const T = {
  de: {
    seoTitle: 'Branchenbriefing 19. Oktober 2026: Buchungsdaten, Hotelsterne in KI, Mews | Peak Care AI',
    desc: 'Vier Entwicklungen für unabhängige Hotels im DACH-Raum: Phishing mit Buchungsdaten, offizielle Sterne in KI-Antworten, erklärbare Preisempfehlungen und KI-Werkzeuge im Alltag.',
    crumb: 'Branchenbriefing', badge: 'Branchenbriefing', date: '19. Oktober 2026',
    h1: 'Peak Care AI Branchenbriefing', h1b: '19. Oktober 2026',
    lead: 'Vier Entwicklungen für unabhängige Hotels und kleine Hotelgruppen im DACH-Raum: sichere Buchungsdaten, überprüfbare Hotelinformationen und kontrollierbare Automatisierung.',
    why: 'Bedeutung', why4: 'Bedeutung, unsere Schlussfolgerung', next: 'Nächster Schritt',
    items: [
      { h: 'Buchungsdaten werden für gezieltes Phishing missbraucht', src: [1, 2],
        p: 'Der Thüringer Datenschutzbeauftragte warnte am 14. Oktober vor einer Häufung von Datenschutzvorfällen in Hotellerie und Tourismus. Das Interalpen-Hotel Tyrol meldete am 16. Oktober Anhaltspunkte für unbefugten Zugriff auf sein extern betriebenes Buchungssystem; nach seinem Kenntnisstand sind Kontaktdaten, aber keine Zahlungsabwicklungsdaten betroffen. Das Veröffentlichungsdatum ist nicht der belegte Angriffszeitpunkt.',
        w: 'Auch Schnittstellen und Dienstleister gehören in die betriebliche Risikoprüfung.',
        n: 'Offizielle Zahlungsdomains dokumentieren, Dienstleister-Meldewege prüfen und die Rezeption schulen: Richtige Buchungsdaten beweisen nicht die Echtheit einer Nachricht.' },
      { h: 'Offizielle Hotelsterne werden in KI-Antworten berücksichtigt', src: [3],
        p: 'Die Hotelstars Union berichtete am 13. Oktober über die Erkennung offizieller Klassifizierungen durch KI-Assistenten. Die Darstellung variiert nach Land, Kanal und Anfrage. Ein HSU-Connector ist verfügbar; die Mitteilung belegt keinen neuen flächendeckenden Rollout.',
        w: 'Verifizierte Quellen können die korrekte Darstellung des Hotels unterstützen; daraus folgt kein Rankingversprechen.',
        n: 'Klassifizierungsstatus, Quelle und Gültigkeit zwischen Website, Hotelverzeichnissen und KI-Antworten abgleichen. Offizielle Sterne von Gästebewertungen unterscheiden.' },
      { h: 'Mews erprobt Erklärungen zu Preisempfehlungen', src: [4],
        p: 'Ein Beta-Aufruf vom 13. Oktober beschreibt eine dialogische Erklärung von RMS-Empfehlungen anhand verwendeter Signale. Die Funktion kann noch keine Einstellungen ändern oder frühere Preisentscheidungen erklären. Allgemeine DACH-Verfügbarkeit ist nicht bestätigt.',
        w: 'Hotels brauchen nachvollziehbare Automatisierung.',
        n: 'Beim RMS-Anbieter nach dokumentierten Entscheidungsgrundlagen, menschlichen Freigaben und Rücknahmeverfahren fragen.' },
      { h: 'Allgemeine KI-Werkzeuge bleiben verbreitet', src: [5], ours: true,
        p: 'PhocusWire berichtete am 14. Oktober über eine bereits Ende September vorgestellte Befragung: 72 % der befragten Hotelunternehmen beziehen KI-Funktionen aus allgemeinen Werkzeugen; 35 % messen keinen ROI. Die 107 Unternehmensleiter sind keine repräsentative Stichprobe kleiner DACH-Hotels.',
        w: 'Ein Nutzungsinventar hilft, unkontrollierte Dateneingaben und ungemessenen Aufwand zu erkennen.',
        n: 'Werkzeuge, eingegebene Daten, Verantwortliche und einen überprüfbaren Nutzen erfassen.' },
    ],
    prioH: 'Diese Woche priorisieren',
    prio: 'Buchungs- und Kommunikationswege prüfen, verifizierte Hoteldaten pflegen und Freigabegrenzen für Automatisierungen festlegen.',
    srcH: 'Quellen', otherLang: 'Weitere Sprachen',
    ctaH: 'Wie steht Ihr Haus bei diesen vier Punkten?',
    ctaP: 'Peak Care AI unterstützt Hotels bei AI-Readiness-Assessments, Gästekommunikation und Workflow-Automatisierung.',
    cta: 'Gespräch anfragen', cta2: 'AI-Readiness-Assessment',
  },
  en: {
    seoTitle: 'Industry Briefing 19 October 2026: booking data, hotel stars in AI, Mews | Peak Care AI',
    desc: 'Four developments for independent hotels in Germany, Austria and Switzerland: phishing with booking data, official stars in AI answers, explainable pricing recommendations and everyday AI tools.',
    crumb: 'Industry Briefing', badge: 'Industry Briefing', date: '19 October 2026',
    h1: 'Peak Care AI Industry Briefing', h1b: '19 October 2026',
    lead: 'Four developments for independent hotels and small hotel groups in Germany, Austria and Switzerland: secure booking data, verifiable hotel information and accountable automation.',
    why: 'Why it matters', why4: 'Why it matters, our interpretation', next: 'Next step',
    items: [
      { h: 'Booking data is being used for targeted phishing', src: [1, 2],
        p: 'On 14 October, the Thuringian data protection authority warned of a rise in reported incidents across hospitality and tourism. On 16 October, Interalpen-Hotel Tyrol reported indications of unauthorised access to its externally operated booking system. According to the hotel\'s current information, contact details are affected, but payment-processing data is not. The publication date is not a confirmed attack date.',
        w: 'Interfaces and technology suppliers belong in operational risk assessments.',
        n: 'Document official payment domains, check supplier incident-reporting procedures and train reception teams: correct booking details do not prove that a message is genuine.' },
      { h: 'AI answers are recognising official hotel stars', src: [3],
        p: 'In its 13 October release, Hotelstars Union reported that AI assistants recognise official classifications. Display still varies by country, channel and query. An HSU connector is available; the release does not establish a new universal rollout.',
        w: 'Verified sources can support accurate hotel descriptions, without guaranteeing rankings or recommendations.',
        n: 'Reconcile classification status, source and validity across the hotel website, directories and AI answers. Keep official stars separate from guest review scores.' },
      { h: 'Mews is testing explanations for pricing recommendations', src: [4],
        p: 'A 13 October beta invitation describes conversational explanations of RMS recommendations using recorded signals. The feature cannot yet change settings or explain historical pricing decisions. General availability in the DACH region has not been confirmed.',
        w: 'Hotels need automation they can understand and supervise.',
        n: 'Ask RMS suppliers about recorded decision evidence, human approval and procedures for reversing changes.' },
      { h: 'General-purpose AI tools remain widely used', src: [5], ours: true,
        p: 'On 14 October, PhocusWire covered a survey originally presented in late September: 72% of responding hotel companies obtain AI capabilities from general-purpose tools; 35% do not measure ROI. The 107 hotel company leaders do not form a representative sample of small DACH hotels.',
        w: 'An inventory can reveal uncontrolled data entry and unmeasured effort.',
        n: 'Record each tool, the data entered, its owner and one measurable outcome.' },
    ],
    prioH: 'Priorities for the week',
    prio: 'Check booking and communication workflows, maintain verified hotel facts and define approval limits for automation.',
    srcH: 'Sources', otherLang: 'Other languages',
    ctaH: 'Where does your hotel stand on these four points?',
    ctaP: 'Peak Care AI helps hotels assess AI readiness, improve guest communication and automate workflows.',
    cta: 'Request a conversation', cta2: 'AI Readiness Assessment',
  },
  bg: {
    seoTitle: 'Браншов обзор 19 октомври 2026 г.: резервационни данни, хотелски звезди в ИИ, Mews | Peak Care AI',
    desc: 'Четири развития за независимите хотели в Германия, Австрия и Швейцария: фишинг с резервационни данни, официални звезди в отговорите на ИИ, обясними ценови препоръки и ИИ инструменти в ежедневието.',
    crumb: 'Браншов обзор', badge: 'Браншов обзор', date: '19 октомври 2026 г.',
    h1: 'Браншов обзор на Peak Care AI', h1b: '19 октомври 2026 г.',
    lead: 'Четири развития с практическо значение за независимите хотели и малките хотелски групи в Германия, Австрия и Швейцария: защита на резервационните данни, проверима информация за хотела и автоматизация с ясен контрол.',
    why: 'Значение', why4: 'Значение, наш извод', next: 'Следваща стъпка',
    items: [
      { h: 'Данни от резервации се използват за целенасочен фишинг', src: [1, 2],
        p: 'На 14 октомври органът за защита на данните в Тюрингия предупреди за зачестили сигнали за нарушения в хотелиерството и туризма. На 16 октомври Interalpen-Hotel Tyrol съобщи за признаци на неоторизиран достъп до резервационната му система, управлявана от външен доставчик. Според наличната информация на хотела са засегнати данни за контакт, но не и данни за обработка на плащания. Датата на съобщението не е потвърдена дата на атаката.',
        w: 'Интерфейсите и доставчиците на софтуер също трябва да бъдат част от оценката на риска.',
        n: 'Опишете официалните домейни за плащане, проверете реда за уведомяване при инциденти и обучете рецепцията: верните данни за резервацията не доказват, че едно съобщение е истинско.' },
      { h: 'Официалните хотелски звезди присъстват в отговорите на ИИ', src: [3],
        p: 'В съобщение от 13 октомври Hotelstars Union посочва, че ИИ асистенти разпознават официалната категоризация. Представянето обаче се различава според държавата, канала и конкретния въпрос. Наличен е HSU конектор, но съобщението не доказва ново внедряване във всички канали.',
        w: 'Проверените източници могат да подпомогнат точното представяне на хотела, без гаранция за класиране или препоръка.',
        n: 'Сравнете категорията, източника и валидността ѝ в сайта, хотелските каталози и отговорите на ИИ. Разграничавайте официалните звезди от оценките на гостите.' },
      { h: 'Mews тества обяснения към ценовите препоръки', src: [4],
        p: 'Покана за бета тест от 13 октомври описва разговорни обяснения на препоръките на системата за управление на приходите (RMS), основани на използваните сигнали. Функцията все още не променя настройки и не обяснява минали ценови решения. Общата ѝ достъпност в Германия, Австрия и Швейцария не е потвърдена.',
        w: 'Хотелите се нуждаят от разбираема автоматизация под човешки контрол.',
        n: 'Попитайте доставчика как се документират основанията за решенията, кога е нужно човешко одобрение и как се отменят промени.' },
      { h: 'Универсалните ИИ инструменти остават широко използвани', src: [5], ours: true,
        p: 'На 14 октомври PhocusWire публикува данни от проучване, представено още в края на септември: 72% от анкетираните хотелски компании използват универсални инструменти за ИИ, а 35% не измерват възвръщаемостта. Извадката от 107 ръководители не е представителна за малките хотели в региона.',
        w: 'Описът на използваните инструменти помага да се открият неконтролирано въвеждане на данни и неизмерени разходи на време.',
        n: 'Опишете инструмента, въвежданите данни, отговорника и един измерим резултат.' },
    ],
    prioH: 'Приоритети за седмицата',
    prio: 'Проверка на резервационните и комуникационните процеси, поддържане на проверени хотелски данни и ясни граници за автоматичните действия.',
    srcH: 'Източници', otherLang: 'Други езици',
    ctaH: 'Къде е вашият хотел по тези четири точки?',
    ctaP: 'Peak Care AI подпомага хотелите при оценка на готовността за ИИ, комуникация с гостите и автоматизация на работните процеси.',
    cta: 'Запитване за разговор', cta2: 'Оценка на готовността за ИИ',
  },
}

const LANG_LABEL = { de: 'Deutsch', en: 'English', bg: 'Български' }

export default function BlogIndustryBriefing20261019({ lang }) {
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
          datePublished: '2026-10-19',
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
                <p className="text-slate-600 leading-relaxed"><strong>{it.ours ? t.why4 : t.why}:</strong> {it.w}</p>
                <p className="text-slate-600 leading-relaxed"><strong>{t.next}:</strong> {it.n}</p>
              </div>
            ))}

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10">
              <div className="font-bold text-navy-900 mb-2">{t.prioH}</div>
              <p className="text-slate-600 leading-relaxed m-0">{t.prio}</p>
            </div>

            <h2 className="text-xl font-bold text-navy-900 mt-10 mb-4">{t.srcH}</h2>
            <ol className="text-sm text-slate-600 space-y-2">
              {SOURCES.map((s) => (
                <li key={s.n} id={`quelle-${s.n}`}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-navy-700 hover:text-gold-500 break-words">
                    {s.label}
                  </a>
                </li>
              ))}
            </ol>
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
