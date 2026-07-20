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
  "Orlando is a launchpad destination for imagination and innovation. Our educational tours in Orlando blend hands-on STEM learning, leadership development, and performance opportunities into one seamless experience. Students can explore engineering concepts in interactive workshops or step into behind-the-scenes programs that reveal how creativity meets technology."

const HIGHLIGHTS = [
  "Hands-on STEM engineering workshops",
  "Behind-the-scenes creative programs",
  "Leadership and performance opportunities",
  "Where creativity meets technology",
]
const TRIPS = [
  { title: "Orlando Student Trip", duration: "3 Day / 2 Night", img: '/images/landmark/orlando-1.jpg', href: "/usa-trips/orlando/orlando-student-tour/" },
  { title: "Orlando Extended Student Tour", duration: "5 Day / 4 Night", img: '/images/landmark/orlando-2.jpg', href: "/usa-trips/orlando/orlando-student-tour-extended/" },
  { title: "Disney Educational Tour", duration: "5 Day / 4 Night", img: '/images/landmark/orlando-3.jpg', href: "/usa-trips/orlando/disney-educational-tours/" },
]

const STEPS = [
  { title: 'Contact', body: 'Our Travel Consultants are waiting to build your next trip! Contact our office to get the process started.' },
  { title: 'Customize', body: 'Let our experienced staff help bring your ideas to life. We have expertise about timing, best places to stay, restaurants, and fun activities for your group size.' },
  { title: 'Book the trip', body: 'Once you are ready, we can create a portal for all travelers to access and sign up for the trip. After that, let us lead the way and keep surprises off of the itinerary.' },
]

export default function Orlando() {
  return (
    <>
      <PageHero
        eyebrow="Orlando, FL · The sunshine state"
        title={<>Educational Field Trips in <em>Orlando</em></>}
        subtitle="Orlando turns theme-park energy into hands-on STEM labs, leadership programs, and performance stages built around your students' academic goals."
        image="/images/landmark/orlando-hero.jpg"
        breadcrumb={[{ label: 'Destinations', href: '/destinations/' }, { label: "Orlando" }]}
      />

      {/* Intro */}
      <DestinationIntro
        city="Orlando"
        lead={INTRO_P1}
        highlights={HIGHLIGHTS}
        image="/images/landmark/orlando-2.jpg"
        imageAlt="A space shuttle launch at the Kennedy Space Center near Orlando"
        tripCount={TRIPS.length}
      />

      {/* Trips */}
      <section className="ile-section ile-section--cream" aria-labelledby="orlando-trips-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">Tours &amp; Itineraries</span>
            <h2 id="orlando-trips-h" className="lm-h2-amber">ORLANDO TRIPS</h2>
            <p className="ile-lead lm-center-lead">Explore our most popular Orlando programs: every one fully customizable to your group, grade level, and budget.</p>
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
      <section className="ile-section ile-section--white" aria-labelledby="orlando-custom-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">How it works</span>
            <h2 id="orlando-custom-h" className="lm-h2-amber">CUSTOMIZATION MADE SIMPLE</h2>
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
        { name: "Orlando", path: "/usa-trips/orlando/" },
      ])} />
      <JsonLd data={destinationGraph({ name: "Orlando", description: `Customizable Orlando field trips and student tours: safe, guided, and built around your curriculum. Plan your Orlando educational trip with Landmark Educational Tours.`, path: "/usa-trips/orlando/", trips: TRIPS.map((t) => ({ name: t.title, path: t.href })) })} />
    </>
  )
}
