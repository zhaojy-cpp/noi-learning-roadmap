import React from 'react'

export default function LevelCard({level, title}) {
  return (
    <div className="border rounded p-4">
      <div className="text-lg font-semibold">Level {level} - {title}</div>
    </div>
  )
}
