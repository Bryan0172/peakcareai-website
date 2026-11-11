import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

// Branchenbriefing 09.11.2026 in drei festen Sprachfassungen (DE/EN/BG), je eigene Route.
// Text: dot-Delta CHATGPT-PCAI-BRANCHENBRIEF-20261109-V1 (Wortlaut unveraendert), direkte Quellenlinks im Text.
// Feste Sprache je Route (lang-Prop), nicht ueber den globalen DE/EN-Umschalter.

export const BRIEFING_ROUTES = {
  de: '/blog/branchenbriefing-2026-11-09',
  en: '/blog/industry-briefing-2026-11-09',
  bg: '/blog/branshov-obzor-2026-11-09',
}

const CB = 'https://www.cloudbeds.com/press/customer-alliance/'
const RPG1 = 'https://roompricegenie.com/portfolio-calendar-multi-property-revenue-management/'
const RPG2 = 'https://roompricegenie.com/portfolio-calendar/'
const VDA = 'https://vdatelkonet.com/2026/11/03/vda-telkonet-cloudbeds-strategic-partnership/'
const GOOG = 'https://support.google.com/contributionpolicy/answer/7400114'

const SOURCES = [
  { label: 'Cloudbeds × Customer Alliance, 04.11.2026', url: CB },
  { label: 'RoomPriceGenie, Portfolio Calendar, 02.11.2026', url: RPG1 },
  { label: 'RoomPriceGenie, Product documentation', url: RPG2 },
  { label: 'VDA Telkonet × Cloudbeds, 03.11.2026', url: VDA },
  { label: 'Google, Contribution policy (Reviews)', url: GOOG },
]

// Textteile: String oder [Linktext, URL]
const T = {
  de: {
    seoTitle: 'Branchenbriefing 9. November 2026: Gästefeedback, Portfolio-Kalender, Zimmertechnik | Peak Care AI',
    desc: 'Gästefeedback nach dem Check-out, ein gemeinsamer Blick auf die Auslastung mehrerer Hotels und Zimmertechnik, die auf den Check-in reagieren soll: drei Prüfungen für Hotelteams.',
    crumb: 'Branchenbriefing', badge: 'Branchenbriefing', date: '9. November 2026',
    h1: 'Peak Care AI Branchenbriefing', h1b: '9. November 2026',
    lead: 'Gästefeedback nach dem Check-out, ein gemeinsamer Blick auf die Auslastung mehrerer Hotels und Zimmertechnik, die auf den Check-in reagieren soll: Was können Hotelteams schon prüfen, und was ist erst angekündigt?',
    practice: 'Praxis',
    items: [
      { h: 'Gästefeedback aus dem Hotelmanagementsystem anstoßen.',
        p: ['Am 4. November meldete ', ['Cloudbeds die Integration mit dem Berliner Anbieter Customer Alliance', CB], ' als im Marketplace verfügbar. Reservierungs- und Check-out-Daten können Umfragen und Bewertungseinladungen auslösen. Das ist für Hotels mit passendem Cloudbeds-Konto relevant; die Freischaltung im eigenen Tarif und die übertragenen Datenfelder sind vor Ort zu prüfen.'],
        n: ['Testen Sie einen normalen Check-out, eine Stornierung und eine Nichterscheinung. Legen Sie fest, wer die Antworten bearbeitet, welche Daten übertragen werden und wie doppelte Nachrichten vermieden werden. Einladungen zu Google-Bewertungen dürfen nach den ', ['geltenden Google-Richtlinien', GOOG + '?hl=de'], ' nicht auf zufriedene Gäste beschränkt oder mit Anreizen verbunden werden.'] },
      { h: 'Mehrere Häuser in einer Kalenderansicht vergleichen.',
        p: ['Am 2. November stellte der Schweizer Anbieter ', ['RoomPriceGenie seinen Portfolio Calendar vor', RPG1], '. Die ', ['Produktdokumentation', RPG2], ' zeigt eine Leseansicht für bis zu drei Kennzahlen gleichzeitig, darunter Auslastung, Buchungszuwachs und Preis; für manche Kennzahlen ist der Reporting-Zugang erforderlich. Preisänderungen bleiben im Kalender des jeweiligen Hauses. Freischaltdatum und Zugang je Konto wurden nicht unabhängig bestätigt.'],
        n: ['Gleichen Sie Kennzahlen aus zwei Häusern mit den Originalberichten ab. Prüfen Sie, ob beide Häuser Stornierungen, Stichtage und Netto- oder Bruttowerte gleich behandeln.'] },
      { h: 'Zimmertechnik mit Check-in verbinden: angekündigt.',
        p: [['VDA Telkonet kündigte am 3. November die Integration mit Cloudbeds an', VDA], '. Check-in und Zimmerzuweisung sollen Abläufe für Zutritt und Raumklima anstoßen. Laut Anbieter läuft die Zertifizierung; der kommerzielle Start ist für das erste Quartal 2027 geplant. Ein Pilot oder eine Verfügbarkeit im DACH-Raum ist nicht bestätigt.'],
        n: ['Wer kompatible Systeme hat oder modernisiert, sollte vor einem Pilotprojekt einen Zimmerwechsel, eine späte Anreise und einen Netzausfall durchspielen. Halten Sie den manuellen Zutritt verfügbar.'] },
    ],
    closing: 'Peak Care AI unterstützt Hotels dabei, Daten, Schnittstellen und Zuständigkeiten vor der Automatisierung zu prüfen. Entscheidend ist, ob ein Prozess im Alltag funktioniert und sein Ergebnis überprüfbar bleibt.',
    srcH: 'Quellen', srcDate: 'Stand 09.11.2026', otherLang: 'Weitere Sprachen',
    ctaH: 'Wie steht Ihr Haus bei diesen drei Punkten?',
    ctaP: 'Peak Care AI unterstützt Hotels bei AI-Readiness-Assessments, Schnittstellen und Workflow-Automatisierung.',
    cta: 'Gespräch anfragen', cta2: 'AI-Readiness-Assessment',
  },
  en: {
    seoTitle: 'Industry Briefing 9 November 2026: guest feedback, portfolio calendar, room systems | Peak Care AI',
    desc: 'Guest feedback after checkout, a single view of occupancy across properties, and room systems designed to respond to check-in: three practical checks for hotel teams.',
    crumb: 'Industry Briefing', badge: 'Industry Briefing', date: '9 November 2026',
    h1: 'Peak Care AI Industry Briefing', h1b: '9 November 2026',
    lead: 'Guest feedback after checkout, a single view of occupancy across properties, and room systems designed to respond to check-in: what can hotel teams test today, and what is still on the roadmap?',
    practice: 'Practical step',
    items: [
      { h: 'Trigger guest feedback from the property management system.',
        p: ['On 4 November, ', ['Cloudbeds said its integration with Berlin-based Customer Alliance', CB], ' was available through its Marketplace. Reservation and checkout data can trigger surveys and review invitations. Hotels with a compatible Cloudbeds account should check activation under their plan and which fields are transferred.'],
        n: ['Test a completed checkout, a cancellation and a no-show. Decide who handles replies, what data is shared and how duplicate messages are prevented. Under ', ['Google’s current review policy', GOOG + '?hl=en-GB'], ', review invitations must not target only satisfied guests or offer incentives.'] },
      { h: 'Compare properties in one calendar view.',
        p: ['On 2 November, Swiss provider ', ['RoomPriceGenie introduced its Portfolio Calendar', RPG1], '. Its ', ['product documentation', RPG2], ' describes a read-only view with up to three metrics at once, including occupancy, booking pickup and price. Some metrics require Reporting access. Rate changes still take place in each property’s own calendar. The activation date and access for individual accounts have not been independently verified.'],
        n: ['Compare metrics for two properties with their source reports. Check that both properties use the same treatment of cancellations, cut-off times and net or gross figures.'] },
      { h: 'Connect room systems to check-in: announced.',
        p: ['On 3 November, ', ['VDA Telkonet announced an integration with Cloudbeds', VDA], '. Check-in and room assignment are intended to trigger workflows for room access and climate control. The vendor says certification is under way and commercial availability is planned for the first quarter of 2027. A pilot and availability in Germany, Austria or Switzerland have not been confirmed.'],
        n: ['If you use compatible systems or are planning a refurbishment, walk through a room move, a late arrival and a network outage before piloting. Keep a manual way to grant access.'] },
    ],
    closing: 'Peak Care AI helps hotels assess data, integrations and ownership before automating. A useful workflow must work in daily operations and produce results that can be checked.',
    srcH: 'Sources', srcDate: 'Checked 9 November 2026', otherLang: 'Other languages',
    ctaH: 'Where does your property stand on these three points?',
    ctaP: 'Peak Care AI supports hotels with AI readiness assessments, integrations and workflow automation.',
    cta: 'Request a conversation', cta2: 'AI readiness assessment',
  },
  bg: {
    seoTitle: 'Браншов обзор 9 ноември 2026 г.: обратна връзка от гости, общ календар, системи в стаите | Peak Care AI',
    desc: 'Обратна връзка след напускане, общ поглед върху заетостта на няколко хотела и управление на стаите при настаняване: три практически проверки за хотелиери.',
    crumb: 'Браншов обзор', badge: 'Браншов обзор', date: '9 ноември 2026 г.',
    h1: 'Седмичен обзор на Peak Care AI за хотелиери', h1b: '9 ноември 2026 г.',
    lead: 'Обратна връзка след напускане, общ поглед върху заетостта на няколко хотела и управление на стаите при настаняване. Какво могат да проверят българските хотелиери още сега и какво засега е само обявено?',
    practice: 'Практически стъпки',
    items: [
      { h: 'Покани за обратна връзка от системата за управление на хотела.',
        p: ['На 4 ноември ', ['Cloudbeds съобщи, че интеграцията с берлинската Customer Alliance', CB], ' е достъпна през Cloudbeds Marketplace. Данни за резервацията и напускането могат да задействат анкети и покани за отзиви. Проверете дали услугата може да се активира за вашия план и кои полета се предават между системите.'],
        n: ['Тествайте нормално напускане, анулирана резервация и неявяване на гост. Определете кой обработва отговорите, какви данни се споделят и как се избягват дублирани съобщения. Според ', ['действащите правила на Google', GOOG + '?hl=bg'], ' поканите за отзив не бива да се изпращат само до доволни гости или да се обвързват със стимули.'] },
      { h: 'Сравнение на няколко хотела в общ календар.',
        p: ['На 2 ноември швейцарският доставчик ', ['RoomPriceGenie представи Portfolio Calendar', RPG1], '. Според ', ['описанието на продукта', RPG2], ' в изгледа могат да се следят едновременно до три показателя, например заетост, промяна в броя на резервациите и цена. За част от показателите е нужен достъп до модула за отчети. Цените се променят в календара на отделния хотел. Датата на активиране и достъпът за конкретен акаунт не са потвърдени независимо.'],
        n: ['Сверете данните за два хотела с отчетите им. Уточнете дали анулиранията се отчитат по един и същи начин, дали справките са към един и същи момент и дали сумите са нетни или брутни.'] },
      { h: 'Връзка между настаняването и системите в стаята: обявена интеграция.',
        p: ['На 3 ноември ', ['VDA Telkonet обяви интеграция с Cloudbeds', VDA], '. Настаняването и определянето на стая би трябвало да задействат процеси за достъп и климатизация. По данни на доставчика сертифицирането е в ход, а пазарният старт е планиран за първото тримесечие на 2027 г. Няма потвърждение за пилотен проект или наличност в България.'],
        n: ['Ако разполагате със съвместими системи или планирате обновяване, проиграйте смяна на стая, късно пристигане и прекъсване на мрежата преди пилотен тест. Осигурете ръчен начин за достъп.'] },
    ],
    closing: 'Peak Care AI подпомага хотелите при проверка на данните, интеграциите и отговорностите преди автоматизация. Полезният процес трябва да работи в ежедневието и резултатите му да могат да се проверяват.',
    srcH: 'Източници', srcDate: 'Проверено на 09.11.2026 г.', otherLang: 'Други езици',
    ctaH: 'Къде е вашият хотел по тези три точки?',
    ctaP: 'Peak Care AI подпомага хотелите при оценка на готовността за ИИ, интеграциите и автоматизацията на работните процеси.',
    cta: 'Запитване за разговор', cta2: 'Оценка на готовността за ИИ',
  },
}

const LANG_LABEL = { de: 'Deutsch', en: 'English', bg: 'Български' }

function Parts({ parts }) {
  return parts.map((x, i) => (typeof x === 'string'
    ? <span key={i}>{x}</span>
    : <a key={i} href={x[1]} target="_blank" rel="noopener noreferrer" className="text-navy-700 hover:text-gold-500">{x[0]}</a>))
}

export default function BlogIndustryBriefing20261109({ lang }) {
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
          datePublished: '2026-11-09',
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
                <p className="text-slate-600 leading-relaxed"><Parts parts={it.p} /></p>
                <p className="text-slate-600 leading-relaxed"><strong>{t.practice}:</strong> <Parts parts={it.n} /></p>
              </div>
            ))}

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10">
              <p className="text-slate-600 leading-relaxed m-0">{t.closing}</p>
            </div>

            <h2 className="text-xl font-bold text-navy-900 mt-10 mb-4">{t.srcH}</h2>
            <ul className="text-sm text-slate-600 space-y-2 list-none pl-0">
              {SOURCES.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-navy-700 hover:text-gold-500 break-words">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
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
