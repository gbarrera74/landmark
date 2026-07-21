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
  { title: "Day 1: Arrival & Top of the Rock Observatory", acts: ["Travel to NYC", "Guided City Walking Tour", "Visit Top of the Rock Observatory", "Group sit-down dinner", "Check into Hotel Accommodations with on-site security"] },
  { title: "Day 2: MMOA & Guggenheim Museum", acts: ["Hotel Breakfast", "Visit the Metropolitan Museum of Art", "Lunch Included", "Visit the Guggenheim Museum", "Group sit-down dinner", "Attend a Broadway Show", "Return to Hotel Accommodations"] },
  { title: "Day 3: Broadway Workshop & Departure", acts: ["Hotel Breakfast", "Attend a Broadway Workshop", "Lunch Included", "Depart for Home"] },
]

const WHY = [
  { label: "World-Class Museums", text: "Visit iconic institutions showcasing masterpieces from across the globe." },
  { label: "Interactive Workshops", text: "Engage in private, hands-on art experiences led by industry professionals." },
  { label: "Inspiring Atmosphere", text: "Discover the creative energy of NYC’s vibrant art scene." },
  { label: "Seamless Travel Experience", text: "Enjoy stress-free planning with included transportation, accommodations, meals, and expert tour management." },
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
  { title: "4 Day New York City School Trip", img: "/images/landmark/emms-nyc.jpg", href: "/usa-trips/new-york-city/4-day-new-york-city-school-trip/" },
  { title: "5 Day New York City Field Trip", img: "/images/landmark/murray-high-school-nyc.jpg", href: "/usa-trips/new-york-city/5-day-new-york-city-field-trip/" },
  { title: "NYC Performing Arts Tour", img: "/images/landmark/broadway-sign-nyc.jpg", href: "/usa-trips/new-york-city/nyc-performing-arts-tour/" },
]

const DESC_P1 = "Immerse your students in the artistic heartbeat of New York City with an unforgettable, art-focused journey! From world-renowned museums to hands-on creative workshops, this trip is designed to inspire and ignite artistic passion. Explore legendary institutions, engage in exclusive experiences, and let NYC’s creative energy fuel your students’ imagination."
const DESC_P2 = "Designed for aspiring artists, creatives, and art enthusiasts, our art field trips in NYC provide students with direct access to some of the most influential artistic institutions in the world. Through curated museum visits and engaging art gallery tours in NYC, students gain valuable insight into artistic techniques, cultural movements, and contemporary creative expression. This immersive educational experience encourages students to view art from new perspectives while connecting classroom learning with the dynamic and ever-evolving New York City art scene."

const sampleTab = (
  <>
    <p className="lm-itin-note">*Customize and personalize your Art-Focused Tour of NYC itinerary with our team.</p>
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
    <h2 style={{ marginTop: 0 }}>The Ultimate Art-Focused New York City Tour</h2>
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

export default function Itin_usa_trips__new_york_city_tours__art_focused_tour_nyc() {
  return (
    <>
      <PageHero
        eyebrow="New York City · 3 Day / 2 Night"
        title={<>Art-Focused Tour of NYC</>}
        subtitle="Immerse student groups in New York City's art scene through world-class museums, gallery tours, and hands-on creative workshops."
        image="/images/landmark/hero-nyc.jpg"
        breadcrumb={[
        { label: "Destinations", href: "/destinations/" },
        { label: "New York City", href: "/usa-trips/new-york-city/" },
        { label: "Art-Focused Tour of NYC" },
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
                <div><dt>Duration</dt><dd>3 Day / 2 Night</dd></div>
                <div><dt>Destination</dt><dd>New York City</dd></div>
                <div><dt>Best for</dt><dd>All grade levels</dd></div>
                <div><dt>Style</dt><dd>Private, fully customizable</dd></div>
              </dl>
              <Link href="/get-a-quote/" className="ile-btn ile-btn--primary lm-summary-cta">Get a Quote</Link>
              <Link href="/usa-trips/new-york-city/" className="lm-summary-link">More New York City packages {ArrowR}</Link>
            </div>

            <div className="lm-tip-card">
              <span className="ile-eyebrow">New York City Travel Tips</span>
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
            <p className="ile-lead lm-center-lead">Discover more customizable New York City travel packages designed for educational tours and student groups.</p>
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
        { name: "New York City", path: "/usa-trips/new-york-city/" },
        { name: "Art-Focused Tour of NYC", path: "/usa-trips/new-york-city/art-focused-tour-nyc/" },
      ])} />
      <JsonLd data={touristTrip({
        name: "Art-Focused Tour of NYC",
        description: "Immerse student groups in New York City's art scene through world-class museums, gallery tours, and hands-on creative workshops.",
        path: "/usa-trips/new-york-city/art-focused-tour-nyc/",
        days: [{ name: "Day 1: Arrival & Top of the Rock Observatory", description: "Travel to NYC; Guided City Walking Tour; Visit Top of the Rock Observatory; Group sit-down dinner; Check into Hotel Accommodations with on-site security" }, { name: "Day 2: MMOA & Guggenheim Museum", description: "Hotel Breakfast; Visit the Metropolitan Museum of Art; Lunch Included; Visit the Guggenheim Museum; Group sit-down dinner; Attend a Broadway Show; Return to Hotel Accommodations" }, { name: "Day 3: Broadway Workshop & Departure", description: "Hotel Breakfast; Attend a Broadway Workshop; Lunch Included; Depart for Home" }],
      })} />
    </>
  )
}
