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
  { title: "Day 1: Travel & Arrival in Costa Rica", acts: ["Travel Day to Costa Rica", "Check into Hotel Accommodations", "Dinner included at Hotel Accommodations"] },
  { title: "Day 2: Sarapiqui & Reforestation Program", acts: ["Breakfast at Hotel", "Walk Departure to Sarapiqui", "Lunch at a local restaurant", "Reforestation Program", "Dinner at a local restaurant", "Check into Hotel Accommodations"] },
  { title: "Day 3: Horseback riding & Rafting Tour", acts: ["Breakfast at Hotel", "Horseback Riding Tour", "Lunch at a local restaurant", "Sarapiqui River Rafting Tour", "Dinner at a local restaurant", "Return to Hotel Accommodations"] },
  { title: "Day 4: Tirimbina Biological Station & Arenal Hanging Bridges Tour", acts: ["Breakfast at Hotel", "Tirimbina Biological Station: Rain Forest and Cacao Tour", "Lunch at a local restaurant", "Arenal Hanging Bridges Tour", "Dinner at a local restaurant", "Check into Hotel Accommodations"] },
  { title: "Day 5: Zip Line Tour & Hot Springs", acts: ["Breakfast at Hotel", "Zip Line Tour", "Lunch at a local restaurant", "Arenal Lake: Kayak Tour", "Hot Springs at Baldi Hot Springs", "Dinner at Baldi Hot Springs", "Return to Hotel Accommodations"] },
  { title: "Day 6: Crocodile Safari Boat Tour & Alajuela", acts: ["Breakfast at Hotel", "Crocodile Safari Boat Tour", "Lunch at a local restaurant", "Transportation to Alajuela", "Dinner at the hotel", "Check into Hotel Accommodations"] },
  { title: "Day 7: Departure", acts: ["Breakfast at Hotel", "Travel day, return Home"] },
]

const WHY = [
  { label: "Biodiversity Hotspot", text: "Explore one of the most ecologically diverse countries in the world, home to lush rainforests, exotic wildlife, and breathtaking landscapes." },
  { label: "Hands-On Science Learning", text: "Engage in field studies on conservation, marine biology, and sustainability at national parks, wildlife reserves, and research centers." },
  { label: "Outdoor Adventure", text: "Experience thrilling activities like zip-lining through the rainforest, hiking volcanoes, whitewater rafting, and exploring cloud forests." },
  { label: "Cultural Immersion", text: "Connect with local communities, learn traditional crafts, and experience Costa Rican cuisine and customs." },
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
  { title: "6 Day Costa Rica School Trip", img: "/images/landmark/costa-rica-2.jpg", href: "/central-south-america/costa-rica/6-day-costa-rica-school-trip/" },
]

const DESC_P1 = "Embark on an exciting seven-day educational adventure in Costa Rica, designed to inspire students with the wonders of nature, culture, and sustainability! Explore breathtaking rainforests, volcanoes, and diverse ecosystems while engaging in hands-on learning experiences in conservation and wildlife protection. From thrilling outdoor adventures like zip-lining and hiking to immersive cultural experiences with local communities, this trip promises an unforgettable journey that will leave students excited about science, ecology, and global citizenship."

const sampleTab = (
  <>
    <p className="lm-itin-note">*Customize and personalize your 7 Day Costa Rica School Trip itinerary with our team.</p>
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
    <h2 style={{ marginTop: 0 }}>Explore the Ultimate 7 Day Costa Rica School Trip Itinerary</h2>
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

export default function Itin_international__costa_rica__7_day_costa_rica_school_trip() {
  return (
    <>
      <PageHero
        eyebrow="Costa Rica · 7 Day / 6 Night"
        title={<>7 Day Costa Rica School Trip</>}
        subtitle="A seven day journey through Costa Rica's rainforests, volcanoes, and wildlife, blending outdoor adventure with hands on lessons in conservation and culture."
        image="/images/landmark/costa-rica-1.jpg"
        breadcrumb={[
        { label: "Destinations", href: "/destinations/" },
        { label: "Central & South America", href: "/central-south-america/" },
        { label: "Costa Rica", href: "/central-south-america/costa-rica/" },
        { label: "7 Day Costa Rica School Trip" },
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
                <div><dt>Duration</dt><dd>7 Day / 6 Night</dd></div>
                <div><dt>Destination</dt><dd>Costa Rica</dd></div>
                <div><dt>Best for</dt><dd>All grade levels</dd></div>
                <div><dt>Style</dt><dd>Private, fully customizable</dd></div>
              </dl>
              <Link href="/get-a-quote/" className="ile-btn ile-btn--primary lm-summary-cta">Get a Quote</Link>
              <Link href="/central-south-america/costa-rica/" className="lm-summary-link">More Costa Rica packages {ArrowR}</Link>
            </div>

            <div className="lm-tip-card">
              <span className="ile-eyebrow">Costa Rica Travel Tips</span>
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
            <p className="ile-lead lm-center-lead">Discover more customizable Costa Rica travel packages designed for educational tours and student groups.</p>
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
        { name: "Central & South America", path: "/central-south-america/" },
        { name: "Costa Rica", path: "/central-south-america/costa-rica/" },
        { name: "7 Day Costa Rica School Trip", path: "/central-south-america/costa-rica/7-day-costa-rica-school-trip/" },
      ])} />
      <JsonLd data={touristTrip({
        name: "7 Day Costa Rica School Trip",
        description: "A seven day journey through Costa Rica's rainforests, volcanoes, and wildlife, blending outdoor adventure with hands on lessons in conservation and culture.",
        path: "/central-south-america/costa-rica/7-day-costa-rica-school-trip/",
        days: [{ name: "Day 1: Travel & Arrival in Costa Rica", description: "Travel Day to Costa Rica; Check into Hotel Accommodations; Dinner included at Hotel Accommodations" }, { name: "Day 2: Sarapiqui & Reforestation Program", description: "Breakfast at Hotel; Walk Departure to Sarapiqui; Lunch at a local restaurant; Reforestation Program; Dinner at a local restaurant; Check into Hotel Accommodations" }, { name: "Day 3: Horseback riding & Rafting Tour", description: "Breakfast at Hotel; Horseback Riding Tour; Lunch at a local restaurant; Sarapiqui River Rafting Tour; Dinner at a local restaurant; Return to Hotel Accommodations" }, { name: "Day 4: Tirimbina Biological Station & Arenal Hanging Bridges Tour", description: "Breakfast at Hotel; Tirimbina Biological Station: Rain Forest and Cacao Tour; Lunch at a local restaurant; Arenal Hanging Bridges Tour; Dinner at a local restaurant; Check into Hotel Accommodations" }, { name: "Day 5: Zip Line Tour & Hot Springs", description: "Breakfast at Hotel; Zip Line Tour; Lunch at a local restaurant; Arenal Lake: Kayak Tour; Hot Springs at Baldi Hot Springs; Dinner at Baldi Hot Springs; Return to Hotel Accommodations" }, { name: "Day 6: Crocodile Safari Boat Tour & Alajuela", description: "Breakfast at Hotel; Crocodile Safari Boat Tour; Lunch at a local restaurant; Transportation to Alajuela; Dinner at the hotel; Check into Hotel Accommodations" }, { name: "Day 7: Departure", description: "Breakfast at Hotel; Travel day, return Home" }],
      })} />
    </>
  )
}
