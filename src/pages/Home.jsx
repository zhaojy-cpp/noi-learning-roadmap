import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProgressBar from '../components/ProgressBar'
import LevelCard from '../components/LevelCard'
import syllabus from '../data/syllabus.json'
import { LanguageContext } from '../context/LanguageContext'

export default function Home(){
  const {lang} = useContext(LanguageContext)
  const levels = syllabus.levels || []
  const [progress, setProgress] = useState(0)

  useEffect(()=>{
    // calc progress from localStorage
    const total = levels.reduce((s,l)=>s + (l.points ? l.points.length : 0), 0)
    const doneKeys = JSON.parse(localStorage.getItem('noi_done')||'{}')
    const doneCount = Object.keys(doneKeys).length
    const pct = total === 0 ? 0 : (doneCount/total)*100
    setProgress(pct)
  }, [lang])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-1">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">NOI学习路线图</h1>
          <h2 className="text-xl text-slate-600">NOI Learning Roadmap</h2>
          <p className="mt-2 text-sm text-slate-500">Step-by-step learning roadmap for NOI preparation.</p>
        </header>

        <section className="mb-6">
          <ProgressBar done={progress} />
          <div className="mt-4">
            <button onClick={()=>{ window.location.href = '#levels' }} className="px-4 py-2 bg-blue-600 text-white rounded">
              {lang==='zh' ? '开始学习' : 'Start Learning'}
            </button>
          </div>
        </section>

        <section id="levels" className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {levels.map(l=>(
            <div key={l.level}>
              <LevelCard level={l.level} title={lang==='zh' ? l.title_zh : l.title_en} />
              <div className="mt-2">
                { (l.points||[]).map(p=>(
                  <div key={p.id} className="flex items-start justify-between border p-2 mt-2 rounded">
                    <div>
                      <div className="font-medium">{lang==='zh' ? p.title_zh : p.title_en}</div>
                      <div className="text-xs text-slate-500">{lang==='zh' ? p.description_zh : p.description_en}</div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <a href="#" onClick={(e)=>{e.preventDefault(); alert('Detail page not implemented in V1 demo.')}} className="text-sm text-blue-600">Detail</a>
                      <label className="text-sm">
                        <input type="checkbox" onChange={(ev)=> {
                          const done = JSON.parse(localStorage.getItem('noi_done')||'{}')
                          if(ev.target.checked) done[p.id]=true; else delete done[p.id]
                          localStorage.setItem('noi_done', JSON.stringify(done))
                          const total = levels.reduce((s,l)=>s + (l.points ? l.points.length : 0), 0)
                          const doneCount = Object.keys(done).length
                          const pct = total === 0 ? 0 : (doneCount/total)*100
                          setProgress(pct)
                        }} />
                        <span className="ml-2 text-slate-600">已学习</span>
                      </label>
                    </div>
                  </div>
                )) }
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}
