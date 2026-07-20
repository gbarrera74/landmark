// Progressive enhancement for the Landmark quote form (HubSpot form 2bb4a315),
// run from HubSpotForm's onFormReady when the `sectioned` prop is set.
//
// It ONLY inserts new nodes (section-divider "chapters" before existing
// fieldsets) and toggles a cosmetic loading state on submit — it never
// reparents or removes a HubSpot field, so it cannot disturb HubSpot's own
// validation, field tracking, or submission. Every step is defensively
// guarded; if the DOM doesn't match, that step is skipped and the form still
// renders as a fully-styled long form on CSS alone.

type Chapter = { eyebrow: string; title: string; find: (form: HTMLElement, fields: HTMLElement[]) => HTMLElement | null }

function byHint(fields: HTMLElement[], hints: string[]): HTMLElement | null {
  for (const f of fields) {
    const cls = (f.className || '').toLowerCase()
    const label = f.querySelector('label')
    const text = label ? (label.textContent || '').toLowerCase() : ''
    if (hints.some((h) => cls.indexOf(h) !== -1 || text.indexOf(h) !== -1)) return f
  }
  return null
}

const CHAPTERS: Chapter[] = [
  {
    eyebrow: 'Step One',
    title: 'Tell us about your group',
    // First field that isn't part of a paired (2-col) row — i.e. the first
    // stacked field, which is Organizer Type.
    find: (_form, fields) => {
      for (const f of fields) {
        const fs = f.closest('fieldset')
        if (fs && !fs.classList.contains('form-columns-2')) return f
      }
      return null
    },
  },
  {
    eyebrow: 'Step Two',
    title: 'Travel & trip dates',
    find: (_form, fields) => byHint(fields, ['hs_type_of_transportation', 'how do you want to get']),
  },
  {
    eyebrow: 'Step Three',
    title: 'Destination & travelers',
    find: (_form, fields) => byHint(fields, ['hs_dropdown', 'do you know where']),
  },
  {
    eyebrow: 'Step Four',
    title: 'A few final details',
    find: (form) => form.querySelector<HTMLElement>('.hs-fieldtype-textarea'),
  },
]

function insertDivider(field: HTMLElement | null, eyebrow: string, title: string) {
  if (!field) return
  const anchor = field.closest('fieldset') || field
  if (!anchor.parentNode) return
  const prev = anchor.previousElementSibling
  if (prev && prev.classList && prev.classList.contains('lm-hs-divider')) return

  const wrap = document.createElement('div')
  wrap.className = 'lm-hs-divider'
  const eyebrowEl = document.createElement('span')
  eyebrowEl.className = 'lm-hs-divider-eyebrow'
  eyebrowEl.textContent = eyebrow
  const titleEl = document.createElement('p')
  titleEl.className = 'lm-hs-divider-title'
  titleEl.textContent = title
  const rule = document.createElement('div')
  rule.className = 'lm-hs-divider-rule'
  wrap.appendChild(eyebrowEl)
  wrap.appendChild(titleEl)
  wrap.appendChild(rule)
  anchor.parentNode.insertBefore(wrap, anchor)
}

export function enhanceQuoteForm(form: HTMLFormElement): void {
  try {
    // Belt-and-suspenders: hide the duplicate-heading richtext block from the
    // a11y tree immediately (CSS also display:none's it). Scoped to the block
    // that actually contains the <h1> so legitimate helper copy is untouched.
    form.querySelectorAll('.hs-richtext').forEach((el) => {
      if (el.querySelector('h1')) el.setAttribute('aria-hidden', 'true')
    })

    const fields = Array.from(form.querySelectorAll<HTMLElement>('.hs-form-field'))
    for (const c of CHAPTERS) insertDivider(c.find(form, fields), c.eyebrow, c.title)

    // Cosmetic submit feedback. HubSpot owns real validation/submission; this
    // only improves perceived responsiveness. Pseudo-element content doesn't
    // render on <input> elements, so the label is swapped via .value.
    const submitBtn = form.querySelector<HTMLInputElement>(
      '.hs-submit input.hs-button.primary.large, .hs-submit input[type="submit"]',
    )
    if (submitBtn) {
      const original = submitBtn.value
      form.addEventListener(
        'submit',
        () => {
          try {
            submitBtn.classList.add('lm-hs-loading')
            submitBtn.value = 'Submitting…'
            submitBtn.setAttribute('aria-busy', 'true')
            // Safety valve: if HubSpot never swaps the DOM (e.g. a late
            // validation error), don't leave the button stuck.
            window.setTimeout(() => {
              submitBtn.classList.remove('lm-hs-loading')
              submitBtn.value = original
              submitBtn.removeAttribute('aria-busy')
            }, 12000)
          } catch {
            /* no-op */
          }
        },
        true,
      )
    }
  } catch {
    // An enhancement failure must never block the form from rendering.
  }
}
