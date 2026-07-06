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
  'Educational trips to Washington, DC offer students an unforgettable opportunity to experience history where it began. At Landmark Educational Tours, we design Washington DC field trips that connect classroom lessons to powerful, real-world moments. From walking the National Mall and exploring the Smithsonian museums to standing inside the US Capitol, students will gain a deeper understanding of democracy, leadership, and civic responsibility.'
const INTRO_P2 =
  'Our team partners closely with schools and administrators to customize every detail, ensuring a safe, seamless, and meaningful experience for a range of grades and class sizes. We handle logistics, accommodations, and guided programming so that educators can focus on student engagement. Let us transform your curriculum with an educational trip to Washington, DC that inspires curiosity, confidence, and lifelong learning.'

const TRIPS = [
  { title: 'HBCU Campus Tours', duration: '7 Day / 6 Night', img: '/images/landmark/dc-howard-university.jpg', href: '/usa-trips/washington-d-c/hbcu-campus-tours/' },
  { title: 'Class Trip Programs for Middle School Students', duration: '3 Day / 2 Night', img: '/images/landmark/dc-capitol.jpg', href: '/usa-trips/washington-d-c/class-trip-programs-for-middle-school-students/' },
  { title: 'Civics Focused Washington, DC School Trip', duration: '3 Day / 2 Night', img: '/images/landmark/thomas-jefferson-memorial.jpg', href: '/usa-trips/washington-d-c/washington-dc-civics-student-tour/' },
  { title: 'STEM / STEAM Focused DC Trip', duration: '3 Day / 2 Night', img: '/images/landmark/dc-spy-museum.jpg', href: '/school-trip-destinations/washington-dc/stem-washington-dc-school-trips/' },
  { title: 'African American History Washington, DC School Trip', duration: '3 Day / 2 Night', img: '/images/landmark/dc-nmaahc.jpg', href: '/usa-trips/washington-d-c/african-american-history-dc-student-tour/' },
  { title: '8th Grade Washington, DC Trip Itinerary', duration: '3 Day / 2 Night', img: '/images/landmark/mlk-memorial-washington-dc.jpg', href: '/usa-trips/washington-d-c/8th-grade-washington-dc-trip-itinerary/' },
  { title: '4 Day Washington, DC School Trip', duration: '4 Day / 3 Night', img: '/images/landmark/fall-in-washington-dc.jpeg', href: '/usa-trips/washington-d-c/4-day-washington-dc-school-trip/' },
  { title: 'Presidential Inauguration 2029 School Trip', duration: '4 Day / 3 Night', img: '/images/landmark/dc-war-memorial.jpg', href: '/usa-trips/washington-d-c/2029-presidential-inauguration-class-trips/' },
  { title: '5 Day Washington, DC School Trip', duration: '5 Day / 4 Night', img: '/images/landmark/washington-monument-jill.webp', href: '/usa-trips/washington-d-c/5-day-washington-dc-school-trip/' },
]

const STEPS = [
  { title: 'Contact', body: 'Our tour specialists are waiting to build your next trip! Contact our office to get the process started.' },
  { title: 'Customize', body: 'Let our experienced staff help bring your ideas to life. We have expertise about timing, best places to stay, restaurants, and fun activities for your group size.' },
  { title: 'Book the trip', body: 'Once you are ready, we can create a portal for all travelers to access and sign up for the trip. After that, let us lead the way and keep surprises off of the itinerary.' },
]

export default function WashingtonDC() {
  return (
    <>
      <PageHero
        eyebrow="Washington, D.C. · Our Nation's Capital"
        title={<>Educational Trips to <em>Washington, DC</em></>}
        subtitle="History where it began — customizable, safe, guided field trips across the National Mall, the Smithsonian museums, and the U.S. Capitol."
        image="/images/landmark/dc-hero.jpg"
        breadcrumb={[{ label: 'Destinations', href: '/destinations/' }, { label: 'Washington, D.C.' }]}
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
      <section className="ile-section ile-section--cream" aria-labelledby="dc-trips-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">Tours &amp; Itineraries</span>
            <h2 id="dc-trips-h" className="lm-h2-amber">WASHINGTON, D.C. TRIPS</h2>
            <p className="ile-lead lm-center-lead">Explore our most popular Washington, D.C. programs — every one fully customizable to your group, grade level, and budget.</p>
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
      <section className="ile-section ile-section--white" aria-labelledby="dc-custom-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">How it works</span>
            <h2 id="dc-custom-h" className="lm-h2-amber">CUSTOMIZATION MADE SIMPLE</h2>
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
        { name: 'Washington, D.C.', path: '/usa-trips/washington-d-c/' },
      ])} />
    </>
  )
}
