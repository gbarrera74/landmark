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

export default function Destinations() {
  return (
    <>
      <PageHero
        eyebrow="Landmark Educational Tours"
        title={<>Explore Our <em>Destinations</em></>}
        subtitle="Every Landmark destination in one place: customizable, safe, curriculum-aligned educational trips across the U.S. and around the world."
        image="/images/landmark/dc-hero.jpg"
        breadcrumb={[{ label: "Destinations" }]}
      />

      <section className="ile-section ile-section--white" aria-labelledby="east-coast-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <h2 id="east-coast-h" className="lm-h2-amber">EAST COAST</h2>
          </div>
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

      <section className="ile-section ile-section--cream" aria-labelledby="midwest-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <h2 id="midwest-h" className="lm-h2-amber">MIDWEST</h2>
          </div>
          <div className="lm-dest-grid" style={{ marginTop: 8 }}>
            <Link href="/usa-trips/chicago/" className="lm-dest" key="Chicago, IL" aria-label="Chicago, IL educational tours">
              <img src="/images/landmark/chicago-hero.jpg" alt="" loading="lazy" />
              <span className="lm-dest-label">Chicago, IL <span aria-hidden="true">&rarr;</span></span>
            </Link>
            <Link href="/usa-trips/mackinac-island/" className="lm-dest" key="Mackinac Island, MI" aria-label="Mackinac Island, MI educational tours">
              <img src="/images/landmark/mackinac-hero.jpg" alt="" loading="lazy" />
              <span className="lm-dest-label">Mackinac Island, MI <span aria-hidden="true">&rarr;</span></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="ile-section ile-section--white" aria-labelledby="southwest-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <h2 id="southwest-h" className="lm-h2-amber">SOUTHWEST</h2>
          </div>
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

      <section className="ile-section ile-section--cream" aria-labelledby="west-coast-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <h2 id="west-coast-h" className="lm-h2-amber">WEST COAST</h2>
          </div>
          <div className="lm-dest-grid" style={{ marginTop: 8 }}>
            <Link href="/usa-trips/los-angeles/" className="lm-dest" key="Los Angeles, CA" aria-label="Los Angeles, CA educational tours">
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

      <section className="ile-section ile-section--white" aria-labelledby="international-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <h2 id="international-h" className="lm-h2-amber">INTERNATIONAL</h2>
          </div>
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
      <section className="ile-section ile-section--cream" aria-labelledby="destinations-custom-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">How it works</span>
            <h2 id="destinations-custom-h" className="lm-h2-amber">CUSTOMIZATION MADE SIMPLE</h2>
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
      ])} />
    </>
  )
}
