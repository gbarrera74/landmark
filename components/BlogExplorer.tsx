'use client'

/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import Link from 'next/link'
import type { TaggedCard, FacetTag } from '@/lib/blogFacets'

const STEP = 15

// Inlined (client-safe) so this component never imports lib/blog, which pulls in `fs`.
function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  } catch {
    return ''
  }
}

const ArrowR = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
)

function Card({ p, hidden }: { p: TaggedCard; hidden: boolean }) {
  return (
    <Link href={`/blog/${p.slug}/`} className={`lm-blog-card${hidden ? ' is-hidden' : ''}`} aria-hidden={hidden || undefined} tabIndex={hidden ? -1 : undefined}>
      <div className="lm-blog-card-img">
        <img src={p.hero || '/images/landmark/dc-hero.jpg'} alt="" loading="lazy" />
        {p.categories[0] && <span className="lm-blog-card-cat">{p.categories[0]}</span>}
      </div>
      <div className="lm-blog-card-body">
        <div className="lm-blog-card-meta"><time dateTime={p.date}>{formatDate(p.date)}</time><span aria-hidden="true">·</span><span>{p.readingMinutes} min</span></div>
        <h3>{p.title}</h3>
        <p>{p.excerpt}</p>
        <span className="ilm-post-more">Read More {ArrowR}</span>
      </div>
    </Link>
  )
}

function Chips({ label, facets, active, total, onPick }: { label: string; facets: (FacetTag & { count: number })[]; active: string | null; total: number; onPick: (slug: string | null) => void }) {
  return (
    <div className="lm-filter-row">
      <span className="lm-filter-label">{label}</span>
      <div className="lm-filter-chips">
        <button type="button" className={`lm-chip${active === null ? ' is-active' : ''}`} onClick={() => onPick(null)} aria-pressed={active === null}>
          All <span className="lm-chip-count">{total}</span>
        </button>
        {facets.map((f) => {
          const isActive = active === f.slug
          const empty = f.count === 0 && !isActive
          return (
            <button
              key={f.slug}
              type="button"
              className={`lm-chip${isActive ? ' is-active' : ''}${empty ? ' is-empty' : ''}`}
              onClick={() => onPick(f.slug)}
              aria-pressed={isActive}
              disabled={empty}
            >
              {f.name} <span className="lm-chip-count">{f.count}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default function BlogExplorer({ cards, destinations, types }: { cards: TaggedCard[]; destinations: (FacetTag & { count: number })[]; types: (FacetTag & { count: number })[] }) {
  const [dest, setDest] = useState<string | null>(null)
  const [type, setType] = useState<string | null>(null)
  const [shown, setShown] = useState(STEP)

  const pickDest = (s: string | null) => { setDest(s); setShown(STEP) }
  const pickType = (s: string | null) => { setType(s); setShown(STEP) }

  // Facet counts reflect the OTHER active filter, so the numbers on the buttons
  // show the true size of each combination as filters stack (and empty ones dim out).
  const byType = cards.filter((c) => !type || c.type.includes(type))
  const byDest = cards.filter((c) => !dest || c.dest.includes(dest))
  const destFacets = destinations.map((f) => ({ ...f, count: byType.filter((c) => c.dest.includes(f.slug)).length }))
  const typeFacets = types.map((f) => ({ ...f, count: byDest.filter((c) => c.type.includes(f.slug)).length }))

  const matched = cards.filter((c) => (!dest || c.dest.includes(dest)) && (!type || c.type.includes(type)))
  const visible = new Set(matched.slice(0, shown).map((c) => c.slug))

  return (
    <div className="lm-blog-explorer">
      <Chips label="Destination" facets={destFacets} active={dest} total={byType.length} onPick={pickDest} />
      <Chips label="Trip type" facets={typeFacets} active={type} total={byDest.length} onPick={pickType} />

      <p className="lm-blog-count" aria-live="polite">
        Showing {Math.min(shown, matched.length)} of {matched.length} article{matched.length === 1 ? '' : 's'}
        {(dest || type) && <> · <button type="button" className="lm-filter-clear" onClick={() => { pickDest(null); setType(null) }}>Clear filters</button></>}
      </p>

      {matched.length === 0 ? (
        <p className="lm-blog-empty">No articles match that combination yet. Try clearing a filter.</p>
      ) : (
        <div className="lm-blog-grid-cards">
          {/* All cards render for crawlability; non-matching/over-limit are visually hidden. */}
          {cards.map((c) => <Card key={c.slug} p={c} hidden={!visible.has(c.slug)} />)}
        </div>
      )}

      {matched.length > shown && (
        <div className="ile-center lm-after-grid">
          <button type="button" className="ile-btn ile-btn--primary" onClick={() => setShown((n) => n + STEP)}>
            Load more articles
          </button>
        </div>
      )}
    </div>
  )
}
