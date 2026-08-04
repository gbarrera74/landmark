'use client'

import { useEffect } from 'react'

export default function NotFoundLogger() {
  useEffect(() => {
    try {
      fetch('/api/404-log/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          path: window.location.pathname + window.location.search,
          referrer: document.referrer || undefined,
        }),
        keepalive: true,
      }).catch(() => {})
    } catch {
      // Never let logging break the 404 page render.
    }
  }, [])

  return null
}
