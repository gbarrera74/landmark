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
  'Atlanta tells a story of resilience, leadership, and cultural influence. Through our thoughtfully designed educational field trips in Atlanta, students encounter the powerful legacy of the Civil Rights Movement and the voices that shaped social change. Visiting historic sites becomes a catalyst for meaningful dialogue and personal reflection.'
const INTRO_P2 =
  'Our educational tours in Atlanta combine history, innovation, and Southern culture into a cohesive learning journey. From interactive museum experiences to guided discussions at significant landmarks, each moment invites students to think critically about the world around them. Landmark Educational Tours handles the coordination so that educators can focus on facilitating impactful conversations. Field trips in Atlanta leave students empowered and ready to lead with empathy, courage, and awareness.'

const TRIPS = [
  { title: 'Atlanta & Beyond', duration: '3 Day / 2 Night', img: '/images/landmark/atlanta-skyline-night.jpg', href: '/usa-trips/atlanta/atlantabeyond/' },
  { title: '3 Day Atlanta Field Trip', duration: '3 Day / 2 Night', img: '/images/landmark/atlanta-aerial.jpg', href: '/usa-trips/atlanta/3-day-atlanta-field-trip/' },
  { title: '2 Day Atlanta School Trip', duration: '2 Day / 1 Night', img: '/images/landmark/atlanta-downtown.jpg', href: '/usa-trips/atlanta/2-day-atlanta-school-trip/' },
  { title: 'Atlanta & AL HBCU Field Trip', duration: '5 Day / 4 Night', img: '/images/landmark/hbcu-students-campus.jpg', href: '/usa-trips/atlanta/atlanta-and-alabama-hbcu-field-trip/' },
  { title: 'HBCU Field Trip', duration: '4 Day / 3 Night', img: '/images/landmark/hbcu-campus-building.jpg', href: '/usa-trips/atlanta/hbcu-field-trip/' },
]

const STEPS = [
  { title: 'Contact', body: 'Our Travel Consultants are waiting to build your next trip! Contact our office to get the process started.' },
  { title: 'Customize', body: 'Let our experienced staff help bring your ideas to life. We have expertise about timing, best places to stay, restaurants, and fun activities for your group size.' },
  { title: 'Book the trip', body: 'Once you are ready, we can create a portal for all travelers to access and sign up for the trip. After that, let us lead the way and keep surprises off of the itinerary.' },
]

export default function Atlanta() {
  return (
    <>
      <PageHero
        eyebrow="Atlanta, GA · The Big Peach"
        title={<>Educational Field Trips in <em>Atlanta</em></>}
        subtitle="From the legacy of the Civil Rights Movement to HBCU campuses and Southern culture: customizable, safe student trips through Atlanta's most powerful historic sites."
        image="/images/landmark/atlanta-skyline.jpg"
        breadcrumb={[{ label: 'Destinations', href: '/destinations/' }, { label: 'Atlanta' }]}
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
      <section className="ile-section ile-section--cream" aria-labelledby="atl-trips-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">Tours &amp; Itineraries</span>
            <h2 id="atl-trips-h" className="lm-h2-amber">ATLANTA TRIPS</h2>
            <p className="ile-lead lm-center-lead">Explore our most popular Atlanta programs: every one fully customizable to your group, grade level, and budget.</p>
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
      <section className="ile-section ile-section--white" aria-labelledby="atl-custom-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">How it works</span>
            <h2 id="atl-custom-h" className="lm-h2-amber">CUSTOMIZATION MADE SIMPLE</h2>
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
        { name: 'Atlanta', path: '/usa-trips/atlanta/' },
      ])} />
    </>
  )
}
