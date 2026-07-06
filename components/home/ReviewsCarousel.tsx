'use client'

import { useRef } from 'react'

export type ReviewItem = { name: string; text: string }
export type FeaturedItem = { quote: string; author: string; role: string; avatar: string }

const STARS = '★★★★★'
const SOURCE_LINE = 'Trustindex verifies that the original source of the review is Google.'

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('')
}

export default function ReviewsCarousel({
  variant,
  items,
}: {
  variant: 'reviews' | 'featured'
  items: ReviewItem[] | FeaturedItem[]
}) {
  const trackRef = useRef<HTMLUListElement>(null)

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('[data-card]')
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollBy({ left: dir * step, behavior: smooth ? 'smooth' : 'auto' })
  }

  return (
    <div className="lm-carousel-wrap">
      <button className="lm-carousel-arrow lm-carousel-arrow--prev" aria-label="Previous reviews" onClick={() => scrollByCard(-1)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
      </button>

      <ul className="lm-carousel" ref={trackRef}>
        {variant === 'reviews'
          ? (items as ReviewItem[]).map((r, i) => (
              <li key={i} data-card className="lm-carousel-cell">
                <article className="ilm-tst">
                  <div className="ilm-tst-stars" aria-label="5 out of 5 stars">{STARS}</div>
                  <p className="lm-review-text">{r.text}</p>
                  <div className="ilm-tst-by">
                    <div className="ilm-tst-avatar" aria-hidden="true">{initials(r.name)}</div>
                    <div>
                      <div className="ilm-tst-name">{r.name}</div>
                      <div className="ilm-tst-role">{SOURCE_LINE}</div>
                    </div>
                  </div>
                </article>
              </li>
            ))
          : (items as FeaturedItem[]).map((t, i) => (
              <li key={i} data-card className="lm-carousel-cell">
                <article className="ilm-tst lm-tst--center">
                  <div className="ilm-tst-stars" aria-label="5 out of 5 stars">{STARS}</div>
                  <blockquote className="lm-tst-quote">{t.quote}</blockquote>
                  <div className="ilm-tst-by">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.avatar} alt="" loading="lazy" />
                    <div>
                      <cite className="ilm-tst-name">{t.author}</cite>
                      <div className="ilm-tst-role">{t.role}</div>
                    </div>
                  </div>
                </article>
              </li>
            ))}
      </ul>

      <button className="lm-carousel-arrow lm-carousel-arrow--next" aria-label="More reviews" onClick={() => scrollByCard(1)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
      </button>
    </div>
  )
}
