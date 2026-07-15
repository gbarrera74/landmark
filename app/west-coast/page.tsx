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

export default function WestCoast() {
  return (
    <>
      <PageHero
        eyebrow="Destinations · West Coast"
        title={<>West Coast <em>Destinations</em></>}
        subtitle="Innovation, entertainment, and Pacific coast culture: customizable, safe student trips along the West Coast."
        image="/images/landmark/los-angeles-hero.jpg"
        breadcrumb={[{ label: "Destinations", href: "/destinations/" }, { label: "West Coast" }]}
      />

      <section className="ile-section ile-section--white">
        <div className="ile-container">
          <div className="ile-center lm-narrow"><p className="ile-lead lm-center-lead">Entertainment, technology, and Pacific culture out West.</p></div>
          <div className="lm-dest-grid" style={{ marginTop: 8 }}>
            <Link href="/usa-trips/los-angeles-tours/" className="lm-dest" key="Los Angeles, CA" aria-label="Los Angeles, CA educational tours">
              <img src="/images/landmark/los-angeles-hero.jpg" alt="" loading="lazy" />
              <span className="lm-dest-label">Los Angeles, CA <span aria-hidden="true">&rarr;</span></span>
            </Link>
            <Link href="/usa-trips/seattle/" className="lm-dest" key="Seattle, WA" aria-label="Seattle, WA educational tours">
              <img src="/images/landmark/seattle-skyline-sunset.jpg" alt="" loading="lazy" />
              <span className="lm-dest-label">Seattle, WA <span aria-hidden="true">&rarr;</span></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Customization made simple */}
      <section className="ile-section ile-section--cream" aria-labelledby="west-coast-custom-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">How it works</span>
            <h2 id="west-coast-custom-h" className="lm-h2-amber">CUSTOMIZATION MADE SIMPLE</h2>
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
        { name: "West Coast", path: "/west-coast/" },
      ])} />
    </>
  )
}
