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
  { title: "Day 1: Arrival & GO RIO River Cruise", acts: ["Travel to San Antonio, TX", "Welcome to San Antonio! Meet your Landmark Leader!", "Lunch Included", "GO RIO River Cruise, Narrated Cruise", "Visit the San Fernando Cathedral", "Free time stroll through downtown", "Group sit-down dinner", "Check-in to Hotel Accommodations"] },
  { title: "Day 2: Witte Museum & Alamo City Ghost Tour", acts: ["Hotel Breakfast", "River walk and explore the vision of architect Robert H. Hugman", "Visit the Alamo, UNESCO World Heritage Sight, and learn about Spanish Missionaries", "Group lunch Included along the River", "Visit the Witte Museum", "Explore Hemisfair Park", "Group sit-down dinner", "Free time along the River Walk or Group’s Choice", "Alamo City Ghost Tour", "Return to Hotel Accommodations"] },
  { title: "Day 3: San Antonio Botanical Gardens & Spanish Governor’s Palace", acts: ["Hotel Breakfast", "Visit the San Antonio Botanical Gardens", "Briscoe Western Art Museum", "Lunch Included", "Visit Spanish Governor’s Palace", "Explore San Antonio Historic Market Square", "Group sit-down dinner", "Free time to explore King William District or walk along the river", "Illuminated Light Projection Show at the San Fernando Cathedral", "Return to Hotel Accommodations"] },
  { title: "Day 4: Natural Bridge Caverns & Departure", acts: ["Hotel Breakfast", "Visit the Natural Bridge Caverns", "Depart for Home"] },
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
  { title: "Intro to San Antonio Tour", img: "/images/landmark/san-antonio-1.jpg", href: "/usa-trips/san-antonio/intro-to-san-antonio-tour/" },
  { title: "3 Day San Antonio School Trip", img: "/images/landmark/san-antonio-2.jpg", href: "/usa-trips/san-antonio/3-day-san-antonio-school-trip/" },
]

const DESC_P1 = "Embark on an exciting four-day educational adventure in San Antonio, designed to captivate students of all grade levels! Discover the city’s rich history, iconic landmarks, and vibrant culture with visits to the Alamo, San Antonio Missions, and the scenic River Walk. From exploring hands-on exhibits at museums to experiencing the unique blend of Texan and Mexican heritage, this trip promises an immersive learning experience that will leave students inspired and excited about history, culture, and the dynamic spirit of San Antonio."
const DESC_P2 = "Among the most rewarding San Antonio field trips, this experience gives students the opportunity to connect classroom lessons with some of the most significant historical and cultural sites in Texas. Through our engaging San Antonio missions tours, students can explore the stories and architecture of these historic communities while gaining a deeper understanding of Spanish colonial history and the diverse cultures that shaped the region. The result is a memorable educational journey that encourages discovery, critical thinking, and a greater appreciation for the American Southwest."

const sampleTab = (
  <>
    <p className="lm-itin-note">*Customize and personalize your San Antonio Field Trip itinerary with our team.</p>
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
    <h2 style={{ marginTop: 0 }}>Explore the Ultimate San Antonio Field Trip Itinerary</h2>
    <p>{DESC_P1}</p>
    <p>{DESC_P2}</p>
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

export default function Itin_usa_trips__san_antonio_tours__san_antonio_field_trip() {
  return (
    <>
      <PageHero
        eyebrow="San Antonio · 4 Day / 3 Night"
        title={<>San Antonio Field Trip</>}
        subtitle="A four-day educational journey through San Antonio's historic missions, iconic Alamo, and scenic River Walk for student groups."
        image="/images/landmark/san-antonio-3.jpg"
        breadcrumb={[
        { label: "Destinations", href: "/destinations/" },
        { label: "San Antonio", href: "/usa-trips/san-antonio/" },
        { label: "San Antonio Field Trip" },
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
                <div><dt>Destination</dt><dd>San Antonio, Texas</dd></div>
                <div><dt>Best for</dt><dd>All grade levels</dd></div>
                <div><dt>Style</dt><dd>Private, fully customizable</dd></div>
              </dl>
              <Link href="/get-a-quote/" className="ile-btn ile-btn--primary lm-summary-cta">Get a Quote</Link>
              <Link href="/usa-trips/san-antonio/" className="lm-summary-link">More San Antonio packages {ArrowR}</Link>
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
        { name: "San Antonio", path: "/usa-trips/san-antonio/" },
        { name: "San Antonio Field Trip", path: "/usa-trips/san-antonio/san-antonio-field-trip/" },
      ])} />
      <JsonLd data={touristTrip({
        name: "San Antonio Field Trip",
        description: "A four-day educational journey through San Antonio's historic missions, iconic Alamo, and scenic River Walk for student groups.",
        path: "/usa-trips/san-antonio/san-antonio-field-trip/",
        days: [{ name: "Day 1: Arrival & GO RIO River Cruise", description: "Travel to San Antonio, TX; Welcome to San Antonio! Meet your Landmark Leader!; Lunch Included; GO RIO River Cruise, Narrated Cruise; Visit the San Fernando Cathedral; Free time stroll through downtown; Group sit-down dinner; Check-in to Hotel Accommodations" }, { name: "Day 2: Witte Museum & Alamo City Ghost Tour", description: "Hotel Breakfast; River walk and explore the vision of architect Robert H. Hugman; Visit the Alamo, UNESCO World Heritage Sight, and learn about Spanish Missionaries; Group lunch Included along the River; Visit the Witte Museum; Explore Hemisfair Park; Group sit-down dinner; Free time along the River Walk or Group’s Choice; Alamo City Ghost Tour; Return to Hotel Accommodations" }, { name: "Day 3: San Antonio Botanical Gardens & Spanish Governor’s Palace", description: "Hotel Breakfast; Visit the San Antonio Botanical Gardens; Briscoe Western Art Museum; Lunch Included; Visit Spanish Governor’s Palace; Explore San Antonio Historic Market Square; Group sit-down dinner; Free time to explore King William District or walk along the river; Illuminated Light Projection Show at the San Fernando Cathedral; Return to Hotel Accommodations" }, { name: "Day 4: Natural Bridge Caverns & Departure", description: "Hotel Breakfast; Visit the Natural Bridge Caverns; Depart for Home" }],
      })} />
    </>
  )
}
