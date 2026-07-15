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
  "Savannah, GA tells a story of history, elegance, and Southern heritage. Through our thoughtfully designed educational field trips in Savannah, students encounter the city’s rich past, from its role in colonial America to its enduring architecture and storytelling traditions. Visiting historic squares and landmark sites becomes a catalyst for meaningful dialogue and personal reflection."
const INTRO_P2 =
  "Our educational tours in Savannah blend history, culture, and hands-on discovery into one cohesive learning journey. Guided walks through cobblestone streets and visits to museums and historic homes give students the chance to engage directly with the past. Landmark Educational Tours takes care of the planning and logistics so educators can focus on guiding thoughtful conversations. Field trips in Savannah, GA leave students with a richer understanding of history and a stronger connection to the stories that shaped it."

const TRIPS = [
  { title: "Savannah Field Trip", duration: "3 Day / 2 Night", img: '/images/landmark/savannah-1.jpg', href: "/usa-trips/savannah-tours/savannah-field-trip/" },
  { title: "Savannah School Trip", duration: "2 Day / 1 Night", img: '/images/landmark/savannah-2.jpg', href: "/usa-trips/savannah-tours/savannah-school-trip/" },
]

const STEPS = [
  { title: 'Contact', body: 'Our Travel Consultants are waiting to build your next trip! Contact our office to get the process started.' },
  { title: 'Customize', body: 'Let our experienced staff help bring your ideas to life. We have expertise about timing, best places to stay, restaurants, and fun activities for your group size.' },
  { title: 'Book the trip', body: 'Once you are ready, we can create a portal for all travelers to access and sign up for the trip. After that, let us lead the way and keep surprises off of the itinerary.' },
]

export default function Savannah() {
  return (
    <>
      <PageHero
        eyebrow="Savannah, GA · Hostess City of the South"
        title={<>Educational Field Trips in <em>Savannah</em></>}
        subtitle="Students explore Savannah's historic squares, cobblestone streets, and preserved homes, tracing Southern heritage from colonial roots to living storytelling traditions."
        image="/images/landmark/savannah-hero.jpg"
        breadcrumb={[{ label: 'Destinations', href: '/destinations/' }, { label: "Savannah" }]}
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
      <section className="ile-section ile-section--cream" aria-labelledby="savannah-trips-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">Tours &amp; Itineraries</span>
            <h2 id="savannah-trips-h" className="lm-h2-amber">SAVANNAH TRIPS</h2>
            <p className="ile-lead lm-center-lead">Explore our most popular Savannah programs: every one fully customizable to your group, grade level, and budget.</p>
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
      <section className="ile-section ile-section--white" aria-labelledby="savannah-custom-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">How it works</span>
            <h2 id="savannah-custom-h" className="lm-h2-amber">CUSTOMIZATION MADE SIMPLE</h2>
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
        { name: "Savannah", path: "/usa-trips/savannah-tours/" },
      ])} />
    </>
  )
}
