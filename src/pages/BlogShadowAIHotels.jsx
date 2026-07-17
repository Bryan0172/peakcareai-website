import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function BlogShadowAIHotels() {
  return (
    <>
      <SEO
        title="Shadow AI in Hotels: Was Ihr Team bereits nutzt — und warum Sie es wissen sollten | peakcareai.com"
        description="Hotelmitarbeiter nutzen KI-Tools eigenstaendig — oft ohne Wissen der Geschaeftsfuehrung. Was Shadow AI im Hotelbetrieb bedeutet, welche Risiken entstehen und wie Sie in drei Schritten Klarheit gewinnen."
        ogTitle="Shadow AI in Hotels: Was Ihr Team bereits nutzt"
        ogDescription="Shadow AI im Hotelbetrieb: Risiken, Datenschutz und drei pragmatische Schritte fuer Hotel-Manager."
        canonical="https://peakcareai.com/blog/shadow-ai-hotels"
        jsonLd={[{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Shadow AI in Hotels: Was Ihr Team bereits nutzt — und warum Sie es wissen sollten",
          "inLanguage": "de",
          "author": { "@type": "Person", "name": "Andreas Donner", "url": "https://peakcareai.com/about" },
          "publisher": { "@type": "Organization", "name": "Peak Care AI", "url": "https://peakcareai.com" },
          "datePublished": "2026-05-18",
          "description": "Shadow AI im Hotelbetrieb: Was Mitarbeiter eigenstaendig nutzen, welche Risiken entstehen und drei pragmatische erste Schritte fuer Hotel-Manager."
        }, {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Ist Shadow AI im Hotel ein Compliance-Problem oder ein Managementproblem?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Beides. Die Compliance-Dimension entsteht, wenn Gastedaten in externe KI-Systeme eingegeben werden, ohne dass eine gueltige Datenverarbeitungsvereinbarung vorliegt. Die Management-Dimension entsteht, wenn Kommunikationsqualitaet und Markenkonsistenz nicht mehr steuerbar sind."
              }
            },
            {
              "@type": "Question",
              "name": "Wie viel Zeit braucht ein Shadow AI-Inventar im Hotel?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Erfahrungsgemaess 60–90 Minuten: 30 Minuten Teamrunde, 30–60 Minuten strukturierte Aufbereitung. Kein IT-Projekt, kein externer Berater erforderlich."
              }
            },
            {
              "@type": "Question",
              "name": "Was kostet ein AI Readiness Call bei Peak Care AI?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Der erste Schritt — ein 30-minuetiges Gespraech — ist kostenfrei. Ein strukturierter AI Readiness Check mit schriftlichem Ergebnis ist als separates Angebot verfuegbar."
              }
            }
          ]
        }]}
      />

      {/* HERO */}
      <section className="bg-navy-900 py-16">
        <div className="container-main max-w-3xl">
          <div className="flex items-center gap-3 mb-5">
            <Link to="/" className="text-white/40 hover:text-white/70 text-sm transition-colors">Home</Link>
            <span className="text-white/20">/</span>
            <span className="text-gold-400 text-sm">Shadow AI Guide</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-5">
            EU AI Act · August 2026
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
            Shadow AI in Hotels:<br />
            <span className="text-gold-400">Was Ihr Team bereits nutzt</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed mb-6">
            Fuer Hotel-Manager und Operations-Teams — ohne Rechtssprache, ohne Panikmache.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/40">
            <span>Von <strong className="text-white/70">Andreas Donner</strong></span>
            <span>·</span>
            <span>Mai 2026</span>
            <span>·</span>
            <span>7 Min. Lesezeit</span>
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <section className="section-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 max-w-5xl mx-auto">

            {/* Main content */}
            <article className="lg:col-span-3 prose prose-slate max-w-none">

              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                In den vergangenen 18 Monaten habe ich mit Hotelmanagern aus Oesterreich, der Schweiz und Deutschland gesprochen.
                Fast alle beschreiben dieselbe Situation: <em>Ihre Mitarbeiter nutzen KI-Tools — aber niemand weiss genau, welche, wofuer und welche Gastedaten dabei eingegeben werden.</em>
              </p>
              <p className="text-slate-600 leading-relaxed">
                Das ist kein Ausnahmefall. Es ist der Normalzustand in der europaeischen Hotellerie 2026.
              </p>
              <p className="text-slate-600 leading-relaxed">
                KI-Tools sind nicht mehr teuer, nicht mehr kompliziert und nicht mehr unsichtbar. Sie sind kostenlos,
                intuitiv und auf jedem Smartphone. Was haeufig fehlt, ist nicht die Nutzung — es ist die Struktur darum herum.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">Was Shadow AI im Hotel konkret bedeutet</h2>
              <p className="text-slate-600 leading-relaxed">
                Shadow AI beschreibt eine einfache Situation: Mitarbeiter nutzen KI-Tools eigenstaendig,
                ohne dass Unternehmensleitung oder IT weiss, welche Tools eingesetzt werden, welche Daten
                dort eingegeben werden und ob diese Nutzung mit internen Richtlinien oder externen
                Anforderungen vereinbar ist.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Das ist strukturell dasselbe Phaenomen wie "Shadow IT" vor 15 Jahren. Der Unterschied:
                KI-Tools verarbeiten Sprache — und Sprache enthaelt Kontext, Gastedaten und
                vertrauliche Betriebsinformationen.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">Typische Situationen im Hotelbetrieb</h2>

              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'Gaestekommunikation',
                    text: 'Ein Rezeptionsmitarbeiter formuliert Gaesteantworten mit ChatGPT. Er gibt dabei den Namen des Gastes, das Buchungsdatum, den Zimmertyp und die konkrete Anfrage ein. Kostenlose ChatGPT-Accounts koennen Eingaben fuer das Modell-Training verwenden — das ist in den Nutzungsbedingungen dokumentiert, aber im Alltag selten bewusst.',
                  },
                  {
                    title: 'Beschwerdemanagement',
                    text: 'Eine Operations-Managerin nutzt ein KI-Tool, um eine schwierige Gastebeschwerde zu formulieren. Sie kopiert die originale Nachricht des Gastes — inklusive Name und Kontaktdaten — in das Tool. Ob das Tool ueber eine Datenverarbeitungsvereinbarung verfuegt, bleibt ungeklaert.',
                  },
                  {
                    title: 'Marketingtexte und Social Media',
                    text: 'Das Marketingteam verwendet KI-gestuetzte Tools fuer Beschreibungen und Posts. Die generierten Texte sind moeglicherweise nicht einheitlich mit der geprueften Markenkommunikation des Hauses abgestimmt.',
                  },
                  {
                    title: 'Uebersetzungen',
                    text: 'Mehrsprachige Gastekorrespondenz wird durch Mitarbeiter in Google Translate oder DeepL uebersetzt — beide inzwischen mit KI-Komponenten. Vertrauliche Buchungsdetails passieren dabei externe Server.',
                  },
                  {
                    title: 'Revenue Management mit KI-Funktionen',
                    text: 'Einige Revenue-Management-Systeme haben KI-basierte Preisempfehlungen integriert. Deren Einordnung unter datenschutzrechtlichen und regulatorischen Gesichtspunkten ist je nach Anbieter und Konfiguration unterschiedlich — und in vielen Haeusern noch nicht formell geprueft.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start bg-slate-50 rounded-xl p-5 border border-slate-100">
                    <span className="text-gold-500 mt-1 shrink-0">→</span>
                    <div>
                      <h3 className="font-bold text-navy-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">Warum das jetzt relevant ist</h2>
              <p className="text-slate-600 leading-relaxed">
                Ab August 2026 gilt der EU AI Act vollstaendig. Eine der Kernanforderungen betrifft die
                Transparenz und Dokumentation von KI-Systemen, die in Unternehmen eingesetzt werden.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Wenn Ihr Team KI-Tools nutzt — ob eingekauft oder eigenstaendig mitgebracht — und diese
                Tools mit Gastedaten arbeiten, koennte daraus eine Dokumentationspflicht entstehen.
                Die genaue Einordnung haengt vom jeweiligen System und dessen Nutzungskontext ab.
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>Das Problem ist nicht die Nutzung an sich. Das Problem ist, wenn Kontrolle
                und Dokumentation fehlen.</strong>
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                <p className="font-bold text-amber-800 mb-2">Die einfache Ausgangsfrage</p>
                <p className="text-amber-700 text-sm leading-relaxed mb-3">Koennen Sie diese drei Fragen heute beantworten?</p>
                <ul className="space-y-2 text-sm text-amber-800">
                  <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">→</span> Welche KI-Tools werden in Ihrem Betrieb genutzt — offiziell und eigenstaendig?</li>
                  <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">→</span> Werden dabei Gastedaten eingegeben?</li>
                  <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">→</span> Haben Sie fuer diese Tools gueltige Datenverarbeitungsvereinbarungen?</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">Drei konkrete Risiken</h2>

              <div className="space-y-5 mb-8">
                {[
                  {
                    n: '01',
                    title: 'Datenschutz-Exposition',
                    text: 'Gastedaten werden in externe KI-Systeme eingegeben, die moeglicherweise nicht ueber eine gueltige Datenverarbeitungsvereinbarung verfuegen. Das ist ein konkretes Risiko, das durch klare Richtlinien und eine bewusste Tool-Auswahl adressierbar ist.',
                  },
                  {
                    n: '02',
                    title: 'Unkontrollierter Kommunikationsstil',
                    text: 'Wenn verschiedene Mitarbeiter mit unterschiedlichen KI-Tools Gaestekommunikation verfassen, ist ein einheitliches Kommunikationsbild schwer aufrechtzuerhalten — besonders in kritischen Momenten wie Beschwerden oder Upgrade-Kommunikation.',
                  },
                  {
                    n: '03',
                    title: 'Fehlende Dokumentationsgrundlage',
                    text: 'Ohne Inventar und Dokumentation fehlt die Grundlage fuer eine saubere Einschaetzung, welche KI-Systeme in Ihrem Betrieb eingesetzt werden und welche Anforderungen dabei relevant sein koennten.',
                  },
                ].map((step) => (
                  <div key={step.n} className="flex gap-5 items-start bg-slate-50 rounded-xl p-5 border border-slate-100">
                    <span className="text-2xl font-bold text-gold-400 shrink-0 w-10">{step.n}</span>
                    <div>
                      <h3 className="font-bold text-navy-900 mb-1.5">{step.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">Drei pragmatische erste Schritte</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Shadow AI loest man nicht durch Verbote. Mitarbeiter werden KI-Tools nutzen — die Frage
                ist, ob das mit einem klaren Rahmen geschieht oder ohne.
              </p>

              <div className="space-y-5 mb-8">
                {[
                  {
                    n: '01',
                    title: 'Inventar erstellen — ohne Bewertung',
                    text: 'Bitten Sie Ihr Team in einem offenen Gespraech — kein Audit, keine Konsequenzen — eine Liste aller KI-Tools zu erstellen, die beruflich genutzt werden. Erfahrungsgemaess kommen dabei 8–15 Tools zusammen, von denen die Unternehmensleitung 2–3 kannte.',
                  },
                  {
                    n: '02',
                    title: 'Daten-Check je Tool',
                    text: 'Fuer jedes Tool eine einfache Frage: Werden dabei Gastedaten eingegeben? Name, E-Mail, Buchungsdetails, Beschwerden — ja oder nein? Das reduziert die relevante Liste schnell auf 3–5 Tools, bei denen eine genauere Pruefung sinnvoll ist.',
                  },
                  {
                    n: '03',
                    title: 'Einfache Richtlinie statt Verbot',
                    text: 'Eine einzige Regel kann das Datenschutzrisiko erheblich reduzieren: keine Gastedaten in nicht-geprueften KI-Tools. Keine aufwendige Policy, kein IT-Rollout. Eine klare Festlegung, kommuniziert und dokumentiert.',
                  },
                ].map((step) => (
                  <div key={step.n} className="flex gap-5 items-start bg-slate-50 rounded-xl p-5 border border-slate-100">
                    <span className="text-2xl font-bold text-gold-400 shrink-0 w-10">{step.n}</span>
                    <div>
                      <h3 className="font-bold text-navy-900 mb-1.5">{step.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed">
                Diese drei Schritte loesen das Thema nicht vollstaendig — aber sie verschieben die Position
                von <em>"wir wissen es nicht"</em> zu <em>"wir haben einen Ueberblick"</em>.
                Das ist der wesentliche Unterschied, wenn der EU AI Act ab August 2026 vollstaendig gilt.
              </p>

              {/* FAQ */}
              <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-5">Haeufige Fragen</h2>
              <div className="divide-y divide-slate-100 border border-slate-100 rounded-xl overflow-hidden">
                {[
                  {
                    q: 'Ist Shadow AI im Hotel ein Compliance-Problem oder ein Managementproblem?',
                    a: 'Beides. Die Compliance-Dimension entsteht, wenn Gastedaten in externe KI-Systeme eingegeben werden, ohne dass eine gueltige Datenverarbeitungsvereinbarung vorliegt. Die Management-Dimension entsteht, wenn Kommunikationsqualitaet und Markenkonsistenz nicht mehr steuerbar sind. Beide lassen sich mit denselben Massnahmen adressieren: Inventar und einfache Richtlinie.',
                  },
                  {
                    q: 'Duerfen Mitarbeiter KI-Tools privat auf dem Smartphone nutzen, auch wenn diese arbeitsbezogen verwendet werden?',
                    a: 'Das haengt von der internen Richtlinie und dem Arbeitsvertrag ab. Als allgemeine Orientierung gilt: Wenn mit einem privaten Tool Gastedaten verarbeitet werden, entsteht moeglicherweise ein Datenschutzrisiko fuer das Unternehmen — unabhaengig davon, ob das Tool privat oder beruflich beschafft wurde. Fuer eine verbindliche Einschaetzung empfehlen wir anwaltliche Beratung.',
                  },
                  {
                    q: 'Wie viel Zeit braucht ein Shadow AI-Inventar im Hotel?',
                    a: 'Erfahrungsgemaess 60–90 Minuten: 30 Minuten Teamrunde, 30–60 Minuten strukturierte Aufbereitung. Kein IT-Projekt, kein externer Berater erforderlich.',
                  },
                  {
                    q: 'Was kostet ein AI Readiness Call bei Peak Care AI?',
                    a: 'Der erste Schritt — ein 30-minuetiges Gespraech — ist kostenfrei. Ein strukturierter AI Readiness Check mit schriftlichem Ergebnis ist als separates Angebot verfuegbar. Details auf Anfrage.',
                  },
                ].map((item, i) => (
                  <details key={i} className="group">
                    <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 py-4">
                      <span className="font-semibold text-navy-900 text-sm">{item.q}</span>
                      <svg className="w-4 h-4 text-gold-500 shrink-0 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </summary>
                    <p className="px-5 pb-4 text-slate-500 text-sm leading-relaxed">{item.a}</p>
                  </details>
                ))}
              </div>

              {/* Disclaimer */}
              <p className="text-slate-400 text-xs leading-relaxed mt-8 pt-6 border-t border-slate-100">
                Dieser Artikel dient der allgemeinen Information und stellt keine Rechtsberatung dar.
                Er ersetzt keine rechtliche Einzelfallpruefung. Fuer Fragen zur DSGVO-Compliance oder
                zur Einordnung von KI-Systemen unter den EU AI Act empfehlen wir den Kontakt zu einem
                spezialisierten Rechtsanwalt.
              </p>

              {/* Author */}
              <div className="mt-10 pt-8 border-t border-slate-100 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-navy-900 text-gold-400 flex items-center justify-center font-bold shrink-0">AD</div>
                <div>
                  <p className="font-bold text-navy-900">Andreas Donner</p>
                  <p className="text-slate-500 text-sm">Founder, peakcareai.com · 25+ Jahre in der internationalen Luxushotellerie — Projektentwicklung und Betrieb.</p>
                </div>
              </div>

            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-5">
              <div className="bg-navy-900 rounded-2xl p-5 text-center sticky top-20">
                <div className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-2">Executive Briefing</div>
                <p className="text-white font-bold text-sm mb-1">Shadow AI &amp; AI Literacy for Hotels</p>
                <p className="text-white/50 text-xs mb-4">30 Min. · Einzelgespraech · fuer Hotel-Betreiber</p>
                <a
                  href="https://calendly.com/peakcare-peak-care/ai-readiness-call-peak-care-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold py-3 rounded-xl transition-colors text-sm"
                >
                  AI Readiness Call buchen →
                </a>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-center">
                <div className="text-amber-700 text-xs font-bold uppercase tracking-widest mb-2">5-Minuten-Check</div>
                <p className="text-navy-900 font-bold text-sm mb-1">Ist Ihr Hotel betroffen?</p>
                <p className="text-slate-500 text-xs mb-4">5 Fragen · sofortiges Ergebnis · kostenlos</p>
                <Link to="/assessment" className="block bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-xl transition-colors text-sm">
                  Assessment starten →
                </Link>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5 text-center">
                <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Weiterfuehrender Artikel</div>
                <p className="text-navy-900 font-bold text-sm mb-3">EU AI Act August 2026: Was Hotels jetzt tun muessen</p>
                <Link to="/blog/eu-ai-act-hotels-2026" className="block bg-navy-900 hover:bg-navy-700 text-white font-bold py-3 rounded-xl transition-colors text-sm">
                  Artikel lesen →
                </Link>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-navy-900 py-16">
        <div className="container-main text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Wissen, was in Ihrem Betrieb laeuft.
          </h2>
          <p className="text-white/55 mb-8 leading-relaxed">
            30 Minuten, Einzelgespraech. Konkrete Einschaetzung fuer Ihr Hotel — kein Pitch, kein Projektangebot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/peakcare-peak-care/ai-readiness-call-peak-care-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold px-8 py-4 rounded-xl transition-colors"
            >
              AI Readiness Call buchen →
            </a>
            <Link to="/assessment" className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-colors">
              5-Minuten-Assessment
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
