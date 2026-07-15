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

export default function EastCoast() {
  return (
    <>
      <PageHero
        eyebrow="Destinations · East Coast"
        title={<>East Coast <em>Destinations</em></>}
        subtitle="From the founding cities of the Republic to the living history of the coast: customizable, curriculum-aligned student trips up and down the Eastern Seaboard."
        image="/images/landmark/dc-hero.jpg"
        breadcrumb={[{ label: "Destinations", href: "/destinations/" }, { label: "East Coast" }]}
      />

      <section className="ile-section ile-section--white">
        <div className="ile-container">
          <div className="ile-center lm-narrow"><p className="ile-lead lm-center-lead">Ten of our most popular destinations, all along the East Coast.</p></div>
          <div className="lm-dest-grid" style={{ marginTop: 8 }}>
            <Link href="/usa-trips/washington-dc/" className="lm-dest" key="Washington, D.C." aria-label="Washington, D.C. educational tours">
              <img src="/images/landmark/dc-hero.jpg" alt="" loading="lazy" />
              <span className="lm-dest-label">Washington, D.C. <span aria-hidden="true">&rarr;</span></span>
            </Link>
            <Link href="/usa-trips/new-york-city/" className="lm-dest" key="New York, NY" aria-label="New York, NY educational tours">
              <img src="/images/landmark/hero-nyc.jpg" alt="" loading="lazy" />
              <span className="lm-dest-label">New York, NY <span aria-hidden="true">&rarr;</span></span>
            </Link>
            <Link href="/usa-trips/atlanta/" className="lm-dest" key="Atlanta, GA" aria-label="Atlanta, GA educational tours">
              <img src="/images/landmark/atlanta-skyline.jpg" alt="" loading="lazy" />
              <span className="lm-dest-label">Atlanta, GA <span aria-hidden="true">&rarr;</span></span>
            </Link>
            <Link href="/usa-trips/boston/" className="lm-dest" key="Boston, MA" aria-label="Boston, MA educational tours">
              <img src="/images/landmark/boston-skyline-hero.jpg" alt="" loading="lazy" />
              <span className="lm-dest-label">Boston, MA <span aria-hidden="true">&rarr;</span></span>
            </Link>
            <Link href="/usa-trips/orlando/" className="lm-dest" key="Orlando, FL" aria-label="Orlando, FL educational tours">
              <img src="/images/landmark/orlando-hero.jpg" alt="" loading="lazy" />
              <span className="lm-dest-label">Orlando, FL <span aria-hidden="true">&rarr;</span></span>
            </Link>
            <Link href="/usa-trips/philadelphia/" className="lm-dest" key="Philadelphia, PA" aria-label="Philadelphia, PA educational tours">
              <img src="/images/landmark/philadelphia-hero.jpg" alt="" loading="lazy" />
              <span className="lm-dest-label">Philadelphia, PA <span aria-hidden="true">&rarr;</span></span>
            </Link>
            <Link href="/usa-trips/williamsburg/" className="lm-dest" key="Williamsburg, VA" aria-label="Williamsburg, VA educational tours">
              <img src="/images/landmark/williamsburg-brick-building.jpg" alt="" loading="lazy" />
              <span className="lm-dest-label">Williamsburg, VA <span aria-hidden="true">&rarr;</span></span>
            </Link>
            <Link href="/usa-trips/new-orleans/" className="lm-dest" key="New Orleans, LA" aria-label="New Orleans, LA educational tours">
              <img src="/images/landmark/new-orleans-hero.jpg" alt="" loading="lazy" />
              <span className="lm-dest-label">New Orleans, LA <span aria-hidden="true">&rarr;</span></span>
            </Link>
            <Link href="/usa-trips/charleston/" className="lm-dest" key="Charleston, SC" aria-label="Charleston, SC educational tours">
              <img src="/images/landmark/charleston-hero.jpg" alt="" loading="lazy" />
              <span className="lm-dest-label">Charleston, SC <span aria-hidden="true">&rarr;</span></span>
            </Link>
            <Link href="/usa-trips/savannah/" className="lm-dest" key="Savannah, GA" aria-label="Savannah, GA educational tours">
              <img src="/images/landmark/savannah-hero.jpg" alt="" loading="lazy" />
              <span className="lm-dest-label">Savannah, GA <span aria-hidden="true">&rarr;</span></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Customization made simple */}
      <section className="ile-section ile-section--cream" aria-labelledby="east-coast-custom-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">How it works</span>
            <h2 id="east-coast-custom-h" className="lm-h2-amber">CUSTOMIZATION MADE SIMPLE</h2>
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
        { name: "East Coast", path: "/east-coast/" },
      ])} />
      <JsonLd data={itemList("East Coast student trip destinations", [{ name: "Washington, D.C.", path: "/usa-trips/washington-dc/" }, { name: "New York, NY", path: "/usa-trips/new-york-city/" }, { name: "Atlanta, GA", path: "/usa-trips/atlanta/" }, { name: "Boston, MA", path: "/usa-trips/boston/" }, { name: "Orlando, FL", path: "/usa-trips/orlando/" }, { name: "Philadelphia, PA", path: "/usa-trips/philadelphia/" }, { name: "Williamsburg, VA", path: "/usa-trips/williamsburg/" }, { name: "New Orleans, LA", path: "/usa-trips/new-orleans/" }, { name: "Charleston, SC", path: "/usa-trips/charleston/" }, { name: "Savannah, GA", path: "/usa-trips/savannah/" }])} />
    </>
  )
}
