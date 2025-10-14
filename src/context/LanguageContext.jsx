import React, { createContext, useState } from 'react'

export const LanguageContext = createContext()

export function LanguageProvider({children}) {
  const [lang, setLang] = useState('zh') // 'zh' or 'en'
  return (
    <LanguageContext.Provider value={{lang, setLang}}>
      {children}
    </LanguageContext.Provider>
  )
}
