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

export default function Asia() {
  return (
    <>
      <PageHero
        eyebrow="Destinations · Asia"
        title={<>Asia <em>Destinations</em></>}
        subtitle="Ancient temples, modern cities, and living traditions: safe, fully customized educational trips across Asia, curriculum-aligned and expertly guided."
        image="/images/landmark/intl-japan.webp"
        breadcrumb={[{ label: "Destinations", href: "/destinations/" }, { label: "Asia" }]}
      />

      <section className="ile-section ile-section--white">
        <div className="ile-container">
          <div className="ile-center lm-narrow"><p className="ile-lead lm-center-lead">Guided, curriculum-aligned student programs across Asia, handled end to end.</p></div>
          <div className="lm-dest-grid" style={{ marginTop: 8 }}>
            <Link href="/asia/japan/" className="lm-dest" key="Japan" aria-label="Japan educational tours">
              <img src="/images/landmark/intl-japan.webp" alt="" loading="lazy" />
              <span className="lm-dest-label">Japan <span aria-hidden="true">&rarr;</span></span>
            </Link>
            <Link href="/asia/south-korea/" className="lm-dest" key="South Korea" aria-label="South Korea educational tours">
              <img src="/images/landmark/intl-south-korea.webp" alt="" loading="lazy" />
              <span className="lm-dest-label">South Korea <span aria-hidden="true">&rarr;</span></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="ile-section ile-section--cream" aria-labelledby="asia-custom-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">How it works</span>
            <h2 id="asia-custom-h" className="lm-h2-amber">CUSTOMIZATION MADE SIMPLE</h2>
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
        { name: "Asia", path: "/asia/" },
      ])} />
    </>
  )
}
