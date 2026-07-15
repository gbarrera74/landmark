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
  { title: "Day 1: Arrival & Independence Hall", acts: ["Travel to Philadelphia", "Arrival in Philly!", "Meet your Landmark Leaders!", "Boxed Lunch from Campo’s Philly Cheesesteaks", "Visit The Liberty Bell", "Visit the Independence Hall", "Admission to the Museum of the American Revolution", "Dinner and Games at Dave & Buster’s", "Check-in to Hotel Accommodations with onsite security"] },
  { title: "Day 2: Franklin Institute & Departure", acts: ["Hotel Breakfast", "Guided Tour of University of Pennsylvania", "Visit The Franklin Institute", "Lunch Allocation- Reading Terminal Market", "Visit Betsy Ross House", "Visit the Eastern State Penitentiary: Guide-led Tour", "Photo Opportunity at the Rocky Statue", "Boxed sandwich dinner", "Depart for Home"] },
]

const WHY = [
  { label: "Birthplace of American Democracy", text: "Explore historic landmarks like Independence Hall, the Liberty Bell, and Congress Hall to learn about the founding of the United States." },
  { label: "Rich Historical Legacy", text: "Walk the cobblestone streets of Old City and visit iconic sites such as the Betsy Ross House and Elfreth’s Alley." },
  { label: "World-Class Museums", text: "Engage in hands-on learning at institutions like the National Constitution Center, the Franklin Institute, and the Philadelphia Museum of Art." },
  { label: "Revolutionary War History", text: "Discover key moments of the American Revolution and learn about the role Philadelphia played in shaping the nation." },
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
  { title: "Philadelphia Student Tour", img: "/images/landmark/philadelphia-1.jpg", href: "/usa-trips/philadelphia-tours/philadelphia-student-tour/" },
  { title: "Historic Philadelphia School Trip", img: "/images/landmark/philadelphia-3.jpg", href: "/usa-trips/philadelphia-tours/historic-philadelphia-school-trip/" },
]

const DESC_P1 = "Embark on an exciting two-day educational adventure in Philadelphia, designed to inspire students of all grade levels! Discover the city’s rich history and iconic landmarks with visits to Independence Hall, the Liberty Bell, and the Betsy Ross House. From walking the historic streets of Old City to engaging with interactive exhibits at the National Constitution Center, this immersive trip promises a hands-on learning experience that will leave students excited about the birthplace of American democracy and the vibrant culture of Philadelphia."

const sampleTab = (
  <>
    <p className="lm-itin-note">*Customize and personalize your 2 Day Philadelphia School Trip itinerary with our team.</p>
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
    <h2 style={{ marginTop: 0 }}>Explore the Ultimate 2 Day Philadelphia School Trip Itinerary</h2>
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

export default function Itin_usa_trips__philadelphia_tours__2_day_philadelphia_school_trip() {
  return (
    <>
      <PageHero
        eyebrow="Philadelphia · 2 Day / 1 Night"
        title={<>2 Day Philadelphia School Trip</>}
        subtitle="Spend two days exploring the birthplace of American democracy with iconic landmarks, world-class museums, and hands-on history for student groups."
        image="/images/landmark/philadelphia-2.jpg"
        breadcrumb={[
        { label: "Destinations", href: "/destinations/" },
        { label: "Philadelphia", href: "/usa-trips/philadelphia-tours/" },
        { label: "2 Day Philadelphia School Trip" },
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
                <div><dt>Duration</dt><dd>2 Day / 1 Night</dd></div>
                <div><dt>Destination</dt><dd>Philadelphia, Pennsylvania</dd></div>
                <div><dt>Best for</dt><dd>All grade levels</dd></div>
                <div><dt>Style</dt><dd>Private, fully customizable</dd></div>
              </dl>
              <Link href="/get-a-quote/" className="ile-btn ile-btn--primary lm-summary-cta">Get a Quote</Link>
              <Link href="/usa-trips/philadelphia-tours/" className="lm-summary-link">More Philadelphia packages {ArrowR}</Link>
            </div>

            <div className="lm-tip-card">
              <span className="ile-eyebrow">Philadelphia Travel Tips</span>
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
            <p className="ile-lead lm-center-lead">Discover more customizable Philadelphia travel packages designed for educational tours and student groups.</p>
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
        { name: "Philadelphia", path: "/usa-trips/philadelphia-tours/" },
        { name: "2 Day Philadelphia School Trip", path: "/usa-trips/philadelphia-tours/2-day-philadelphia-school-trip/" },
      ])} />
      <JsonLd data={touristTrip({
        name: "2 Day Philadelphia School Trip",
        description: "Spend two days exploring the birthplace of American democracy with iconic landmarks, world-class museums, and hands-on history for student groups.",
        path: "/usa-trips/philadelphia-tours/2-day-philadelphia-school-trip/",
        days: [{ name: "Day 1: Arrival & Independence Hall", description: "Travel to Philadelphia; Arrival in Philly!; Meet your Landmark Leaders!; Boxed Lunch from Campo’s Philly Cheesesteaks; Visit The Liberty Bell; Visit the Independence Hall; Admission to the Museum of the American Revolution; Dinner and Games at Dave & Buster’s; Check-in to Hotel Accommodations with onsite security" }, { name: "Day 2: Franklin Institute & Departure", description: "Hotel Breakfast; Guided Tour of University of Pennsylvania; Visit The Franklin Institute; Lunch Allocation- Reading Terminal Market; Visit Betsy Ross House; Visit the Eastern State Penitentiary: Guide-led Tour; Photo Opportunity at the Rocky Statue; Boxed sandwich dinner; Depart for Home" }],
      })} />
    </>
  )
}
