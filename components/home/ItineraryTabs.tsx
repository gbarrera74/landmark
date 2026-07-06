'use client'

import { useRef, useState } from 'react'

type Tab = { id: string; label: string; content: React.ReactNode }

export default function ItineraryTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0]?.id)
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([])

  const onKey = (e: React.KeyboardEvent, i: number) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    e.preventDefault()
    const next = e.key === 'ArrowRight' ? (i + 1) % tabs.length : (i - 1 + tabs.length) % tabs.length
    setActive(tabs[next].id)
    btnRefs.current[next]?.focus()
  }

  return (
    <div className="lm-tabs-wrap">
      <div className="lm-tabs" role="tablist" aria-label="Itinerary details">
        {tabs.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => { btnRefs.current[i] = el }}
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={active === t.id}
            aria-controls={`panel-${t.id}`}
            tabIndex={active === t.id ? 0 : -1}
            className={`lm-tab${active === t.id ? ' is-active' : ''}`}
            onClick={() => setActive(t.id)}
            onKeyDown={(e) => onKey(e, i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map((t) => (
        <div
          key={t.id}
          role="tabpanel"
          id={`panel-${t.id}`}
          aria-labelledby={`tab-${t.id}`}
          hidden={active !== t.id}
          className="lm-tabpanel"
        >
          {t.content}
        </div>
      ))}
    </div>
  )
}
