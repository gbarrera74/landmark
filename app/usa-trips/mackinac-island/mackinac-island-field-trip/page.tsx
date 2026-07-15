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

const WHY = [
  { label: "Immersive Learning", text: "Experience history through guided tours and engaging educational programs." },
  { label: "Authentic Environments", text: "Visit preserved sites that offer insight into life from earlier eras." },
  { label: "Practical Connections", text: "Relate academic lessons to real-world traditions and environments." },
  { label: "Meaningful Experiences", text: "Create lasting educational moments that extend beyond the classroom." },
]

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
  { title: "Mackinac Island School Trip", img: "/images/landmark/mackinac-1.jpg", href: "/usa-trips/mackinac-island/mackinac-island-school-trip/" },
]

const DESC_P1 = "Embark on an enriching educational journey to Mackinac Island, carefully planned for school groups seeking a one-of-a-kind learning experience. This distinctive field trip allows students to explore an island where the past is preserved and learning happens through discovery. Guided visits to historic locations and interactive educational activities help students connect classroom concepts to authentic settings and lived history. Combining hands-on exploration with academic enrichment, a Mackinac Island field trip fosters curiosity, thoughtful engagement, and a deeper appreciation for learning, while offering memorable experiences in one of the nation’s most unique destinations."

const sampleTab = (
  <>
    <div className="ilp-infocard">
      <h3>A detailed day-by-day sample is on the way.</h3>
      <p style={{ color: 'var(--lm-ink-muted)', fontSize: 15, lineHeight: 1.7 }}>Every Landmark trip is fully customized to your group, so we build your ideal Mackinac Island Field Trip itinerary together around your dates, grade level, and goals. Reach out and our Travel Consultants will map out the perfect schedule.</p>
      <Link href="/get-a-quote/" className="ile-btn ile-btn--primary" style={{ marginTop: 8 }}>Plan Your Custom Itinerary</Link>
    </div>
  </>
)

const descriptionTab = (
  <div className="ilp-prose">
    <h2 style={{ marginTop: 0 }}>Mackinac Island Field Trip Experience for Students</h2>
    <p>{DESC_P1}</p>
    <h3>Why Choose This Trip?</h3>
    <ul>
      {WHY.map((w) => (
        <li key={w.label}><strong>{w.label}:</strong> {w.text}</li>
      ))}
    </ul>
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

export default function Itin_usa_trips__mackinac_island_tours__mackinac_island_field_trip() {
  return (
    <>
      <PageHero
        eyebrow="Mackinac Island · 2 Day / 1 Night"
        title={<>Mackinac Island Field Trip</>}
        subtitle="Give students a hands-on field trip to historic Mackinac Island, where preserved sites and interactive activities bring classroom lessons to life."
        image="/images/landmark/mackinac-2.jpg"
        breadcrumb={[
        { label: "Destinations", href: "/destinations/" },
        { label: "Mackinac Island", href: "/usa-trips/mackinac-island/" },
        { label: "Mackinac Island Field Trip" },
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
                <div><dt>Duration</dt><dd>2 Day / 1 Night</dd></div>
                <div><dt>Destination</dt><dd>Mackinac Island, MI</dd></div>
                <div><dt>Best for</dt><dd>All grade levels</dd></div>
                <div><dt>Style</dt><dd>Private, fully customizable</dd></div>
              </dl>
              <Link href="/get-a-quote/" className="ile-btn ile-btn--primary lm-summary-cta">Get a Quote</Link>
              <Link href="/usa-trips/mackinac-island/" className="lm-summary-link">More Mackinac Island packages {ArrowR}</Link>
            </div>

            <div className="lm-tip-card">
              <span className="ile-eyebrow">Mackinac Island Travel Tips</span>
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
            <p className="ile-lead lm-center-lead">Discover more customizable Mackinac Island travel packages designed for educational tours and student groups.</p>
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
        { name: "Mackinac Island", path: "/usa-trips/mackinac-island/" },
        { name: "Mackinac Island Field Trip", path: "/usa-trips/mackinac-island/mackinac-island-field-trip/" },
      ])} />
      <JsonLd data={touristTrip({
        name: "Mackinac Island Field Trip",
        description: "Give students a hands-on field trip to historic Mackinac Island, where preserved sites and interactive activities bring classroom lessons to life.",
        path: "/usa-trips/mackinac-island/mackinac-island-field-trip/",
        days: [],
      })} />
    </>
  )
}
