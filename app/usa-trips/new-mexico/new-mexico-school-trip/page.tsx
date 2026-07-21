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
  { title: "Day 1: Texas Tech University & Buddy Holly Center", acts: ["Travel to Abilene, TX", "Lunch Allocation", "Self-Guided Tour of Texas Tech University", "Visit the Buddy Holly Center", "Dinner Allocation", "Check-in to Hotel Accommodations with Overnight Security (three nights)"] },
  { title: "Day 2: Albuquerque Museum & University of New Mexico", acts: ["Breakfast at the hotel", "Depart for Albuquerque", "Take the Sandia Peak Tramway", "Visit the Albuquerque Museum", "Self-Guided Tour of University of New Mexico", "Dinner Allocation", "Old Town Albuquerque Ghost Tours", "Return to Hotel Accommodations"] },
  { title: "Day 3: New Mexico State University & Meow Wolf- House of Eternal Return", acts: ["Breakfast at the hotel", "Guided Tour of New Mexico State University with Admissions Sessions", "Lunch Allocation", "Visit Meow Wolf- House of Eternal Return", "Visit the Museum of Indian Arts & Culture", "Dinner Allocation", "Return to Hotel Accommodations"] },
  { title: "Day 4: Departure Home", acts: ["Breakfast at the hotel", "Departure Home", "Lunch + Dinner stops en route"] },
]

const WHY = [
  { label: "Cultural Exploration", text: "Discover rich Native American and Hispanic heritage through historic landmarks, museums, and local traditions." },
  { label: "Hands-On Learning", text: "Engage with art, science, and history through interactive exhibits and guided educational experiences." },
  { label: "Scenic Inspiration", text: "Experience stunning desert landscapes and architectural beauty that enhance geography and environmental studies." },
  { label: "Meaningful Connections", text: "See how history, culture, and creativity shape the Southwest, bringing classroom concepts to life." },
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

const DESC_P1 = "Embark on an unforgettable New Mexico school trip where history, culture, and natural beauty come together in powerful and engaging ways. Known as the Land of Enchantment, New Mexico offers students immersive learning experiences rooted in Native American heritage, Spanish colonial history, art, science, and breathtaking desert landscapes. From historic plazas to interactive museums and unique cultural sites, students gain meaningful connections between classroom lessons and real-world exploration. Blending adventure with education, a New Mexico school trip sparks curiosity, encourages cultural appreciation, and creates lasting memories in one of the Southwest's most distinctive destinations."

const sampleTab = (
  <>
    <p className="lm-itin-note">*Customize and personalize your New Mexico School Trip itinerary with our team.</p>
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
    <h2 style={{ marginTop: 0 }}>New Mexico School Trip Experience for Students</h2>
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

export default function Itin_usa_trips__new_mexico_tours__new_mexico_school_trip() {
  return (
    <>
      <PageHero
        eyebrow="New Mexico · 4 Day / 3 Night"
        title={<>New Mexico School Trip</>}
        subtitle="Explore the Land of Enchantment as students connect with Native American heritage, Spanish colonial history, art, and stunning desert landscapes."
        image="/images/landmark/new-mexico-1.jpg"
        breadcrumb={[
        { label: "Destinations", href: "/destinations/" },
        { label: "New Mexico", href: "/usa-trips/new-mexico/" },
        { label: "New Mexico School Trip" },
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
                <div><dt>Destination</dt><dd>Santa Fe, New Mexico</dd></div>
                <div><dt>Best for</dt><dd>All grade levels</dd></div>
                <div><dt>Style</dt><dd>Private, fully customizable</dd></div>
              </dl>
              <Link href="/get-a-quote/" className="ile-btn ile-btn--primary lm-summary-cta">Get a Quote</Link>
              <Link href="/usa-trips/new-mexico/" className="lm-summary-link">More New Mexico packages {ArrowR}</Link>
            </div>

            <div className="lm-tip-card">
              <span className="ile-eyebrow">New Mexico Travel Tips</span>
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
        { name: "New Mexico", path: "/usa-trips/new-mexico/" },
        { name: "New Mexico School Trip", path: "/usa-trips/new-mexico/new-mexico-school-trip/" },
      ])} />
      <JsonLd data={touristTrip({
        name: "New Mexico School Trip",
        description: "Explore the Land of Enchantment as students connect with Native American heritage, Spanish colonial history, art, and stunning desert landscapes.",
        path: "/usa-trips/new-mexico/new-mexico-school-trip/",
        days: [{ name: "Day 1: Texas Tech University & Buddy Holly Center", description: "Travel to Abilene, TX; Lunch Allocation; Self-Guided Tour of Texas Tech University; Visit the Buddy Holly Center; Dinner Allocation; Check-in to Hotel Accommodations with Overnight Security (three nights)" }, { name: "Day 2: Albuquerque Museum & University of New Mexico", description: "Breakfast at the hotel; Depart for Albuquerque; Take the Sandia Peak Tramway; Visit the Albuquerque Museum; Self-Guided Tour of University of New Mexico; Dinner Allocation; Old Town Albuquerque Ghost Tours; Return to Hotel Accommodations" }, { name: "Day 3: New Mexico State University & Meow Wolf- House of Eternal Return", description: "Breakfast at the hotel; Guided Tour of New Mexico State University with Admissions Sessions; Lunch Allocation; Visit Meow Wolf- House of Eternal Return; Visit the Museum of Indian Arts & Culture; Dinner Allocation; Return to Hotel Accommodations" }, { name: "Day 4: Departure Home", description: "Breakfast at the hotel; Departure Home; Lunch + Dinner stops en route" }],
      })} />
    </>
  )
}
