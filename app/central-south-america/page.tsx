/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import BrochureBand from '@/components/BrochureBand'
import JsonLd from '@/lib/seo/JsonLd'
import { breadcrumb, itemList } from '@/lib/seo/schemas'

const STEPS = [
  { title: 'Contact', body: 'Our Travel Consultants are waiting to build your next trip! Contact our office to get the process started.' },
  { title: 'Customize', body: 'Let our experienced staff help bring your ideas to life. We have expertise about timing, best places to stay, restaurants, and fun activities for your group size.' },
  { title: 'Book the trip', body: 'Once you are ready, we can create a portal for all travelers to access and sign up for the trip. After that, let us lead the way and keep surprises off of the itinerary.' },
]

export default function CentralSouthAmerica() {
  return (
    <>
      <PageHero
        eyebrow="Destinations · Central & South America"
        title={<>Central & South America <em>Destinations</em></>}
        subtitle="Rainforests, volcanoes, and vibrant cultures: safe, fully customized educational trips across Central and South America, curriculum-aligned and expertly guided."
        image="/images/landmark/intl-costa-rica.webp"
        breadcrumb={[{ label: "Destinations", href: "/destinations/" }, { label: "Central & South America" }]}
      />

      <section className="ile-section ile-section--white">
        <div className="ile-container">
          <div className="ile-center lm-narrow"><p className="ile-lead lm-center-lead">Guided, curriculum-aligned student programs across Central and South America, handled end to end.</p></div>
          <div className="lm-dest-grid" style={{ marginTop: 8 }}>
            <Link href="/central-south-america/costa-rica/" className="lm-dest" key="Costa Rica" aria-label="Costa Rica educational tours">
              <img src="/images/landmark/intl-costa-rica.webp" alt="" loading="lazy" />
              <span className="lm-dest-label">Costa Rica <span aria-hidden="true">&rarr;</span></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="ile-section ile-section--cream" aria-labelledby="central-south-america-custom-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">How it works</span>
            <h2 id="central-south-america-custom-h" className="lm-h2-amber">CUSTOMIZATION MADE SIMPLE</h2>
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
        { name: "Central & South America", path: "/central-south-america/" },
      ])} />
      <JsonLd data={itemList("Central & South America student trip destinations", [{ name: "Costa Rica", path: "/central-south-america/costa-rica/" }])} />
    </>
  )
}
