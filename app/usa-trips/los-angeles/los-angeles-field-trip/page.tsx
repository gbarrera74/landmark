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
  { title: "Day 1: Travel to LA & Santa Monica Pier", acts: ["Welcome to LA!", "Meet your Landmark Leader!", "Lunch at the Original Farmers Market", "Exploration of the Grove", "Visit the LA Brea Tar Pits", "Motorcoach to the Santa Monica Pier", "Dinner and Exploration of the Santa Monica Pier", "Check-in to Hotel Accommodations"] },
  { title: "Day 2: Spend the day at Disneyland", acts: ["Breakfast at the hotel", "Spend the day at Disneyland", "Lunch + Dinner Included", "Return to Hotel Accommodations"] },
  { title: "Day 3: Spend the day at Universal Studios", acts: ["Breakfast at the hotel", "Spend the day at Universal Studios", "Lunch + Dinner Included", "Return to Hotel Accommodations"] },
  { title: "Day 4: Getty Center & Departure Home", acts: ["Breakfast at the hotel", "Visit the Getty Center", "Lunch in Westwood Village", "Departure Home"] },
]

const WHY = [
  { label: "Hands-On Learning", text: "Explore museums, science centers, and educational attractions through engaging and interactive experiences." },
  { label: "Iconic Destinations", text: "Visit well-known landmarks and cultural sites that highlight Los Angeles’ role in entertainment, art, and innovation." },
  { label: "Real-World Connections", text: "See how industries like film, media, and technology bring classroom concepts to life." },
  { label: "Memorable Experiences", text: "Create lasting memories while learning beyond the classroom in the vibrant city of Los Angeles." },
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
  { title: "Los Angeles School Trip", img: "/images/landmark/los-angeles-1.jpg", href: "/usa-trips/los-angeles/los-angeles-school-trip/" },
]

const DESC_P1 = "Set out on an engaging Los Angeles field trip where students explore a city known for creativity, innovation, and global influence. With world-famous attractions, interactive museums, and educational cultural sites, Los Angeles offers students exciting opportunities to learn beyond the classroom. From discovering the impact of the film and entertainment industries to exploring science, art, and history, students experience how creativity and technology shape one of the world’s most dynamic cities. By blending exploration with meaningful education, a Los Angeles field trip encourages curiosity, creativity, and critical thinking while giving students memorable experiences in a city that continues to influence culture around the world."

const sampleTab = (
  <>
    <p className="lm-itin-note">*Customize and personalize your Los Angeles Field Trip itinerary with our team.</p>
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
    <h2 style={{ marginTop: 0 }}>Los Angeles Field Trip Experience for Students</h2>
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

export default function Itin_usa_trips__los_angeles_tours__los_angeles_field_trip() {
  return (
    <>
      <PageHero
        eyebrow="Los Angeles · 4 Day / 3 Night"
        title={<>Los Angeles Field Trip</>}
        subtitle="Students explore Los Angeles through iconic attractions, world-class museums, and hands-on cultural experiences that spark creativity and learning."
        image="/images/landmark/los-angeles-2.jpg"
        breadcrumb={[
        { label: "Destinations", href: "/destinations/" },
        { label: "Los Angeles", href: "/usa-trips/los-angeles/" },
        { label: "Los Angeles Field Trip" },
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
                <div><dt>Destination</dt><dd>Los Angeles, CA</dd></div>
                <div><dt>Best for</dt><dd>All grade levels</dd></div>
                <div><dt>Style</dt><dd>Private, fully customizable</dd></div>
              </dl>
              <Link href="/get-a-quote/" className="ile-btn ile-btn--primary lm-summary-cta">Get a Quote</Link>
              <Link href="/usa-trips/los-angeles/" className="lm-summary-link">More Los Angeles packages {ArrowR}</Link>
            </div>

            <div className="lm-tip-card">
              <span className="ile-eyebrow">Los Angeles Travel Tips</span>
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
            <p className="ile-lead lm-center-lead">Discover more customizable Los Angeles travel packages designed for educational tours and student groups.</p>
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
        { name: "Los Angeles", path: "/usa-trips/los-angeles/" },
        { name: "Los Angeles Field Trip", path: "/usa-trips/los-angeles/los-angeles-field-trip/" },
      ])} />
      <JsonLd data={touristTrip({
        name: "Los Angeles Field Trip",
        description: "Students explore Los Angeles through iconic attractions, world-class museums, and hands-on cultural experiences that spark creativity and learning.",
        path: "/usa-trips/los-angeles/los-angeles-field-trip/",
        days: [{ name: "Day 1: Travel to LA & Santa Monica Pier", description: "Welcome to LA!; Meet your Landmark Leader!; Lunch at the Original Farmers Market; Exploration of the Grove; Visit the LA Brea Tar Pits; Motorcoach to the Santa Monica Pier; Dinner and Exploration of the Santa Monica Pier; Check-in to Hotel Accommodations" }, { name: "Day 2: Spend the day at Disneyland", description: "Breakfast at the hotel; Spend the day at Disneyland; Lunch + Dinner Included; Return to Hotel Accommodations" }, { name: "Day 3: Spend the day at Universal Studios", description: "Breakfast at the hotel; Spend the day at Universal Studios; Lunch + Dinner Included; Return to Hotel Accommodations" }, { name: "Day 4: Getty Center & Departure Home", description: "Breakfast at the hotel; Visit the Getty Center; Lunch in Westwood Village; Departure Home" }],
      })} />
    </>
  )
}
