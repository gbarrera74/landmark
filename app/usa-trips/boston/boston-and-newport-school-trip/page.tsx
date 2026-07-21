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
  { title: "Day 1: Arrival & Boston Tea Party Ships and Museum", acts: ["Travel to Boston, MA", "Visit Boston Tea Party Ships & Museum", "Group sit-down dinner in Little Italy", "Check-in to Hotel Accommodations"] },
  { title: "Day 2: Cliff Walk Hike & Breakers Mansion", acts: ["Hotel Breakfast", "Depart to Newport, RI", "Cliff Walk Hike", "Take the Rail Explorers: Southern Circuit", "Lunch Included", "Visit Fort Adams State Park", "Visit the Breakers Mansion", "Take a Historic Boat Cruise", "Group sit-down dinner", "Depart to Boston", "Return to Hotel Accommodations"] },
  { title: "Day 3: Harvard University & Fenway Park", acts: ["Hotel Breakfast", "Visit the Museum of Science", "Lunch in Cambridge, MA", "Guided Tour of Harvard University", "Visit the Isabella Stewart Gardner Museum", "Guided Tour of Fenway Park", "Dinner and Games at Level 99", "Return to Hotel Accommodations"] },
  { title: "Day 4: Duck Boat Tour & Departure", acts: ["Hotel Breakfast", "Guided Duck Boat Tour", "Visit the USS Constitution Museum", "Lunch at Faneuil Hall", "Depart for Home"] },
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
  { title: "6 Day Boston Field Trip", img: "/images/landmark/boston-waterfront-highrise.jpg", href: "/usa-trips/boston/6-day-boston-field-trip/" },
  { title: "Boston & Salem School Trip", img: "/images/landmark/salem-massachusetts.jpg", href: "/usa-trips/boston/boston-and-salem-school-trip/" },
]

const DESC_P1 = "Embark on an exciting four-day educational adventure exploring the historic charm of Boston and the coastal elegance of Newport! Discover Boston’s rich history along the Freedom Trail, visit the Boston Tea Party Ships and Museum, and explore iconic landmarks like Paul Revere’s House. Then, journey to Newport, Rhode Island, to experience the grandeur of the Gilded Age with tours of its famous mansions and scenic waterfront. This immersive, hands-on learning experience combines history, culture, and breathtaking sights, leaving students inspired and excited about America’s past and coastal heritage."

const sampleTab = (
  <>
    <p className="lm-itin-note">*Customize and personalize your Boston &amp; Newport School Trip itinerary with our team.</p>
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
    <h2 style={{ marginTop: 0 }}>Explore the Ultimate Boston and Newport School Trip Itinerary</h2>
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

export default function Itin_usa_trips__boston__boston_and_newport_school_trip() {
  return (
    <>
      <PageHero
        eyebrow="Boston · 4 Day / 3 Night"
        title={<>Boston &amp; Newport School Trip</>}
        subtitle="A four day journey through Boston's founding history and Newport's Gilded Age mansions built for curious student groups."
        image="/images/landmark/newport-mansion.jpg"
        breadcrumb={[
        { label: "Destinations", href: "/destinations/" },
        { label: "Boston", href: "/usa-trips/boston/" },
        { label: "Boston & Newport School Trip" },
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
                <div><dt>Duration</dt><dd>4 Day / 3 Night</dd></div>
                <div><dt>Destination</dt><dd>Boston, MA &amp; Newport, RI</dd></div>
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
        { name: "Boston & Newport School Trip", path: "/usa-trips/boston/boston-and-newport-school-trip/" },
      ])} />
      <JsonLd data={touristTrip({
        name: "Boston & Newport School Trip",
        description: "A four day journey through Boston's founding history and Newport's Gilded Age mansions built for curious student groups.",
        path: "/usa-trips/boston/boston-and-newport-school-trip/",
        days: [{ name: "Day 1: Arrival & Boston Tea Party Ships and Museum", description: "Travel to Boston, MA; Visit Boston Tea Party Ships & Museum; Group sit-down dinner in Little Italy; Check-in to Hotel Accommodations" }, { name: "Day 2: Cliff Walk Hike & Breakers Mansion", description: "Hotel Breakfast; Depart to Newport, RI; Cliff Walk Hike; Take the Rail Explorers: Southern Circuit; Lunch Included; Visit Fort Adams State Park; Visit the Breakers Mansion; Take a Historic Boat Cruise; Group sit-down dinner; Depart to Boston; Return to Hotel Accommodations" }, { name: "Day 3: Harvard University & Fenway Park", description: "Hotel Breakfast; Visit the Museum of Science; Lunch in Cambridge, MA; Guided Tour of Harvard University; Visit the Isabella Stewart Gardner Museum; Guided Tour of Fenway Park; Dinner and Games at Level 99; Return to Hotel Accommodations" }, { name: "Day 4: Duck Boat Tour & Departure", description: "Hotel Breakfast; Guided Duck Boat Tour; Visit the USS Constitution Museum; Lunch at Faneuil Hall; Depart for Home" }],
      })} />
    </>
  )
}
