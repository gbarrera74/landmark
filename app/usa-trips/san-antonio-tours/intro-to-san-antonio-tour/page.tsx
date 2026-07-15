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
  { title: "Day 1: Arrival", acts: ["Travel to San Antonio, TX", "Welcome to San Antonio!", "Meet your Landmark Leader!", "Lunch/Dinner Included", "Check-in to Hotel Accommodations with on-site security (Nightly)"] },
  { title: "Day 2: San Fernando Cathedral & The Alamo Mission", acts: ["Hotel Breakfast", "Visit San Fernando Cathedral", "Explore the Spanish Governor’s Palace", "Lunch Included", "Visit the Scobee Education and Challenge Center", "Explore the Alamo Mission", "Dinner: Student Expense", "Riverwalk Exploration", "Return to Hotel Accommodations"] },
  { title: "Day 3: Hemisfair and Tower of Americas & Alamo Ghost Hunt", acts: ["Hotel Breakfast", "Free Exploration of the San Antonio Mission San Juan and Mission Espada", "Lunch Included", "Explore the Hemisfair and Tower of Americas", "*Optional Activities: San Antonio Japanese Tea Garden or Buckhorn Saloon & Museum", "Group sit-down dinner", "Enjoy the Alamo Ghost Hunt", "Return to Hotel Accommodations"] },
  { title: "Day 4: Historic Market Square & GO RIO Riverwalk Boat Tour", acts: ["Hotel Breakfast", "Visit and Explore Historic Market Square", "Lunch Included", "Canopy Combo (Explorer Course and Zip Lines) * Weather permitting", "Enjoy the GO RIO Riverwalk Boat Tour", "Return to Hotel Accommodations", "Dinner & Activity: Pizza Party"] },
  { title: "Day 5: Departure", acts: ["Hotel Breakfast", "Depart for Home", "*Lunch/Dinner en route"] },
]

const WHY = [
  { label: "Historic Landmarks", text: "Explore the Alamo and San Antonio Missions, UNESCO World Heritage Sites, to learn about the city’s pivotal role in Texas and U.S. history." },
  { label: "Cultural Immersion", text: "Discover San Antonio’s rich blend of Mexican, Texan, and Indigenous cultures through its historic neighborhoods, cuisine, and traditions." },
  { label: "Interactive History Lessons", text: "Walk through the historic Market Square and La Villita to experience the city’s vibrant cultural heritage firsthand." },
  { label: "The Scenic River Walk", text: "Stroll along or take a boat tour of the iconic River Walk, a hub of history, culture, and entertainment." },
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
  { title: "3 Day San Antonio School Trip", img: "/images/landmark/san-antonio-2.jpg", href: "/usa-trips/san-antonio-tours/3-day-san-antonio-school-trip/" },
  { title: "San Antonio Field Trip", img: "/images/landmark/san-antonio-3.jpg", href: "/usa-trips/san-antonio-tours/san-antonio-field-trip/" },
]

const DESC_P1 = "Embark on an exciting five-day educational adventure in San Antonio, designed to inspire students of all grade levels! Discover the rich history, iconic landmarks, and cultural treasures of this vibrant city with visits to the Alamo, San Antonio Missions, and the historic River Walk. From exploring the city’s colonial heritage to engaging in hands-on learning experiences, this trip promises an immersive journey that will leave students excited about history, culture, and the unique spirit of San Antonio."

const sampleTab = (
  <>
    <p className="lm-itin-note">*Customize and personalize your Intro to San Antonio Tour itinerary with our team.</p>
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
    <h2 style={{ marginTop: 0 }}>Explore the Ultimate Intro to San Antonio School Trip Itinerary</h2>
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

export default function Itin_usa_trips__san_antonio_tours__intro_to_san_antonio_tour() {
  return (
    <>
      <PageHero
        eyebrow="San Antonio · 5 Day / 4 Night"
        title={<>Intro to San Antonio Tour</>}
        subtitle="Spend five days discovering San Antonio's landmarks, missions, and River Walk on an immersive educational adventure for student groups."
        image="/images/landmark/san-antonio-1.jpg"
        breadcrumb={[
        { label: "Destinations", href: "/destinations/" },
        { label: "San Antonio", href: "/usa-trips/san-antonio-tours/" },
        { label: "Intro to San Antonio Tour" },
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
                <div><dt>Duration</dt><dd>5 Day / 4 Night</dd></div>
                <div><dt>Destination</dt><dd>San Antonio, Texas</dd></div>
                <div><dt>Best for</dt><dd>All grade levels</dd></div>
                <div><dt>Style</dt><dd>Private, fully customizable</dd></div>
              </dl>
              <Link href="/get-a-quote/" className="ile-btn ile-btn--primary lm-summary-cta">Get a Quote</Link>
              <Link href="/usa-trips/san-antonio-tours/" className="lm-summary-link">More San Antonio packages {ArrowR}</Link>
            </div>

            <div className="lm-tip-card">
              <span className="ile-eyebrow">San Antonio Travel Tips</span>
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
            <p className="ile-lead lm-center-lead">Discover more customizable San Antonio travel packages designed for educational tours and student groups.</p>
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
        { name: "San Antonio", path: "/usa-trips/san-antonio-tours/" },
        { name: "Intro to San Antonio Tour", path: "/usa-trips/san-antonio-tours/intro-to-san-antonio-tour/" },
      ])} />
      <JsonLd data={touristTrip({
        name: "Intro to San Antonio Tour",
        description: "Spend five days discovering San Antonio's landmarks, missions, and River Walk on an immersive educational adventure for student groups.",
        path: "/usa-trips/san-antonio-tours/intro-to-san-antonio-tour/",
        days: [{ name: "Day 1: Arrival", description: "Travel to San Antonio, TX; Welcome to San Antonio!; Meet your Landmark Leader!; Lunch/Dinner Included; Check-in to Hotel Accommodations with on-site security (Nightly)" }, { name: "Day 2: San Fernando Cathedral & The Alamo Mission", description: "Hotel Breakfast; Visit San Fernando Cathedral; Explore the Spanish Governor’s Palace; Lunch Included; Visit the Scobee Education and Challenge Center; Explore the Alamo Mission; Dinner: Student Expense; Riverwalk Exploration; Return to Hotel Accommodations" }, { name: "Day 3: Hemisfair and Tower of Americas & Alamo Ghost Hunt", description: "Hotel Breakfast; Free Exploration of the San Antonio Mission San Juan and Mission Espada; Lunch Included; Explore the Hemisfair and Tower of Americas; *Optional Activities: San Antonio Japanese Tea Garden or Buckhorn Saloon & Museum; Group sit-down dinner; Enjoy the Alamo Ghost Hunt; Return to Hotel Accommodations" }, { name: "Day 4: Historic Market Square & GO RIO Riverwalk Boat Tour", description: "Hotel Breakfast; Visit and Explore Historic Market Square; Lunch Included; Canopy Combo (Explorer Course and Zip Lines) * Weather permitting; Enjoy the GO RIO Riverwalk Boat Tour; Return to Hotel Accommodations; Dinner & Activity: Pizza Party" }, { name: "Day 5: Departure", description: "Hotel Breakfast; Depart for Home; *Lunch/Dinner en route" }],
      })} />
    </>
  )
}
