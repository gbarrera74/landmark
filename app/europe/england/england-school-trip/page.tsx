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
  { title: "Day 1: Overnight Departure", acts: ["Depart on an overnight flight to London"] },
  { title: "Day 2: Arrival in London", acts: ["Arrive at London Heathrow Airport and meet your Landmark Tour Director", "Panoramic sightseeing tour of Big Ben, Westminster Abbey, Parliament, and Buckingham Palace", "Lunch in Covent Garden", "Guided walking tour of Trafalgar Square and Whitehall", "Hotel check-in and time to freshen up", "Group welcome dinner", "Return to Hotel Accommodations"] },
  { title: "Day 3: Shakespeare's Globe & the West End", acts: ["Breakfast at the hotel", "Guided tour of Shakespeare's Globe Theatre and an interactive workshop", "Lunch at Borough Market", "Free time along the South Bank or an optional visit to Tate Modern", "Early dinner near the theatre district", "Attend a West End performance", "Return to Hotel Accommodations"] },
  { title: "Day 4: Literary & Historic London", acts: ["Breakfast at the hotel", "Guided visit to the British Library to see Shakespeare folios and Austen manuscripts", "Tour of the British Museum", "Lunch break", "Visit the Charles Dickens Museum or Keats House", "Photo opportunity at Platform 9¾ in King's Cross Station", "Group dinner", "Evening walking tour, leisure time, or shopping", "Return to Hotel Accommodations"] },
  { title: "Day 5: Stratford-upon-Avon", acts: ["Breakfast at the hotel", "Travel to Stratford-upon-Avon", "Visit Shakespeare's Birthplace and Holy Trinity Church", "Group lunch in town", "Tour Anne Hathaway's Cottage and gardens", "Backstage tour or workshop with the Royal Shakespeare Company", "Group dinner in Stratford-upon-Avon", "Royal Shakespeare Company performance, if the schedule aligns", "Return to Hotel Accommodations"] },
  { title: "Day 6: Bath", acts: ["Breakfast at the hotel", "Travel to Bath", "Walking tour of Georgian Bath, including the Royal Crescent and Pulteney Bridge", "Visit the Jane Austen Centre", "Group lunch and a traditional cream tea experience", "Explore the Roman Baths and the Pump Room", "Return to London", "Group dinner", "Return to Hotel Accommodations"] },
  { title: "Day 7: Oxford or Windsor Castle", acts: ["Breakfast at the hotel", "Option A — Oxford: guided tour of Oxford University and Christ Church College, a Harry Potter film site, lunch in Oxford, and a visit to The Kilns, the home of C.S. Lewis, or the Tolkien walking tour", "Option B — Windsor: tour Windsor Castle and St. George's Chapel, lunch in Windsor, and an optional stop at Harrods or in Notting Hill with free time in London", "Return to London", "Farewell dinner", "Return to Hotel Accommodations"] },
  { title: "Day 8: Return Home", acts: ["Breakfast at the hotel", "Depart for Home"] },
]

const WHY = [
  { label: "Literature Comes Alive", text: "Stand in Shakespeare's Globe, Poets' Corner, and the birthplace of the writer himself." },
  { label: "Live Theatre", text: "Attend a West End performance and go behind the scenes with the Royal Shakespeare Company." },
  { label: "Iconic Landmarks", text: "See Big Ben, Buckingham Palace, the Roman Baths, and the colleges of Oxford." },
  { label: "Beyond London", text: "Travel out to Stratford-upon-Avon, Georgian Bath, and Oxford for a fuller picture of England." },
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

const RELATED = [
  { title: "England Theatre, Literature & Culture", img: "/images/landmark/england-theatre-trafalgar-square.webp", href: "/europe/england/england-theatre-literature-culture/" },
]

const DESC_P1 = "Embark on an unforgettable eight-day educational adventure across England, designed for students of all grade levels! From the landmarks of London to the streets of Stratford-upon-Avon, Georgian Bath, and the colleges of Oxford, this trip brings English history, literature, and theatre to life. Students tour Shakespeare's Globe, attend a West End performance, walk through the British Museum and British Library, and see the places where some of the world's best-known writers lived and worked."
const DESC_P2 = "An educational trip to England connects classroom reading to the places that produced it. Students explore Shakespeare's birthplace and the Royal Shakespeare Company, visit the homes of Dickens, Keats, Tolkien, and C.S. Lewis, and stand inside Westminster Abbey and the Roman Baths. Along the way there is time to experience modern London too, from Covent Garden and Borough Market to the South Bank. Landmark Educational Tours coordinates every detail, from international flights to on-the-ground logistics, so educators can focus on the learning. Students return with a deeper appreciation for literature, history, and the wider world."

const sampleTab = (
  <>
    <p className="lm-itin-note">*Customize and personalize your England School Trip itinerary with our team.</p>
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
    <h2 style={{ marginTop: 0 }}>Explore the England School Trip Itinerary</h2>
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

export default function Itin_europe__england__england_school_trip() {
  return (
    <>
      <PageHero
        eyebrow="England · 8 Day / 7 Night"
        title={<>England School Trip</>}
        subtitle="Eight days across England, from London's landmarks and the West End to Stratford-upon-Avon, Bath, and Oxford."
        image="/images/landmark/england-school-trip-buckingham.webp"
        breadcrumb={[
          { label: "Destinations", href: "/destinations/" },
          { label: "Europe", href: "/europe/" },
          { label: "England", href: "/europe/england/" },
          { label: "England School Trip" },
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
                <div><dt>Destination</dt><dd>England</dd></div>
                <div><dt>Best for</dt><dd>All grade levels</dd></div>
                <div><dt>Style</dt><dd>Private, fully customizable</dd></div>
              </dl>
              <Link href="/get-a-quote/" className="ile-btn ile-btn--primary lm-summary-cta">Get a Quote</Link>
              <Link href="/europe/england/" className="lm-summary-link">More England packages {ArrowR}</Link>
            </div>

            <div className="lm-tip-card">
              <span className="ile-eyebrow">England Travel Tips</span>
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
            <p className="ile-lead lm-center-lead">Discover more customizable England travel packages designed for educational tours and student groups.</p>
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
        { name: "England", path: "/europe/england/" },
        { name: "England School Trip", path: "/europe/england/england-school-trip/" },
      ])} />
      <JsonLd data={touristTrip({
        name: "England School Trip",
        description: "Eight days across England, from London's landmarks and the West End to Stratford-upon-Avon, Bath, and Oxford.",
        path: "/europe/england/england-school-trip/",
        days: DAYS.map((d) => ({ name: d.title, description: d.acts.join('; ') })),
      })} />
    </>
  )
}
