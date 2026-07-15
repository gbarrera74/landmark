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
  "Educational trips to Williamsburg, VA offer students an unforgettable opportunity to experience history where it began. At Landmark Educational Tours, we design Williamsburg field trips that connect classroom lessons to powerful, real-world moments. From walking the streets of Colonial Williamsburg and exploring historic trade shops to standing inside the Governor’s Palace, students will gain a deeper understanding of colonial life, self-governance, and the roots of American independence."
const INTRO_P2 =
  "Our team works hand-in-hand with schools and administrators to tailor every aspect of the trip, delivering a safe, well-organized, and impactful experience for groups of all grade levels and sizes. From travel logistics to lodging and structured programming, we take care of the details so educators can stay focused on what matters most: student learning. Let us bring your curriculum to life with an educational trip to Williamsburg, VA that sparks curiosity, builds confidence, and creates lasting memories."

const TRIPS = [
  { title: "Williamsburg School Trip", duration: "3 Day / 2 Night", img: '/images/landmark/williamsburg-1.jpg', href: "/usa-trips/williamsburg/williamsburg-school-trip/" },
  { title: "Williamsburg Field Trip", duration: "2 Day / 1 Night", img: '/images/landmark/williamsburg-2.jpg', href: "/usa-trips/williamsburg/williamsburg-field-trip/" },
]

const STEPS = [
  { title: 'Contact', body: 'Our Travel Consultants are waiting to build your next trip! Contact our office to get the process started.' },
  { title: 'Customize', body: 'Let our experienced staff help bring your ideas to life. We have expertise about timing, best places to stay, restaurants, and fun activities for your group size.' },
  { title: 'Book the trip', body: 'Once you are ready, we can create a portal for all travelers to access and sign up for the trip. After that, let us lead the way and keep surprises off of the itinerary.' },
]

export default function Williamsburg() {
  return (
    <>
      <PageHero
        eyebrow="Williamsburg, VA · The Colonial Capital"
        title={<>Educational Field Trips in <em>Williamsburg</em></>}
        subtitle="Walk the streets of Colonial Williamsburg, tour the Governor's Palace, and let students experience the birthplace of American independence firsthand."
        image="/images/landmark/williamsburg-brick-building.jpg"
        breadcrumb={[{ label: 'Destinations', href: '/destinations/' }, { label: "Williamsburg" }]}
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
      <section className="ile-section ile-section--cream" aria-labelledby="williamsburg-trips-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">Tours &amp; Itineraries</span>
            <h2 id="williamsburg-trips-h" className="lm-h2-amber">WILLIAMSBURG TRIPS</h2>
            <p className="ile-lead lm-center-lead">Explore our most popular Williamsburg programs: every one fully customizable to your group, grade level, and budget.</p>
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
      <section className="ile-section ile-section--white" aria-labelledby="williamsburg-custom-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">How it works</span>
            <h2 id="williamsburg-custom-h" className="lm-h2-amber">CUSTOMIZATION MADE SIMPLE</h2>
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
        { name: "Williamsburg", path: "/usa-trips/williamsburg/" },
      ])} />
      <JsonLd data={destinationGraph({ name: "Williamsburg", description: `Customizable Williamsburg field trips and student tours: safe, guided, and built around your curriculum. Plan your Williamsburg educational trip with Landmark Educational Tours.`, path: "/usa-trips/williamsburg/", trips: TRIPS.map((t) => ({ name: t.title, path: t.href })) })} />
    </>
  )
}
