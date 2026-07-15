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

export default function Europe() {
  return (
    <>
      <PageHero
        eyebrow="Destinations · Europe"
        title={<>Europe <em>Destinations</em></>}
        subtitle="From ancient Rome to the Norwegian fjords: immersive, safe, fully customized educational trips across Europe, curriculum-aligned and expertly guided."
        image="/images/landmark/intl-italy.webp"
        breadcrumb={[{ label: "Destinations", href: "/destinations/" }, { label: "Europe" }]}
      />

      <section className="ile-section ile-section--white">
        <div className="ile-container">
          <div className="ile-center lm-narrow"><p className="ile-lead lm-center-lead">Guided, curriculum-aligned student programs across Europe, handled end to end.</p></div>
          <div className="lm-dest-grid" style={{ marginTop: 8 }}>
            <Link href="/europe/italy/" className="lm-dest" key="Italy" aria-label="Italy educational tours">
              <img src="/images/landmark/intl-italy.webp" alt="" loading="lazy" />
              <span className="lm-dest-label">Italy <span aria-hidden="true">&rarr;</span></span>
            </Link>
            <Link href="/europe/ireland/" className="lm-dest" key="Ireland" aria-label="Ireland educational tours">
              <img src="/images/landmark/intl-ireland.jpg" alt="" loading="lazy" />
              <span className="lm-dest-label">Ireland <span aria-hidden="true">&rarr;</span></span>
            </Link>
            <Link href="/europe/england/" className="lm-dest" key="England" aria-label="England educational tours">
              <img src="/images/landmark/intl-england.webp" alt="" loading="lazy" />
              <span className="lm-dest-label">England <span aria-hidden="true">&rarr;</span></span>
            </Link>
            <Link href="/europe/france/" className="lm-dest" key="France" aria-label="France educational tours">
              <img src="/images/landmark/intl-france.jpg" alt="" loading="lazy" />
              <span className="lm-dest-label">France <span aria-hidden="true">&rarr;</span></span>
            </Link>
            <Link href="/europe/norway/" className="lm-dest" key="Norway" aria-label="Norway educational tours">
              <img src="/images/landmark/intl-norway.webp" alt="" loading="lazy" />
              <span className="lm-dest-label">Norway <span aria-hidden="true">&rarr;</span></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="ile-section ile-section--cream" aria-labelledby="europe-custom-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">How it works</span>
            <h2 id="europe-custom-h" className="lm-h2-amber">CUSTOMIZATION MADE SIMPLE</h2>
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
        { name: "Europe", path: "/europe/" },
      ])} />
      <JsonLd data={itemList("Europe student trip destinations", [{ name: "Italy", path: "/europe/italy/" }, { name: "Ireland", path: "/europe/ireland/" }, { name: "England", path: "/europe/england/" }, { name: "France", path: "/europe/france/" }, { name: "Norway", path: "/europe/norway/" }])} />
    </>
  )
}
