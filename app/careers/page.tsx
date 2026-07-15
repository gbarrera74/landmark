/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import BrochureBand from '@/components/BrochureBand'
import JsonLd from '@/lib/seo/JsonLd'
import { breadcrumb } from '@/lib/seo/schemas'

export default function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Join Our team"
        title={<><em>Careers</em> at Landmark</>}
        subtitle="Explore our current openings and help us make educational travel possible for every student."
        image="/images/landmark/chicago-hero.jpg"
        breadcrumb={[{ label: "Careers" }]}
      />
      <section className="ile-section ile-section--white">
        <div className="ile-container ilp-prose ilp-prose--center lm-content-prose">
            <p>We are a group of travel hungry individuals on a mission to create opportunities for educational and affordable travel for all. Join us on that mission and apply to be on our team today. Scroll down to view open positions in our company.</p>
        </div>
      </section>
      <section className="ile-section ile-section--cream" aria-labelledby="careers-s0">
        <div className="ile-container ilp-prose lm-content-prose">
          <h2 id="careers-s0" className="lm-h2-amber">Trip Manager</h2>

            <ul className="lm-content-list">
              <li><strong>Employment Type:</strong> Part-Time / Freelance</li>
              <li><strong>Location:</strong> United States</li>
              <li><strong>Status:</strong> Actively recruiting</li>
            </ul>
        </div>
      </section>
      <section className="ile-section ile-section--white">
        <div className="ile-container ile-center">
          <Link href="/get-a-quote/" className="ile-btn ile-btn--primary">Start Planning Your Trip</Link>
        </div>
      </section>
      <BrochureBand />
      <JsonLd data={breadcrumb([
        { name: "Home", path: "/" },
        { name: "Careers", path: "/careers/" },
      ])} />
    </>
  )
}
