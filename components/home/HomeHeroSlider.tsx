'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'

type Slide = {
  img: string
  title: string
  accent: string
  sub: string
  cta: string
  href: string
  /**
   * CSS object-position for this slide's photo. The hero crops to the viewport,
   * so a single shared value cuts the subject out of some images — the MLK
   * memorial shot is 4:3 and lost the statue's head off the top edge at the
   * default `center`. Frame each photo on its own subject.
   */
  focus?: string
}

/* Global-forward hero: Landmark's expansion beyond U.S. field trips into
   international educational journeys, with the U.S. business still featured. */
const SLIDES: Slide[] = [
  {
    img: '/images/landmark/home-hero-dc-capitol-group.jpg',
    title: 'Educational Travel,',
    accent: 'Customized for You.',
    sub: 'Safe, custom student trips across the U.S., Europe, Asia, and beyond.',
    cta: 'Get a Quote',
    href: '/get-a-quote/',
    // This 4:3 photo cannot fit entirely in the hero band: the statue's head
    // (y~60) through the seated students (y~1120) needs ~1060px of a 929px
    // band. Bias hard to the top so the memorial's head is kept whole and the
    // trim comes off the pavement below the front row instead — Michaela's
    // note was specifically that MLK was cut off.
    focus: '60% 8%',
  },
  {
    img: '/images/landmark/home-hero-italy-colosseum.jpg',
    title: 'The World Is',
    accent: 'Their Classroom.',
    sub: 'Now journeying beyond the U.S.: Italy, France, Ireland, Japan, South Korea, and more.',
    cta: 'Explore Destinations',
    href: '/destinations/',
  },
  {
    img: '/images/landmark/home-hero-nyc-times-square-group.jpg',
    title: 'Where History',
    accent: 'Comes Alive.',
    sub: 'From Washington, D.C. to Tokyo, we design every detail around your students.',
    cta: 'Get a Quote',
    href: '/get-a-quote/',
  },
]

/* 5s per slide (Ben asked for 3-5s, 2026-08-12). The 0.9s crossfade eats into
   that, so ~4.1s of settled reading time — about right for the longest subhead
   and the shortest that still reads as deliberate rather than restless. */
const INTERVAL = 5000

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
          aria-label={`${s.title} ${s.accent} (${i + 1} of ${SLIDES.length})`}
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
            style={s.focus ? { objectPosition: s.focus } : undefined}
          />
          <div className="ilm-hero-inner">
            <div className="ilm-hero-content">
              <p className="lm-hero-title">{s.title} <span className="lm-hero-accent">{s.accent}</span></p>
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

      <div className="lm-hero-dots" aria-label="Choose slide">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === active ? 'true' : undefined}
            className={`lm-hero-dot${i === active ? ' is-active' : ''}`}
            onClick={() => go(i)}
          />
        ))}
      </div>

    </section>
  )
}
