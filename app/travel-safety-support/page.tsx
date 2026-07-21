/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import BrochureBand from '@/components/BrochureBand'
import JsonLd from '@/lib/seo/JsonLd'
import { breadcrumb } from '@/lib/seo/schemas'

export default function TravelSafety() {
  return (
    <>
      <PageHero
        eyebrow="Our travel outlook"
        title={<>Travel Safety &amp; <em>Support</em></>}
        subtitle="Traveler safety comes first, so your group can explore the world with confidence and peace of mind."
        image="/images/landmark/seattle-skyline-sunset.jpg"
        breadcrumb={[{ label: "Travel Safety & Support" }]}
      />
      <section className="ile-section ile-section--white">
        <div className="ile-container ilp-prose ilp-prose--center lm-content-prose">
            <p>Whenever you are ready to travel. Our team is ready to help.</p>
        </div>
      </section>
      <section className="ile-section ile-section--cream" aria-labelledby="travel-safety-support-s0">
        <div className="ile-container ilp-prose lm-content-prose">
          <h2 id="travel-safety-support-s0" className="lm-h2-amber">Getting back to travel, with traveler safety as the priority</h2>
            <p>Since our founding, our goal has been to provide group tours with an outstanding level of high quality service. Traveler safety is at the forefront of our priorities; we plan each trip with student safety in mind and ensure that all of our leaders are trained in fundamental safety protocols. We invite all ages of travelers to embark to landmarks around the world with Landmark Educational Tours!</p>

        </div>
      </section>
      <section className="ile-section ile-section--white" aria-labelledby="travel-safety-support-s1">
        <div className="ile-container ilp-prose lm-content-prose">
          <h2 id="travel-safety-support-s1" className="lm-h2-amber">The Landmark Difference</h2>
            <p>We want to keep everyone safe on our trips. From overnight security at hotels to safety wristbands, Landmark has you and your group covered to make sure everyone is safe and sound.</p>
            <ul className="lm-content-list">
              <li>Professional Tour Specialist Experience</li>
              <li>Exceptional Customer Service</li>
              <li>Environmentally Friendly Trips</li>
              <li>Best-in-class Travel Protection</li>
            </ul>
        </div>
      </section>
      <section className="ile-section ile-section--cream" aria-labelledby="travel-safety-support-s2">
        <div className="ile-container ilp-prose lm-content-prose">
          <h2 id="travel-safety-support-s2" className="lm-h2-amber">Travel Protection Plan Includes:</h2>
            <p>Important Note/Disclaimer: This website and flyer contains highlights of the plans developed by battleface Insurance Services, LLC</p>
            <ul className="lm-content-list">
              <li>Trip Interruption</li>
              <li>Trip Delay</li>
              <li>Missed Connection</li>
              <li>Repatriation of Remains</li>
              <li>Baggage Loss/Damage</li>
              <li>Medical Evacuation</li>
              <li>Security &amp; Natural Disaster Evacuation</li>
              <li>Baggage Loss/Damage &amp; Personal Effects</li>
              <li>Baggage Delay</li>
              <li>Accident &amp; Sickness</li>
            </ul>
            <p style={{ marginTop: 24 }}>
              <a href="https://robinassist.com/claims/LandmarkEducationalTours" target="_blank" rel="noopener noreferrer" className="ile-btn ile-btn--primary">File a Claim Online</a>
            </p>
            <p style={{ marginTop: 14, fontSize: 14, color: 'var(--lm-ink-muted)' }}>Questions about your plan? battleface support is available 24/7 at 855-998-2928 or usa@battleface.com.</p>
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
        { name: "Travel Safety & Support", path: "/travel-safety-support/" },
      ])} />
    </>
  )
}
