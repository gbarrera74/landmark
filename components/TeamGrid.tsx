/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'

export type Member = { name: string; title: string; bio: string; photo?: string }

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

/** Team members as cards (avatar + name + title). Bio is hidden until the card
 *  is clicked. Uses an initials avatar until a real headshot (photo) is supplied. */
export default function TeamGrid({ members }: { members: Member[] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="lm-team-grid">
      {members.map((m, i) => {
        const isOpen = open === i
        return (
          <div className={`lm-team-card${isOpen ? ' is-open' : ''}`} key={m.name}>
            <button
              className="lm-team-head"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="lm-team-avatar" aria-hidden="true">
                {m.photo ? <img src={m.photo} alt="" loading="lazy" /> : initials(m.name)}
              </span>
              <span className="lm-team-meta">
                <strong>{m.name}</strong>
                <span>{m.title}</span>
              </span>
              <svg className="lm-team-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div className="lm-team-bio">
              <div className="lm-team-bio-inner">
                <p>{m.bio}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
