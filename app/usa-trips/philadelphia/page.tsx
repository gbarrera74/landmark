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
  "Step into the birthplace of American independence with a Philadelphia educational tour that transforms history into a powerful, immersive experience for students. As one of the nation’s most significant cities, Philadelphia offers a unique opportunity to walk the same streets as the Founding Fathers while engaging in meaningful, real-world learning. From iconic landmarks to interactive museums, every stop invites students to connect deeply with the stories that shaped the United States."
const INTRO_P2 =
  "Landmark Educational Tours carefully designs our Philadelphia educational travel experiences to bring classroom lessons to life across history, government, and culture. Stand inside Independence Hall where the Declaration of Independence was debated, see the Liberty Bell up close, and explore the Constitution Center for an in-depth look at the nation’s founding principles. Students can also visit historic districts, engage with curated exhibits, and gain a deeper appreciation for the people and events that defined early America."

const TRIPS = [
  { title: "Philadelphia Student Tour", duration: "2 Day / 1 Night", img: '/images/landmark/philadelphia-1.jpg', href: "/usa-trips/philadelphia/philadelphia-student-tour/" },
  { title: "2 Day Philadelphia School Trip", duration: "2 Day / 1 Night", img: '/images/landmark/philadelphia-2.jpg', href: "/usa-trips/philadelphia/2-day-philadelphia-school-trip/" },
  { title: "Historic Philadelphia School Trip", duration: "3 Day / 2 Night", img: '/images/landmark/philadelphia-3.jpg', href: "/usa-trips/philadelphia/historic-philadelphia-school-trip/" },
]

const STEPS = [
  { title: 'Contact', body: 'Our Travel Consultants are waiting to build your next trip! Contact our office to get the process started.' },
  { title: 'Customize', body: 'Let our experienced staff help bring your ideas to life. We have expertise about timing, best places to stay, restaurants, and fun activities for your group size.' },
  { title: 'Book the trip', body: 'Once you are ready, we can create a portal for all travelers to access and sign up for the trip. After that, let us lead the way and keep surprises off of the itinerary.' },
]

export default function Philadelphia() {
  return (
    <>
      <PageHero
        eyebrow="Philadelphia, PA · The Birthplace of America"
        title={<>Educational Field Trips in <em>Philadelphia</em></>}
        subtitle="Walk the streets of the Founding Fathers, from Independence Hall to the Liberty Bell, on an immersive American history journey for students."
        image="/images/landmark/philadelphia-hero.jpg"
        breadcrumb={[{ label: 'Destinations', href: '/destinations/' }, { label: "Philadelphia" }]}
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
      <section className="ile-section ile-section--cream" aria-labelledby="philadelphia-trips-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">Tours &amp; Itineraries</span>
            <h2 id="philadelphia-trips-h" className="lm-h2-amber">PHILADELPHIA TRIPS</h2>
            <p className="ile-lead lm-center-lead">Explore our most popular Philadelphia programs: every one fully customizable to your group, grade level, and budget.</p>
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
      <section className="ile-section ile-section--white" aria-labelledby="philadelphia-custom-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">How it works</span>
            <h2 id="philadelphia-custom-h" className="lm-h2-amber">CUSTOMIZATION MADE SIMPLE</h2>
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
        { name: "Philadelphia", path: "/usa-trips/philadelphia/" },
      ])} />
      <JsonLd data={destinationGraph({ name: "Philadelphia", description: `Customizable Philadelphia field trips and student tours: safe, guided, and built around your curriculum. Plan your Philadelphia educational trip with Landmark Educational Tours.`, path: "/usa-trips/philadelphia/", trips: TRIPS.map((t) => ({ name: t.title, path: t.href })) })} />
    </>
  )
}
