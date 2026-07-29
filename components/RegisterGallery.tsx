'use client'

/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from 'react'

/**
 * Trip photo carousel for the per-school registration pages — shows families the
 * attractions their students will visit. Scroll-snap based (works without JS;
 * arrows just nudge the scroller), so there's no carousel library to break.
 */
export default function RegisterGallery({
  photos,
  destination,
}: {
  photos: { src: string; alt: string }[]
  destination?: string
}) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [i, setI] = useState(0)

  if (!photos.length) return null

  const scrollTo = (next: number) => {
    const clamped = Math.max(0, Math.min(photos.length - 1, next))
    setI(clamped)
    const track = trackRef.current
    if (!track) return
    const slide = track.children[clamped] as HTMLElement | undefined
    if (slide) track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: 'smooth' })
  }

  return (
    <section className="lm-reg-gallery" aria-labelledby="reg-gallery-h">
      <div className="ile-center lm-narrow">
        <span className="ile-eyebrow">Trip Highlights</span>
        <h2 id="reg-gallery-h" className="lm-h2-amber">
          {destination ? `WHAT YOU'LL SEE IN ${destination.toUpperCase()}` : "WHAT YOU'LL SEE"}
        </h2>
      </div>

      <div className="lm-reg-gallery-shell">
        <button
          type="button"
          className="lm-reg-gallery-nav prev"
          aria-label="Previous photo"
          onClick={() => scrollTo(i - 1)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6" /></svg>
        </button>

        <div className="lm-reg-gallery-track" ref={trackRef}>
          {photos.map((p) => (
            <figure className="lm-reg-slide" key={p.src}>
              <img src={p.src} alt={p.alt} loading="lazy" />
              {p.alt && <figcaption>{p.alt}</figcaption>}
            </figure>
          ))}
        </div>

        <button
          type="button"
          className="lm-reg-gallery-nav next"
          aria-label="Next photo"
          onClick={() => scrollTo(i + 1)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>
    </section>
  )
}
