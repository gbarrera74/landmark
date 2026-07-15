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
  { title: "Day 1: Street Hues Seattle Urban Tour & Ferris wheel ride on the Great Seattle Wheel", acts: ["Travel to Seattle", "Welcome to Seattle! Meet your Landmark Leader!", "Street Hues Seattle Urban Tour", "Lunch Allocation", "Visit the Seattle Art Museum", "Group sit-down dinner", "Ferris wheel ride on the Great Seattle Wheel", "Check-in to Hotel Accommodations with Overnight Security (three nights)"] },
  { title: "Day 2: Space Needle- Admission + Chihuly Garden and Glass & MoPOP Museum", acts: ["Breakfast at the hotel", "Visit the Space Needle- Admission + Chihuly Garden and Glass", "Lunch Allocation", "Visit MoPOP Museum", "Visit the Henry Art Gallery", "Visit the Kerry Park", "Group sit-down dinner", "Return to Hotel Accommodations"] },
  { title: "Day 3: Tacoma Art Museum & Hiking at Rainier National Park", acts: ["Breakfast at the hotel", "Guided Tour of Tacoma Art Museum", "Boxed Picnic Lunch", "Visit Paradise Visitor Center or Henry M. Jackson Memorial", "Hike in Mount Rainier National Park- Nisqually Vista Trail", "Group sit-down dinner", "Return to Hotel Accommodations"] },
  { title: "Day 4: Seattle Japanese Garden & Departure Home", acts: ["Breakfast at the hotel", "Visit the Seattle Japanese Garden", "Boxed Sandwich Lunch", "Visit the Seattle Asian Art Museum", "Departure Home"] },
]

const WHY = [
  { label: "Hands-On Learning", text: "Engage with science, technology, and innovation through interactive exhibits and guided experiences." },
  { label: "Dynamic Attractions", text: "Visit educational sites that highlight Seattle’s role in technology, sustainability, and culture." },
  { label: "Real-World Connections", text: "See how classroom concepts are applied in modern industries and environments." },
  { label: "Unforgettable Experiences", text: "Build lasting memories while learning beyond the classroom." },
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

]

const DESC_P1 = "Set off on an inspiring educational adventure to Seattle! This school trip introduces students to a city known for innovation, science, and culture through engaging attractions and interactive learning experiences. From exploring hands-on museums to discovering how technology, engineering, and environmental science shape the Pacific Northwest, Seattle offers students a fresh and exciting way to connect classroom learning to the real world."
const DESC_P2 = "Blending exploration with education, a Seattle school trip encourages curiosity, creativity, and critical thinking, while giving students memorable experiences in one of the country’s most forward-thinking cities."

const sampleTab = (
  <>
    <p className="lm-itin-note">*Customize and personalize your Seattle School Trip itinerary with our team.</p>
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
    <h2 style={{ marginTop: 0 }}>Seattle School Trip Experience for Students</h2>
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

export default function Itin_usa_trips__seattle__seattle_school_trip() {
  return (
    <>
      <PageHero
        eyebrow="Seattle · 4 Day / 3 Night"
        title={<>Seattle School Trip</>}
        subtitle="Explore Seattle's science, technology, and culture through hands-on museums, iconic landmarks, and inspiring real-world learning for student groups."
        image="/images/landmark/seattle-1.jpg"
        breadcrumb={[
        { label: "Destinations", href: "/destinations/" },
        { label: "Seattle", href: "/usa-trips/seattle/" },
        { label: "Seattle School Trip" },
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
                <div><dt>Destination</dt><dd>Seattle, WA</dd></div>
                <div><dt>Best for</dt><dd>All grade levels</dd></div>
                <div><dt>Style</dt><dd>Private, fully customizable</dd></div>
              </dl>
              <Link href="/get-a-quote/" className="ile-btn ile-btn--primary lm-summary-cta">Get a Quote</Link>
              <Link href="/usa-trips/seattle/" className="lm-summary-link">More Seattle packages {ArrowR}</Link>
            </div>

            <div className="lm-tip-card">
              <span className="ile-eyebrow">Seattle Travel Tips</span>
              <h3>Tip: Book Early!</h3>
              <p>Booking early secures the best rates, preferred accommodations, and prime access to popular attractions. It also allows more time for trip planning, ensuring a smooth and stress-free travel experience.</p>
            </div>
          </aside>
        </div>
      </section>


      <BrochureBand />

      <JsonLd data={breadcrumb([
        { name: "Home", path: "/" },
        { name: "Destinations", path: "/destinations/" },
        { name: "Seattle", path: "/usa-trips/seattle/" },
        { name: "Seattle School Trip", path: "/usa-trips/seattle/seattle-school-trip/" },
      ])} />
      <JsonLd data={touristTrip({
        name: "Seattle School Trip",
        description: "Explore Seattle's science, technology, and culture through hands-on museums, iconic landmarks, and inspiring real-world learning for student groups.",
        path: "/usa-trips/seattle/seattle-school-trip/",
        days: [{ name: "Day 1: Street Hues Seattle Urban Tour & Ferris wheel ride on the Great Seattle Wheel", description: "Travel to Seattle; Welcome to Seattle! Meet your Landmark Leader!; Street Hues Seattle Urban Tour; Lunch Allocation; Visit the Seattle Art Museum; Group sit-down dinner; Ferris wheel ride on the Great Seattle Wheel; Check-in to Hotel Accommodations with Overnight Security (three nights)" }, { name: "Day 2: Space Needle- Admission + Chihuly Garden and Glass & MoPOP Museum", description: "Breakfast at the hotel; Visit the Space Needle- Admission + Chihuly Garden and Glass; Lunch Allocation; Visit MoPOP Museum; Visit the Henry Art Gallery; Visit the Kerry Park; Group sit-down dinner; Return to Hotel Accommodations" }, { name: "Day 3: Tacoma Art Museum & Hiking at Rainier National Park", description: "Breakfast at the hotel; Guided Tour of Tacoma Art Museum; Boxed Picnic Lunch; Visit Paradise Visitor Center or Henry M. Jackson Memorial; Hike in Mount Rainier National Park- Nisqually Vista Trail; Group sit-down dinner; Return to Hotel Accommodations" }, { name: "Day 4: Seattle Japanese Garden & Departure Home", description: "Breakfast at the hotel; Visit the Seattle Japanese Garden; Boxed Sandwich Lunch; Visit the Seattle Asian Art Museum; Departure Home" }],
      })} />
    </>
  )
}
