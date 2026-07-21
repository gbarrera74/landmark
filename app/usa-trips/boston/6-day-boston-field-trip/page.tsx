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
  { title: "Day 1: Travel Day", acts: ["Sample Flight to Boston, MA"] },
  { title: "Day 2: Freedom Walking Tour & Fenway Park", acts: ["Arrival in Boston", "Breakfast Allocation", "Landmark Leader Led Walking Tour of the Freedom Trail", "Grab n’ Go Lunch at Quincy Market", "Guided Tour of Fenway Park", "Visit the Museum of Science", "Group sit-down dinner", "Return to Hotel Accommodations"] },
  { title: "Day 3: MIT Museum & Harvard University", acts: ["Hotel Breakfast", "Visit the MIT Museum", "Sit-down Lunch at MIT Dining Hall", "Guided Tour of Harvard University", "Visit Boston Tea Party Ships and Museum", "Dinner and Games at Level 99", "Return to Hotel Accommodations"] },
  { title: "Day 4: Paul Revere House & USS Constitution Museum", acts: ["Hotel Breakfast", "Visit The Paul Revere House", "Visit Old North Church", "Visit the Walden Pond State Reservation", "Boxed Sandwich Lunch", "Guided Trolley Tour of Lexington Battle Green", "Visit the USS Constitution Museum", "Group sit-down dinner", "Visit Mike’s Pastry- Traveler’s Expense", "Return to Hotel Accommodations"] },
  { title: "Day 5: Paul Revere House & USS Constitution Museum", acts: ["Hotel Breakfast", "Visit Bunker Hill Monument & Museum", "Lunch Allocation", "Visit the New England Aquarium", "Guided Duck Boat Tour", "Dinner and Play at In the Game"] },
  { title: "Day 6: Plimoth Patuxet Museums & Departure", acts: ["Hotel Breakfast", "Visit the Plimoth Patuxet Museums", "Box Lunch from Plimoth Patuxet Museum", "Meet your motorcoach and depart for the airport", "Dinner Allocation- $25.00 Allocation for Dinner at the Airport", "Sample Flight Departure Home"] },
]

const WHY = [
  { label: "Rich American History", text: "Walk the Freedom Trail, visit the Boston Tea Party Ships and Museum, and explore historic sites that shaped the nation’s founding." },
  { label: "World-Class Museums", text: "Engage in hands-on learning at the Museum of Science, Boston Children’s Museum, and the Isabella Stewart Gardner Museum." },
  { label: "Cultural and Academic Excellence", text: "Tour prestigious institutions like Harvard University and MIT, inspiring students with a glimpse of higher education." },
  { label: "Interactive Learning Opportunities", text: "Participate in workshops, reenactments, and guided tours that bring history and science to life." },
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
  { title: "3 Day Boston Field Trip", img: "/images/landmark/boston-duck-boat-tour.jpeg", href: "/usa-trips/boston/3-day-boston-field-trip/" },
  { title: "Boston & Newport School Trip", img: "/images/landmark/newport-mansion.jpg", href: "/usa-trips/boston/boston-and-newport-school-trip/" },
  { title: "Boston & Salem School Trip", img: "/images/landmark/salem-massachusetts.jpg", href: "/usa-trips/boston/boston-and-salem-school-trip/" },
]

const DESC_P1 = "Embark on an exciting six-day educational adventure in Boston, designed to inspire students of all grade levels! Discover the city’s rich history and cultural treasures as you walk the Freedom Trail, visit the Boston Tea Party Ships and Museum, and explore landmarks like the Old North Church and Bunker Hill Monument. From hands-on experiences at world-class museums to exploring the charm of Boston’s unique neighborhoods, this trip promises an immersive learning experience that will leave students excited about history, innovation, and the city’s revolutionary spirit."

const sampleTab = (
  <>
    <p className="lm-itin-note">*Customize and personalize your 6 Day Boston Field Trip itinerary with our team.</p>
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
    <h2 style={{ marginTop: 0 }}>Explore the Ultimate 6 Day Boston Field Trip Itinerary</h2>
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

export default function Itin_usa_trips__boston__6_day_boston_field_trip() {
  return (
    <>
      <PageHero
        eyebrow="Boston · 6 Day / 5 Night"
        title={<>6 Day Boston Field Trip</>}
        subtitle="A six-day journey through Boston's revolutionary history, world-class museums, and iconic university campuses built for student groups."
        image="/images/landmark/boston-waterfront-highrise.jpg"
        breadcrumb={[
        { label: "Destinations", href: "/destinations/" },
        { label: "Boston", href: "/usa-trips/boston/" },
        { label: "6 Day Boston Field Trip" },
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
                <div><dt>Duration</dt><dd>6 Day / 5 Night</dd></div>
                <div><dt>Destination</dt><dd>Boston, MA</dd></div>
                <div><dt>Best for</dt><dd>All grade levels</dd></div>
                <div><dt>Style</dt><dd>Private, fully customizable</dd></div>
              </dl>
              <Link href="/get-a-quote/" className="ile-btn ile-btn--primary lm-summary-cta">Get a Quote</Link>
              <Link href="/usa-trips/boston/" className="lm-summary-link">More Boston packages {ArrowR}</Link>
            </div>

            <div className="lm-tip-card">
              <span className="ile-eyebrow">Boston Travel Tips</span>
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
            <p className="ile-lead lm-center-lead">Discover more customizable Boston travel packages designed for educational tours and student groups.</p>
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
        { name: "Boston", path: "/usa-trips/boston/" },
        { name: "6 Day Boston Field Trip", path: "/usa-trips/boston/6-day-boston-field-trip/" },
      ])} />
      <JsonLd data={touristTrip({
        name: "6 Day Boston Field Trip",
        description: "A six-day journey through Boston's revolutionary history, world-class museums, and iconic university campuses built for student groups.",
        path: "/usa-trips/boston/6-day-boston-field-trip/",
        days: [{ name: "Day 1: Travel Day", description: "Sample Flight to Boston, MA" }, { name: "Day 2: Freedom Walking Tour & Fenway Park", description: "Arrival in Boston; Breakfast Allocation; Landmark Leader Led Walking Tour of the Freedom Trail; Grab n’ Go Lunch at Quincy Market; Guided Tour of Fenway Park; Visit the Museum of Science; Group sit-down dinner; Return to Hotel Accommodations" }, { name: "Day 3: MIT Museum & Harvard University", description: "Hotel Breakfast; Visit the MIT Museum; Sit-down Lunch at MIT Dining Hall; Guided Tour of Harvard University; Visit Boston Tea Party Ships and Museum; Dinner and Games at Level 99; Return to Hotel Accommodations" }, { name: "Day 4: Paul Revere House & USS Constitution Museum", description: "Hotel Breakfast; Visit The Paul Revere House; Visit Old North Church; Visit the Walden Pond State Reservation; Boxed Sandwich Lunch; Guided Trolley Tour of Lexington Battle Green; Visit the USS Constitution Museum; Group sit-down dinner; Visit Mike’s Pastry- Traveler’s Expense; Return to Hotel Accommodations" }, { name: "Day 5: Paul Revere House & USS Constitution Museum", description: "Hotel Breakfast; Visit Bunker Hill Monument & Museum; Lunch Allocation; Visit the New England Aquarium; Guided Duck Boat Tour; Dinner and Play at In the Game" }, { name: "Day 6: Plimoth Patuxet Museums & Departure", description: "Hotel Breakfast; Visit the Plimoth Patuxet Museums; Box Lunch from Plimoth Patuxet Museum; Meet your motorcoach and depart for the airport; Dinner Allocation- $25.00 Allocation for Dinner at the Airport; Sample Flight Departure Home" }],
      })} />
    </>
  )
}
