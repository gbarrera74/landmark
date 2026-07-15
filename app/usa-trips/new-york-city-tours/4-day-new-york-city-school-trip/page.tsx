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
  { title: "Day 1: Arrival & Times Square Exploration", acts: ["Travel to NYC", "Walking Tour of 5th Avenue, Rockefeller Plaza, and St. Patrick’s Cathedral", "Group sit-down dinner", "Times Square Exploration", "Check-in to Hotel Accommodations with onsite security"] },
  { title: "Day 2: Statue of Liberty & Brooklyn Bridge", acts: ["Hotel Breakfast", "Take the ferry to the Statue of Liberty and Ellis Island", "Lunch Included", "Visit the 9/11 Memorial & Museum", "Walk across the Brooklyn Bridge", "Group sit-down dinner", "Visit Top of the Rock Observatory", "Return to Hotel Accommodations"] },
  { title: "Day 3: United Nations Headquarters & Broadway Show", acts: ["Hotel Breakfast", "Guided Tour of United Nations Headquarters", "Lunch Included", "Visit The Metropolitan Museum of Art", "Group sit-down dinner", "Attend a Broadway Show", "Return to Hotel Accommodations"] },
  { title: "Day 4: Greenwich Village Food Tour & Departure", acts: ["Hotel Breakfast", "Exploration of High Line and Chelsea Market/Hudson Yards", "Greenwich Village Food Tour", "Depart for Home"] },
]

const WHY = [
  { label: "Iconic Landmarks", text: "Explore world-famous sites like the Statue of Liberty, Empire State Building, and Times Square for an unforgettable learning experience." },
  { label: "Cultural Diversity", text: "Immerse students in the vibrant cultural mosaic of NYC, with visits to Chinatown, Little Italy, and more." },
  { label: "Arts and Theater", text: "Experience the magic of Broadway shows and learn about the rich history of the performing arts in the city." },
  { label: "World-Class Museums", text: "Visit renowned institutions like the Metropolitan Museum of Art, the American Museum of Natural History, and the 9/11 Memorial & Museum for hands-on educational experiences." },
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
  { title: "5 Day New York City Field Trip", img: "/images/landmark/murray-high-school-nyc.jpg", href: "/usa-trips/new-york-city-tours/5-day-new-york-city-field-trip/" },
  { title: "Art-Focused Tour of NYC", img: "/images/landmark/hero-nyc.jpg", href: "/usa-trips/new-york-city-tours/art-focused-tour-nyc/" },
  { title: "NYC Performing Arts Tour", img: "/images/landmark/broadway-sign-nyc.jpg", href: "/usa-trips/new-york-city-tours/nyc-performing-arts-tour/" },
]

const DESC_P1 = "Embark on an unforgettable four-day educational journey in New York City, designed to captivate students of all grade levels! Discover the energy and excitement of the Big Apple while exploring iconic landmarks like the Statue of Liberty, Times Square, and Rockefeller Center. From visiting world-class museums and engaging in interactive tours to experiencing the magic of Broadway and the cultural diversity of vibrant neighborhoods, this trip promises an immersive, hands-on learning experience that will leave students inspired and excited about history, art, and urban life."

const sampleTab = (
  <>
    <p className="lm-itin-note">*Customize and personalize your 4 Day New York City School Trip itinerary with our team.</p>
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
    <h2 style={{ marginTop: 0 }}>The Ultimate 4 Day New York City School Trip- The Big Apple Exploration</h2>
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

export default function Itin_usa_trips__new_york_city_tours__4_day_new_york_city_school_trip() {
  return (
    <>
      <PageHero
        eyebrow="New York City · 4 Day / 3 Night"
        title={<>4 Day New York City School Trip</>}
        subtitle="Explore the Big Apple over four days as students discover iconic landmarks, world-class museums, Broadway, and vibrant neighborhoods."
        image="/images/landmark/emms-nyc.jpg"
        breadcrumb={[
        { label: "Destinations", href: "/destinations/" },
        { label: "New York City", href: "/usa-trips/new-york-city-tours/" },
        { label: "4 Day New York City School Trip" },
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
                <div><dt>Destination</dt><dd>New York City</dd></div>
                <div><dt>Best for</dt><dd>All grade levels</dd></div>
                <div><dt>Style</dt><dd>Private, fully customizable</dd></div>
              </dl>
              <Link href="/get-a-quote/" className="ile-btn ile-btn--primary lm-summary-cta">Get a Quote</Link>
              <Link href="/usa-trips/new-york-city-tours/" className="lm-summary-link">More New York City packages {ArrowR}</Link>
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
        { name: "New York City", path: "/usa-trips/new-york-city-tours/" },
        { name: "4 Day New York City School Trip", path: "/usa-trips/new-york-city-tours/4-day-new-york-city-school-trip/" },
      ])} />
      <JsonLd data={touristTrip({
        name: "4 Day New York City School Trip",
        description: "Explore the Big Apple over four days as students discover iconic landmarks, world-class museums, Broadway, and vibrant neighborhoods.",
        path: "/usa-trips/new-york-city-tours/4-day-new-york-city-school-trip/",
        days: [{ name: "Day 1: Arrival & Times Square Exploration", description: "Travel to NYC; Walking Tour of 5th Avenue, Rockefeller Plaza, and St. Patrick’s Cathedral; Group sit-down dinner; Times Square Exploration; Check-in to Hotel Accommodations with onsite security" }, { name: "Day 2: Statue of Liberty & Brooklyn Bridge", description: "Hotel Breakfast; Take the ferry to the Statue of Liberty and Ellis Island; Lunch Included; Visit the 9/11 Memorial & Museum; Walk across the Brooklyn Bridge; Group sit-down dinner; Visit Top of the Rock Observatory; Return to Hotel Accommodations" }, { name: "Day 3: United Nations Headquarters & Broadway Show", description: "Hotel Breakfast; Guided Tour of United Nations Headquarters; Lunch Included; Visit The Metropolitan Museum of Art; Group sit-down dinner; Attend a Broadway Show; Return to Hotel Accommodations" }, { name: "Day 4: Greenwich Village Food Tour & Departure", description: "Hotel Breakfast; Exploration of High Line and Chelsea Market/Hudson Yards; Greenwich Village Food Tour; Depart for Home" }],
      })} />
    </>
  )
}
