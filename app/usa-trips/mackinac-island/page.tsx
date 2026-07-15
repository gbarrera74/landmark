/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import BrochureBand from '@/components/BrochureBand'
import JsonLd from '@/lib/seo/JsonLd'
import { breadcrumb } from '@/lib/seo/schemas'

const ArrowR = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
)

const INTRO_P1 =
  "Fudge shops. Horse-drawn carriages. Timeless natural beauty. An educational trip to Mackinac Island transports students back to a world without cars, immersing them in 18th-century history while surrounded by the stunning landscapes of the Great Lakes. Walking the grounds of Fort Mackinac transforms history into something tangible and unforgettable. Our educational trips in Mackinac Island, MI are built around discovery, not just observation. Students explore preserved forts, learn about the island's role in the fur trade and the War of 1812, and experience a slower pace of life that offers a striking contrast to the modern world."
const INTRO_P2 =
  "Landmark Educational Tours works alongside schools to ensure every detail aligns with safety standards and curriculum goals. Mackinac Island offers a rare chance for students to step outside their everyday routines and see history preserved in a truly unique setting. When learners return home, they carry perspective, curiosity, and a deeper appreciation for the past. Book your educational trip to Mackinac Island today."

const TRIPS = [
  { title: "Mackinac Island School Trip", duration: "2 Day / 1 Night", img: '/images/landmark/mackinac-1.jpg', href: "/usa-trips/mackinac-island/mackinac-island-school-trip/" },
  { title: "Mackinac Island Field Trip", duration: "2 Day / 1 Night", img: '/images/landmark/mackinac-2.jpg', href: "/usa-trips/mackinac-island/mackinac-island-field-trip/" },
]

const STEPS = [
  { title: 'Contact', body: 'Our Travel Consultants are waiting to build your next trip! Contact our office to get the process started.' },
  { title: 'Customize', body: 'Let our experienced staff help bring your ideas to life. We have expertise about timing, best places to stay, restaurants, and fun activities for your group size.' },
  { title: 'Book the trip', body: 'Once you are ready, we can create a portal for all travelers to access and sign up for the trip. After that, let us lead the way and keep surprises off of the itinerary.' },
]

export default function MackinacIsland() {
  return (
    <>
      <PageHero
        eyebrow="Mackinac Island, MI · The Crown Jewel of the Great Lakes"
        title={<>Educational Field Trips in <em>Mackinac Island</em></>}
        subtitle="On a car-free island, students walk Fort Mackinac's ramparts and trace fur-trade and War of 1812 history at an unforgettable slower pace."
        image="/images/landmark/mackinac-hero.jpg"
        breadcrumb={[{ label: 'Destinations', href: '/destinations/' }, { label: "Mackinac Island" }]}
      />

      {/* Intro */}
      <section className="ile-section ile-section--white">
        <div className="ile-container">
          <div className="ilp-prose ilp-prose--center">
            <p>{INTRO_P1}</p>
            <p>{INTRO_P2}</p>
          </div>
          <div className="ile-center" style={{ marginTop: 32 }}>
            <Link href="/get-a-quote/" className="ile-btn ile-btn--primary">Start Planning Your Trip</Link>
          </div>
        </div>
      </section>

      {/* Trips */}
      <section className="ile-section ile-section--cream" aria-labelledby="mackinac-trips-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">Tours &amp; Itineraries</span>
            <h2 id="mackinac-trips-h" className="lm-h2-amber">MACKINAC ISLAND TRIPS</h2>
            <p className="ile-lead lm-center-lead">Explore our most popular Mackinac Island programs: every one fully customizable to your group, grade level, and budget.</p>
          </div>
          <div className="ilm-blog-grid">
            {TRIPS.map((t) => (
              <Link href={t.href} className="ilm-post" key={t.title}>
                <div className="ilm-post-img lm-trip-media">
                  <img src={t.img} alt="" loading="lazy" />
                  <span className="lm-tour-badge">{t.duration}</span>
                </div>
                <div className="ilm-post-body">
                  <h3>{t.title}</h3>
                  <span className="ilm-post-more">View Itinerary {ArrowR}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="ile-center lm-after-grid">
            <Link href="/destinations/" className="ile-btn ile-btn--ghost">View More Destinations</Link>
          </div>
        </div>
      </section>

      {/* Customization made simple */}
      <section className="ile-section ile-section--white" aria-labelledby="mackinac-custom-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">How it works</span>
            <h2 id="mackinac-custom-h" className="lm-h2-amber">CUSTOMIZATION MADE SIMPLE</h2>
            <p className="ile-lead lm-center-lead">Three simple steps from first call to a fully-planned, worry-free trip.</p>
          </div>
          <div className="ilp-timeline" style={{ marginTop: 44 }}>
            {STEPS.map((s, i) => (
              <div className="ilp-step" key={s.title}>
                <span className="ilp-step-num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
          <div className="ile-center lm-after-grid">
            <Link href="/get-a-quote/" className="ile-btn ile-btn--primary">Start Planning Your Trip</Link>
          </div>
        </div>
      </section>

      <BrochureBand />

      <JsonLd data={breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'Destinations', path: '/destinations/' },
        { name: "Mackinac Island", path: "/usa-trips/mackinac-island/" },
      ])} />
    </>
  )
}
