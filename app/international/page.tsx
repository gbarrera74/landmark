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

export default function International() {
  return (
    <>
      <PageHero
        eyebrow="Destinations · Around the Globe"
        title={<>International <em>Destinations</em></>}
        subtitle="Landmark takes students beyond the U.S.: immersive, safe, fully customized educational trips across North America, Europe, Asia, and Central America."
        image="/images/landmark/intl-italy.webp"
        breadcrumb={[{ label: "Destinations", href: "/destinations/" }, { label: "International" }]}
      />

      <section className="ile-section ile-section--white">
        <div className="ile-container">
          <div className="ile-center lm-narrow"><p className="ile-lead lm-center-lead">Fully customized, safe international programs, handled end to end.</p></div>
          <div className="lm-intl-grid" style={{ marginTop: 8 }}>
            <Link href="/international/canada/" className="lm-dest" key="Canada" aria-label="Canada educational tours">
              <img src="/images/landmark/canada-hero.jpg" alt="" loading="lazy" />
              <span className="lm-dest-label">Canada <span aria-hidden="true">&rarr;</span></span>
            </Link>
            <Link href="/international/italy/" className="lm-dest" key="Italy" aria-label="Italy educational tours">
              <img src="/images/landmark/intl-italy.webp" alt="" loading="lazy" />
              <span className="lm-dest-label">Italy <span aria-hidden="true">&rarr;</span></span>
            </Link>
            <Link href="/international/costa-rica/" className="lm-dest" key="Costa Rica" aria-label="Costa Rica educational tours">
              <img src="/images/landmark/intl-costa-rica.webp" alt="" loading="lazy" />
              <span className="lm-dest-label">Costa Rica <span aria-hidden="true">&rarr;</span></span>
            </Link>
            <Link href="/international/norway/" className="lm-dest" key="Norway" aria-label="Norway educational tours">
              <img src="/images/landmark/intl-norway.webp" alt="" loading="lazy" />
              <span className="lm-dest-label">Norway <span aria-hidden="true">&rarr;</span></span>
            </Link>
            <Link href="/international/england/" className="lm-dest" key="England" aria-label="England educational tours">
              <img src="/images/landmark/intl-england.webp" alt="" loading="lazy" />
              <span className="lm-dest-label">England <span aria-hidden="true">&rarr;</span></span>
            </Link>
            <Link href="/international/france/" className="lm-dest" key="France" aria-label="France educational tours">
              <img src="/images/landmark/intl-france.jpg" alt="" loading="lazy" />
              <span className="lm-dest-label">France <span aria-hidden="true">&rarr;</span></span>
            </Link>
            <Link href="/international/ireland/" className="lm-dest" key="Ireland" aria-label="Ireland educational tours">
              <img src="/images/landmark/intl-ireland.jpg" alt="" loading="lazy" />
              <span className="lm-dest-label">Ireland <span aria-hidden="true">&rarr;</span></span>
            </Link>
            <Link href="/international/japan/" className="lm-dest" key="Japan" aria-label="Japan educational tours">
              <img src="/images/landmark/intl-japan.webp" alt="" loading="lazy" />
              <span className="lm-dest-label">Japan <span aria-hidden="true">&rarr;</span></span>
            </Link>
            <Link href="/international/south-korea/" className="lm-dest" key="South Korea" aria-label="South Korea educational tours">
              <img src="/images/landmark/intl-south-korea.webp" alt="" loading="lazy" />
              <span className="lm-dest-label">South Korea <span aria-hidden="true">&rarr;</span></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Customization made simple */}
      <section className="ile-section ile-section--cream" aria-labelledby="international-custom-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">How it works</span>
            <h2 id="international-custom-h" className="lm-h2-amber">CUSTOMIZATION MADE SIMPLE</h2>
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
        { name: "International", path: "/international/" },
      ])} />
    </>
  )
}
