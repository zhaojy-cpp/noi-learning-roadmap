import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

export default function Navbar(){
  const {lang, setLang} = useContext(LanguageContext)
  return (
    <nav className="bg-white border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-semibold">NOI学习路线图</div>
        <div className="flex items-center space-x-3">
          <button onClick={()=>setLang(lang==='zh' ? 'en' : 'zh')} className="px-3 py-1 border rounded">
            {lang === 'zh' ? 'English' : '中文'}
          </button>
          <a href="https://github.com/zhaojy-cpp/noi-learning-roadmap" target="_blank" rel="noreferrer" className="text-sm">GitHub</a>
        </div>
      </div>
    </nav>
  )
}
