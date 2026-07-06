'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'

type Slide = {
  img: string
  title: string
  sub: string
  cta: string
  href: string
}

/* Global-forward hero: Landmark's expansion beyond U.S. field trips into
   international educational journeys, with the U.S. business still featured. */
const SLIDES: Slide[] = [
  {
    img: '/images/landmark/intl-italy.webp',
    title: 'Educational Travel, Built for You.',
    sub: 'Safe, custom student journeys — across the U.S., Europe, Asia & beyond.',
    cta: 'Start Planning Now!',
    href: '/get-a-quote/',
  },
  {
    img: '/images/landmark/intl-europe.webp',
    title: 'The World Is Their Classroom.',
    sub: 'Now journeying beyond the U.S. — Italy, France, Ireland, Japan, South Korea & more.',
    cta: 'Explore Destinations',
    href: '/destinations/',
  },
  {
    img: '/images/landmark/hero-dc-mlk.jpg',
    title: 'Where History Comes Alive.',
    sub: 'From Washington, D.C. to Tokyo, we design every detail around your students.',
    cta: 'Plan Your Trip',
    href: '/get-a-quote/',
  },
]

const INTERVAL = 6500

export default function HomeHeroSlider() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduced = useRef(false)

  const go = useCallback((i: number) => setActive((i + SLIDES.length) % SLIDES.length), [])

  useEffect(() => {
    reduced.current =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  useEffect(() => {
    if (paused || reduced.current || SLIDES.length < 2) return
    const t = setInterval(() => setActive((a) => (a + 1) % SLIDES.length), INTERVAL)
    return () => clearInterval(t)
  }, [paused, active])

  return (
    <section
      className="lm-hero"
      aria-roledescription="carousel"
      aria-label="Landmark Educational Tours"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className={`lm-hero-slide${i === active ? ' is-active' : ''}`}
          role="group"
          aria-roledescription="slide"
          aria-label={`${i + 1} of ${SLIDES.length}`}
          aria-hidden={i !== active}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="ilm-hero-img"
            src={s.img}
            alt=""
            aria-hidden="true"
            loading={i === 0 ? 'eager' : 'lazy'}
            fetchPriority={i === 0 ? 'high' : 'auto'}
          />
          <div className="ilm-hero-inner">
            <div className="ilm-hero-content">
              <h1>{s.title}</h1>
              <p className="ilm-hero-sub">{s.sub}</p>
              <div className="ilm-hero-actions">
                <Link href={s.href} className="ile-btn ile-btn--primary" tabIndex={i === active ? 0 : -1}>
                  {s.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button className="lm-hero-arrow lm-hero-arrow--prev" aria-label="Previous slide" onClick={() => go(active - 1)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
      </button>
      <button className="lm-hero-arrow lm-hero-arrow--next" aria-label="Next slide" onClick={() => go(active + 1)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
      </button>

      <div className="lm-hero-dots" role="tablist" aria-label="Choose slide">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === active}
            aria-label={`Go to slide ${i + 1}`}
            className={`lm-hero-dot${i === active ? ' is-active' : ''}`}
            onClick={() => go(i)}
          />
        ))}
      </div>
    </section>
  )
}
