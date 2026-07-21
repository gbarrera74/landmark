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
  { title: "Day 1: Travel Day & Guided Tour of Milan", acts: ["Optional Transportation: Shuttle from your school departure location to the departure airport", "Travel to Italy", "Meet your Landmark Leader in the Malpensa Airport arrival area", "Lunch: Student expense at leisure or opt into a scheduled lunch option", "Guided tour of Milan with a local guide", "Optional Admission: Castello Sforzesco (subject to availability at deposit)", "Optional Admission: The Last Supper (subject to availability at deposit)", "Return to hotel accommodations", "Seated dinner with a 3-course meal & water or similar"] },
  { title: "Day 2: Verona & Florence", acts: ["Breakfast at the hotel", "Travel by motorcoach to Verona, Italy", "Exploration and two-hour guided tour of Verona", "Lunch: Student expense at leisure or opt into a scheduled lunch option", "Travel by motorcoach to Florence, Italy", "Hotel accommodations"] },
  { title: "Day 3: Walking Tour of Florence & Pizza Making at a Tuscan Villa", acts: ["Breakfast at the hotel", "Guided walking tour of Florence with a local guide", "Skip-the-line admission to the Accademia", "End the guided tour with admission to the Cupola of the Duomo", "Optional Admission: Galileo Museum (subject to availability at deposit)", "Travel by motorcoach to a Tuscan villa", "Dinner and a pizza-making class at the Tuscan villa", "Return to hotel accommodations"] },
  { title: "Day 4: Group Exploration of Assisi & Rome", acts: ["Breakfast at the hotel", "Travel by motorcoach to Assisi", "Group exploration of Assisi", "Scheduled light lunch at an olive oil tasting room or similar", "Travel by motorcoach to Rome", "Dinner at hotel accommodations with a three-course meal or similar", "Return to hotel accommodations"] },
  { title: "Day 5: Pompeii & Rome", acts: ["Breakfast at the hotel", "Travel by motorcoach to Pompeii", "Visit Pompeii with admission to free exploration", "Optional Activity: Visit Pompeii with a licensed guide (subject to availability at deposit)", "Lunch at a local restaurant for Amalfi Coast-style pizza or similar", "Travel by motorcoach to Rome", "Dinner at hotel accommodations with a three-course meal or similar", "Return to hotel accommodations"] },
  { title: "Day 6: Ancient Rome & Gelato Tasting", acts: ["Breakfast at the hotel", "Local guided tour of Ancient Rome", "Skip-the-line admission to the Colosseum and Roman Forum", "Lunch: Student expense at leisure or opt into a scheduled lunch option", "Local guided tour of Eternal Rome — Spanish Steps, Trevi Fountain, Pantheon", "Participate in a gelato tasting!", "Return to hotel — free evening exploration", "Dinner: Student expense at leisure or opt into a scheduled dinner option"] },
  { title: "Day 7: Vatican Museum & St. Peter's Basilica", acts: ["Breakfast at the hotel", "Local guided tour of the Vatican Museum (mandatory Vatican guide included)", "Skip-the-line admission to the Vatican Museum, including the Sistine Chapel and St. Peter's Basilica", "Optional Activity: Climb the cupola atop St. Peter's Basilica (subject to availability at deposit)", "Afternoon at group leisure", "Farewell three-course dinner at a local restaurant or similar", "Return to hotel accommodations"] },
  { title: "Day 8: Departure", acts: ["Breakfast at the hotel", "Flight departure from Rome; flight arrival to your local airport"] },
]

const WHY = [
  { label: "Rich Historical Exploration", text: "Walk in the footsteps of ancient Romans at the Colosseum, Roman Forum, and Pompeii, bringing history to life." },
  { label: "Cultural Immersion", text: "Experience authentic Italian culture through food, language, and traditions in cities like Rome, Florence, and Milan." },
  { label: "Hands-On Culinary Experiences", text: "Learn to make traditional Italian dishes in cooking workshops and enjoy authentic pasta, pizza, and gelato." },
  { label: "Breathtaking Scenery", text: "Witness stunning landscapes from the rolling hills of Tuscany to the dramatic cliffs of the Amalfi Coast." },
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
  { title: "Classical Rome & Ancient History Tour", img: "/images/landmark/italy-rome.jpg", href: "/europe/italy/classical-rome-ancient-history-tour/" },
  { title: "Renaissance Florence Art & History Program", img: "/images/landmark/italy-florence.webp", href: "/europe/italy/renaissance-florence-art-program/" },
  { title: "Rome, Florence & Venice Grand Tour", img: "/images/landmark/italy-venice.webp", href: "/europe/italy/rome-florence-venice-grand-tour/" },
]

const DESC_P1 = "Set out on an exciting eight-day educational adventure through Italy, designed to inspire students with its rich history, breathtaking architecture, and world-renowned culture! Journey from Milan and Verona to Florence, Assisi, Rome, and the ancient streets of Pompeii, exploring iconic landmarks like the Colosseum, the Vatican, and the Accademia while indulging in authentic Italian cuisine and immersive cultural experiences. This trip promises a hands-on learning journey that will leave students excited about history, art, and the timeless beauty of Italy."

const sampleTab = (
  <>
    <p className="lm-itin-note">*Customize and personalize your 8 Day Italy School Trip itinerary with our team.</p>
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
    <h2 style={{ marginTop: 0 }}>The Ultimate 8 Day Italy School Trip for Students</h2>
    <p>{DESC_P1}</p>
    <h3>Why Choose an Italy Educational Tour?</h3>
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

export default function Itin_europe__italy__8_day_italy_school_trip() {
  return (
    <>
      <PageHero
        eyebrow="Italy · 8 Day / 7 Night"
        title={<>8 Day Italy School Trip</>}
        subtitle="Eight days across Milan, Verona, Florence, Assisi, Rome, and the Vatican: history, art, and authentic Italian culture for student groups."
        image="/images/landmark/italy-amalfi.jpg"
        breadcrumb={[
        { label: "Destinations", href: "/destinations/" },
        { label: "Europe", href: "/europe/" },
        { label: "Italy", href: "/europe/italy/" },
        { label: "8 Day Italy School Trip" },
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
                <div><dt>Duration</dt><dd>8 Day / 7 Night</dd></div>
                <div><dt>Destination</dt><dd>Italy</dd></div>
                <div><dt>Best for</dt><dd>All grade levels</dd></div>
                <div><dt>Style</dt><dd>Private, fully customizable</dd></div>
              </dl>
              <Link href="/get-a-quote/" className="ile-btn ile-btn--primary lm-summary-cta">Get a Quote</Link>
              <Link href="/europe/italy/" className="lm-summary-link">More Italy packages {ArrowR}</Link>
            </div>

            <div className="lm-tip-card">
              <span className="ile-eyebrow">Italy Travel Tips</span>
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
            <p className="ile-lead lm-center-lead">Discover more customizable Italy travel packages designed for educational tours and student groups.</p>
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
        { name: "Europe", path: "/europe/" },
        { name: "Italy", path: "/europe/italy/" },
        { name: "8 Day Italy School Trip", path: "/europe/italy/8-day-italy-school-trip/" },
      ])} />
      <JsonLd data={touristTrip({
        name: "8 Day Italy School Trip",
        description: "An eight-day educational tour of Italy for student groups, from Milan and Verona to Florence, Assisi, Rome, Pompeii, and the Vatican.",
        path: "/europe/italy/8-day-italy-school-trip/",
        days: DAYS.map((d) => ({ name: d.title, description: d.acts.join("; ") })),
      })} />
    </>
  )
}
