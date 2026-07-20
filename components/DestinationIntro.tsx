/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

/**
 * Editorial destination intro: a drop-cap lead + scannable highlights checklist
 * on one side, a framed photo with a data-driven itinerary badge on the other.
 * Replaces the old lone centered text slab. Collapses to one column on mobile.
 */
export default function DestinationIntro({
  city,
  lead,
  highlights,
  image,
  imageAlt,
  tripCount,
  ctaHref = '/get-a-quote/',
  wideImage = false,
}: {
  city: string
  lead: string
  highlights: string[]
  image: string
  imageAlt: string
  tripCount: number
  ctaHref?: string
  /** Use a landscape (4:3) frame instead of the default portrait one —
   *  for group photos that would be badly side-cropped in the tall frame. */
  wideImage?: boolean
}) {
  return (
    <section className="ile-section ile-section--white">
      <div className="ile-container">
        <div className="lm-dest-intro">
          <div className="lm-dest-intro__copy">
            <span className="ile-eyebrow">Why {city}</span>
            <div className="lm-dest-lead">
              <p>{lead}</p>
            </div>
            {highlights.length > 0 && (
              <>
                <p className="lm-dest-sub">WHAT STUDENTS EXPLORE</p>
                <ul className="lm-dest-highlights">
                  {highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </>
            )}
            <Link href={ctaHref} className="ile-btn ile-btn--primary">Start Planning Your Trip</Link>
          </div>
          <div className={`lm-dest-intro__media${wideImage ? ' lm-dest-intro__media--wide' : ''}`}>
            <img src={image} alt={imageAlt} loading="lazy" />
            {tripCount > 0 && (
              <div className="lm-dest-intro__badge">
                <strong>{tripCount}</strong>
                <span>curated {tripCount === 1 ? 'itinerary' : 'itineraries'}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
