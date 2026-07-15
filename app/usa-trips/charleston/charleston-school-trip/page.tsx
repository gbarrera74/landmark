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
  { label: "Interactive Learning", text: "Engage with history and culture through guided tours and student-focused activities." },
  { label: "Notable Sites", text: "Explore well-known landmarks and educational attractions throughout the city." },
  { label: "Curriculum Connections", text: "Support social studies learning with real-world experiences." },
  { label: "Lasting Memories", text: "Create meaningful moments while learning outside the classroom." },
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
  { title: "Charleston Field Trip", img: "/images/landmark/charleston-1.jpg", href: "/usa-trips/charleston/charleston-field-trip/" },
]

const DESC_P1 = "Set out on an exciting educational journey to Charleston! This enriching school trip invites students to explore historic streets, preserved landmarks, and engaging museums that bring America’s past and present together. Through guided tours and interactive learning opportunities, students connect classroom lessons to real places while discovering Charleston’s role in shaping the nation. Blending academic exploration with memorable experiences, a Charleston school trip encourages curiosity, critical thinking, and a deeper appreciation for history, culture, and community."

const sampleTab = (
  <>
    <div className="ilp-infocard">
      <h3>A detailed day-by-day sample is on the way.</h3>
      <p style={{ color: 'var(--lm-ink-muted)', fontSize: 15, lineHeight: 1.7 }}>Every Landmark trip is fully customized to your group, so we build your ideal Charleston School Trip itinerary together around your dates, grade level, and goals. Reach out and our Travel Consultants will map out the perfect schedule.</p>
      <Link href="/get-a-quote/" className="ile-btn ile-btn--primary" style={{ marginTop: 8 }}>Plan Your Custom Itinerary</Link>
    </div>
  </>
)

const descriptionTab = (
  <div className="ilp-prose">
    <h2 style={{ marginTop: 0 }}>Charleston School Trip Experience for Students</h2>
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

export default function Itin_usa_trips__charleston_sc__charleston_school_trip() {
  return (
    <>
      <PageHero
        eyebrow="Charleston · 2 Day / 1 Night"
        title={<>Charleston School Trip</>}
        subtitle="Students explore Charleston's historic streets, preserved landmarks, and engaging museums while connecting classroom lessons to the real places that shaped America."
        image="/images/landmark/charleston-2.jpg"
        breadcrumb={[
        { label: "Destinations", href: "/destinations/" },
        { label: "Charleston", href: "/usa-trips/charleston/" },
        { label: "Charleston School Trip" },
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
                <div><dt>Destination</dt><dd>Charleston, SC</dd></div>
                <div><dt>Best for</dt><dd>All grade levels</dd></div>
                <div><dt>Style</dt><dd>Private, fully customizable</dd></div>
              </dl>
              <Link href="/get-a-quote/" className="ile-btn ile-btn--primary lm-summary-cta">Get a Quote</Link>
              <Link href="/usa-trips/charleston/" className="lm-summary-link">More Charleston packages {ArrowR}</Link>
            </div>

            <div className="lm-tip-card">
              <span className="ile-eyebrow">Charleston Travel Tips</span>
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
            <p className="ile-lead lm-center-lead">Discover more customizable Charleston travel packages designed for educational tours and student groups.</p>
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
        { name: "Charleston", path: "/usa-trips/charleston/" },
        { name: "Charleston School Trip", path: "/usa-trips/charleston/charleston-school-trip/" },
      ])} />
      <JsonLd data={touristTrip({
        name: "Charleston School Trip",
        description: "Students explore Charleston's historic streets, preserved landmarks, and engaging museums while connecting classroom lessons to the real places that shaped America.",
        path: "/usa-trips/charleston/charleston-school-trip/",
        days: [],
      })} />
    </>
  )
}
