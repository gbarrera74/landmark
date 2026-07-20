/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import DestinationIntro from '@/components/DestinationIntro'
import BrochureBand from '@/components/BrochureBand'
import JsonLd from '@/lib/seo/JsonLd'
import { breadcrumb, destinationGraph } from '@/lib/seo/schemas'

const ArrowR = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
)

const INTRO_P1 =
  "Hollywood lights. Groundbreaking innovation. Creative ambition. Educational Trips to Los Angeles immerse students in the entertainment capital of the world while connecting them to the industries shaping tomorrow's media, technology, and storytelling. Walking through iconic studio lots transforms creativity into something tangible and unforgettable. We design our student trips to Los Angeles for genuine engagement, not passive sightseeing. Students go behind the scenes at working studios, explore renowned museums and cultural institutions, and tour respected universities that fuel their ambitions for the future."

const HIGHLIGHTS = [
  "Behind the scenes at working studios",
  "Renowned museums and cultural institutions",
  "Tours of respected universities",
  "Media, technology, and storytelling",
]
const TRIPS = [
  { title: "Los Angeles School Trip", duration: "5 Day / 4 Night", img: '/images/landmark/los-angeles-1.jpg', href: "/usa-trips/los-angeles/los-angeles-school-trip/" },
  { title: "Los Angeles Field Trip", duration: "4 Day / 3 Night", img: '/images/landmark/los-angeles-2.jpg', href: "/usa-trips/los-angeles/los-angeles-field-trip/" },
]

const STEPS = [
  { title: 'Contact', body: 'Our Travel Consultants are waiting to build your next trip! Contact our office to get the process started.' },
  { title: 'Customize', body: 'Let our experienced staff help bring your ideas to life. We have expertise about timing, best places to stay, restaurants, and fun activities for your group size.' },
  { title: 'Book the trip', body: 'Once you are ready, we can create a portal for all travelers to access and sign up for the trip. After that, let us lead the way and keep surprises off of the itinerary.' },
]

export default function LosAngeles() {
  return (
    <>
      <PageHero
        eyebrow="Los Angeles, CA · The City of Angels"
        title={<>Educational Field Trips in <em>Los Angeles</em></>}
        subtitle="Take students behind the scenes at working studios, world-class museums, and top universities in the entertainment capital of the world."
        image="/images/landmark/los-angeles-hero.jpg"
        breadcrumb={[{ label: 'Destinations', href: '/destinations/' }, { label: "Los Angeles" }]}
      />

      {/* Intro */}
      <DestinationIntro
        city="Los Angeles"
        lead={INTRO_P1}
        highlights={HIGHLIGHTS}
        image="/images/landmark/los-angeles-1.jpg"
        imageAlt="Los Angeles on a student educational tour"
        tripCount={TRIPS.length}
      />

      {/* Trips */}
      <section className="ile-section ile-section--cream" aria-labelledby="losangeles-trips-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">Tours &amp; Itineraries</span>
            <h2 id="losangeles-trips-h" className="lm-h2-amber">LOS ANGELES TRIPS</h2>
            <p className="ile-lead lm-center-lead">Explore our most popular Los Angeles programs: every one fully customizable to your group, grade level, and budget.</p>
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
      <section className="ile-section ile-section--white" aria-labelledby="losangeles-custom-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">How it works</span>
            <h2 id="losangeles-custom-h" className="lm-h2-amber">CUSTOMIZATION MADE SIMPLE</h2>
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
        { name: "Los Angeles", path: "/usa-trips/los-angeles/" },
      ])} />
      <JsonLd data={destinationGraph({ name: "Los Angeles", description: `Customizable Los Angeles field trips and student tours: safe, guided, and built around your curriculum. Plan your Los Angeles educational trip with Landmark Educational Tours.`, path: "/usa-trips/los-angeles/", trips: TRIPS.map((t) => ({ name: t.title, path: t.href })) })} />
    </>
  )
}
