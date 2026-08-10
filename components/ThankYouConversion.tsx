'use client'

import { useEffect } from 'react'

/**
 * Fires the `lp_thank_you_page` GA4 event explicitly on the thank-you page.
 *
 * WHY THIS EXISTS
 * The Google Ads conversion is a GA4 key event named `lp_thank_you_page`,
 * imported into Ads and set to primary. Nothing in the GTM container produces
 * it (verified: zero occurrences in GTM-K6Z2H62D), so it is generated inside
 * GA4 -- almost certainly by a "Create event" rule matching the thank-you page
 * URL.
 *
 * That made the conversion depend on a string match nobody on our side can
 * read or control, and it silently stopped at the 2026-07-28 cutover when the
 * thank-you URLs began redirecting. Rather than keep guessing at the rule, we
 * send the event by name. Ads imports GA4 key events by NAME, so an explicitly
 * sent `lp_thank_you_page` counts exactly like a rule-generated one -- and it
 * cannot be broken by a future URL change.
 *
 * Fires on every thank-you URL, since /thank-you-page/, /thank-you-page-2/ and
 * /thank-you-page-landmark-tours-plus/ all rewrite to this page and any of them
 * is a genuine post-submission view.
 *
 * NOTE FOR WHOEVER OWNS GA4: if a "Create event" rule for `lp_thank_you_page`
 * still exists AND starts matching again, this would double-count. It is not
 * matching today (conversions have been zero since 2026-07-28), but the rule
 * should be disabled so this component is the single source.
 *
 * Tracking is interaction-gated for PageSpeed, so gtag may not exist yet on
 * arrival. We poll for it rather than firing blind, and give up rather than
 * hang forever.
 */
const EVENT_NAME = 'lp_thank_you_page'
const POLL_MS = 250
const MAX_WAIT_MS = 20000

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: Record<string, unknown>[]
    __lmThankYouFired?: boolean
  }
}

export default function ThankYouConversion() {
  useEffect(() => {
    // One conversion per page view. Guarded on window so a re-render or a
    // second mount cannot send it twice.
    if (window.__lmThankYouFired) return

    let waited = 0
    let timer: number | undefined

    const send = () => {
      if (window.__lmThankYouFired) return
      window.__lmThankYouFired = true
      try {
        window.gtag?.('event', EVENT_NAME, {
          page_location: window.location.href,
          page_path: window.location.pathname,
        })
      } catch {
        /* never let analytics break the page */
      }
      // Also surface it on the dataLayer so GTM-side tags and debugging see it.
      try {
        ;(window.dataLayer = window.dataLayer || []).push({ event: EVENT_NAME })
      } catch {
        /* no-op */
      }
    }

    const tick = () => {
      if (typeof window.gtag === 'function') {
        send()
        return
      }
      waited += POLL_MS
      // The tracking gate loads on first interaction or on window load; nudge
      // it so a visitor who lands here and reads without scrolling still counts.
      if (waited === POLL_MS) window.dispatchEvent(new Event('scroll'))
      if (waited >= MAX_WAIT_MS) return
      timer = window.setTimeout(tick, POLL_MS)
    }
    tick()

    return () => {
      if (timer !== undefined) window.clearTimeout(timer)
    }
  }, [])

  return null
}
