'use client'

import { useEffect, useRef, useId } from 'react'
import { enhanceQuoteForm } from '@/lib/hubspotFormEnhance'

// Renders a live HubSpot form via the official embed API (hbspt.forms.create).
// We mirror the live site (which embeds the same forms) rather than re-implement
// a native form: HubSpot owns the field definitions + validation, so there is no
// risk of a field-name mismatch dropping a lead, and the visitor's hubspotutk
// cookie is attached automatically for correct source attribution.
//
// The form renders as real HTML (not an iframe) into the target div, so the
// brand styling in globals.css (`.hs-form` rules) applies.

declare global {
  interface Window {
    hbspt?: { forms: { create: (opts: Record<string, unknown>) => void } }
  }
}

const HS_SCRIPT_SRC = 'https://js.hsforms.net/forms/embed/v2.js'

export default function HubSpotForm({
  portalId = '9241531',
  formId,
  region = 'na1',
  sectioned = false,
}: {
  portalId?: string
  formId: string
  region?: string
  /** Break a long form into labeled "chapter" sections (quote form only). */
  sectioned?: boolean
}) {
  const uid = useId().replace(/[:]/g, '')
  const targetId = `hs-form-${uid}`
  const created = useRef(false)

  useEffect(() => {
    let cancelled = false

    function create() {
      if (cancelled || created.current || !window.hbspt) return
      created.current = true
      window.hbspt.forms.create({
        portalId,
        formId,
        region,
        target: `#${targetId}`,
        // Runs once the form's real HTML is in the DOM. We query the form from
        // our own target container (rather than trust the callback arg, which
        // is a jQuery object in some embed versions and a DOM node in others).
        onFormReady() {
          if (!sectioned) return
          const formEl = document.getElementById(targetId)?.querySelector('form')
          if (formEl) enhanceQuoteForm(formEl as HTMLFormElement)
        },
      })
    }

    // Reuse the script if it's already on the page; otherwise inject it once.
    if (window.hbspt) {
      create()
    } else {
      let script = document.querySelector<HTMLScriptElement>(`script[src="${HS_SCRIPT_SRC}"]`)
      if (!script) {
        script = document.createElement('script')
        script.src = HS_SCRIPT_SRC
        script.async = true
        document.body.appendChild(script)
      }
      script.addEventListener('load', create)
      // Belt-and-suspenders: poll briefly in case the load event already fired.
      const iv = setInterval(() => {
        if (window.hbspt) { clearInterval(iv); create() }
      }, 200)
      setTimeout(() => clearInterval(iv), 8000)
      return () => { cancelled = true; script?.removeEventListener('load', create); clearInterval(iv) }
    }

    return () => { cancelled = true }
  }, [portalId, formId, region, targetId, sectioned])

  return (
    <div className="lm-hsform">
      <div id={targetId} />
      <noscript>
        <p>Please enable JavaScript to load our secure form, or email <a href="mailto:Hello@landmarkeducationaltours.com">Hello@landmarkeducationaltours.com</a>.</p>
      </noscript>
    </div>
  )
}
