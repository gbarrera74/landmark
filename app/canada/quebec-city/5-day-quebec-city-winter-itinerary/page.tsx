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
  { title: "Day 1: Arrival & Château Frontenac", acts: ["Travel to Quebec City.", "Check into Hotel Accommodations.", "Guided Quebec City Walking Tour.", "Enjoy a sit-down dinner.", "Take a group photo on the boardwalk outside the Château Frontenac.", "Return to Hotel Accommodations with Overnight Security."] },
  { title: "Day 2: La Citadelle de Québec & Village Vacances", acts: ["Breakfast at Café Buade.", "Visit La Citadelle de Québec.", "Lunch at Les Galeries de la Capitale.", "Visit Village Vacances.", "Enjoy a sit-down dinner and dancing at cabane à sucre.", "Return to Hotel Accommodations with Overnight Security."] },
  { title: "Day 3: Parc de la Chutes Montmorency & Basilique Ste-Anne", acts: ["Breakfast at le Cochon Dingue.", "Visit Parc de la Chutes Montmorency.", "Visit Basilique Ste-Anne.", "Return to the city for lunch on your own.", "Visit National Battlefields Commission’s Martello Tower.", "Scavenger Treasure Hunt in Upper Town.", "Enjoy a sit-down dinner.", "Explore les Glissades de la Terrasse.", "Return to Hotel Accommodations with Overnight Security."] },
  { title: "Day 4: Village Hurons Wendat & Morrin Center Quebec", acts: ["Breakfast at Breakfast at La Buche.", "Visit the Village Hurons Wendat.", "Return to the city for lunch on your own.", "Visit the Morrin Center Quebec.", "Enjoy a sit-down dinner at L’Entrecote St-Jean.", "Visit Plains of Abraham.", "Return to Hotel Accommodations with Overnight Security."] },
  { title: "Day 5: Musee du Fort & Departure", acts: ["Breakfast at le Cafe Les Mordus.", "Visit the Musee du Fort.", "Take the funiculaire to the Upper Town.", "Lunch on your own on rue du Petit Champlain.", "Take the ferry and say au revoir to Quebec City.", "Depart for home."] },
]

const WHY = [
  { label: "Rich History", text: "Explore Quebec City’s role as North America’s oldest fortified city with visits to landmarks like Old Quebec, the Plains of Abraham, and the Citadelle of Quebec." },
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
  { title: "3 Day Quebec City Trip Itinerary", img: "/images/landmark/quebec-1.jpg", href: "/canada/quebec-city/3-day-quebec-city-itinerary/" },
  { title: "4 Day Quebec City Trip Itinerary", img: "/images/landmark/quebec-1.jpg", href: "/canada/quebec-city/4-day-quebec-city-itinerary/" },
  { title: "5 Day Quebec City Trip Itinerary", img: "/images/landmark/quebec-1.jpg", href: "/canada/quebec-city/5-day-quebec-city-itinerary/" },
]

const DESC_P1 = "Embark on an exciting five-day educational adventure in Quebec City, designed to immerse students in the magic of winter! Discover the rich history and breathtaking beauty of this UNESCO World Heritage Site with visits to Old Quebec, the iconic Château Frontenac, and the historic Plains of Abraham. From exploring the frozen splendor of Montmorency Falls to experiencing traditional winter activities like tobogganing, ice skating, and dogsledding, this trip promises an immersive, hands-on learning experience. With a visit to the world-famous Quebec Winter Carnival, students will leave inspired by history, culture, and the unforgettable winter wonderland of Quebec City."

const sampleTab = (
  <>
    <p className="lm-itin-note">*Customize and personalize your 5 Day Quebec City Winter Itinerary itinerary with our team.</p>
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
    <h2 style={{ marginTop: 0 }}>Explore the Ultimate 5 Day Quebec City Winter Itinerary</h2>
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

export default function Itin_international__canada__quebec_city__5_day_quebec_city_winter_itinerary() {
  return (
    <>
      <PageHero
        eyebrow="Quebec City · 5 Day / 4 Night"
        title={<>5 Day Quebec City Winter Itinerary</>}
        subtitle="Give students five winter days in Quebec City exploring historic landmarks, French-Canadian culture, and snowy outdoor adventures."
        image="/images/landmark/quebec-winter.jpg"
        breadcrumb={[
        { label: "Destinations", href: "/destinations/" },
        { label: "Canada", href: "/canada/" },
        { label: "Quebec City", href: "/canada/quebec-city/" },
        { label: "5 Day Quebec City Winter Itinerary" },
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
                <div><dt>Destination</dt><dd>Quebec City</dd></div>
                <div><dt>Best for</dt><dd>All grade levels</dd></div>
                <div><dt>Style</dt><dd>Private, fully customizable</dd></div>
              </dl>
              <Link href="/get-a-quote/" className="ile-btn ile-btn--primary lm-summary-cta">Get a Quote</Link>
              <Link href="/canada/quebec-city/" className="lm-summary-link">More Quebec City packages {ArrowR}</Link>
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
        { name: "Canada", path: "/canada/" },
        { name: "Quebec City", path: "/canada/quebec-city/" },
        { name: "5 Day Quebec City Winter Itinerary", path: "/canada/quebec-city/5-day-quebec-city-winter-itinerary/" },
      ])} />
      <JsonLd data={touristTrip({
        name: "5 Day Quebec City Winter Itinerary",
        description: "Give students five winter days in Quebec City exploring historic landmarks, French-Canadian culture, and snowy outdoor adventures.",
        path: "/canada/quebec-city/5-day-quebec-city-winter-itinerary/",
        days: [{ name: "Day 1: Arrival & Château Frontenac", description: "Travel to Quebec City.; Check into Hotel Accommodations.; Guided Quebec City Walking Tour.; Enjoy a sit-down dinner.; Take a group photo on the boardwalk outside the Château Frontenac.; Return to Hotel Accommodations with Overnight Security." }, { name: "Day 2: La Citadelle de Québec & Village Vacances", description: "Breakfast at Café Buade.; Visit La Citadelle de Québec.; Lunch at Les Galeries de la Capitale.; Visit Village Vacances.; Enjoy a sit-down dinner and dancing at cabane à sucre.; Return to Hotel Accommodations with Overnight Security." }, { name: "Day 3: Parc de la Chutes Montmorency & Basilique Ste-Anne", description: "Breakfast at le Cochon Dingue.; Visit Parc de la Chutes Montmorency.; Visit Basilique Ste-Anne.; Return to the city for lunch on your own.; Visit National Battlefields Commission’s Martello Tower.; Scavenger Treasure Hunt in Upper Town.; Enjoy a sit-down dinner.; Explore les Glissades de la Terrasse.; Return to Hotel Accommodations with Overnight Security." }, { name: "Day 4: Village Hurons Wendat & Morrin Center Quebec", description: "Breakfast at Breakfast at La Buche.; Visit the Village Hurons Wendat.; Return to the city for lunch on your own.; Visit the Morrin Center Quebec.; Enjoy a sit-down dinner at L’Entrecote St-Jean.; Visit Plains of Abraham.; Return to Hotel Accommodations with Overnight Security." }, { name: "Day 5: Musee du Fort & Departure", description: "Breakfast at le Cafe Les Mordus.; Visit the Musee du Fort.; Take the funiculaire to the Upper Town.; Lunch on your own on rue du Petit Champlain.; Take the ferry and say au revoir to Quebec City.; Depart for home." }],
      })} />
    </>
  )
}
