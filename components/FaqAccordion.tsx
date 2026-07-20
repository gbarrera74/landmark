'use client'

import { useState } from 'react'

export type Faq = { q: string; a: string }

function Plus() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}

export default function FaqAccordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="ilp-faq">
      {items.map((item, i) => (
        <div key={item.q} className={`ilp-faq-item${open === i ? ' is-open' : ''}`}>
          <h3 className="ilp-faq-h">
            <button className="ilp-faq-q" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
              {item.q}
              <Plus />
            </button>
          </h3>
          <div className="ilp-faq-a">
            <div className="ilp-faq-a-inner">{item.a}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
