import React from 'react'

export default function ProgressBar({done}) {
  const pct = Math.round(done)
  return (
    <div className="w-full">
      <div className="text-sm mb-1">Progress: {pct}%</div>
      <div className="w-full bg-slate-200 rounded h-4">
        <div className="h-4 rounded bg-blue-500" style={{width: pct + '%'}}></div>
      </div>
    </div>
  )
}
