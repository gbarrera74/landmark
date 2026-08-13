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
  { title: "Day 1: Overnight Departure", acts: ["Depart the U.S. on an overnight flight to Dublin"] },
  { title: "Day 2: Arrival in Dublin", acts: ["Arrive in Dublin and begin exploring the city", "Visit Trinity College and view the Book of Kells in the Long Room", "Visit EPIC The Irish Emigration Museum", "Group dinner included", "Return to Hotel Accommodations"] },
  { title: "Day 3: Belfast & the Giant's Causeway", acts: ["Breakfast at the hotel", "Full-day excursion to Northern Ireland", "Guided tour of Belfast: the history of the Troubles, its shipbuilding heritage, the Peace Walls, political murals, and the Cathedral Quarter", "Visit the Giant's Causeway, a UNESCO World Heritage Site of 40,000 interlocking basalt columns", "Views along the Antrim Coast, including Carrick-a-Rede Rope Bridge and seaside villages", "Group dinner included", "Return to Hotel Accommodations"] },
  { title: "Day 4: Wicklow Mountains & the Rock of Cashel", acts: ["Breakfast at the hotel", "Visit Wicklow Mountains National Park", "Explore Glendalough, the 6th-century monastic settlement founded by St. Kevin: the round tower, church ruins, and lakeside trails", "Visit the Rock of Cashel, including Cormac's Chapel, the Gothic cathedral, and the round tower", "Continue south to Cork", "Group dinner included", "Return to Hotel Accommodations"] },
  { title: "Day 5: Blarney Castle & Killarney National Park", acts: ["Breakfast at the hotel", "Visit Blarney Castle and climb the tower to kiss the Blarney Stone", "Explore the castle gardens, grounds, and rock formations", "Traditional jaunting cart ride through Killarney National Park", "See Ross Castle, a 15th-century fortress on Lough Leane, and Muckross House", "Group dinner included", "Return to Hotel Accommodations"] },
  { title: "Day 6: Ring of Kerry", acts: ["Breakfast at the hotel", "Full-day journey along the Ring of Kerry, one of Ireland's most spectacular scenic routes", "Panoramic views of Dingle Bay and the MacGillycuddy's Reeks, Ireland's highest mountain range", "Stop in the village of Sneem and at viewpoints overlooking the Atlantic Ocean", "See traditional peat bogs, stone walls, and small farms of rural Ireland", "Continue through Killarney National Park to Ladies View", "Group dinner included", "Return to Hotel Accommodations"] },
  { title: "Day 7: Cliffs of Moher & the Burren", acts: ["Breakfast at the hotel", "Stop in Adare, known for its thatched cottages and medieval ruins", "Visit the Cliffs of Moher, rising more than 700 feet above the Atlantic, and the interactive visitor center", "Journey through the Burren, a unique limestone landscape with rare flora and ancient archaeological sites", "Arrive in Galway", "Group dinner included", "Return to Hotel Accommodations"] },
  { title: "Day 8: Galway & Newgrange", acts: ["Breakfast at the hotel", "Guided walking tour of Galway: the historic Latin Quarter, the Spanish Arch, and Eyre Square", "Visit Newgrange, a UNESCO World Heritage Site and passage tomb older than Stonehenge and the Great Pyramids", "Continue east to Dublin", "Group dinner included", "Return to Hotel Accommodations"] },
  { title: "Day 9: Return", acts: ["Breakfast at the hotel", "Depart for Home"] },
]

const WHY = [
  { label: "History Where It Happened", text: "Trace Ireland's story from Neolithic Newgrange and medieval Cashel to Belfast's modern transformation." },
  { label: "Iconic Landmarks", text: "Stand at the Giant's Causeway, the Cliffs of Moher, Blarney Castle, and the Book of Kells." },
  { label: "Natural Wonders", text: "Travel the Ring of Kerry, the Wicklow Mountains, the Burren, and Killarney National Park." },
  { label: "Living Culture", text: "Experience Irish storytelling, music, and village life in Galway, Adare, and beyond." },
]

const INCLUSIONS = [
  ["Private Group Tour", "Personalized experiences for your group only."],
  ["Custom Itinerary", "Built around your educational goals and preferences."],
  ["Transportation", "Safe, reliable, and comfortable travel."],
  ["Hotel Accommodations", "Convenient and student-friendly lodging."],
  ["Attractions", "Access to top-rated sites and experiences."],
  ["Meals", "Delicious and well-balanced dining options."],
  ["Tour Director", "Professional support throughout your journey."],
  ["Restaurant & Driver Gratuities", "Taken care of for your convenience."],
]

const DESC_P1 = "Embark on an unforgettable nine-day educational journey across Ireland, designed for students of all grade levels! From the illuminated pages of the Book of Kells to the basalt columns of the Giant's Causeway, this trip traces more than 5,000 years of history, culture, and landscape. Students explore ancient monastic settlements, medieval fortresses, and vibrant modern cities, gaining a deeper understanding of the island that shaped so much of the world's literature, music, and migration story."
const DESC_P2 = "An educational trip to Ireland brings the classroom to life in a way few destinations can. Students walk the grounds of Glendalough and the Rock of Cashel, hear the history of the Troubles from guides who lived it, and stand at the edge of the Cliffs of Moher. Along the Ring of Kerry and through the Burren, they see how geography shaped a people, while Galway, Adare, and Dublin reveal a culture still very much alive. Landmark Educational Tours coordinates every detail, from international flights to on-the-ground logistics, so educators can focus on the learning. Students return with perspective, confidence, and a global story they now feel part of."

const sampleTab = (
  <>
    <p className="lm-itin-note">*Customize and personalize your Historic Ireland itinerary with our team.</p>
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
    <h2 style={{ marginTop: 0 }}>Explore the Historic Ireland Itinerary</h2>
    <p>{DESC_P1}</p>
    <p>{DESC_P2}</p>
    <h3>Why Choose This Trip?</h3>
    <ul>
      {WHY.map((w) => (
        <li key={w.label}><strong>{w.label}:</strong> {w.text}</li>
      ))}
    </ul>
    <p className="lm-sample-note">
      <em>Note: This is a SAMPLE itinerary provided for inspiration only. (Unless you love it!) Every trip we offer is fully customizable, ensuring a personalized experience tailored to your school&rsquo;s educational goals. Full itinerary is subject to availability.</em>
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

export default function Itin_europe__ireland__historic_ireland() {
  return (
    <>
      <PageHero
        eyebrow="Ireland · 9 Day / 8 Night"
        title={<>Historic Ireland</>}
        subtitle="Nine days across Ireland, from the Book of Kells and the Giant's Causeway to Blarney Castle, the Ring of Kerry, and the Cliffs of Moher."
        image="/images/landmark/ireland-historic-blarney-castle.webp"
        breadcrumb={[
          { label: "Destinations", href: "/destinations/" },
          { label: "Europe", href: "/europe/" },
          { label: "Ireland", href: "/europe/ireland/" },
          { label: "Historic Ireland" },
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
                <div><dt>Duration</dt><dd>9 Day / 8 Night</dd></div>
                <div><dt>Destination</dt><dd>Ireland</dd></div>
                <div><dt>Best for</dt><dd>All grade levels</dd></div>
                <div><dt>Style</dt><dd>Private, fully customizable</dd></div>
              </dl>
              <Link href="/get-a-quote/" className="ile-btn ile-btn--primary lm-summary-cta">Get a Quote</Link>
              <Link href="/europe/ireland/" className="lm-summary-link">More Ireland packages {ArrowR}</Link>
            </div>

            <div className="lm-tip-card">
              <span className="ile-eyebrow">Ireland Travel Tips</span>
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
        { name: "Europe", path: "/europe/" },
        { name: "Ireland", path: "/europe/ireland/" },
        { name: "Historic Ireland", path: "/europe/ireland/historic-ireland/" },
      ])} />
      <JsonLd data={touristTrip({
        name: "Historic Ireland",
        description: "Nine days across Ireland, from the Book of Kells and the Giant's Causeway to Blarney Castle, the Ring of Kerry, and the Cliffs of Moher.",
        path: "/europe/ireland/historic-ireland/",
        days: DAYS.map((d) => ({ name: d.title, description: d.acts.join('; ') })),
      })} />
    </>
  )
}
