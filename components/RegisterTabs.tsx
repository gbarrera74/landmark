'use client'

/* eslint-disable @next/next/no-img-element */
import { useId, useState } from 'react'
import {
  INCLUSIONS_HTML,
  HOW_TO_REGISTER_HTML,
  HOW_TO_CANCEL_HTML,
  FAQ_ITEMS,
  PACKING_LIST_IMAGE,
  PACKING_LIST_ALT,
} from '@/lib/registerContent'

const TABS = [
  { key: 'itinerary', label: 'Sample Itinerary' },
  { key: 'inclusions', label: 'Trip Inclusions' },
  { key: 'register', label: 'How to Register' },
  { key: 'faq', label: 'FAQ' },
  { key: 'packing', label: 'Our Packing List' },
  { key: 'cancel', label: 'How to Cancel' },
] as const

type TabKey = (typeof TABS)[number]['key']

export default function RegisterTabs({
  itineraryHtml,
  portal,
}: {
  itineraryHtml: string
  portal: string
}) {
  const [active, setActive] = useState<TabKey>('itinerary')
  const base = useId()

  return (
    <div className="lm-reg-tabs-wrap">
      <div className="lm-tabs" role="tablist" aria-label="Trip information">
        {TABS.map((t) => (
          <button
            key={t.key}
            id={`${base}-tab-${t.key}`}
            role="tab"
            type="button"
            aria-selected={active === t.key}
            aria-controls={`${base}-panel-${t.key}`}
            className={`lm-tab${active === t.key ? ' is-active' : ''}`}
            onClick={() => setActive(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div
        className="lm-tabpanel"
        role="tabpanel"
        id={`${base}-panel-itinerary`}
        aria-labelledby={`${base}-tab-itinerary`}
        hidden={active !== 'itinerary'}
      >
        <div className="lm-article lm-register-body" dangerouslySetInnerHTML={{ __html: itineraryHtml }} />
      </div>

      <div
        className="lm-tabpanel"
        role="tabpanel"
        id={`${base}-panel-inclusions`}
        aria-labelledby={`${base}-tab-inclusions`}
        hidden={active !== 'inclusions'}
      >
        <div className="lm-article lm-register-body" dangerouslySetInnerHTML={{ __html: INCLUSIONS_HTML }} />
      </div>

      <div
        className="lm-tabpanel"
        role="tabpanel"
        id={`${base}-panel-register`}
        aria-labelledby={`${base}-tab-register`}
        hidden={active !== 'register'}
      >
        <div className="lm-article lm-register-body" dangerouslySetInnerHTML={{ __html: HOW_TO_REGISTER_HTML }} />
        <p className="lm-after-grid">
          <a href={portal} className="ile-btn ile-btn--primary" target="_blank" rel="noopener noreferrer">
            Click here to register
          </a>
        </p>
      </div>

      <div
        className="lm-tabpanel"
        role="tabpanel"
        id={`${base}-panel-faq`}
        aria-labelledby={`${base}-tab-faq`}
        hidden={active !== 'faq'}
      >
        <div className="lm-reg-faq">
          {FAQ_ITEMS.map((f) => (
            <details className="lm-reg-faq-item" key={f.q}>
              <summary>{f.q}</summary>
              <div className="lm-reg-faq-a" dangerouslySetInnerHTML={{ __html: f.a }} />
            </details>
          ))}
        </div>
      </div>

      <div
        className="lm-tabpanel"
        role="tabpanel"
        id={`${base}-panel-packing`}
        aria-labelledby={`${base}-tab-packing`}
        hidden={active !== 'packing'}
      >
        <img className="lm-reg-packing-img" src={PACKING_LIST_IMAGE} alt={PACKING_LIST_ALT} loading="lazy" />
      </div>

      <div
        className="lm-tabpanel"
        role="tabpanel"
        id={`${base}-panel-cancel`}
        aria-labelledby={`${base}-tab-cancel`}
        hidden={active !== 'cancel'}
      >
        <div className="lm-article lm-register-body" dangerouslySetInnerHTML={{ __html: HOW_TO_CANCEL_HTML }} />
      </div>
    </div>
  )
}
