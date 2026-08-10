'use client'

import { useEffect } from 'react'

/**
 * Makes `/get-a-quote/#quote-form` actually land on the form.
 *
 * A plain anchor is not enough here. The form is a HubSpot embed that renders
 * into an iframe AFTER hydration, and the iframe grows tall as it populates.
 * The browser resolves the hash immediately, so it scrolls to where the section
 * sits while the form is still an empty box -- then the form expands and pushes
 * everything down, leaving the visitor above or below where they meant to be.
 *
 * So: scroll on arrival, then keep correcting while the iframe settles, and
 * stop as soon as the visitor takes over. Never fight a user who is scrolling.
 *
 * Only runs when the hash is present, so a direct visit to /get-a-quote/ still
 * opens at the top of the page with the hero and the process explainer intact.
 */
const TARGET_ID = 'quote-form'
const HEADER_OFFSET = 90 // sticky header height
const SETTLE_MS = 2500
const TICK_MS = 150

export default function ScrollToQuoteForm() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.location.hash !== `#${TARGET_ID}`) return

    const el = document.getElementById(TARGET_ID)
    if (!el) return

    let cancelled = false
    let elapsed = 0

    // Any deliberate input from the visitor ends our involvement.
    const release = () => {
      cancelled = true
      window.removeEventListener('wheel', release)
      window.removeEventListener('touchstart', release)
      window.removeEventListener('keydown', release)
    }
    window.addEventListener('wheel', release, { passive: true, once: true })
    window.addEventListener('touchstart', release, { passive: true, once: true })
    window.addEventListener('keydown', release, { once: true })

    const align = () => {
      if (cancelled) return
      const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
      // MUST be 'instant', not 'auto'. This site sets `scroll-behavior: smooth`
      // on <html>, and 'auto' defers to that CSS value rather than overriding
      // it -- so each tick would start a fresh smooth animation, every animation
      // would cancel the last, and the page would end up barely moving.
      // 'instant' is the only value that ignores the CSS.
      if (Math.abs(window.scrollY - top) > 8) window.scrollTo({ top, behavior: 'instant' })
      elapsed += TICK_MS
      if (elapsed < SETTLE_MS) window.setTimeout(align, TICK_MS)
    }

    // Let hydration finish before the first move, otherwise the browser's own
    // hash handling and ours fight each other.
    const start = window.setTimeout(align, 0)

    return () => {
      cancelled = true
      window.clearTimeout(start)
      release()
    }
  }, [])

  return null
}
