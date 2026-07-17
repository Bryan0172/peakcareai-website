import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

// ─── Icons ────────────────────────────────────────────────────────────────────

const IconCapture = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>
)
const IconStructure = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h10M4 18h6" />
  </svg>
)
const IconDraft = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
)
const IconHandover = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
  </svg>
)
const IconFollowup = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)
const IconReview = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

// ─── Data ─────────────────────────────────────────────────────────────────────

const CALENDLY = 'https://calendly.com/peakcare-peak-care/ai-readiness-call-peak-care-ai'

const PROBLEMS = [
  { icon: '📩', text: 'Group and corporate inquiries arrive without the information needed to prepare a proper offer.' },
  { icon: '⏱️', text: 'Reservations and sales teams spend disproportionate time on first-response drafts that repeat the same logic every time.' },
  { icon: '🔄', text: 'Offers go out in different formats, tones and levels of detail depending on who responds.' },
  { icon: '📉', text: 'Follow-ups fall through when inquiries are not tracked or handed over consistently.' },
  { icon: '❓', text: 'Missing information is discovered late — after the first response has already been sent.' },
  { icon: '🕐', text: 'Inquiries received outside office hours wait until the next morning with no interim acknowledgement.' },
]

const WHO_FOR = [
  'Independent hotels with active group, corporate or event business',
  'Boutique hotels handling individual guest service proposals',
  'Small hotel groups where sales and reservations share inboxes',
  'Hotel owners and GMs who review offers before they go out',
  'Front office, reservations and sales teams handling recurring inquiry types',
  'Hotels that want to improve response time without adding headcount',
]

const WHAT_IT_DOES = [
  {
    number: '01',
    Icon: IconCapture,
    title: 'Captures inquiry context',
    text: 'Structures the incoming request: type, size, dates, budget signals, special requirements — in a consistent format every time.',
  },
  {
    number: '02',
    Icon: IconStructure,
    title: 'Identifies missing information',
    text: 'Flags what is needed before an offer can be prepared — so your team asks the right questions in the first response, not the second.',
  },
  {
    number: '03',
    Icon: IconDraft,
    title: 'Prepares structured response drafts',
    text: 'Generates a first-draft response in your hotel\'s tone and format. The human team reviews and approves before anything goes out.',
  },
  {
    number: '04',
    Icon: IconHandover,
    title: 'Organises offer logic and internal handover',
    text: 'Prepares the relevant context — rate logic, availability, package options, special conditions — for the team member who takes it from there.',
  },
  {
    number: '05',
    Icon: IconFollowup,
    title: 'Structures follow-up',
    text: 'Creates follow-up prompts and reminder logic so open inquiries do not fall through between shifts or team members.',
  },
  {
    number: '06',
    Icon: IconReview,
    title: 'Human team remains in control',
    text: 'No offer is sent automatically. Every draft goes to a designated team member for review and approval. The AI prepares. The team decides.',
  },
]

const WORKFLOWS = [
  {
    type: 'Group Booking Inquiry',
    scenario: '25 rooms · 3 nights · corporate travel manager · September',
    before: 'Inquiry arrives at 20:47. First response the next morning — 11+ hours later. Missing: catering requirements, rooming list format, billing instructions.',
    after: 'Structured intake at 20:48. Draft with correct room block, breakfast options, meeting room availability and deposit conditions ready for team approval at 08:00. Response out by 08:20.',
    tags: ['Reservations', 'Sales', 'Groups'],
  },
  {
    type: 'Corporate Account Request',
    scenario: 'Preferred rate · 80+ nights/year · Vienna-based consultancy · flexible cancellation required',
    before: 'Sales manager handles it between other tasks. Offer goes out three days later. No follow-up when the client does not respond.',
    after: 'Inquiry classified as high-value at intake. Draft corporate rate proposal with flex conditions, breakfast terms and loyalty handling ready within the hour. Follow-up reminder set for day 4.',
    tags: ['Sales', 'Corporate', 'Revenue'],
  },
  {
    type: 'Event & Seminar Package',
    scenario: '60 pax · 2-day seminar · full board · AV equipment · October',
    before: 'Event coordinator spends 90 minutes building the offer from scratch. Package rates pulled from memory. Catering briefing added as an afterthought.',
    after: 'Intake captures: pax count, setup preference, F&B requirement, AV checklist, arrival/departure logistics. Draft includes room proposal, delegate day rate, catering options and room block. Coordinator reviews in 10 minutes.',
    tags: ['Events', 'F&B', 'Sales'],
  },
  {
    type: 'Long-Stay & Wellness Package',
    scenario: 'Individual guest · 3-week stay · spa access · dietary requirements · special room preference',
    before: 'Front office handles it ad hoc. No consistent structure. Rate calculation varies by who picks it up. Spa is informed separately, sometimes late.',
    after: 'Intake captures all relevant details. Draft includes: rate proposal, spa package options, dietary flag to F&B, room preference note. Guest relations receives full context. One-click review and send.',
    tags: ['Front Office', 'Guest Relations', 'Spa'],
  },
]

const DELIVERABLES = [
  { title: 'Workflow review', text: 'Map of your recurring inquiry types, current response process and where time and consistency are lost.' },
  { title: 'Inquiry structure framework', text: 'Standardised intake logic for each inquiry type — what information to capture, in what order.' },
  { title: 'Prompt and assistant logic', text: 'The AI workflow configured for your hotel: tone, brand standards, relevant offer categories and decision rules.' },
  { title: 'Offer-response framework', text: 'Draft templates for each inquiry type — in your tone, with your hotel\'s standard conditions and offer logic.' },
  { title: 'Follow-up structure', text: 'Defined follow-up timing, reminders and handover logic so open inquiries are tracked until closed.' },
  { title: 'Pilot implementation plan', text: '30-day rollout structure: setup week, live operation, mid-pilot review and KPI assessment.' },
]

const WHY_PEAKCARE = [
  {
    title: 'Hotel operations background — not generic tech consulting',
    text: 'We understand how reservations, sales and guest relations actually work in a hotel. The AI Offer Assistant is built on that understanding — not on generic automation templates.',
  },
  {
    title: 'Operations first. AI follows.',
    text: 'We map your inquiry workflow before configuring any AI. The assistant adapts to your operation — not the other way around.',
  },
  {
    title: 'Shadow AI awareness built in',
    text: 'We design the workflow so your team uses the assistant within a clear structure — no parallel individual use, no uncontrolled AI output entering guest communication.',
  },
  {
    title: 'EU AI Act and AI literacy context',
    text: 'The AI Offer Assistant is designed with EU AI Act Article 4 requirements in mind: your team understands what the AI does and where human judgement applies.',
  },
  {
    title: 'No generic agency approach',
    text: 'One clear workflow. One hotel. Configured specifically for your inquiry types, your tone and your team — not deployed off a standard template.',
  },
]

const FAQS = [
  {
    q: 'Does the AI Offer Assistant create final hotel offers automatically?',
    a: 'No. The assistant prepares a structured draft — including context, offer logic and a formatted response — and routes it to the designated team member for review and approval. Nothing goes to the guest without human sign-off.',
  },
  {
    q: 'Can it support group bookings and corporate inquiries?',
    a: 'Yes. Group bookings, corporate account requests, event and seminar packages, long-stay inquiries and individual guest service proposals are all within scope. The assistant is configured for the specific inquiry types your hotel receives most often.',
  },
  {
    q: 'Does it replace hotel staff?',
    a: 'No. The assistant handles intake structure, information capture and first-draft preparation. The reservation manager, sales team or guest relations contact reviews, adjusts and sends every response. The human team remains in control of all guest communication.',
  },
  {
    q: 'Can we start with just one workflow?',
    a: 'Yes — and that is the recommended approach. The pilot focuses on one inquiry type (for example, group bookings), validates the workflow in your operation and produces measurable results before expanding to other categories.',
  },
  {
    q: 'How much work is needed from our team during the pilot?',
    a: 'Roughly two to three hours in setup week: a structured intake session, review of draft templates and a briefing for the team members who will use the workflow. During live operation: one designated reviewer per inquiry type. A mid-pilot review at week two. A 45-minute close-out session at week four.',
  },
  {
    q: 'What happens after the pilot?',
    a: 'At the end of the 30 days, you receive a KPI report: response time improvement, draft acceptance rate and team time saved. Based on those results, you decide whether to expand to additional inquiry types, move to full operation or stop. No automatic contract, no lock-in.',
  },
  {
    q: 'Does this connect to our PMS or CRM?',
    a: 'Not required for the pilot. The workflow operates within your existing email infrastructure and team process. PMS or CRM integration is evaluated as a follow-on step if the pilot confirms value.',
  },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-slate-200 last:border-0 cursor-pointer" onClick={() => setOpen(!open)}>
      <div className="flex items-start justify-between gap-4 py-5">
        <span className="font-semibold text-navy-900 text-base leading-snug pr-4">{q}</span>
        <svg
          className={`w-5 h-5 text-gold-500 shrink-0 mt-0.5 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </div>
      {open && <p className="text-slate-500 text-sm leading-relaxed pb-5 -mt-2">{a}</p>}
    </div>
  )
}

function WorkflowCard({ type, scenario, before, after, tags }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="px-6 pt-6 pb-4">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map(tag => (
            <span key={tag} className="text-xs font-semibold text-navy-700 bg-navy-900/5 border border-navy-900/10 px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-bold text-navy-900 text-lg mb-1">{type}</h3>
        <p className="text-slate-500 text-sm italic mb-4">{scenario}</p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm font-semibold text-gold-600 hover:text-gold-700 flex items-center gap-1.5 transition-colors"
        >
          {expanded ? 'Hide workflow' : 'See how it works'}
          <svg className={`w-4 h-4 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      {expanded && (
        <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-50 border border-red-100 rounded-xl p-4">
            <div className="text-xs font-bold text-red-600 uppercase tracking-widest mb-2">Without the assistant</div>
            <p className="text-slate-600 text-sm leading-relaxed">{before}</p>
          </div>
          <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
            <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2">With the assistant</div>
            <p className="text-slate-600 text-sm leading-relaxed">{after}</p>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Schema ───────────────────────────────────────────────────────────────────

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'AI Offer Assistant for Hotels',
      provider: { '@type': 'Organization', name: 'Peak Care AI', url: 'https://peakcareai.com' },
      description: 'A structured AI-supported workflow that helps hotel reservations, sales and guest relations teams handle group inquiries, corporate requests, event packages and special guest offers faster and more consistently — while keeping the human team in control.',
      areaServed: ['DE', 'AT', 'CH'],
      audience: { '@type': 'Audience', audienceType: 'Hotel General Managers, Hotel Owners, Reservations Managers, Sales Teams, Front Office Managers' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQS.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AiOfferAssistant() {
  return (
    <>
      <SEO
        title="AI Offer Assistant for Hotels — Group, Corporate & Event Inquiries | Peak Care AI"
        description="Peak Care AI's AI Offer Assistant helps hotel reservations and sales teams handle group bookings, corporate requests and event inquiries faster and more consistently. 30-day pilot · Human team in control."
        jsonLd={[SCHEMA]}
      />

      {/* ─── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[78vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(105deg, rgba(7,22,40,0.97) 0%, rgba(11,33,55,0.91) 55%, rgba(11,33,55,0.72) 100%),
            url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=85&w=1920&auto=format&fit=crop')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(196,152,10,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(196,152,10,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="container-main relative py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-gold-400 text-xs font-semibold tracking-[0.15em] uppercase">
                AI Offer Assistant · Peak Care AI
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6">
              Every inquiry answered.<br />
              <span className="text-gold-400">In minutes, not hours.</span>
            </h1>

            <p className="text-xl text-white/65 leading-relaxed mb-5 max-w-2xl font-light">
              Hotels lose time and revenue when group requests, corporate inquiries and event packages are handled manually, inconsistently and too slowly. The AI Offer Assistant structures every inquiry, prepares the first draft and keeps your team in control — without adding headcount.
            </p>

            <p className="text-sm text-white/40 mb-10 flex flex-wrap gap-x-4 gap-y-1.5">
              {['Operations first. AI follows.', 'Human team in control', '30-day pilot', 'No annual contract'].map(tag => (
                <span key={tag} className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-gold-400/60" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {tag}
                </span>
              ))}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold px-8 py-4 rounded-xl transition-colors duration-200 text-base shadow-lg shadow-gold-400/20"
              >
                Book a Pilot Call
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 hover:border-white/30 transition-colors duration-200 text-base backdrop-blur-sm"
              >
                Request an AI Workflow Review →
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
      </section>

      {/* ─── PROBLEM ───────────────────────────────────────────────────────── */}
      <section className="section-light">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">The Problem</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-5 leading-tight">
              Manual inquiry handling costs more than time.
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
              For most independent hotels, every group booking, corporate request or event inquiry is handled differently — depending on who picks it up, when it arrives and how busy the team is that day. The result is slow responses, inconsistent offers and follow-ups that never happen.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PROBLEMS.map(({ icon, text }) => (
                <div key={text} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
                  <span className="text-lg shrink-0 mt-0.5">{icon}</span>
                  <span className="text-slate-700 text-sm leading-relaxed">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHO IT IS FOR ─────────────────────────────────────────────────── */}
      <section className="section-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">Who It Is For</p>
              <h2 className="text-3xl font-bold text-navy-900 mb-5 leading-tight">
                Built for hotels that handle recurring commercial inquiries.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                The AI Offer Assistant is suited to hotels where group, corporate, event and individual guest requests arrive regularly — and where response quality and speed directly affect revenue.
              </p>
              <div className="space-y-2.5">
                {WHO_FOR.map(item => (
                  <div key={item} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-100">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">What the pilot covers</div>
              <div className="space-y-3 mb-7">
                {[
                  { label: 'Inquiry types', value: 'Up to 2 defined per pilot' },
                  { label: 'Duration', value: '30 days' },
                  { label: 'Setup', value: '1 structured session' },
                  { label: 'Review points', value: '2 (mid-pilot + close-out)' },
                  { label: 'KPI report', value: 'Included' },
                  { label: 'Contract required', value: 'No annual contract' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between gap-4 py-2 border-b border-slate-200 last:border-0">
                    <span className="text-slate-500 text-sm">{label}</span>
                    <span className="font-semibold text-navy-900 text-sm text-right">{value}</span>
                  </div>
                ))}
              </div>
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold px-6 py-3.5 rounded-xl transition-colors text-sm shadow-md shadow-gold-400/20"
              >
                Book a Pilot Call
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT IT DOES ──────────────────────────────────────────────────── */}
      <section className="section-light">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="section-heading">What the AI Offer Assistant does.</h2>
            <p className="section-subheading">Six steps — from inquiry arrival to team-approved response. Every step supports your team. No step replaces them.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHAT_IT_DOES.map(({ number, Icon, title, text }) => (
              <div key={number} className="card p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center shrink-0">
                    <Icon />
                  </div>
                  <span className="text-xs font-bold text-slate-400 tracking-widest">{number}</span>
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WORKFLOWS ─────────────────────────────────────────────────────── */}
      <section className="section-dark">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">Example Workflows</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Four inquiry types. See how it changes.</h2>
            <p className="text-white/55 text-lg max-w-2xl mx-auto">Click any scenario to see the before/after workflow for your team.</p>
          </div>
          <div className="space-y-4 max-w-4xl mx-auto">
            {WORKFLOWS.map((w) => (
              <WorkflowCard key={w.type} {...w} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── DELIVERABLES ──────────────────────────────────────────────────── */}
      <section id="scope" className="section-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">What You Receive</p>
            <h2 className="section-heading">Six structured outputs.</h2>
            <p className="section-subheading">The pilot delivers a configured workflow — not a report. Everything your team needs to operate the AI Offer Assistant from day one.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DELIVERABLES.map(({ title, text }, i) => (
              <div key={title} className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-gold-400/10 border border-gold-400/30 flex items-center justify-center">
                    <span className="text-gold-600 font-bold text-xs">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="font-bold text-navy-900 text-sm">{title}</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PILOT OFFER ───────────────────────────────────────────────────── */}
      <section className="section-light">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-navy-900 px-8 py-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 bg-gold-400/15 text-gold-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Pilot Offer
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white">
                  AI Offer Assistant for Hotels.<br />
                  <span className="text-gold-400">30-day pilot. One defined workflow.</span>
                </h2>
              </div>
              <div className="px-8 py-7">
                <p className="text-slate-600 leading-relaxed mb-6">
                  The pilot validates the AI Offer Assistant in your hotel — with a single, clearly defined inquiry type. You see measurable results within the first two weeks. If it works, you expand. If not, you stop. No lock-in.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                  <div>
                    <div className="text-slate-400 text-xs uppercase tracking-wide font-semibold mb-1">Pilot investment</div>
                    <div className="text-3xl font-bold text-navy-900">On request</div>
                    <div className="text-slate-500 text-xs mt-1">Scoped to your hotel; credited if a larger implementation follows.</div>
                  </div>
                  <div className="space-y-2">
                    {[
                      '30-day structured pilot',
                      'One defined inquiry workflow',
                      'Setup session + 2 review calls included',
                      'KPI report at close-out',
                      'No annual contract required',
                    ].map(item => (
                      <div key={item} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-slate-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={CALENDLY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold px-8 py-4 rounded-xl transition-colors text-base shadow-md shadow-gold-400/20"
                  >
                    Book a Pilot Call
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <Link to="/contact" className="btn-secondary inline-flex items-center justify-center text-base px-8 py-4">
                    Request an AI Workflow Review →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY PEAK CARE AI ──────────────────────────────────────────────── */}
      <section className="section-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">Why Peak Care AI</p>
              <h2 className="text-3xl font-bold text-navy-900 mb-5 leading-tight">
                Built on hospitality operations. Not on generic automation.
              </h2>
              <p className="text-slate-600 leading-relaxed">
                The difference between a generic AI workflow tool and the AI Offer Assistant is operational understanding. We know how reservations, sales and guest relations work in a hotel — before we configure any AI.
              </p>
            </div>
            <div className="lg:col-span-3 space-y-4">
              {WHY_PEAKCARE.map(({ title, text }) => (
                <div key={title} className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                  <h3 className="font-bold text-navy-900 mb-2 text-sm">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="section-light">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="section-heading">Common questions.</h2>
          </div>
          <div className="max-w-3xl mx-auto divide-y divide-slate-200">
            {FAQS.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(7,22,40,0.97) 0%, rgba(11,33,55,0.94) 100%),
            url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1920&auto=format&fit=crop')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container-main text-center relative">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-4">Get Started</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            30-day pilot.<br />
            <span className="text-gold-400">One workflow. Measurable results.</span>
          </h2>
          <p className="text-white/55 text-lg mb-4 max-w-xl mx-auto leading-relaxed">
            A 15-minute call is enough to determine whether the AI Offer Assistant fits your hotel and which inquiry type to start with.
          </p>
          <p className="text-white/35 text-sm mb-10">No pitch deck. No commitment. A practical conversation about your operation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold px-10 py-4 rounded-xl transition-colors text-base shadow-lg shadow-gold-400/20"
            >
              Book a Pilot Call
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-colors text-base"
            >
              Request an AI Workflow Review →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
