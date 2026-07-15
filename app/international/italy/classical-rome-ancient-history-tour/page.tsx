/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import BrochureBand from '@/components/BrochureBand'
import ItineraryTabs from '@/components/home/ItineraryTabs'
import JsonLd from '@/lib/seo/JsonLd'
import { breadcrumb, touristTrip } from '@/lib/seo/schemas'

const ArrowR = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
)

const DAYS = [

]

const WHY = []

const INCLUSIONS = [
  ["Private Group Tour", "Personalized experiences for your group only."],
  ["Custom Itinerary", "Built around your educational goals and preferences."],
  ["Transportation", "Safe, reliable, and comfortable travel."],
  ["Hotel Accommodations", "Convenient and student-friendly lodging."],
  ["Attractions", "Access to top-rated sites and experiences."],
  ["Meals", "Delicious and well-balanced dining options."],
  ["Tour Manager", "Professional support throughout your journey."],
  ["Restaurant & Driver Gratuities", "Taken care of for your convenience."],
]

const RELATED = [
  { title: "Renaissance Florence Art & History Program", img: "/images/landmark/italy-florence.webp", href: "/international/italy/renaissance-florence-art-program/" },
  { title: "Rome, Florence & Venice Grand Tour", img: "/images/landmark/italy-venice.webp", href: "/international/italy/rome-florence-venice-grand-tour/" },
  { title: "Pompeii & the Bay of Naples Archaeology Trip", img: "/images/landmark/intl-italy.webp", href: "/international/italy/pompeii-naples-archaeology-trip/" },
]

const DESC_P1 = "The Colosseum, Roman Forum, Palatine Hill, and Vatican: antiquity made real for history and Latin students. A full day-by-day sample itinerary for this program is on the way. Every Landmark trip is fully customized to your group, so our Travel Consultants will build your ideal Classical Rome & Ancient History Tour around your dates, grade level, and curriculum goals."

const sampleTab = (
  <>
    <div className="ilp-infocard">
      <h3>A detailed day-by-day sample is on the way.</h3>
      <p style={{ color: 'var(--lm-ink-muted)', fontSize: 15, lineHeight: 1.7 }}>Every Landmark trip is fully customized to your group, so we build your ideal Classical Rome &amp; Ancient History Tour itinerary together around your dates, grade level, and goals. Reach out and our Travel Consultants will map out the perfect schedule.</p>
      <Link href="/get-a-quote/" className="ile-btn ile-btn--primary" style={{ marginTop: 8 }}>Plan Your Custom Itinerary</Link>
    </div>
  </>
)

const descriptionTab = (
  <div className="ilp-prose">
    <h2 style={{ marginTop: 0 }}>Classical Rome &amp; Ancient History Tour</h2>
    <p>{DESC_P1}</p>

    <p className="lm-sample-note">
      <em>Note: This is a SAMPLE itinerary provided for inspiration only. (Unless you love it!) Every trip we offer is fully customizable, ensuring a personalized experience tailored to your school&rsquo;s educational goals.</em>
    </p>
    <Link href="/get-a-quote/" className="ile-btn ile-btn--primary">Plan Your Custom Trip Today</Link>
  </div>
)

const inclusionsTab = (
  <div className="ilp-infocard ilp-check">
    <h3>Trip Inclusions: Tailored Just for You</h3>
    <p style={{ marginBottom: 20, color: 'var(--lm-ink-muted)', fontSize: 15, lineHeight: 1.7 }}>
      Work with our expert Destination Landmark Specialist team to design a trip that fits your group&rsquo;s unique needs! Our packages start fully customizable and typically include:
    </p>
    <ul>
      {INCLUSIONS.map(([label, text]) => (
        <li key={label}><strong>{label}</strong>: {text}</li>
      ))}
      <li><strong>&amp; More!</strong></li>
    </ul>
    <p style={{ marginTop: 20, color: 'var(--lm-ink-muted)', fontSize: 15, lineHeight: 1.7 }}>
      You have the flexibility to include or exclude specific services based on your group&rsquo;s preferences. While we recommend the value of an all-inclusive travel experience, the final decision is yours!
    </p>
    <Link href="/get-a-quote/" className="ile-btn ile-btn--primary" style={{ marginTop: 8 }}>Get a Custom Quote</Link>
  </div>
)

export default function Itin_international__italy__classical_rome_ancient_history_tour() {
  return (
    <>
      <PageHero
        eyebrow="Italy · 7 Day / 6 Night"
        title={<>Classical Rome &amp; Ancient History Tour</>}
        subtitle="The Colosseum, Roman Forum, Palatine Hill, and Vatican: antiquity made real for history and Latin students."
        image="/images/landmark/italy-rome.jpg"
        breadcrumb={[
        { label: "Destinations", href: "/destinations/" },
        { label: "International", href: "/international/" },
        { label: "Italy", href: "/international/italy/" },
        { label: "Classical Rome & Ancient History Tour" },
      ]}
      />

      <section className="ile-section ile-section--white">
        <div className="ile-container lm-itin-grid">
          <div className="lm-itin-main">
            <ItineraryTabs
              tabs={[
                { id: 'itinerary', label: 'Sample Itinerary', content: sampleTab },
                { id: 'description', label: 'Description', content: descriptionTab },
                { id: 'inclusions', label: 'Trip Inclusions', content: inclusionsTab },
              ]}
            />
          </div>

          <aside className="lm-itin-side">
            <div className="lm-summary-card">
              <h2 className="lm-summary-title">Trip Snapshot</h2>
              <dl className="lm-summary-list">
                <div><dt>Duration</dt><dd>7 Day / 6 Night</dd></div>
                <div><dt>Destination</dt><dd>Italy</dd></div>
                <div><dt>Best for</dt><dd>All grade levels</dd></div>
                <div><dt>Style</dt><dd>Private, fully customizable</dd></div>
              </dl>
              <Link href="/get-a-quote/" className="ile-btn ile-btn--primary lm-summary-cta">Get a Quote</Link>
              <Link href="/international/italy/" className="lm-summary-link">More Italy packages {ArrowR}</Link>
            </div>

            <div className="lm-tip-card">
              <span className="ile-eyebrow">Italy Travel Tips</span>
              <h3>Tip: Book Early!</h3>
              <p>Booking early secures the best rates, preferred accommodations, and prime access to popular attractions. It also allows more time for trip planning, ensuring a smooth and stress-free travel experience.</p>
            </div>
          </aside>
        </div>
      </section>

      {/* Other Travel Packages */}
      <section className="ile-section ile-section--cream" aria-labelledby="related-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">More Packages</span>
            <h2 id="related-h" className="lm-h2-amber">OTHER TRAVEL PACKAGES</h2>
            <p className="ile-lead lm-center-lead">Discover more customizable Italy travel packages designed for educational tours and student groups.</p>
          </div>
          <div className="ilp-grid-3">
            {RELATED.map((r) => (
              <Link href={r.href} className="ilm-post" key={r.title}>
                <div className="ilm-post-img"><img src={r.img} alt="" loading="lazy" /></div>
                <div className="ilm-post-body">
                  <h3>{r.title}</h3>
                  <span className="ilm-post-more">View Itinerary {ArrowR}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BrochureBand />

      <JsonLd data={breadcrumb([
        { name: "Home", path: "/" },
        { name: "Destinations", path: "/destinations/" },
        { name: "International", path: "/international/" },
        { name: "Italy", path: "/international/italy/" },
        { name: "Classical Rome & Ancient History Tour", path: "/international/italy/classical-rome-ancient-history-tour/" },
      ])} />
      <JsonLd data={touristTrip({
        name: "Classical Rome & Ancient History Tour",
        description: "The Colosseum, Roman Forum, Palatine Hill, and Vatican: antiquity made real for history and Latin students.",
        path: "/international/italy/classical-rome-ancient-history-tour/",
        days: [],
      })} />
    </>
  )
}
