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
  { title: "Day 1: Arrival & Martello towers on the Plains of Abraham", acts: ["Travel to Quebec City", "Check into Hotel Accommodations", "Guided Quebec City Walking Tour", "Group sit-down dinner", "Discover the role of the Martello towers on the Plains of Abraham", "Return to Hotel Accommodations with on-site security"] },
  { title: "Day 2: Montmorency Falls & le Centre Morrin Center", acts: ["Breakfast at Le Cochon Dingue", "Walk to the Terrasse Dufferin, for a group photograph by a professional on the boardwalk outside the Château Frontenac", "Visit Montmorency Falls", "Lunch at Les Galeries de la Capitale", "Visit le Centre Morrin Center or La Citadelle de Québec", "Enjoy a sit-down dinner and dancing at l'Erabliere du Lac Beauport", "Return to Hotel Accommodations"] },
  { title: "Day 3: Musée du Fort & Departure", acts: ["Breakfast at le Cafe Les Mordus", "Visit the Musée du Fort or Chateau Frontenac", "Explore Lower Town and La Place Royale", "Lunch: Student Expense on la Rue du Petit Champlain", "Departure on the Québec City Ferry to Levis Side", "Depart for Home"] },
]

const WHY = [
  { label: "Rich History", text: "Explore Quebec City's role as North America's oldest fortified city with visits to landmarks like Old Quebec, the Plains of Abraham, and the Citadelle of Quebec." },
  { label: "UNESCO World Heritage Site", text: "Immerse students in the unique cultural and historical significance of this beautifully preserved city." },
  { label: "French Language and Culture", text: "Experience French-Canadian traditions, cuisine, and language, offering students a valuable cultural immersion opportunity." },
  { label: "Iconic Landmarks", text: "Visit the stunning Château Frontenac, cobblestone streets of Old Quebec, and the breathtaking Montmorency Falls." },
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
  { title: "4 Day Quebec City Trip Itinerary", img: "/images/landmark/quebec-1.jpg", href: "/international/canada/quebec-city/4-day-quebec-city-itinerary/" },
  { title: "5 Day Quebec City Trip Itinerary", img: "/images/landmark/quebec-1.jpg", href: "/international/canada/quebec-city/5-day-quebec-city-itinerary/" },
  { title: "3 Day Quebec City Winter Itinerary", img: "/images/landmark/quebec-winter.jpg", href: "/international/canada/quebec-city/3-day-quebec-city-winter-itinerary/" },
]

const DESC_P1 = "Embark on an exciting three-day educational adventure in Quebec City, designed to inspire students of all grade levels! Discover the rich history, iconic landmarks, and charming culture of this UNESCO World Heritage Site with visits to Old Quebec, the Plains of Abraham, and the iconic Château Frontenac. From exploring the cobblestone streets of the historic district to engaging in immersive activities that showcase French-Canadian traditions, this trip promises a hands-on learning experience that will leave students excited about history, culture, and the beauty of Quebec City."

const sampleTab = (
  <>
    <p className="lm-itin-note">*Customize and personalize your 3 Day Quebec City Trip Itinerary itinerary with our team.</p>
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
    <h2 style={{ marginTop: 0 }}>Explore the Ultimate 3 Day Quebec City Itinerary</h2>
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

export default function Itin_international__canada__quebec_city__3_day_quebec_city_itinerary() {
  return (
    <>
      <PageHero
        eyebrow="Quebec City · 3 Day / 2 Night"
        title={<>3 Day Quebec City Trip Itinerary</>}
        subtitle="Spend three days exploring Quebec City's fortified old town, iconic Château Frontenac, and French-Canadian culture on an immersive student adventure."
        image="/images/landmark/quebec-1.jpg"
        breadcrumb={[
        { label: "Destinations", href: "/destinations/" },
        { label: "International", href: "/international/" },
        { label: "Canada", href: "/international/canada/" },
        { label: "Quebec City", href: "/international/canada/quebec-city/" },
        { label: "3 Day Quebec City Trip Itinerary" },
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
                <div><dt>Destination</dt><dd>Quebec City, Canada</dd></div>
                <div><dt>Best for</dt><dd>All grade levels</dd></div>
                <div><dt>Style</dt><dd>Private, fully customizable</dd></div>
              </dl>
              <Link href="/get-a-quote/" className="ile-btn ile-btn--primary lm-summary-cta">Get a Quote</Link>
              <Link href="/international/canada/quebec-city/" className="lm-summary-link">More Quebec City packages {ArrowR}</Link>
            </div>

            <div className="lm-tip-card">
              <span className="ile-eyebrow">Quebec City Travel Tips</span>
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
            <p className="ile-lead lm-center-lead">Discover more customizable Quebec City travel packages designed for educational tours and student groups.</p>
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
        { name: "International", path: "/international/" },
        { name: "Canada", path: "/international/canada/" },
        { name: "Quebec City", path: "/international/canada/quebec-city/" },
        { name: "3 Day Quebec City Trip Itinerary", path: "/international/canada/quebec-city/3-day-quebec-city-itinerary/" },
      ])} />
      <JsonLd data={touristTrip({
        name: "3 Day Quebec City Trip Itinerary",
        description: "Spend three days exploring Quebec City's fortified old town, iconic Château Frontenac, and French-Canadian culture on an immersive student adventure.",
        path: "/international/canada/quebec-city/3-day-quebec-city-itinerary/",
        days: [{ name: "Day 1: Arrival & Martello towers on the Plains of Abraham", description: "Travel to Quebec City; Check into Hotel Accommodations; Guided Quebec City Walking Tour; Group sit-down dinner; Discover the role of the Martello towers on the Plains of Abraham; Return to Hotel Accommodations with on-site security" }, { name: "Day 2: Montmorency Falls & le Centre Morrin Center", description: "Breakfast at Le Cochon Dingue; Walk to the Terrasse Dufferin, for a group photograph by a professional on the boardwalk outside the Château Frontenac; Visit Montmorency Falls; Lunch at Les Galeries de la Capitale; Visit le Centre Morrin Center or La Citadelle de Québec; Enjoy a sit-down dinner and dancing at l'Erabliere du Lac Beauport; Return to Hotel Accommodations" }, { name: "Day 3: Musée du Fort & Departure", description: "Breakfast at le Cafe Les Mordus; Visit the Musée du Fort or Chateau Frontenac; Explore Lower Town and La Place Royale; Lunch: Student Expense on la Rue du Petit Champlain; Departure on the Québec City Ferry to Levis Side; Depart for Home" }],
      })} />
    </>
  )
}
