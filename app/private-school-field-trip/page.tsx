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

const DESC_P1 = "Planning a memorable and educational private school field trip give students the chance to step beyond the classroom and connect with history, culture, and the world around them. Expertly guided educational tours bring curriculum to life through hands-on experiences at historic landmarks, cultural institutions, and iconic destinations. With customizable itineraries tailored to your school's unique goals, every trip becomes a meaningful extension of the learning environment, one students and teachers will remember long after they return."

const sampleTab = (
  <>
    <div className="ilp-infocard">
      <h3>A detailed day-by-day sample is on the way.</h3>
      <p style={{ color: 'var(--lm-ink-muted)', fontSize: 15, lineHeight: 1.7 }}>Every Landmark trip is fully customized to your group. Reach out and our Travel Consultants will map out the perfect Private School Field Trip itinerary around your dates, grade level, and goals.</p>
      <Link href="/get-a-quote/" className="ile-btn ile-btn--primary" style={{ marginTop: 8 }}>Plan Your Custom Itinerary</Link>
    </div>
  </>
)

const descriptionTab = (
  <div className="ilp-prose">
    <h2 style={{ marginTop: 0 }}>About This Trip</h2>
    <p>{DESC_P1}</p>

    <p className="lm-sample-note"><em>Note: This is a SAMPLE provided for inspiration only. (Unless you love it!) Every trip we offer is fully customizable.</em></p>
    <Link href="/get-a-quote/" className="ile-btn ile-btn--primary">Plan Your Custom Trip Today</Link>
  </div>
)

const inclusionsTab = (
  <div className="ilp-infocard ilp-check">
    <h3>Trip Inclusions: Tailored Just for You</h3>
    <p style={{ marginBottom: 20, color: 'var(--lm-ink-muted)', fontSize: 15, lineHeight: 1.7 }}>Our packages start fully customizable and typically include:</p>
    <ul>
      {INCLUSIONS.map(([label, text]) => (<li key={label}><strong>{label}</strong>: {text}</li>))}
      <li><strong>&amp; More!</strong></li>
    </ul>
    <Link href="/get-a-quote/" className="ile-btn ile-btn--primary" style={{ marginTop: 8 }}>Get a Custom Quote</Link>
  </div>
)

export default function PrivateSchoolField() {
  return (
    <>
      <PageHero
        eyebrow="Embark with Landmark"
        title={<>Private School <em>Field Trip</em></>}
        subtitle="Take learning beyond the classroom with a private school field trip built around your students and your goals."
        image="/images/landmark/private-school-students.jpg"
        breadcrumb={[{ label: 'Themes', href: '/themes/' }, { label: "Private School Field Trip" }]}
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
                <div><dt>Duration</dt><dd>Fully customizable</dd></div>
                <div><dt>Destination</dt><dd>Private School Field Trips</dd></div>
                <div><dt>Best for</dt><dd>All grade levels</dd></div>
                <div><dt>Style</dt><dd>Private, fully customizable</dd></div>
              </dl>
              <Link href="/get-a-quote/" className="ile-btn ile-btn--primary lm-summary-cta">Get a Quote</Link>
              <Link href="/themes/" className="lm-summary-link">More trip themes {ArrowR}</Link>
            </div>
          </aside>
        </div>
      </section>
      <BrochureBand />
      <JsonLd data={breadcrumb([
        { name: "Home", path: "/" },
        { name: "Themes", path: "/themes/" },
        { name: "Private School Field Trip", path: "/private-school-field-trip/" },
      ])} />
      <JsonLd data={touristTrip({ name: "Private School Field Trip", description: "Take learning beyond the classroom with a private school field trip built around your students and your goals.", path: "/private-school-field-trip/", days: [] })} />
    </>
  )
}
