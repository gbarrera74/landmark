/* Shared brochure CTA band used at the foot of the homepage and inner pages. */
export default function BrochureBand() {
  return (
    <section className="lm-brochure" aria-labelledby="brochure-band-h">
      <div className="ile-container lm-brochure-inner">
        <div className="lm-brochure-copy">
          <h2 id="brochure-band-h">Download our Free Brochure</h2>
          <p>Forty-four pages of destinations, sample itineraries, and trip inclusions &mdash; everything we can build for your group.</p>
          <a href="/brochure/landmark-2026-2027-travel-brochure.pdf" className="ile-btn ile-btn--gold" target="_blank" rel="noopener noreferrer" download>Download the Brochure</a>
        </div>
        <div className="lm-brochure-cover">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/landmark/brochure-cover.png" alt="Landmark Educational Tours 2026-2027 travel brochure cover" loading="lazy" width={280} height={363} />
        </div>
      </div>
    </section>
  )
}
