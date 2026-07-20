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
  'Cobblestone streets. Revolutionary ideas. Academic excellence. An educational trip to Boston immerses students in the birthplace of American independence while connecting them to the future of higher education. Walking the Freedom Trail transforms history into something tangible and unforgettable.'
const HIGHLIGHTS = [
  "Walking the historic Freedom Trail",
  "Revolutionary-era meeting houses",
  "Tours of renowned universities",
  "Newport mansions and Salem, MA",
]

const TRIPS = [
  { title: '3 Day Boston Field Trip', duration: '3 Day / 2 Night', img: '/images/landmark/boston-duck-boat-tour.jpeg', href: '/usa-trips/boston/3-day-boston-field-trip/' },
  { title: '6 Day Boston Field Trip', duration: '6 Day / 5 Night', img: '/images/landmark/boston-waterfront-highrise.jpg', href: '/usa-trips/boston/6-day-boston-field-trip/' },
  { title: 'Boston & Newport School Trip', duration: '4 Day / 3 Night', img: '/images/landmark/newport-mansion.jpg', href: '/usa-trips/boston/boston-and-newport-school-trip/' },
  { title: 'Boston & Salem School Trip', duration: '4 Day / 3 Night', img: '/images/landmark/salem-massachusetts.jpg', href: '/usa-trips/boston/boston-and-salem-school-trip/' },
  { title: 'Boston School Trip', duration: '3 Day / 2 Night', img: '/images/landmark/ethical-culture-boston.jpg', href: '/usa-trips/boston/boston-school-trip/' },
  { title: 'Historic Boston', duration: '2 Day / 1 Night', img: '/images/landmark/boston-old-state-house.jpg', href: '/usa-trips/boston/historic-boston/' },
]

const STEPS = [
  { title: 'Contact', body: 'Our Travel Consultants are waiting to build your next trip! Contact our office to get the process started.' },
  { title: 'Customize', body: 'Let our experienced staff help bring your ideas to life. We have expertise about timing, best places to stay, restaurants, and fun activities for your group size.' },
  { title: 'Book the trip', body: 'Once you are ready, we can create a portal for all travelers to access and sign up for the trip. After that, let us lead the way and keep surprises off of the itinerary.' },
]

export default function Boston() {
  return (
    <>
      <PageHero
        eyebrow="Boston, MA · The Birthplace of American Independence"
        title={<>Educational Trips to <em>Boston</em></>}
        subtitle="Cobblestone streets, revolutionary ideas, and academic excellence: customizable, safe student trips along the Freedom Trail and through Boston's historic core."
        image="/images/landmark/boston-skyline-hero.jpg"
        breadcrumb={[{ label: 'Destinations', href: '/destinations/' }, { label: 'Boston' }]}
      />

      {/* Intro */}
      <DestinationIntro
        city="Boston"
        lead={INTRO_P1}
        highlights={HIGHLIGHTS}
        image="/images/landmark/boston-old-state-house.jpg"
        imageAlt="Boston's historic Old State House"
        tripCount={TRIPS.length}
      />

      {/* Trips */}
      <section className="ile-section ile-section--cream" aria-labelledby="bos-trips-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">Tours &amp; Itineraries</span>
            <h2 id="bos-trips-h" className="lm-h2-amber">BOSTON TRIPS</h2>
            <p className="ile-lead lm-center-lead">Explore our most popular Boston programs: every one fully customizable to your group, grade level, and budget.</p>
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
      <section className="ile-section ile-section--white" aria-labelledby="bos-custom-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">How it works</span>
            <h2 id="bos-custom-h" className="lm-h2-amber">CUSTOMIZATION MADE SIMPLE</h2>
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
        { name: 'Boston', path: '/usa-trips/boston/' },
      ])} />
      <JsonLd data={destinationGraph({ name: "Boston", description: `Customizable Boston field trips and student tours, the Freedom Trail, historic meeting houses, world-class universities, plus Salem and Newport add-ons. Safe, guided, and built around your curriculum.`, path: "/usa-trips/boston/", trips: TRIPS.map((t) => ({ name: t.title, path: t.href })) })} />
    </>
  )
}
