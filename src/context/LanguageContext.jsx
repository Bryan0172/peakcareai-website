import { createContext, useContext, useState } from 'react'
import en from '../i18n/en'
import de from '../i18n/de'

const translations = { en, de }

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('lang')
    if (saved === 'de' || saved === 'en') return saved
    // Auto-detect browser language
    const browser = navigator.language?.slice(0, 2)
    return browser === 'de' ? 'de' : 'en'
  })

  const switchLang = (l) => {
    setLang(l)
    localStorage.setItem('lang', l)
  }

  return (
    <LanguageContext.Provider value={{ lang, switchLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
