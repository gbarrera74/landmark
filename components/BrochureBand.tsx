import Link from 'next/link'

/* Shared brochure CTA band used at the foot of the homepage and inner pages. */
export default function BrochureBand() {
  return (
    <section className="lm-brochure" aria-labelledby="brochure-band-h">
      <div className="ile-container lm-brochure-inner">
        <div className="lm-brochure-copy">
          <h2 id="brochure-band-h">Download our Free Brochure</h2>
          <p>Our new 2025-26 brochure highlights what we believe, what we offer, and where we can take your group.</p>
          <Link href="/brochure/" className="ile-btn ile-btn--gold">Access Here</Link>
        </div>
        <div className="lm-brochure-cover">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/landmark/brochure-cover.png" alt="Landmark Educational Tours 2025-26 brochure cover" loading="lazy" width={280} height={363} />
        </div>
      </div>
    </section>
  )
}
