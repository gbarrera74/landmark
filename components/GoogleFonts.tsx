'use client'

import { useEffect, useRef } from 'react'

/**
 * Non-render-blocking Google Fonts loader.
 *
 * A plain <link rel="stylesheet"> to fonts.googleapis.com is render-blocking.
 * We load it with media="print" so the browser fetches the CSS without blocking
 * first paint, then flip media to "all" once available (onLoad + a hydration
 * effect that covers the race where the sheet loads before onLoad attaches).
 * <noscript> keeps fonts working with JS disabled. display=swap avoids FOIT.
 *
 * Fonts mirror Landmark's live brand: Poppins (headings),
 * Montserrat (body), Lora (serif accents — matches the logo wordmark).
 */
const FONT_HREF =
  'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap'

export default function GoogleFonts() {
  const ref = useRef<HTMLLinkElement>(null)

  useEffect(() => {
    const link = ref.current
    if (link && link.media !== 'all') link.media = 'all'
  }, [])

  return (
    <>
      <link
        ref={ref}
        rel="stylesheet"
        href={FONT_HREF}
        media="print"
        onLoad={(e) => {
          ;(e.currentTarget as HTMLLinkElement).media = 'all'
        }}
      />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href={FONT_HREF} />
      </noscript>
    </>
  )
}
