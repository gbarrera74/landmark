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
  'Educational trips in NYC immerse students in culture, history, arts, and global influence that they’re unlikely to experience anywhere else. Landmark Educational Tours crafts dynamic school trips to New York that align with your academic goals while delivering unforgettable experiences. Students can explore Ellis Island, tour the United Nations, experience Broadway workshops, and stand in the heart of Wall Street.'
const INTRO_P2 =
  'We thoughtfully design each itinerary for middle and high school learners, combining structured educational programming with inspiring cultural exposure. We work closely with schools and districts to manage travel logistics, safety planning, and customized learning objectives. From STEM-focused tours to performing arts intensives, we turn big-city exploration into purposeful growth. Let us help your students explore a world of possibilities during an educational trip to NYC.'

const TRIPS = [
  { title: '4 Day New York City School Trip', duration: '4 Day / 3 Night', img: '/images/landmark/emms-nyc.jpg', href: '/usa-trips/new-york-city-tours/4-day-new-york-city-school-trip/' },
  { title: '5 Day New York City Field Trip', duration: '5 Day / 4 Night', img: '/images/landmark/murray-high-school-nyc.jpg', href: '/usa-trips/new-york-city-tours/5-day-new-york-city-field-trip/' },
  { title: 'Art-Focused Tour of NYC', duration: '3 Day / 2 Night', img: '/images/landmark/hero-nyc.jpg', href: '/usa-trips/new-york-city-tours/art-focused-tour-nyc/' },
  { title: 'NYC Performing Arts Tour', duration: '3 Day / 2 Night', img: '/images/landmark/broadway-sign-nyc.jpg', href: '/usa-trips/new-york-city-tours/nyc-performing-arts-tour/' },
  { title: 'New York City Student Trip', duration: '3 Day / 2 Night', img: '/images/landmark/emms-nyc.jpg', href: '/usa-trips/new-york-city-tours/nyc-student-trip/' },
  { title: 'YMCA Summer Camp', duration: 'Summer Program', img: '/images/landmark/murray-high-school-nyc.jpg', href: '/usa-trips/new-york-city-tours/ymca-summer-camp/' },
]

const STEPS = [
  { title: 'Contact', body: 'Our Travel Consultants are waiting to build your next trip! Contact our office to get the process started.' },
  { title: 'Customize', body: 'Let our experienced staff help bring your ideas to life. We have expertise about timing, best places to stay, restaurants, and fun activities for your group size.' },
  { title: 'Book the trip', body: 'Once you are ready, we can create a portal for all travelers to access and sign up for the trip. After that, let us lead the way and keep surprises off of the itinerary.' },
]

export default function NewYorkCity() {
  return (
    <>
      <PageHero
        eyebrow="New York City · The City That Never Sleeps"
        title={<>Educational Trips in <em>NYC</em></>}
        subtitle="Culture, history, arts, and global influence: customizable, safe school trips to New York City, from Ellis Island and the U.N. to Broadway workshops and Wall Street."
        image="/images/landmark/hero-nyc.jpg"
        breadcrumb={[{ label: 'Destinations', href: '/destinations/' }, { label: 'New York City' }]}
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
      <section className="ile-section ile-section--cream" aria-labelledby="nyc-trips-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">Tours &amp; Itineraries</span>
            <h2 id="nyc-trips-h" className="lm-h2-amber">NEW YORK CITY TRIPS</h2>
            <p className="ile-lead lm-center-lead">Explore our most popular New York City programs: every one fully customizable to your group, grade level, and budget.</p>
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
      <section className="ile-section ile-section--white" aria-labelledby="nyc-custom-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">How it works</span>
            <h2 id="nyc-custom-h" className="lm-h2-amber">CUSTOMIZATION MADE SIMPLE</h2>
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
        { name: 'New York City', path: '/usa-trips/new-york-city-tours/' },
      ])} />
    </>
  )
}
