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
  { title: "Day 1: Arrival & Dillard University", acts: ["Travel to New Orleans, LA", "Welcome to New Orleans! Meet your Landmark Leader!", "Lunch Included", "Visit and Tour Dillard University", "Check into Hotel Accommodations", "Group sit-down dinner", "Return to Hotel Accommodations"] },
  { title: "Day 2: Laurel Valley Plantation & Zam’s Swamp Tour", acts: ["Hotel Breakfast", "Guided Walking Tour of Laurel Valley Plantation in Thibodaux, LA", "Lunch Included", "Swamp Tour with Zam’s Swamp Tours", "Visit the Riverwalk Outlets, Dinner: Cash Allocation Provided", "Return to Hotel Accommodations"] },
  { title: "Day 3: Xavier University & Southern University at New Orleans", acts: ["Hotel Breakfast", "Visit and Tour Xavier University", "Lunch Included", "Visit and Tour Southern University at New Orleans", "Take the Steamboat Natchez Cruise: Evening Jazz Cruise + Dinner", "Return to Hotel Accommodations"] },
  { title: "Day 4: Downtown New Orleans Guided Walking Tour & Departure", acts: ["Hotel Breakfast", "Downtown New Orleans Guided Walking Tour", "Lunch Included", "Depart for Home"] },
]

const WHY = [
  { label: "Rich Cultural Heritage", text: "Experience the unique blend of French, Spanish, Creole, and African influences that shape New Orleans’ vibrant culture." },
  { label: "Iconic Landmarks", text: "Visit historic sites like the French Quarter, Jackson Square, St. Louis Cathedral, and the Garden District for a deep dive into the city’s history." },
  { label: "Music and Arts", text: "Discover the birthplace of jazz with live performances, tours of Preservation Hall, and interactive music workshops." },
  { label: "World-Class Museums", text: "Engage in hands-on learning at the National WWII Museum, the Ogden Museum of Southern Art, and the Louisiana Children’s Museum." },
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
  { title: "New Orleans Student Tour", img: "/images/landmark/new-orleans-1.jpg", href: "/usa-trips/new-orleans/new-orleans-student-tour/" },
  { title: "3 Day New Orleans School Trip", img: "/images/landmark/new-orleans-2.jpg", href: "/usa-trips/new-orleans/3-day-new-orleans-school-trip/" },
]

const DESC_P1 = "Embark on an exciting four-day educational adventure in New Orleans, designed to captivate students of all grade levels! Dive into the city’s rich cultural tapestry and storied history with visits to the French Quarter, Jackson Square, and the historic St. Louis Cathedral. From exploring the National WWII Museum to experiencing the rhythms of jazz and the flavors of Creole cuisine, this immersive trip promises a hands-on learning experience that will leave students inspired and excited about history, music, and the vibrant culture of New Orleans."

const sampleTab = (
  <>
    <p className="lm-itin-note">*Customize and personalize your New Orleans Field Trip itinerary with our team.</p>
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
    <h2 style={{ marginTop: 0 }}>Explore the Ultimate New Orleans Field Trip Itinerary</h2>
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
      Work with our expert team of Landmark Travel Consultants to design a trip that fits your group&rsquo;s unique needs! Our packages start fully customizable and typically include:
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

export default function Itin_usa_trips__new_orleans_tours__new_orleans_field_trip() {
  return (
    <>
      <PageHero
        eyebrow="New Orleans · 4 Day / 3 Night"
        title={<>New Orleans Field Trip</>}
        subtitle="A four day educational journey through New Orleans culture, history, and HBCU campuses built for student groups."
        image="/images/landmark/new-orleans-3.jpg"
        breadcrumb={[
        { label: "Destinations", href: "/destinations/" },
        { label: "New Orleans", href: "/usa-trips/new-orleans/" },
        { label: "New Orleans Field Trip" },
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
                <div><dt>Destination</dt><dd>New Orleans, Louisiana</dd></div>
                <div><dt>Best for</dt><dd>All grade levels</dd></div>
                <div><dt>Style</dt><dd>Private, fully customizable</dd></div>
              </dl>
              <Link href="/get-a-quote/" className="ile-btn ile-btn--primary lm-summary-cta">Get a Quote</Link>
              <Link href="/usa-trips/new-orleans/" className="lm-summary-link">More New Orleans packages {ArrowR}</Link>
            </div>

            <div className="lm-tip-card">
              <span className="ile-eyebrow">New Orleans Travel Tips</span>
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
            <p className="ile-lead lm-center-lead">Discover more customizable New Orleans travel packages designed for educational tours and student groups.</p>
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
        { name: "New Orleans", path: "/usa-trips/new-orleans/" },
        { name: "New Orleans Field Trip", path: "/usa-trips/new-orleans/new-orleans-field-trip/" },
      ])} />
      <JsonLd data={touristTrip({
        name: "New Orleans Field Trip",
        description: "A four day educational journey through New Orleans culture, history, and HBCU campuses built for student groups.",
        path: "/usa-trips/new-orleans/new-orleans-field-trip/",
        days: [{ name: "Day 1: Arrival & Dillard University", description: "Travel to New Orleans, LA; Welcome to New Orleans! Meet your Landmark Leader!; Lunch Included; Visit and Tour Dillard University; Check into Hotel Accommodations; Group sit-down dinner; Return to Hotel Accommodations" }, { name: "Day 2: Laurel Valley Plantation & Zam’s Swamp Tour", description: "Hotel Breakfast; Guided Walking Tour of Laurel Valley Plantation in Thibodaux, LA; Lunch Included; Swamp Tour with Zam’s Swamp Tours; Visit the Riverwalk Outlets, Dinner: Cash Allocation Provided; Return to Hotel Accommodations" }, { name: "Day 3: Xavier University & Southern University at New Orleans", description: "Hotel Breakfast; Visit and Tour Xavier University; Lunch Included; Visit and Tour Southern University at New Orleans; Take the Steamboat Natchez Cruise: Evening Jazz Cruise + Dinner; Return to Hotel Accommodations" }, { name: "Day 4: Downtown New Orleans Guided Walking Tour & Departure", description: "Hotel Breakfast; Downtown New Orleans Guided Walking Tour; Lunch Included; Depart for Home" }],
      })} />
    </>
  )
}
