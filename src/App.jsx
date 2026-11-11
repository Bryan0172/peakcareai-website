import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { LanguageProvider, useLang } from './context/LanguageContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import HospitalityFocus from './pages/HospitalityFocus'
import CorporateAI from './pages/CorporateAI'
import About from './pages/About'
import Contact from './pages/Contact'
import { Privacy, Imprint } from './pages/Legal'
import Webinar from './pages/Webinar'
import Assessment from './pages/Assessment'
import BlogEuAiAct from './pages/BlogEuAiAct'
import BlogShadowAIHotels from './pages/BlogShadowAIHotels'
import BlogEuAiActChecklist from './pages/BlogEuAiActChecklist'
import BlogHotelAiVendorQuestions from './pages/BlogHotelAiVendorQuestions'
import BlogAiActProviderOrDeployer from './pages/BlogAiActProviderOrDeployer'
import HotelAIReadinessCheck from './pages/HotelAIReadinessCheck'
import AiOfferAssistant from './pages/AiOfferAssistant'
import BlogIndex from './pages/BlogIndex'
import BlogIndustryBriefing20261019 from './pages/BlogIndustryBriefing20261019'
import BlogIndustryBriefing20261026 from './pages/BlogIndustryBriefing20261026'
import BlogIndustryBriefing20261102 from './pages/BlogIndustryBriefing20261102'
import BlogIndustryBriefing20261109 from './pages/BlogIndustryBriefing20261109'

// Sprachhinweis (PKAI-04, 01.11.2026): diese Seiten gibt es nur auf Englisch; im deutschen Besuchspfad vor dem Lesen kenntlich machen.
const EN_ONLY_ROUTES = ['/webinar', '/hotel-ai-readiness-check', '/assessment', '/ai-offer-assistant-hotels']
function EnglishOnlyNotice() {
  const { lang } = useLang() || {}
  const { pathname } = useLocation()
  const p = pathname.replace(/\/+$/, '') || '/'
  if (lang !== 'de' || !EN_ONLY_ROUTES.includes(p)) return null
  return (
    <div className="bg-amber-50 border-b border-amber-200 text-amber-900 text-sm text-center px-4 py-2">
      Diese Seite ist derzeit nur auf Englisch verfügbar.
    </div>
  )
}


export default function App() {
  return (
      <LanguageProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <EnglishOnlyNotice />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/hospitality" element={<HospitalityFocus />} />
              <Route path="/corporate-ai" element={<CorporateAI />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/webinar" element={<Webinar />} />
              <Route path="/assessment" element={<Assessment />} />
              <Route path="/blog" element={<BlogIndex />} />
              <Route path="/blog/eu-ai-act-hotels-2026" element={<BlogEuAiAct />} />
              <Route path="/blog/shadow-ai-hotels" element={<BlogShadowAIHotels />} />
              <Route path="/blog/eu-ai-act-hotel-checklist-2026" element={<BlogEuAiActChecklist />} />
              <Route path="/blog/hotel-ai-vendor-questions" element={<BlogHotelAiVendorQuestions />} />
              <Route path="/blog/eu-ai-act-provider-or-deployer" element={<BlogAiActProviderOrDeployer />} />
              <Route path="/blog/branchenbriefing-2026-10-19" element={<BlogIndustryBriefing20261019 lang="de" />} />
              <Route path="/blog/industry-briefing-2026-10-19" element={<BlogIndustryBriefing20261019 lang="en" />} />
              <Route path="/blog/branshov-obzor-2026-10-19" element={<BlogIndustryBriefing20261019 lang="bg" />} />
              <Route path="/blog/branchenbriefing-2026-10-26" element={<BlogIndustryBriefing20261026 lang="de" />} />
              <Route path="/blog/industry-briefing-2026-10-26" element={<BlogIndustryBriefing20261026 lang="en" />} />
              <Route path="/blog/branshov-obzor-2026-10-26" element={<BlogIndustryBriefing20261026 lang="bg" />} />
              <Route path="/blog/branchenbriefing-2026-11-02" element={<BlogIndustryBriefing20261102 lang="de" />} />
              <Route path="/blog/industry-briefing-2026-11-02" element={<BlogIndustryBriefing20261102 lang="en" />} />
              <Route path="/blog/branshov-obzor-2026-11-02" element={<BlogIndustryBriefing20261102 lang="bg" />} />
              <Route path="/blog/branchenbriefing-2026-11-09" element={<BlogIndustryBriefing20261109 lang="de" />} />
              <Route path="/blog/industry-briefing-2026-11-09" element={<BlogIndustryBriefing20261109 lang="en" />} />
              <Route path="/blog/branshov-obzor-2026-11-09" element={<BlogIndustryBriefing20261109 lang="bg" />} />
              <Route path="/hotel-ai-readiness-check" element={<HotelAIReadinessCheck />} />
              <Route path="/ai-offer-assistant-hotels" element={<AiOfferAssistant />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/imprint" element={<Imprint />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
      </LanguageProvider>
  )
}
