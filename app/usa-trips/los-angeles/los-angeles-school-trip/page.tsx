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
  { title: "Day 1: Travel to LA & Santa Monica Pier", acts: ["Welcome to LA! Meet your Landmark Leader!", "Lunch at the Original Farmers Market", "Exploration of the Grove", "Visit the LA Brea Tar Pits", "Motorcoach to the Santa Monica Pier", "Dinner and Exploration of the Santa Monica Pier", "Check-in to Hotel Accommodations"] },
  { title: "Day 2: Grammy Museum & Griffith Observatory", acts: ["Breakfast at the hotel", "Visit Olvera Street and el Pueblo de Los Angeles Historical Monument", "Exploration of Downtown's Architecture- Walt Disney Concert Hall + Bradbury Building", "Lunch at Grand Central Market", "Visit The Broad", "Visit The Grammy Museum", "Group sit-down dinner", "Evening view from the Griffith Observatory", "Return to Hotel Accommodations"] },
  { title: "Day 3: Film studio tour & Venice Beach", acts: ["Breakfast at the hotel", "Film studio tour for a behind-the-scenes look at filmmaking- Sony Pictures or Similar", "Lunch Allocation in Downtown Culver City", "Spend the afternoon at Venice Beach", "Explore the Venice Canals", "Group sit-down dinner in Venice", "Return to Hotel Accommodations"] },
  { title: "Day 4: California Science Center & Hollywood Walk of Fame", acts: ["Breakfast at the hotel", "Visit The California Science Center", "Lunch Allocation", "Visit the Hollywood Walk of Fame and the TCL Chinese Theatre", "Red Line Tour to see Iconic Film Spots", "Group sit-down dinner", "Watch a show at an iconic LA Theater such as the Pantages Theater, Walt Disney Concert Hall, Hollywood Bowl, or Ahmanson Theatre", "Return to Hotel Accommodations"] },
  { title: "Day 5: Getty Center & Departure Home", acts: ["Breakfast at the hotel", "Visit the Getty Center", "Lunch in Westwood Village", "Departure Home"] },
]

const WHY = [
  { label: "Hands-On Learning", text: "Explore museums, science centers, and educational exhibits designed to spark curiosity and discovery." },
  { label: "Iconic Attractions", text: "Visit well-known landmarks and cultural sites that highlight Los Angeles' role in film, media, and the arts." },
  { label: "Real-World Connections", text: "See how creative industries, technology, and culture come together in one of the world's leading entertainment capitals." },
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
  { title: "Los Angeles Field Trip", img: "/images/landmark/los-angeles-2.jpg", href: "/usa-trips/los-angeles/los-angeles-field-trip/" },
]

const DESC_P1 = "Embark on an exciting Los Angeles school trip where students discover a city known for creativity, entertainment, science, and cultural diversity. From exploring world-class museums to visiting famous landmarks tied to film, media, and innovation, Los Angeles provides engaging opportunities for students to see how art, technology, and storytelling influence the world around them. Interactive attractions and educational experiences help students connect classroom learning with real-world industries in one of the most influential cities in the United States."
const DESC_P2 = "By combining exploration with meaningful learning, a Los Angeles school trip inspires curiosity, creativity, and collaboration while giving students memorable experiences in a city that shapes global culture and entertainment."

const sampleTab = (
  <>
    <p className="lm-itin-note">*Customize and personalize your Los Angeles School Trip itinerary with our team.</p>
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
    <h2 style={{ marginTop: 0 }}>Los Angeles School Trip Experience for Students</h2>
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

export default function Itin_usa_trips__los_angeles_tours__los_angeles_school_trip() {
  return (
    <>
      <PageHero
        eyebrow="Los Angeles · 5 Day / 4 Night"
        title={<>Los Angeles School Trip</>}
        subtitle="Discover the creativity, science, and entertainment of Los Angeles on an unforgettable student journey through the city's iconic landmarks."
        image="/images/landmark/los-angeles-1.jpg"
        breadcrumb={[
        { label: "Destinations", href: "/destinations/" },
        { label: "Los Angeles", href: "/usa-trips/los-angeles/" },
        { label: "Los Angeles School Trip" },
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
        { name: "Los Angeles School Trip", path: "/usa-trips/los-angeles/los-angeles-school-trip/" },
      ])} />
      <JsonLd data={touristTrip({
        name: "Los Angeles School Trip",
        description: "Discover the creativity, science, and entertainment of Los Angeles on an unforgettable student journey through the city's iconic landmarks.",
        path: "/usa-trips/los-angeles/los-angeles-school-trip/",
        days: [{ name: "Day 1: Travel to LA & Santa Monica Pier", description: "Welcome to LA! Meet your Landmark Leader!; Lunch at the Original Farmers Market; Exploration of the Grove; Visit the LA Brea Tar Pits; Motorcoach to the Santa Monica Pier; Dinner and Exploration of the Santa Monica Pier; Check-in to Hotel Accommodations" }, { name: "Day 2: Grammy Museum & Griffith Observatory", description: "Breakfast at the hotel; Visit Olvera Street and el Pueblo de Los Angeles Historical Monument; Exploration of Downtown's Architecture- Walt Disney Concert Hall + Bradbury Building; Lunch at Grand Central Market; Visit The Broad; Visit The Grammy Museum; Group sit-down dinner; Evening view from the Griffith Observatory; Return to Hotel Accommodations" }, { name: "Day 3: Film studio tour & Venice Beach", description: "Breakfast at the hotel; Film studio tour for a behind-the-scenes look at filmmaking- Sony Pictures or Similar; Lunch Allocation in Downtown Culver City; Spend the afternoon at Venice Beach; Explore the Venice Canals; Group sit-down dinner in Venice; Return to Hotel Accommodations" }, { name: "Day 4: California Science Center & Hollywood Walk of Fame", description: "Breakfast at the hotel; Visit The California Science Center; Lunch Allocation; Visit the Hollywood Walk of Fame and the TCL Chinese Theatre; Red Line Tour to see Iconic Film Spots; Group sit-down dinner; Watch a show at an iconic LA Theater such as the Pantages Theater, Walt Disney Concert Hall, Hollywood Bowl, or Ahmanson Theatre; Return to Hotel Accommodations" }, { name: "Day 5: Getty Center & Departure Home", description: "Breakfast at the hotel; Visit the Getty Center; Lunch in Westwood Village; Departure Home" }],
      })} />
    </>
  )
}
