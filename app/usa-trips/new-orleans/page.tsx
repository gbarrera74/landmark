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
  "Educational trips in New Orleans offer students an unforgettable opportunity to experience history where it began. At Landmark Educational Tours, we design New Orleans field trips that connect classroom lessons to powerful, real-world moments. From walking the streets of the French Quarter and exploring the National WWII Museum to learning the roots of jazz along the riverfront, students will gain a deeper understanding of culture, resilience, and American history."

const HIGHLIGHTS = [
  "The historic French Quarter",
  "The National WWII Museum",
  "The roots of jazz along the riverfront",
  "Culture, resilience, and history",
]
const TRIPS = [
  { title: "New Orleans Student Tour", duration: "2 Day / 1 Night", img: '/images/landmark/new-orleans-1.jpg', href: "/usa-trips/new-orleans/new-orleans-student-tour/" },
  { title: "3 Day New Orleans School Trip", duration: "3 Day / 2 Night", img: '/images/landmark/new-orleans-2.jpg', href: "/usa-trips/new-orleans/3-day-new-orleans-school-trip/" },
  { title: "New Orleans Field Trip", duration: "4 Day / 3 Night", img: '/images/landmark/new-orleans-3.jpg', href: "/usa-trips/new-orleans/new-orleans-field-trip/" },
]

const STEPS = [
  { title: 'Contact', body: 'Our Travel Consultants are waiting to build your next trip! Contact our office to get the process started.' },
  { title: 'Customize', body: 'Let our experienced staff help bring your ideas to life. We have expertise about timing, best places to stay, restaurants, and fun activities for your group size.' },
  { title: 'Book the trip', body: 'Once you are ready, we can create a portal for all travelers to access and sign up for the trip. After that, let us lead the way and keep surprises off of the itinerary.' },
]

export default function NewOrleans() {
  return (
    <>
      <PageHero
        eyebrow="New Orleans, LA · The Big Easy"
        title={<>Educational Field Trips in <em>New Orleans</em></>}
        subtitle="From the French Quarter to the National WWII Museum and jazz-filled riverfront, students trace history, culture, and resilience firsthand."
        image="/images/landmark/new-orleans-hero.jpg"
        breadcrumb={[{ label: 'Destinations', href: '/destinations/' }, { label: "New Orleans" }]}
      />

      {/* Intro */}
      <DestinationIntro
        city="New Orleans"
        lead={INTRO_P1}
        highlights={HIGHLIGHTS}
        image="/images/landmark/new-orleans-1.jpg"
        imageAlt="The French Quarter in New Orleans"
        tripCount={TRIPS.length}
      />

      {/* Trips */}
      <section className="ile-section ile-section--cream" aria-labelledby="neworleans-trips-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">Tours &amp; Itineraries</span>
            <h2 id="neworleans-trips-h" className="lm-h2-amber">NEW ORLEANS TRIPS</h2>
            <p className="ile-lead lm-center-lead">Explore our most popular New Orleans programs: every one fully customizable to your group, grade level, and budget.</p>
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
      <section className="ile-section ile-section--white" aria-labelledby="neworleans-custom-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">How it works</span>
            <h2 id="neworleans-custom-h" className="lm-h2-amber">CUSTOMIZATION MADE SIMPLE</h2>
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
        { name: "New Orleans", path: "/usa-trips/new-orleans/" },
      ])} />
      <JsonLd data={destinationGraph({ name: "New Orleans", description: `Customizable New Orleans field trips and student tours: safe, guided, and built around your curriculum. Plan your New Orleans educational trip with Landmark Educational Tours.`, path: "/usa-trips/new-orleans/", trips: TRIPS.map((t) => ({ name: t.title, path: t.href })) })} />
    </>
  )
}
