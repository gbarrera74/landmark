// Skin the Landmark quote form (HubSpot form 2bb4a315). HubSpot renders this
// new-editor form inside a SAME-ORIGIN iframe, so page CSS can't reach it — we
// inject our styles + section dividers INTO the iframe's own document.
//
// HubSpot keeps full control of the form: fields, validation, submission, and
// data all stay in HubSpot. We only add presentation. Everything is guarded;
// if the iframe/markup ever changes shape, injection simply no-ops and the
// form still works (it just renders in HubSpot's default style).

import { SKIN_CSS, SKIN_FONTS_HREF } from './hubspotFormSkin'

type Doc = Document

function byHint(fields: HTMLElement[], hints: string[]): HTMLElement | null {
  for (const f of fields) {
    const cls = (f.className || '').toLowerCase()
    const label = f.querySelector('label')
    const text = label ? (label.textContent || '').toLowerCase() : ''
    if (hints.some((h) => cls.indexOf(h) !== -1 || text.indexOf(h) !== -1)) return f
  }
  return null
}

const CHAPTERS: { eyebrow: string; title: string; find: (doc: Doc, fields: HTMLElement[]) => HTMLElement | null }[] = [
  {
    eyebrow: 'Step One',
    title: 'Tell us about your group',
    find: (_doc, fields) => fields.find((f) => {
      const fs = f.closest('fieldset')
      return !!(fs && !fs.classList.contains('form-columns-2'))
    }) || null,
  },
  { eyebrow: 'Step Two', title: 'Travel & trip dates', find: (_d, fields) => byHint(fields, ['hs_type_of_transportation', 'how do you want to get']) },
  { eyebrow: 'Step Three', title: 'Destination & travelers', find: (_d, fields) => byHint(fields, ['hs_dropdown', 'do you know where']) },
  { eyebrow: 'Step Four', title: 'A few final details', find: (doc) => doc.querySelector<HTMLElement>('.hs-fieldtype-textarea') },
]

function insertDivider(doc: Doc, field: HTMLElement | null, eyebrow: string, title: string) {
  if (!field) return
  const anchor = field.closest('fieldset') || field
  if (!anchor.parentNode) return
  const prev = anchor.previousElementSibling
  if (prev && prev.classList && prev.classList.contains('lm-hs-divider')) return
  const wrap = doc.createElement('div')
  wrap.className = 'lm-hs-divider'
  const eb = doc.createElement('span')
  eb.className = 'lm-hs-divider-eyebrow'
  eb.textContent = eyebrow
  const ti = doc.createElement('p')
  ti.className = 'lm-hs-divider-title'
  ti.textContent = title
  const rule = doc.createElement('div')
  rule.className = 'lm-hs-divider-rule'
  wrap.append(eb, ti, rule)
  anchor.parentNode.insertBefore(wrap, anchor)
}

function applySkin(iframe: HTMLIFrameElement, doc: Doc, form: HTMLFormElement) {
  try {
    doc.documentElement.classList.add('lm-hsform')

    // Fonts (the iframe document doesn't inherit the parent's @font-face).
    if (!doc.getElementById('lm-skin-fonts')) {
      const link = doc.createElement('link')
      link.id = 'lm-skin-fonts'
      link.rel = 'stylesheet'
      link.href = SKIN_FONTS_HREF
      doc.head.appendChild(link)
    }
    // Styles (idempotent — replace on re-apply).
    let style = doc.getElementById('lm-skin-css') as HTMLStyleElement | null
    if (!style) {
      style = doc.createElement('style')
      style.id = 'lm-skin-css'
      doc.head.appendChild(style)
    }
    if (style.textContent !== SKIN_CSS) style.textContent = SKIN_CSS

    // a11y: hide the duplicate <h1> block from the a11y tree (CSS also hides it).
    doc.querySelectorAll('.hs-richtext').forEach((el) => {
      if (el.querySelector('h1')) el.setAttribute('aria-hidden', 'true')
    })

    // Section "chapters".
    const fields = Array.from(form.querySelectorAll<HTMLElement>('.hs-form-field'))
    for (const c of CHAPTERS) insertDivider(doc, c.find(doc, fields), c.eyebrow, c.title)

    // Cosmetic submit feedback (label swap — pseudo-content doesn't paint on inputs).
    const submitBtn = form.querySelector<HTMLInputElement>('.hs-submit input.hs-button, .hs-submit input[type="submit"]')
    if (submitBtn && !submitBtn.dataset.lmBound) {
      submitBtn.dataset.lmBound = '1'
      const original = submitBtn.value
      form.addEventListener('submit', () => {
        try {
          submitBtn.classList.add('lm-hs-loading')
          submitBtn.value = 'Submitting…'
          submitBtn.setAttribute('aria-busy', 'true')
          window.setTimeout(() => {
            submitBtn.classList.remove('lm-hs-loading')
            submitBtn.value = original
            submitBtn.removeAttribute('aria-busy')
          }, 12000)
        } catch { /* no-op */ }
      }, true)
    }

    // Height: HubSpot normally auto-sizes the iframe, but our injected content
    // changes its height. Keep the iframe tall enough for the real content so
    // nothing clips, regardless of HubSpot's own sizing.
    const syncHeight = () => {
      try {
        const h = Math.max(doc.body.scrollHeight, form.scrollHeight)
        if (h > 0 && Math.abs(iframe.offsetHeight - h) > 2) iframe.style.height = h + 'px'
      } catch { /* no-op */ }
    }
    syncHeight()
    if (typeof ResizeObserver !== 'undefined') {
      const ro = new ResizeObserver(syncHeight)
      ro.observe(doc.body)
    } else {
      window.setInterval(syncHeight, 500)
    }
  } catch { /* an enhancement failure must never break the form */ }
}

/**
 * Skin the quote form. Called from HubSpotForm's onFormReady with the target
 * container; polls for the same-origin iframe + its populated form, then injects.
 */
export function enhanceQuoteForm(container: HTMLElement): void {
  if (container.dataset.lmSkinning) return // guard: safe to call from multiple hooks
  container.dataset.lmSkinning = '1'
  let tries = 0
  const timer = window.setInterval(() => {
    tries++
    try {
      const iframe = container.querySelector<HTMLIFrameElement>('iframe.hs-form-iframe, [data-hs-forms-root] iframe, iframe')
      const doc = iframe && (iframe.contentDocument || iframe.contentWindow?.document)
      const form = doc?.querySelector<HTMLFormElement>('form')
      if (iframe && doc && form && form.querySelector('.hs-form-field')) {
        window.clearInterval(timer)
        applySkin(iframe, doc, form)
        // Re-apply if HubSpot re-renders the form body (validation, etc.).
        if (typeof MutationObserver !== 'undefined') {
          const mo = new MutationObserver(() => {
            if (!form.querySelector('.lm-hs-divider')) applySkin(iframe, doc, form)
          })
          mo.observe(form, { childList: true, subtree: true })
        }
      }
    } catch { /* cross-origin or not ready yet — keep trying until timeout */ }
    if (tries > 60) window.clearInterval(timer) // ~15s ceiling
  }, 250)
}
