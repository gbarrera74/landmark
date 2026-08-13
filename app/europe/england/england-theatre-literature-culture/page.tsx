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
  { title: "Day 2: Arrival in London", acts: ["Arrive at London Heathrow Airport and meet your Landmark Tour Director", "Guided sightseeing tour of London, including Big Ben, the Houses of Parliament, Westminster Abbey, Buckingham Palace, and Trafalgar Square", "Explore Covent Garden with time for lunch", "Continue exploring central London", "Hotel check-in and time to freshen up", "Group welcome dinner", "Return to Hotel Accommodations"] },
  { title: "Day 3: Shakespeare's London & the West End", acts: ["Breakfast at the hotel", "Visit Shakespeare's Globe Theatre", "Participate in an interactive Shakespeare workshop", "Lunch at Borough Market", "Experience the London Eye", "Early group dinner", "Attend a West End theatre performance", "Return to Hotel Accommodations"] },
  { title: "Day 4: Literary & Historic London", acts: ["Breakfast at the hotel", "Visit Westminster Abbey", "See Poets' Corner", "Visit the British Library", "Join a Literary London walking tour", "Group dinner", "Attend a second West End theatre performance", "Return to Hotel Accommodations"] },
  { title: "Day 5: Royal & Historic London", acts: ["Breakfast at the hotel", "Visit the Tower of London", "View the Crown Jewels", "Views of Tower Bridge and St. Paul's Cathedral", "Lunch and free time in Piccadilly Circus, Leicester Square, Regent Street, or Carnaby Street", "Group dinner and an evening at leisure", "Return to Hotel Accommodations"] },
  { title: "Day 6: Shakespeare's Stratford-upon-Avon", acts: ["Breakfast at the hotel", "Travel to Stratford-upon-Avon", "Visit Shakespeare's Birthplace", "Visit Holy Trinity Church", "Visit Anne Hathaway's Cottage", "Royal Shakespeare Company theatre tour, backstage experience, or educational workshop", "Royal Shakespeare Company performance, if the schedule aligns", "Return to Hotel Accommodations"] },
  { title: "Day 7: Oxford Literature & Culture", acts: ["Breakfast at the hotel", "Travel to Oxford", "Guided walking tour of Oxford University and Christ Church College", "A literary experience highlighting J.R.R. Tolkien and C.S. Lewis", "Lunch and time to explore Oxford", "Return to London", "Farewell dinner", "Return to Hotel Accommodations"] },
  { title: "Day 8: Return Home", acts: ["Breakfast at the hotel", "Depart for Home"] },
]

const WHY = [
  { label: "Two West End Performances", text: "Students see two professional productions and experience different styles of live theatre." },
  { label: "Shakespeare Firsthand", text: "From the Globe to his birthplace and the Royal Shakespeare Company in Stratford-upon-Avon." },
  { label: "Literary London", text: "Poets' Corner, the British Library, and a walking tour of the city's literary neighborhoods." },
  { label: "History & Culture", text: "The Tower of London, the Crown Jewels, Westminster Abbey, and the colleges of Oxford." },
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
  { title: "England School Trip", img: "/images/landmark/england-school-trip-buckingham.webp", href: "/europe/england/england-school-trip/" },
]

const DESC_P1 = "Embark on an unforgettable eight-day journey through England's theatre, literature, history, and culture! Built around two live West End performances and a hands-on workshop at Shakespeare's Globe, this itinerary takes students from London's most famous landmarks to Stratford-upon-Avon and Oxford. Along the way they stand in Poets' Corner, explore the treasures of the British Library, and walk the streets that shaped English writing."
const DESC_P2 = "This trip is designed for students of literature, drama, and history alike. They will watch professional productions and then go behind the scenes with the Royal Shakespeare Company, visit the home where Shakespeare was born, and follow the footsteps of J.R.R. Tolkien and C.S. Lewis through Oxford. Royal and historic London adds another dimension, from the Tower of London and the Crown Jewels to Westminster Abbey. Landmark Educational Tours coordinates every detail, from international flights to on-the-ground logistics, so educators can focus on the learning. Students return with a richer understanding of the works they study and the country that produced them."

const sampleTab = (
  <>
    <p className="lm-itin-note">*Customize and personalize your England Theatre, Literature &amp; Culture itinerary with our team.</p>
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
    <h2 style={{ marginTop: 0 }}>Explore the England Theatre, Literature &amp; Culture Itinerary</h2>
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

export default function Itin_europe__england__england_theatre_literature_culture() {
  return (
    <>
      <PageHero
        eyebrow="England · 8 Day / 7 Night"
        title={<>England Theatre, Literature &amp; Culture</>}
        subtitle="Eight days of theatre, literature, and history, with two West End performances, Shakespeare's Globe, the Tower of London, Stratford-upon-Avon, and Oxford."
        image="/images/landmark/england-theatre-trafalgar-square.jpg"
        breadcrumb={[
          { label: "Destinations", href: "/destinations/" },
          { label: "Europe", href: "/europe/" },
          { label: "England", href: "/europe/england/" },
          { label: "England Theatre, Literature & Culture" },
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
        { name: "England Theatre, Literature & Culture", path: "/europe/england/england-theatre-literature-culture/" },
      ])} />
      <JsonLd data={touristTrip({
        name: "England Theatre, Literature & Culture",
        description: "Eight days of theatre, literature, and history, with two West End performances, Shakespeare's Globe, the Tower of London, Stratford-upon-Avon, and Oxford.",
        path: "/europe/england/england-theatre-literature-culture/",
        days: DAYS.map((d) => ({ name: d.title, description: d.acts.join('; ') })),
      })} />
    </>
  )
}
