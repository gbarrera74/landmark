/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import BrochureBand from '@/components/BrochureBand'
import JsonLd from '@/lib/seo/JsonLd'
import { breadcrumb } from '@/lib/seo/schemas'

const ArrowR = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
)

const INTRO_P1 =
  "Rolling green hills. Ancient castles. Storied traditions. Educational Trips to Ireland immerse students in a land shaped by centuries of resilience while connecting them to rich traditions of literature, music, and folklore. Walking through medieval castles transforms history into something tangible and unforgettable."
const INTRO_P2 =
  "We design our student trips to Ireland for genuine engagement, not passive sightseeing. Students explore ancient monastic sites, hear the stories behind Ireland’s fight for independence, and experience the living traditions of Irish music and storytelling firsthand. Landmark Educational Tours partners with schools to make sure every detail supports safety and curriculum objectives. Ireland offers a rich blend of history and heritage, encouraging students to see themselves as part of a broader, global story. When learners return home, they carry perspective, confidence, and motivation. Book your educational trip to Ireland today."

const STEPS = [
  { title: 'Contact', body: 'Our Travel Consultants are waiting to build your next trip! Contact our office to get the process started.' },
  { title: 'Customize', body: 'Let our experienced staff help bring your ideas to life. We have expertise about timing, best places to stay, restaurants, and fun activities for your group size.' },
  { title: 'Book the trip', body: 'Once you are ready, we can create a portal for all travelers to access and sign up for the trip. After that, let us lead the way and keep surprises off of the itinerary.' },
]

const HANDLED = [
  { title: 'Flights & Logistics', text: 'Group air, airport transfers, and every connection booked and managed by our team: you arrive and travel as one.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5a2.12 2.12 0 0 0-3-3L13 8 4.8 6.2a1 1 0 0 0-.9 1.7l5.1 3.4-2.6 2.6-2.1-.4a1 1 0 0 0-.9 1.6l2 2 2 2a1 1 0 0 0 1.6-.9l-.4-2.1 2.6-2.6 3.4 5.1a1 1 0 0 0 1.7-.9Z" /></svg>) },
  { title: 'Passports & Documentation', text: 'We guide students, parents, and chaperones through passports, entry requirements, and travel paperwork well ahead of departure.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" /><circle cx="12" cy="9" r="2.5" /><path d="M9.5 15h5" /></svg>) },
  { title: 'Licensed Local Guides', text: 'Accredited English-speaking local guides bring each site to life with the context textbooks cannot provide.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>) },
  { title: '24/7 Global Support', text: 'A Landmark team member is reachable around the clock, across time zones, for the entire trip: before, during, and after.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></svg>) },
]

export default function Ireland() {
  return (
    <div className="lm-intl">
      <PageHero
        eyebrow="Europe · Ireland"
        title={<>Educational Tours to <em>Ireland</em></>}
        subtitle="Explore medieval castles, ancient monastic sites, and living traditions of Irish music and storytelling on an unforgettable student journey."
        image="/images/landmark/intl-ireland.jpg"
        breadcrumb={[{ label: 'Destinations', href: '/destinations/' }, { label: 'Europe', href: '/europe/' }, { label: "Ireland" }]}
      />

      {/* Intro */}
      <section className="ile-section ile-section--white">
        <div className="ile-container">
          <div className="ilp-prose ilp-prose--center">
            <p>{INTRO_P1}</p>
            <p>{INTRO_P2}</p>
          </div>
          <div className="ile-center" style={{ marginTop: 32 }}>
            <Link href="/get-a-quote/" className="ile-btn ile-btn--primary">Start Planning Your Trip</Link>
          </div>
        </div>
      </section>

      {/* International-only: Travel, Handled */}
      <section className="ile-section ile-section--white" aria-labelledby="ireland-handled-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">The International Difference</span>
            <h2 id="ireland-handled-h" className="lm-h2-amber">INTERNATIONAL TRAVEL, HANDLED</h2>
            <p className="ile-lead lm-center-lead">Traveling abroad adds logistics a domestic trip never does. We take all of it off your plate.</p>
          </div>
          <div className="ilp-grid-4" style={{ marginTop: 48 }}>
            {HANDLED.map((c) => (
              <div className="ilm-card" key={c.title}>
                <div className="ilm-card-ico">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization made simple */}
      <section className="ile-section ile-section--cream" aria-labelledby="ireland-custom-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">How it works</span>
            <h2 id="ireland-custom-h" className="lm-h2-amber">CUSTOMIZATION MADE SIMPLE</h2>
            <p className="ile-lead lm-center-lead">Three simple steps from first call to a fully-planned, worry-free trip abroad.</p>
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
        { name: 'Home', path: '/' },
        { name: 'Destinations', path: '/destinations/' },
        { name: 'Europe', path: '/europe/' },
        { name: "Ireland", path: "/europe/ireland/" },
      ])} />
    </div>
  )
}
