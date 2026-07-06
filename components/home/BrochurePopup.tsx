'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

/* The live homepage shows a back-to-school brochure popup with a countdown.
   The live countdown date was stale (2023) — we do NOT copy it. Set a real
   promo deadline here (ISO string) to re-enable the countdown, or leave null. */
const PROMO_ENDS_AT: string | null = null // TODO: confirm real promo deadline before launch

export default function BrochurePopup() {
  const [open, setOpen] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    try {
      if (sessionStorage.getItem('lm-brochure-seen')) return
    } catch {
      return
    }
    const t = setTimeout(() => setOpen(true), 2800)
    return () => clearTimeout(t)
  }, [])

  const close = () => {
    setOpen(false)
    try {
      sessionStorage.setItem('lm-brochure-seen', '1')
    } catch {}
  }

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  if (!open) return null

  return (
    <div className="lm-popup-overlay" role="dialog" aria-modal="true" aria-labelledby="lm-popup-title" onClick={close}>
      <div className="lm-popup" onClick={(e) => e.stopPropagation()}>
        <button ref={closeRef} className="lm-popup-close" aria-label="Close" onClick={close}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        </button>
        <Image src="/images/landmark/b2s-promotion-logo.png" alt="" width={160} height={64} className="lm-popup-logo" />
        <h2 id="lm-popup-title">Download our free brochure</h2>
        <p>Our new 2025-26 brochure highlights what we believe, what we offer, and where we can take your group.</p>
        <Link href="/brochure/" className="ile-btn ile-btn--gold" onClick={close}>
          Access Offer
        </Link>
      </div>
    </div>
  )
}
