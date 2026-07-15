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
  { title: "Day 1: Arrival & Skyview Atlanta", acts: ["Sample Flight to Atlanta, GA", "Arrival in Atlanta, GA and meet your Landmark Leader", "Group sit-down dinner", "Ferris Wheel Ride on SkyView Atlanta", "Check into Hotel Accommodations with onsite security"] },
  { title: "Day 2: Alabama State University & Tuskegee University", acts: ["Hotel Breakfast", "Drive to Alabama State", "Guided Tour of ASU with Admissions Sessions", "Sit-down Lunch at ASU", "Visit the Legacy Museum", "Guided Tour of Tuskegee with Admissions Sessions", "Meet Motor Coach and head to Atlanta", "Dinner and games at Dave & Buster’s", "Return to Hotel Accommodations with onsite security"] },
  { title: "Day 3: Georgia Tech University & Clark Atlanta University", acts: ["Hotel Breakfast", "Visit Georgia Tech University-Scavenger Hunt", "Guided Tour of Clark Atlanta University with Admissions Sessions", "Boxed Sandwich Lunch", "Visit Martin Luther King, Jr. National Historic Site", "Roller Skating at Cascade Skating", "Group sit-down dinner", "Return to Hotel Accommodations with onsite security"] },
  { title: "Day 4: Morris Brown College & Departure", acts: ["Hotel Breakfast", "Guided Tour of Morris Brown College with Admissions Sessions", "Lunch Included", "Sample Flight Departure Home"] },
]

const WHY = [
  { label: "Cultural and Historical Significance", text: "Explore the rich history and contributions of Historically Black Colleges and Universities to education, culture, and civil rights." },
  { label: "Inspiration Through Legacy", text: "Learn about the achievements of notable alumni who have shaped industries, communities, and the nation." },
  { label: "Campus Life Experience", text: "Immerse students in vibrant campus cultures through guided tours, student panels, and interactive workshops." },
  { label: "Academic Excellence", text: "Discover HBCUs’ commitment to fostering leadership, innovation, and academic success." },
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
  { title: "Atlanta & Beyond", img: "/images/landmark/atlanta-skyline-night.jpg", href: "/usa-trips/atlanta/atlantabeyond/" },
  { title: "3 Day Atlanta Field Trip", img: "/images/landmark/atlanta-aerial.jpg", href: "/usa-trips/atlanta/3-day-atlanta-field-trip/" },
  { title: "2 Day Atlanta School Trip", img: "/images/landmark/atlanta-downtown.jpg", href: "/usa-trips/atlanta/2-day-atlanta-school-trip/" },
]

const DESC_P1 = "Embark on an inspiring fill in days-day educational journey to explore the rich history and vibrant campuses of Historically Black Colleges and Universities (HBCUs)! Visit prestigious institutions such as Spelman College, Morehouse College, Morris Brown College, and others to experience their legacy of academic excellence and cultural impact. From learning about their pivotal role in the Civil Rights Movement to engaging in interactive campus tours and workshops, this trip promises an immersive, hands-on learning experience that will leave students motivated and empowered by the history, achievements, and future of HBCUs."

const sampleTab = (
  <>
    <p className="lm-itin-note">*Customize and personalize your HBCU Field Trip itinerary with our team.</p>
    <div className="ilp-timeline lm-day-timeline">
      {DAYS.map((d, i) => (
        <div className="ilp-step" key={d.title}>
          <span className="ilp-step-num">{i + 1}</span>
          <h3>{d.title}</h3>
          <ul className="lm-day-acts">
            {d.acts.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </>
)

const descriptionTab = (
  <div className="ilp-prose">
    <h2 style={{ marginTop: 0 }}>Explore the Ultimate HBCU Field Trip Itinerary</h2>
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

export default function Itin_usa_trips__atlanta__hbcu_field_trip() {
  return (
    <>
      <PageHero
        eyebrow="Atlanta · 4 Day / 3 Night"
        title={<>HBCU Field Trip</>}
        subtitle="Take students across historic HBCU campuses in Atlanta and Alabama for guided tours, admissions sessions, and unforgettable cultural experiences."
        image="/images/landmark/hbcu-campus-building.jpg"
        breadcrumb={[
        { label: "Destinations", href: "/destinations/" },
        { label: "Atlanta", href: "/usa-trips/atlanta/" },
        { label: "HBCU Field Trip" },
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
                <div><dt>Duration</dt><dd>4 Day / 3 Night</dd></div>
                <div><dt>Destination</dt><dd>Atlanta, GA</dd></div>
                <div><dt>Best for</dt><dd>All grade levels</dd></div>
                <div><dt>Style</dt><dd>Private, fully customizable</dd></div>
              </dl>
              <Link href="/get-a-quote/" className="ile-btn ile-btn--primary lm-summary-cta">Get a Quote</Link>
              <Link href="/usa-trips/atlanta/" className="lm-summary-link">More Atlanta packages {ArrowR}</Link>
            </div>

            <div className="lm-tip-card">
              <span className="ile-eyebrow">Atlanta Travel Tips</span>
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
            <p className="ile-lead lm-center-lead">Discover more customizable Atlanta travel packages designed for educational tours and student groups.</p>
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
        { name: "Atlanta", path: "/usa-trips/atlanta/" },
        { name: "HBCU Field Trip", path: "/usa-trips/atlanta/hbcu-field-trip/" },
      ])} />
      <JsonLd data={touristTrip({
        name: "HBCU Field Trip",
        description: "Take students across historic HBCU campuses in Atlanta and Alabama for guided tours, admissions sessions, and unforgettable cultural experiences.",
        path: "/usa-trips/atlanta/hbcu-field-trip/",
        days: [{ name: "Day 1: Arrival & Skyview Atlanta", description: "Sample Flight to Atlanta, GA; Arrival in Atlanta, GA and meet your Landmark Leader; Group sit-down dinner; Ferris Wheel Ride on SkyView Atlanta; Check into Hotel Accommodations with onsite security" }, { name: "Day 2: Alabama State University & Tuskegee University", description: "Hotel Breakfast; Drive to Alabama State; Guided Tour of ASU with Admissions Sessions; Sit-down Lunch at ASU; Visit the Legacy Museum; Guided Tour of Tuskegee with Admissions Sessions; Meet Motor Coach and head to Atlanta; Dinner and games at Dave & Buster’s; Return to Hotel Accommodations with onsite security" }, { name: "Day 3: Georgia Tech University & Clark Atlanta University", description: "Hotel Breakfast; Visit Georgia Tech University-Scavenger Hunt; Guided Tour of Clark Atlanta University with Admissions Sessions; Boxed Sandwich Lunch; Visit Martin Luther King, Jr. National Historic Site; Roller Skating at Cascade Skating; Group sit-down dinner; Return to Hotel Accommodations with onsite security" }, { name: "Day 4: Morris Brown College & Departure", description: "Hotel Breakfast; Guided Tour of Morris Brown College with Admissions Sessions; Lunch Included; Sample Flight Departure Home" }],
      })} />
    </>
  )
}
