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
  { title: "Day 1: Arrival & Pilsen Neighborhood Mural Walking Tour", acts: ["Travel to Chicago", "Arrival in Chicago and Meet Landmark Leader", "Exploration for Lunch and Shopping in Pilsen Neighborhood- Student Expense", "Guided Pilsen Neighborhood Mural Walking Tour", "Explore Navy Pier + Shops", "Group sit-down dinner", "Attend an Evening Show", "Check-in to hotel accommodations"] },
  { title: "Day 2: John Hancock 360 Tour & Departure", acts: ["Hotel Breakfast", "John Hancock 360 Tour + Tilt Admission", "Group Exploration of the Magnificent Mile- Student Expense", "Visit Millenium Park and Buckingham Fountain", "Lunch Voucher", "Guided Docent Tour of the National Museum of Mexican Art", "Depart for Home"] },
]

const WHY = [
  { label: "Iconic Landmarks", text: "Explore famous sites like Millennium Park, the Willis Tower, Navy Pier, and the historic Chicago Riverwalk for a deeper connection to the city's rich culture." },
  { label: "World-Class Museums", text: "Discover hands-on learning opportunities at institutions like the Field Museum, the Art Institute of Chicago, and the Museum of Science and Industry." },
  { label: "Architecture and Innovation", text: "Experience Chicago's legendary architecture with guided tours, including a scenic riverboat cruise showcasing the city's skyline and engineering marvels." },
  { label: "Cultural Diversity", text: "Immerse students in the vibrant cultural tapestry of Chicago, exploring neighborhoods like Chinatown, Little Italy, and Pilsen." },
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
  { title: "Chicago Student Tour", img: "/images/landmark/chicago-1.jpg", href: "/usa-trips/chicago/chicago-student-tour/" },
  { title: "The Windy City Tour", img: "/images/landmark/chicago-2.jpg", href: "/usa-trips/chicago/the-windy-city-tour/" },
]

const DESC_P1 = "Embark on an exciting two-day educational journey in Chicago, designed to immerse students in Spanish language and culture! Explore the vibrant neighborhoods of the Windy City, including Pilsen and Little Village, to experience the rich heritage and traditions of Chicago's Latino communities. From engaging with cultural landmarks and visiting Spanish-language institutions to participating in interactive language workshops and authentic dining experiences, this trip promises an immersive, hands-on learning adventure that will leave students inspired and excited about language, culture, and global connections."
const DESC_P2 = "Language comes alive when students use it with confidence in real settings. Our Spanish language school trips to Chicago provide authentic cultural engagement that strengthens fluency and listening skills beyond the classroom. Neighborhood visits, guided tours, and interactive workshops are conducted in Spanish to create meaningful immersion. We tailor each Spanish immersion class trip to student proficiency levels to ensure participants feel supported yet challenged. Cultural institutions, cuisine experiences, and community interactions help learners connect language with lived experiences. Landmark Educational Tours carefully structures every element so that chaperones and teachers can prioritize communication goals, safety, and student growth. By the end of a Spanish language school trip, students are thinking, responding, and engaging in Spanish with greater independence and enthusiasm."

const sampleTab = (
  <>
    <p className="lm-itin-note">*Customize and personalize your Chicago Spanish Immersion School Trip itinerary with our team.</p>
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
    <h2 style={{ marginTop: 0 }}>Explore the Ultimate Chicago Spanish Immersion School Trip Itinerary</h2>
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

export default function Itin_usa_trips__chicago_tours__chicago_spanish_immersion_school_trip() {
  return (
    <>
      <PageHero
        eyebrow="Chicago · 3 Day / 2 Night"
        title={<>Chicago Spanish Immersion School Trip</>}
        subtitle="A two-day Spanish immersion adventure through Chicago's vibrant Latino neighborhoods, cultural landmarks, and interactive language experiences for student groups."
        image="/images/landmark/chicago-3.jpg"
        breadcrumb={[
        { label: "Destinations", href: "/destinations/" },
        { label: "Chicago", href: "/usa-trips/chicago/" },
        { label: "Chicago Spanish Immersion School Trip" },
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
                <div><dt>Destination</dt><dd>Chicago, Illinois</dd></div>
                <div><dt>Best for</dt><dd>All grade levels</dd></div>
                <div><dt>Style</dt><dd>Private, fully customizable</dd></div>
              </dl>
              <Link href="/get-a-quote/" className="ile-btn ile-btn--primary lm-summary-cta">Get a Quote</Link>
              <Link href="/usa-trips/chicago/" className="lm-summary-link">More Chicago packages {ArrowR}</Link>
            </div>

            <div className="lm-tip-card">
              <span className="ile-eyebrow">Chicago Travel Tips</span>
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
            <p className="ile-lead lm-center-lead">Discover more customizable Chicago travel packages designed for educational tours and student groups.</p>
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
        { name: "Chicago", path: "/usa-trips/chicago/" },
        { name: "Chicago Spanish Immersion School Trip", path: "/usa-trips/chicago/chicago-spanish-immersion-school-trip/" },
      ])} />
      <JsonLd data={touristTrip({
        name: "Chicago Spanish Immersion School Trip",
        description: "A two-day Spanish immersion adventure through Chicago's vibrant Latino neighborhoods, cultural landmarks, and interactive language experiences for student groups.",
        path: "/usa-trips/chicago/chicago-spanish-immersion-school-trip/",
        days: [{ name: "Day 1: Arrival & Pilsen Neighborhood Mural Walking Tour", description: "Travel to Chicago; Arrival in Chicago and Meet Landmark Leader; Exploration for Lunch and Shopping in Pilsen Neighborhood- Student Expense; Guided Pilsen Neighborhood Mural Walking Tour; Explore Navy Pier + Shops; Group sit-down dinner; Attend an Evening Show; Check-in to hotel accommodations" }, { name: "Day 2: John Hancock 360 Tour & Departure", description: "Hotel Breakfast; John Hancock 360 Tour + Tilt Admission; Group Exploration of the Magnificent Mile- Student Expense; Visit Millenium Park and Buckingham Fountain; Lunch Voucher; Guided Docent Tour of the National Museum of Mexican Art; Depart for Home" }],
      })} />
    </>
  )
}
