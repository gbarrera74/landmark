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
  { title: "Day 1: Travel to Wyoming & Ziplining or White Water Rafting", acts: ["Travel to Wyoming!", "Meet your Landmark Leader!", "Lunch Allocation", "Ziplining or White Water Rafting in Gallatin National Forest", "Group sit-down dinner", "Walk around Downtown Bozeman", "Return to Hotel Accommodations"] },
  { title: "Day 2: Yellowstone Hot Springs & Tower Falls", acts: ["Breakfast at the hotel", "Arrive at Yellowstone National Park!", "Explore the Yellowstone Hot Springs and The Historic Mammoth Hotel", "Exploration of Yellowstone River Picnic Trail", "Lunch", "See the Tower Falls", "Arrive at the Grand Canyon of Yellowstone", "Dinner Allocation", "Shopping in West Yellowstone", "Return to Hotel Accommodations"] },
  { title: "Day 3: Old Faithful & Geyser Basin", acts: ["Breakfast at the hotel", "Arrival at Old Faithful!", "Allow groups to choose which they want to explore; the hotel, Observation Trail, or Geyser Basin", "Lunch Allocation", "Arrive at Bridge Bay Marina; Hike Natural Bridge or Scenicruiser", "Guided walk of Geyser Basin", "Group sit-down dinner in Grant Village", "Spend time at the lake", "Return to Hotel Accommodations"] },
  { title: "Day 4: Jackson Hole & Depart for Home", acts: ["Breakfast Allocation", "Exploration of Jackson Hole", "Spend time at Jenny Lake", "Lunch", "Depart for Home"] },
]

const WHY = [
  { label: "Interactive Learning", text: "Explore geology, wildlife, and environmental science through engaging, real-world experiences." },
  { label: "Incredible Natural Wonders", text: "Visit geysers, waterfalls, hot springs, and scenic landscapes found only in Yellowstone." },
  { label: "Meaningful Connections", text: "Learn how ecosystems, conservation, and earth science work together in a living environment." },
  { label: "Lasting Memories", text: "Experience one of the nation's most inspiring outdoor classrooms while learning beyond the classroom." },
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
  ["& More!", ""],
]

const DESC_P1 = "Embark on an unforgettable Yellowstone National Park field trip where students discover one of the most remarkable natural landscapes in the country. This experience gives students the opportunity to explore famous geysers, colorful hot springs, abundant wildlife, and stunning scenery while learning about earth science, ecosystems, and conservation. Through hands-on exploration and guided experiences, students see how the natural world connects directly to what they learn in the classroom. A Yellowstone National Park field trip combines outdoor adventure with meaningful education, encouraging curiosity, observation, and critical thinking while creating memories students will carry long after the trip ends."

const sampleTab = (
  <>
    <p className="lm-itin-note">*Customize and personalize your Yellowstone National Park Field Trip itinerary with our team.</p>
    <div className="ilp-timeline lm-day-timeline">
      {DAYS.map((d, i) => (
        <div className="ilp-step" key={d.title}>
          <span className="ilp-step-num">{i + 1}</span>
          <h3>{d.title}</h3>
          <ul className="lm-day-acts">{d.acts.map((a) => (<li key={a}>{a}</li>))}</ul>
        </div>
      ))}
    </div>
  </>
)

const descriptionTab = (
  <div className="ilp-prose">
    <h2 style={{ marginTop: 0 }}>About This Trip</h2>
    <p>{DESC_P1}</p>
    <h3>Why Choose This Trip?</h3>
    <ul>
      {WHY.map((w) => (<li key={w.label}><strong>{w.label}:</strong> {w.text}</li>))}
    </ul>
    <p className="lm-sample-note"><em>Note: This is a SAMPLE provided for inspiration only. (Unless you love it!) Every trip we offer is fully customizable.</em></p>
    <Link href="/get-a-quote/" className="ile-btn ile-btn--primary">Plan Your Custom Trip Today</Link>
  </div>
)

const inclusionsTab = (
  <div className="ilp-infocard ilp-check">
    <h3>Trip Inclusions: Tailored Just for You</h3>
    <p style={{ marginBottom: 20, color: 'var(--lm-ink-muted)', fontSize: 15, lineHeight: 1.7 }}>Our packages start fully customizable and typically include:</p>
    <ul>
      {INCLUSIONS.map(([label, text]) => (<li key={label}><strong>{label}</strong>: {text}</li>))}
      <li><strong>&amp; More!</strong></li>
    </ul>
    <Link href="/get-a-quote/" className="ile-btn ile-btn--primary" style={{ marginTop: 8 }}>Get a Custom Quote</Link>
  </div>
)

export default function YellowstoneField() {
  return (
    <>
      <PageHero
        eyebrow="yellowstone national park field trip"
        title={<>Yellowstone National Park <em>Field Trip</em></>}
        subtitle="Explore geysers, hot springs, and wildlife on an unforgettable Yellowstone adventure built for curious students."
        image="/images/landmark/yellowstone-falls.jpg"
        breadcrumb={[{ label: 'Themes', href: '/themes/' }, { label: "Yellowstone National Park Field Trip" }]}
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
                <div><dt>Destination</dt><dd>Yellowstone National Park, WY</dd></div>
                <div><dt>Best for</dt><dd>All grade levels</dd></div>
                <div><dt>Style</dt><dd>Private, fully customizable</dd></div>
              </dl>
              <Link href="/get-a-quote/" className="ile-btn ile-btn--primary lm-summary-cta">Get a Quote</Link>
              <Link href="/themes/" className="lm-summary-link">More trip themes {ArrowR}</Link>
            </div>
          </aside>
        </div>
      </section>
      <BrochureBand />
      <JsonLd data={breadcrumb([
        { name: "Home", path: "/" },
        { name: "Themes", path: "/themes/" },
        { name: "Yellowstone National Park Field Trip", path: "/yellowstone-national-park-field-trip/" },
      ])} />
      <JsonLd data={touristTrip({ name: "Yellowstone National Park Field Trip", description: "Explore geysers, hot springs, and wildlife on an unforgettable Yellowstone adventure built for curious students.", path: "/yellowstone-national-park-field-trip/", days: [{ name: "Day 1: Travel to Wyoming & Ziplining or White Water Rafting", description: "Travel to Wyoming!; Meet your Landmark Leader!; Lunch Allocation; Ziplining or White Water Rafting in Gallatin National Forest; Group sit-down dinner; Walk around Downtown Bozeman; Return to Hotel Accommodations" }, { name: "Day 2: Yellowstone Hot Springs & Tower Falls", description: "Breakfast at the hotel; Arrive at Yellowstone National Park!; Explore the Yellowstone Hot Springs and The Historic Mammoth Hotel; Exploration of Yellowstone River Picnic Trail; Lunch; See the Tower Falls; Arrive at the Grand Canyon of Yellowstone; Dinner Allocation; Shopping in West Yellowstone; Return to Hotel Accommodations" }, { name: "Day 3: Old Faithful & Geyser Basin", description: "Breakfast at the hotel; Arrival at Old Faithful!; Allow groups to choose which they want to explore; the hotel, Observation Trail, or Geyser Basin; Lunch Allocation; Arrive at Bridge Bay Marina; Hike Natural Bridge or Scenicruiser; Guided walk of Geyser Basin; Group sit-down dinner in Grant Village; Spend time at the lake; Return to Hotel Accommodations" }, { name: "Day 4: Jackson Hole & Depart for Home", description: "Breakfast Allocation; Exploration of Jackson Hole; Spend time at Jenny Lake; Lunch; Depart for Home" }] })} />
    </>
  )
}
