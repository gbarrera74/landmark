import FaqAccordion, { type Faq } from '@/components/FaqAccordion'
import JsonLd from '@/lib/seo/JsonLd'

/**
 * A page-level FAQ block: the visible accordion plus the FAQPage structured
 * data that goes with it.
 *
 * The two are deliberately emitted together. Google requires FAQPage markup to
 * describe content that is actually visible on the page, so a component that
 * shipped the schema without the accordion (or vice versa) would either be a
 * structured-data violation or a missed AEO opportunity. Keeping them in one
 * component makes the pairing impossible to get wrong at the call site.
 *
 * `id` scopes the aria-labelledby heading so a page can host more than one
 * block without colliding.
 */
export default function PageFaq({
  items,
  id = 'page-faq',
  eyebrow = 'Good to know',
  heading = 'Frequently Asked Questions',
  intro,
  tone = 'white',
}: {
  items: Faq[]
  id?: string
  eyebrow?: string
  heading?: string
  intro?: string
  tone?: 'white' | 'cream'
}) {
  if (!items.length) return null
  const headingId = `${id}-h`
  return (
    <>
      <section className={`ile-section ile-section--${tone}`} aria-labelledby={headingId}>
        <div className="ile-container lm-faq-wrap">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">{eyebrow}</span>
            <h2 id={headingId} className="lm-h2-amber">{heading}</h2>
            {intro ? <p className="ile-lead lm-center-lead">{intro}</p> : null}
          </div>
          <div style={{ marginTop: 28 }}>
            <FaqAccordion items={items} />
          </div>
        </div>
      </section>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: items.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }}
      />
    </>
  )
}
