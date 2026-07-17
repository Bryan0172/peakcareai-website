import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
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
import HotelAIReadinessCheck from './pages/HotelAIReadinessCheck'
import AiOfferAssistant from './pages/AiOfferAssistant'

export default function App() {
  return (
      <LanguageProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/hospitality" element={<HospitalityFocus />} />
              <Route path="/corporate-ai" element={<CorporateAI />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/webinar" element={<Webinar />} />
              <Route path="/webinar/eu-ai-act-for-hotels" element={<Webinar />} />
              <Route path="/assessment" element={<Assessment />} />
              <Route path="/blog/eu-ai-act-hotels-2026" element={<BlogEuAiAct />} />
              <Route path="/blog/shadow-ai-hotels" element={<BlogShadowAIHotels />} />
              <Route path="/blog/eu-ai-act-hotel-checklist-2026" element={<BlogEuAiActChecklist />} />
              <Route path="/blog/hotel-ai-vendor-questions" element={<BlogHotelAiVendorQuestions />} />
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
