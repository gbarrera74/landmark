/* eslint-disable @next/next/no-img-element */
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'
import BrochureBand from '@/components/BrochureBand'
import JsonLd from '@/lib/seo/JsonLd'
import { breadcrumb } from '@/lib/seo/schemas'

const DIFFERENCE = [
  { title: 'Professional Tour Specialist Experience', text: 'Seasoned tour professionals plan and run every departure with care.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7h-9M14 17H5M17 3l4 4-4 4M7 21l-4-4 4-4" /></svg>) },
  { title: 'Exceptional Customer Service', text: 'A dedicated team supports your group before, during, and after the trip.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>) },
  { title: 'Environmentally Friendly Trips', text: 'Responsible travel choices that respect the places we visit.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" /><path d="M2 21c0-3 1.85-5.36 5.08-6" /></svg>) },
  { title: 'Best-in-Class Travel Protection', text: 'Optional coverage underwritten by battleface for peace of mind.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>) },
]

const SUPPORT = [
  { title: 'Overnight Hotel Security', text: 'Overnight security at hotels and safety wristbands keep every traveler accounted for.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>) },
  { title: 'Trained Trip Leaders', text: 'Our leaders are trained in fundamental safety protocols before every departure.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 6 6 .9-4.5 4.3 1 6.1L12 17l-5.5 2.3 1-6.1L3 8.9 9 8z" /></svg>) },
  { title: '24/7 Support', text: 'Help is available around the clock — battleface support at 855-998-2928 or usa@battleface.com.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></svg>) },
]

const COVERAGE = [
  'Trip Interruption', 'Trip Delay', 'Missed Connection', 'Repatriation of Remains',
  'Baggage Loss/Damage', 'Medical Evacuation', 'Security & Natural Disaster Evacuation',
  'Baggage Loss/Damage & Personal Effects', 'Baggage Delay', 'Accident & Sickness',
]

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

      {/* Priority statement */}
      <section className="ile-section ile-section--white" aria-labelledby="safety-intro-h">
        <div className="ile-container ile-center lm-narrow">
          <span className="ile-eyebrow">Traveler safety first</span>
          <h2 id="safety-intro-h" className="lm-h2-amber">GETTING BACK TO TRAVEL, SAFELY</h2>
          <p className="ile-lead lm-center-lead">Since our founding, our goal has been to provide group tours with an outstanding level of high-quality service. Traveler safety is at the forefront of our priorities: we plan each trip with student safety in mind and ensure all of our leaders are trained in fundamental safety protocols. We invite travelers of every age to embark to landmarks around the world with Landmark Educational Tours.</p>
        </div>
      </section>

      {/* The Landmark Difference */}
      <section className="ile-section ile-section--cream" aria-labelledby="safety-diff-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">The Landmark difference</span>
            <h2 id="safety-diff-h" className="lm-h2-amber">WHAT KEEPS YOUR GROUP SAFE</h2>
            <p className="ile-lead lm-center-lead">From overnight security at hotels to safety wristbands, Landmark has you and your group covered to make sure everyone is safe and sound.</p>
          </div>
          <div className="ilp-grid-4" style={{ marginTop: 44 }}>
            {DIFFERENCE.map((d) => (
              <div className="ilm-card" key={d.title}>
                <div className="ilm-card-ico">{d.icon}</div>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* On-trip support */}
      <section className="ile-section ile-section--white" aria-labelledby="safety-support-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">Around the clock</span>
            <h2 id="safety-support-h" className="lm-h2-amber">SUPPORT ON EVERY TRIP</h2>
          </div>
          <div className="ilp-grid-3" style={{ marginTop: 44 }}>
            {SUPPORT.map((s) => (
              <div className="ilm-card" key={s.title}>
                <div className="ilm-card-ico">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Protection panel */}
      <section className="ile-section ile-section--cream" aria-labelledby="safety-protect-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">Optional add-on</span>
            <h2 id="safety-protect-h" className="lm-h2-amber">TRAVEL PROTECTION PLAN</h2>
          </div>
          <div className="lm-narrow" style={{ marginTop: 32 }}>
            <div className="ilp-infocard ilp-check">
              <h3>Travel Protection Plan Includes:</h3>
              <ul>
                {COVERAGE.map((c) => (<li key={c}>{c}</li>))}
              </ul>
              <p className="lm-sample-note" style={{ marginTop: 20 }}>
                <em>Important Note/Disclaimer: This website and flyer contains highlights of the plans developed by battleface Insurance Services, LLC.</em>
              </p>
              <p style={{ marginTop: 20 }}>
                <a href="https://robinassist.com/claims/LandmarkEducationalTours" target="_blank" rel="noopener noreferrer" className="ile-btn ile-btn--primary">File a Claim Online</a>
              </p>
              <p style={{ marginTop: 14, fontSize: 14, color: 'var(--lm-ink-muted)' }}>Questions about your plan? battleface support is available 24/7 at 855-998-2928 or usa@battleface.com.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Peace of mind"
        title="Travel with confidence"
        text="Let us handle the logistics and the duty of care so you can focus on the experience. Tell us about your group and we’ll build a safe, custom itinerary."
        primary={{ label: 'Start Planning Your Trip', href: '/get-a-quote/' }}
        secondary={{ label: 'Talk to Our Team', href: '/contact-us/' }}
      />

      <BrochureBand />
      <JsonLd data={breadcrumb([
        { name: "Home", path: "/" },
        { name: "Travel Safety & Support", path: "/travel-safety-support/" },
      ])} />
    </>
  )
}
