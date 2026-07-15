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
  "Discover the perfect blend of innovation, culture, and history with unforgettable Chicago educational tours designed to engage and inspire students at every level. Known for its iconic skyline and rich heritage, Chicago offers an immersive environment where classroom concepts come to life through real-world experiences. From the shores of Lake Michigan to its vibrant downtown streets, every moment presents an opportunity for meaningful learning."
const INTRO_P2 =
  "Our expertly planned student trips to Chicago provide access to some of the nation’s most renowned educational attractions. Students can explore interactive exhibits at the Museum of Science and Industry, uncover natural history at the Field Museum, or gain new perspectives at the Art Institute of Chicago. Architecture tours along the Chicago River reveal the city’s groundbreaking design legacy, while visits to historic neighborhoods highlight its cultural diversity and influence."

const TRIPS = [
  { title: "Chicago Student Tour", duration: "3 Day / 2 Night", img: '/images/landmark/chicago-1.jpg', href: "/usa-trips/chicago/chicago-student-tour/" },
  { title: "The Windy City Tour", duration: "5 Day / 4 Night", img: '/images/landmark/chicago-2.jpg', href: "/usa-trips/chicago/the-windy-city-tour/" },
  { title: "Chicago Spanish Immersion School Trip", duration: "3 Day / 2 Night", img: '/images/landmark/chicago-3.jpg', href: "/usa-trips/chicago/chicago-spanish-immersion-school-trip/" },
]

const STEPS = [
  { title: 'Contact', body: 'Our Travel Consultants are waiting to build your next trip! Contact our office to get the process started.' },
  { title: 'Customize', body: 'Let our experienced staff help bring your ideas to life. We have expertise about timing, best places to stay, restaurants, and fun activities for your group size.' },
  { title: 'Book the trip', body: 'Once you are ready, we can create a portal for all travelers to access and sign up for the trip. After that, let us lead the way and keep surprises off of the itinerary.' },
]

export default function Chicago() {
  return (
    <>
      <PageHero
        eyebrow="Chicago, IL · The Windy City"
        title={<>Educational Field Trips in <em>Chicago</em></>}
        subtitle="From lakefront museums to riverfront architecture tours, Chicago turns lessons into vivid, hands-on discoveries for student groups of every grade level."
        image="/images/landmark/chicago-hero.jpg"
        breadcrumb={[{ label: 'Destinations', href: '/destinations/' }, { label: "Chicago" }]}
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
      <section className="ile-section ile-section--cream" aria-labelledby="chicago-trips-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">Tours &amp; Itineraries</span>
            <h2 id="chicago-trips-h" className="lm-h2-amber">CHICAGO TRIPS</h2>
            <p className="ile-lead lm-center-lead">Explore our most popular Chicago programs: every one fully customizable to your group, grade level, and budget.</p>
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
      <section className="ile-section ile-section--white" aria-labelledby="chicago-custom-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">How it works</span>
            <h2 id="chicago-custom-h" className="lm-h2-amber">CUSTOMIZATION MADE SIMPLE</h2>
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
        { name: "Chicago", path: "/usa-trips/chicago/" },
      ])} />
      <JsonLd data={destinationGraph({ name: "Chicago", description: `Customizable Chicago field trips and student tours: safe, guided, and built around your curriculum. Plan your Chicago educational trip with Landmark Educational Tours.`, path: "/usa-trips/chicago/", trips: TRIPS.map((t) => ({ name: t.title, path: t.href })) })} />
    </>
  )
}
