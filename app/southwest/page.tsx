/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import BrochureBand from '@/components/BrochureBand'
import JsonLd from '@/lib/seo/JsonLd'
import { breadcrumb } from '@/lib/seo/schemas'

const STEPS = [
  { title: 'Contact', body: 'Our Travel Consultants are waiting to build your next trip! Contact our office to get the process started.' },
  { title: 'Customize', body: 'Let our experienced staff help bring your ideas to life. We have expertise about timing, best places to stay, restaurants, and fun activities for your group size.' },
  { title: 'Book the trip', body: 'Once you are ready, we can create a portal for all travelers to access and sign up for the trip. After that, let us lead the way and keep surprises off of the itinerary.' },
]

export default function Southwest() {
  return (
    <>
      <PageHero
        eyebrow="Destinations · Southwest"
        title={<>Southwest <em>Destinations</em></>}
        subtitle="Missions, deserts, and frontier history: customizable, curriculum-aligned student trips through the American Southwest."
        image="/images/landmark/san-antonio-hero.jpg"
        breadcrumb={[{ label: "Destinations", href: "/destinations/" }, { label: "Southwest" }]}
      />

      <section className="ile-section ile-section--white">
        <div className="ile-container">
          <div className="ile-center lm-narrow"><p className="ile-lead lm-center-lead">Spanish missions and desert landscapes in the Southwest.</p></div>
          <div className="lm-dest-grid" style={{ marginTop: 8 }}>
            <Link href="/usa-trips/san-antonio/" className="lm-dest" key="San Antonio, TX" aria-label="San Antonio, TX educational tours">
              <img src="/images/landmark/san-antonio-hero.jpg" alt="" loading="lazy" />
              <span className="lm-dest-label">San Antonio, TX <span aria-hidden="true">&rarr;</span></span>
            </Link>
            <Link href="/usa-trips/new-mexico/" className="lm-dest" key="New Mexico" aria-label="New Mexico educational tours">
              <img src="/images/landmark/new-mexico-hero.jpg" alt="" loading="lazy" />
              <span className="lm-dest-label">New Mexico <span aria-hidden="true">&rarr;</span></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Customization made simple */}
      <section className="ile-section ile-section--cream" aria-labelledby="southwest-custom-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">How it works</span>
            <h2 id="southwest-custom-h" className="lm-h2-amber">CUSTOMIZATION MADE SIMPLE</h2>
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
        { name: "Home", path: "/" },
        { name: "Destinations", path: "/destinations/" },
        { name: "Southwest", path: "/southwest/" },
      ])} />
    </>
  )
}
