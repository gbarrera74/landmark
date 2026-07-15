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
  { title: "Day 1: Arrival & Ice Skating", acts: ["Travel to Montreal", "Arrival in Montreal!", "Meet your Landmark Leaders!", "Check into Hotel Accommodations", "Landmark Leader Led Walking Orientation of Old Montreal", "Group sit-down dinner", "Evening Activity: Ice Skating at Patin Patin, Vieux-Port de Montréal", "Return to Hotel Accommodations with on-site security"] },
  { title: "Day 2: Notre Dame Basilica & Montreal Science Centre", acts: ["Group Breakfast", "Visit the Notre Dame Basilica", "Take a Curling Lesson with the Town Of Mount Royal Curling Club", "Self-Expense Lunch: Food Court at Centre Eaton, Underground City", "Admission to Montreal Science Centre", "Group Exploration/Shopping in Old Montreal", "Evening Activity and Dinner: Erablière Charbonneau", "Return to Hotel Accommodations"] },
  { title: "Day 3: Mount Royal & Departure", acts: ["Group Breakfast", "Tour the Bell Centre", "Drive up Mount Royal, Viewing Point of Montreal", "Student Expense Lunch at Time Out Market Montréal", "Visit the Biodome, Group Photo at the Biodome!", "Depart for Home: Dinner: Student Expense En Route"] },
]

const WHY = [
  { label: "French Language and Culture", text: "Immerse students in a bilingual environment where they can practice French while exploring the city’s unique blend of European and North American influences." },
  { label: "Historic Old Montreal", text: "Walk the cobblestone streets of Old Montreal and visit landmarks like Notre-Dame Basilica, Place Jacques-Cartier, and the Old Port." },
  { label: "World-Class Museums", text: "Engage in hands-on learning at the Montreal Museum of Fine Arts, the Biosphere, and the Pointe-à-Callière Archaeology Museum." },
  { label: "STEM Opportunities", text: "Explore science and technology at the Montreal Science Centre or learn about biodiversity at the Biodome and Botanical Gardens." },
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
  { title: "2 Day Montreal School Trip", img: "/images/landmark/montreal-1.jpg", href: "/international/canada/montreal/2-day-montreal-school-trip/" },
  { title: "Montreal Student Trip", img: "/images/landmark/montreal-hero.jpg", href: "/international/canada/montreal/montreal-student-trip/" },
]

const DESC_P1 = "Set out on an exciting three-day educational adventure in Montreal, designed to inspire students of all grade levels! Discover the city’s vibrant history, rich French-Canadian culture, and stunning architecture with visits to Old Montreal, the Notre-Dame Basilica, and Mount Royal. From engaging with interactive exhibits at world-class museums to enjoying immersive cultural experiences, this trip promises a hands-on learning journey that will leave students inspired and excited about history, language, and the unique charm of Montreal."

const sampleTab = (
  <>
    <p className="lm-itin-note">*Customize and personalize your 3 Day Montreal School Trip itinerary with our team.</p>
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
    <h2 style={{ marginTop: 0 }}>The Ultimate 3 Day Montreal School Trip Experience</h2>
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

export default function Itin_international__canada__montreal__3_day_montreal_school_trip() {
  return (
    <>
      <PageHero
        eyebrow="Montreal · 3 Day / 2 Night"
        title={<>3 Day Montreal School Trip</>}
        subtitle="Explore Old Montreal, world class museums, and French Canadian culture on an immersive three day educational adventure built for student groups."
        image="/images/landmark/montreal-2.jpg"
        breadcrumb={[
        { label: "Destinations", href: "/destinations/" },
        { label: "International", href: "/international/" },
        { label: "Canada", href: "/international/canada/" },
        { label: "Montreal", href: "/international/canada/montreal/" },
        { label: "3 Day Montreal School Trip" },
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
                <div><dt>Destination</dt><dd>Montreal, Canada</dd></div>
                <div><dt>Best for</dt><dd>All grade levels</dd></div>
                <div><dt>Style</dt><dd>Private, fully customizable</dd></div>
              </dl>
              <Link href="/get-a-quote/" className="ile-btn ile-btn--primary lm-summary-cta">Get a Quote</Link>
              <Link href="/international/canada/montreal/" className="lm-summary-link">More Montreal packages {ArrowR}</Link>
            </div>

            <div className="lm-tip-card">
              <span className="ile-eyebrow">Montreal Travel Tips</span>
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
            <p className="ile-lead lm-center-lead">Discover more customizable Montreal travel packages designed for educational tours and student groups.</p>
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
        { name: "Montreal", path: "/international/canada/montreal/" },
        { name: "3 Day Montreal School Trip", path: "/international/canada/montreal/3-day-montreal-school-trip/" },
      ])} />
      <JsonLd data={touristTrip({
        name: "3 Day Montreal School Trip",
        description: "Explore Old Montreal, world class museums, and French Canadian culture on an immersive three day educational adventure built for student groups.",
        path: "/international/canada/montreal/3-day-montreal-school-trip/",
        days: [{ name: "Day 1: Arrival & Ice Skating", description: "Travel to Montreal; Arrival in Montreal!; Meet your Landmark Leaders!; Check into Hotel Accommodations; Landmark Leader Led Walking Orientation of Old Montreal; Group sit-down dinner; Evening Activity: Ice Skating at Patin Patin, Vieux-Port de Montréal; Return to Hotel Accommodations with on-site security" }, { name: "Day 2: Notre Dame Basilica & Montreal Science Centre", description: "Group Breakfast; Visit the Notre Dame Basilica; Take a Curling Lesson with the Town Of Mount Royal Curling Club; Self-Expense Lunch: Food Court at Centre Eaton, Underground City; Admission to Montreal Science Centre; Group Exploration/Shopping in Old Montreal; Evening Activity and Dinner: Erablière Charbonneau; Return to Hotel Accommodations" }, { name: "Day 3: Mount Royal & Departure", description: "Group Breakfast; Tour the Bell Centre; Drive up Mount Royal, Viewing Point of Montreal; Student Expense Lunch at Time Out Market Montréal; Visit the Biodome, Group Photo at the Biodome!; Depart for Home: Dinner: Student Expense En Route" }],
      })} />
    </>
  )
}
