'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

/**
 * Sitewide analytics + tracking. Loaded once in the root layout.
 *
 * MIRRORS the live WordPress site (parity — no analytics gap at cutover):
 * - Google Tag Manager        GTM-K6Z2H62D
 * - Google Analytics 4        G-D4LC281NP7
 * - Google Ads conversion     AW-395103468
 * - HubSpot tracking pixel     portal 9241531 (hutk cookie → lead attribution)
 *
 * ENHANCED vs the old site:
 * 1. INTERACTION-GATED + idle-scheduled load — nothing tracking-related runs
 *    during the initial render, so it stays off the mobile-PageSpeed (TBT)
 *    budget. Real users trigger within ~1s of any scroll/tap; a post-load idle
 *    fallback fires for no-interaction visitors so nothing is dropped.
 * 2. PRODUCTION-ORIGIN GATED — only loads on the real domain, so localhost /
 *    preview / staging never send hits and pollute GA4 / Ads / HubSpot.
 * 3. Inline gclid/gbraid capture at parse time so paid-click attribution
 *    survives a fast first tap even before gtag.js finishes loading.
 */
const GTM_ID = 'GTM-K6Z2H62D'
const GA4_ID = 'G-D4LC281NP7'
const ADS_ID = 'AW-395103468'
const HS_PORTAL = '9241531'
const PROD_HOSTS = /(^|\.)landmarkeducationaltours\.com$/

export default function TrackingScripts() {
  const [activated, setActivated] = useState(false)

  useEffect(() => {
    if (activated) return
    // Don't load analytics off-production (protects GA4/Ads/HubSpot from dev + staging traffic).
    if (typeof window === 'undefined' || !PROD_HOSTS.test(window.location.hostname)) return

    const events = ['scroll', 'pointerdown', 'touchstart', 'keydown', 'mousemove', 'wheel']
    let idleId: number | undefined
    let timerId: number | undefined
    let scheduled = false

    const activate = () => {
      events.forEach((e) => window.removeEventListener(e, onInteract))
      window.removeEventListener('load', scheduleFallback)
      if (idleId !== undefined && typeof window.cancelIdleCallback === 'function') window.cancelIdleCallback(idleId)
      if (timerId !== undefined) window.clearTimeout(timerId)
      setActivated(true)
    }
    // Schedule for the next idle frame — never inject synchronously inside the
    // interaction handler (that spikes INP on the user's first tap).
    const scheduleActivate = () => {
      if (scheduled) return
      scheduled = true
      if (typeof window.requestIdleCallback === 'function') idleId = window.requestIdleCallback(activate, { timeout: 2000 })
      else timerId = window.setTimeout(activate, 200)
    }
    const onInteract = () => scheduleActivate()
    events.forEach((e) => window.addEventListener(e, onInteract, { once: true, passive: true }))
    const scheduleFallback = () => scheduleActivate()
    if (document.readyState === 'complete') scheduleFallback()
    else window.addEventListener('load', scheduleFallback, { once: true })

    return () => {
      events.forEach((e) => window.removeEventListener(e, onInteract))
      window.removeEventListener('load', scheduleFallback)
      if (idleId !== undefined && typeof window.cancelIdleCallback === 'function') window.cancelIdleCallback(idleId)
      if (timerId !== undefined) window.clearTimeout(timerId)
    }
  }, [activated])

  return (
    <>
      {/* Google Ads click-ID capture — inline at parse, independent of the gate,
          so a fast paid visitor's gclid is persisted before gtag.js loads. */}
      <script
        dangerouslySetInnerHTML={{
          __html:
            "(function(){try{var q=location.search;if(!q)return;var ts=Math.floor(Date.now()/1e3);var d=location.hostname.replace(/^www\\./,'');function set(n,v){var c=n+'='+v+';path=/;max-age=7776000;SameSite=Lax';try{document.cookie=c+';domain=.'+d}catch(e){}if(document.cookie.indexOf(n+'=')===-1){try{document.cookie=c}catch(e){}}}function has(n){return(';'+document.cookie).indexOf('; '+n+'=')!==-1}var m=q.match(/[?&]gclid=([^&#]+)/);if(m&&!has('_gcl_aw'))set('_gcl_aw','GCL.'+ts+'.'+decodeURIComponent(m[1]));var g=q.match(/[?&]gbraid=([^&#]+)/);if(g&&!has('_gcl_gb'))set('_gcl_gb','GCL.'+ts+'.'+decodeURIComponent(g[1]))}catch(e){}})()",
        }}
      />

      {activated && (
        <>
          {/* Google Tag Manager */}
          <Script id="gtm" strategy="lazyOnload">{`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');
          `}</Script>

          {/* Google Analytics 4 + Google Ads (shared gtag.js loader) */}
          <Script id="gtag-loader" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} />
          <Script id="gtag-config" strategy="lazyOnload">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${GA4_ID}');
            gtag('config', '${ADS_ID}');
          `}</Script>

          {/* HubSpot tracking (hutk cookie for lead attribution) */}
          <Script id="hs-script-loader" strategy="lazyOnload" src={`https://js.hs-scripts.com/${HS_PORTAL}.js`} />
        </>
      )}

      {/* GTM noscript fallback */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
          title="gtm"
        />
      </noscript>
    </>
  )
}
