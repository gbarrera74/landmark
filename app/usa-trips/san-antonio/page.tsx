/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import BrochureBand from '@/components/BrochureBand'
import JsonLd from '@/lib/seo/JsonLd'
import { breadcrumb, destinationGraph } from '@/lib/seo/schemas'

const ArrowR = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
)

const INTRO_P1 =
  "Educational trips in San Antonio offer students an unforgettable opportunity to experience history where it began. At Landmark Educational Tours, we design San Antonio field trips that connect classroom lessons to powerful, real-world moments. From walking the grounds of the Alamo and exploring the historic Spanish missions to strolling along the River Walk, students will gain a deeper understanding of Texas history, cultural heritage, and the fight for independence."
const INTRO_P2 =
  "Our team works hand-in-hand with schools and administrators to shape a trip that fits each group’s unique needs, delivering a safe, well-coordinated, and enriching experience for any grade level or class size. From arranging travel and lodging to structuring guided programming, we manage the details so educators can stay focused on connecting with their students. Let us bring your curriculum to life with an educational trip to San Antonio, TX that inspires curiosity, confidence, and a lasting love of learning."

const TRIPS = [
  { title: "Intro to San Antonio Tour", duration: "5 Day / 4 Night", img: '/images/landmark/san-antonio-1.jpg', href: "/usa-trips/san-antonio/intro-to-san-antonio-tour/" },
  { title: "3 Day San Antonio School Trip", duration: "3 Day / 2 Night", img: '/images/landmark/san-antonio-2.jpg', href: "/usa-trips/san-antonio/3-day-san-antonio-school-trip/" },
  { title: "San Antonio Field Trip", duration: "4 Day / 3 Night", img: '/images/landmark/san-antonio-3.jpg', href: "/usa-trips/san-antonio/san-antonio-field-trip/" },
]

const STEPS = [
  { title: 'Contact', body: 'Our Travel Consultants are waiting to build your next trip! Contact our office to get the process started.' },
  { title: 'Customize', body: 'Let our experienced staff help bring your ideas to life. We have expertise about timing, best places to stay, restaurants, and fun activities for your group size.' },
  { title: 'Book the trip', body: 'Once you are ready, we can create a portal for all travelers to access and sign up for the trip. After that, let us lead the way and keep surprises off of the itinerary.' },
]

export default function SanAntonio() {
  return (
    <>
      <PageHero
        eyebrow="San Antonio, TX · The Alamo City"
        title={<>Educational Field Trips in <em>San Antonio</em></>}
        subtitle="Walk the grounds of the Alamo, tour Spanish missions, and stroll the River Walk while Texas history comes alive for your students."
        image="/images/landmark/san-antonio-hero.jpg"
        breadcrumb={[{ label: 'Destinations', href: '/destinations/' }, { label: "San Antonio" }]}
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
      <section className="ile-section ile-section--cream" aria-labelledby="sanantonio-trips-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">Tours &amp; Itineraries</span>
            <h2 id="sanantonio-trips-h" className="lm-h2-amber">SAN ANTONIO TRIPS</h2>
            <p className="ile-lead lm-center-lead">Explore our most popular San Antonio programs: every one fully customizable to your group, grade level, and budget.</p>
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
      <section className="ile-section ile-section--white" aria-labelledby="sanantonio-custom-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">How it works</span>
            <h2 id="sanantonio-custom-h" className="lm-h2-amber">CUSTOMIZATION MADE SIMPLE</h2>
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
        { name: "San Antonio", path: "/usa-trips/san-antonio/" },
      ])} />
      <JsonLd data={destinationGraph({ name: "San Antonio", description: `Customizable San Antonio field trips and student tours: safe, guided, and built around your curriculum. Plan your San Antonio educational trip with Landmark Educational Tours.`, path: "/usa-trips/san-antonio/", trips: TRIPS.map((t) => ({ name: t.title, path: t.href })) })} />
    </>
  )
}
