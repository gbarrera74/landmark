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
  "Seattle tells a story of innovation, exploration, and natural wonder. Through our thoughtfully designed educational field trips in Seattle, students encounter the pioneering spirit of the tech industry alongside the rich maritime and cultural history of the Pacific Northwest. Visiting iconic landmarks becomes a catalyst for curiosity and hands-on discovery."

const HIGHLIGHTS = [
  "Interactive exhibits at leading museums",
  "Working waterfronts and historic markets",
  "Pacific Northwest maritime history",
  "Innovation and the tech industry",
]
const TRIPS = [
  { title: "Seattle School Trip", duration: "4 Day / 3 Night", img: '/images/landmark/seattle-1.jpg', href: "/usa-trips/seattle/seattle-school-trip/" },
]

const STEPS = [
  { title: 'Contact', body: 'Our Travel Consultants are waiting to build your next trip! Contact our office to get the process started.' },
  { title: 'Customize', body: 'Let our experienced staff help bring your ideas to life. We have expertise about timing, best places to stay, restaurants, and fun activities for your group size.' },
  { title: 'Book the trip', body: 'Once you are ready, we can create a portal for all travelers to access and sign up for the trip. After that, let us lead the way and keep surprises off of the itinerary.' },
]

export default function Seattle() {
  return (
    <>
      <PageHero
        eyebrow="Seattle, WA · The Emerald City"
        title={<>Educational Field Trips in <em>Seattle</em></>}
        subtitle="Groups explore Seattle's tech innovation, waterfront markets, and Pacific Northwest culture through hands-on museum visits and guided landmark discovery."
        image="/images/landmark/seattle-skyline-sunset.jpg"
        breadcrumb={[{ label: 'Destinations', href: '/destinations/' }, { label: "Seattle" }]}
      />

      {/* Intro */}
      <DestinationIntro
        city="Seattle"
        lead={INTRO_P1}
        highlights={HIGHLIGHTS}
        image="/images/landmark/seattle-1.jpg"
        imageAlt="The Seattle skyline and waterfront"
        tripCount={TRIPS.length}
      />

      {/* Trips */}
      <section className="ile-section ile-section--cream" aria-labelledby="seattle-trips-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">Tours &amp; Itineraries</span>
            <h2 id="seattle-trips-h" className="lm-h2-amber">SEATTLE TRIPS</h2>
            <p className="ile-lead lm-center-lead">Explore our most popular Seattle programs: every one fully customizable to your group, grade level, and budget.</p>
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
      <section className="ile-section ile-section--white" aria-labelledby="seattle-custom-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">How it works</span>
            <h2 id="seattle-custom-h" className="lm-h2-amber">CUSTOMIZATION MADE SIMPLE</h2>
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
        { name: "Seattle", path: "/usa-trips/seattle/" },
      ])} />
      <JsonLd data={destinationGraph({ name: "Seattle", description: `Customizable Seattle field trips and student tours: safe, guided, and built around your curriculum. Plan your Seattle educational trip with Landmark Educational Tours.`, path: "/usa-trips/seattle/", trips: TRIPS.map((t) => ({ name: t.title, path: t.href })) })} />
    </>
  )
}
