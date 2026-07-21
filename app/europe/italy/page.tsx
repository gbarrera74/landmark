/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import DestinationIntro from '@/components/DestinationIntro'
import BrochureBand from '@/components/BrochureBand'
import JsonLd from '@/lib/seo/JsonLd'
import { breadcrumb, destinationGraph } from '@/lib/seo/schemas'

const ArrowR = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
)

const INTRO_P1 =
  'Italy is the original classroom. In Rome, students walk the Forum where the Republic was argued into being, stand inside the Colosseum, and trace the reach of an empire whose language, law, and architecture still shape the world they live in. Florence turns the Renaissance from a chapter heading into something they can see: Brunelleschi’s dome, Michelangelo’s David, the workshops where perspective and humanism were invented. In the ruins of Pompeii, a single afternoon collapses two thousand years, and history stops being abstract.'

const HIGHLIGHTS = [
  "The Roman Forum and the Colosseum",
  "Florence's Renaissance masterpieces",
  "The ruins of Pompeii",
  "The Uffizi and the canals of Venice",
  "Practicing Italian in the markets",
]
const TRIPS = [
  { title: 'Classical Rome & Ancient History Tour', duration: '7 Day / 6 Night', blurb: 'The Colosseum, Roman Forum, Palatine Hill, and Vatican: antiquity made real for history and Latin students.', img: '/images/landmark/italy-rome.jpg', href: '/europe/italy/classical-rome-ancient-history-tour/' },
  { title: 'Renaissance Florence Art & History Program', duration: '6 Day / 5 Night', blurb: 'The Uffizi, the Duomo, and the Accademia: a hands-on study of Renaissance art, humanism, and innovation.', img: '/images/landmark/italy-florence.webp', href: '/europe/italy/renaissance-florence-art-program/' },
  { title: 'Rome, Florence & Venice Grand Tour', duration: '10 Day / 9 Night', blurb: 'Italy’s three essential cities in one itinerary: history, art, and language across the whole peninsula.', img: '/images/landmark/italy-venice.webp', href: '/europe/italy/rome-florence-venice-grand-tour/' },
  { title: 'Pompeii & the Bay of Naples Archaeology Trip', duration: '8 Day / 7 Night', blurb: 'Walk the excavated streets of Pompeii and take in the Amalfi Coast: ancient Roman daily life, uncovered.', img: '/images/landmark/intl-italy.webp', href: '/europe/italy/pompeii-naples-archaeology-trip/' },
  { title: 'Italian Language & Culture Immersion', duration: '9 Day / 8 Night', blurb: 'Conversational Italian in the field: markets, cafés, and hill towns, with guided cultural workshops.', img: '/images/landmark/italy-tuscany.webp', href: '/europe/italy/italian-language-culture-immersion/' },
  { title: 'Northern Italy & the Lakes Program', duration: '8 Day / 7 Night', blurb: 'Milan, Lake Como, and the Italian Lakes: art, geography, and Leonardo’s Last Supper.', img: '/images/landmark/italy-lakes.webp', href: '/europe/italy/northern-italy-lakes-program/' },
]

const HANDLED = [
  { title: 'Flights & Logistics', text: 'Group air, airport transfers, and every connection booked and managed by our team: you arrive and travel as one.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5a2.12 2.12 0 0 0-3-3L13 8 4.8 6.2a1 1 0 0 0-.9 1.7l5.1 3.4-2.6 2.6-2.1-.4a1 1 0 0 0-.9 1.6l2 2 2 2a1 1 0 0 0 1.6-.9l-.4-2.1 2.6-2.6 3.4 5.1a1 1 0 0 0 1.7-.9Z" /></svg>) },
  { title: 'Dedicated Tour Directors', text: 'A Landmark Tour Director travels with your group start to finish, bringing each site to life with the context and stories textbooks can’t provide.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>) },
  { title: '24/7 Global Support', text: 'A Landmark team member is reachable around the clock, across time zones, for the entire trip: before, during, and after.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></svg>) },
]

const STEPS = [
  { title: 'Contact', body: 'Our Travel Consultants are waiting to build your next trip! Contact our office to get the process started.' },
  { title: 'Customize', body: 'Let our experienced staff help bring your ideas to life: timing, cities, Tour Directors, and activities tailored to your group.' },
  { title: 'Book the trip', body: 'Once you’re ready, we create a portal for every traveler to sign up. After that, let us lead the way and keep surprises off the itinerary.' },
]

export default function Italy() {
  return (
    <div className="lm-intl">
      <PageHero
        eyebrow="Europe · Italy"
        title={<>Educational Tours to <em>Italy</em></>}
        subtitle="The original classroom: Rome, Florence, Venice, and Pompeii. Safe, guided, curriculum-aligned student trips, handled end to end."
        image="/images/landmark/intl-italy.webp"
        breadcrumb={[
          { label: 'Destinations', href: '/destinations/' },
          { label: 'Europe', href: '/europe/' },
          { label: 'Italy' },
        ]}
      />

      {/* Intro */}
      <DestinationIntro
        city="Italy"
        lead={INTRO_P1}
        highlights={HIGHLIGHTS}
        image="/images/landmark/intl-italy-group.jpg"
        imageAlt="A Landmark student group inside the Colosseum in Rome, Italy"
        tripCount={TRIPS.length}
      />

      {/* Trips */}
      <section className="ile-section ile-section--cream" aria-labelledby="it-trips-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">Tours &amp; Itineraries</span>
            <h2 id="it-trips-h" className="lm-h2-amber">ITALY TRIPS</h2>
            <p className="ile-lead lm-center-lead">Every Italy program is fully customizable to your group, grade level, subject focus, and budget.</p>
          </div>
          <div className="ilm-blog-grid">
            {TRIPS.map((t) => (
              <Link href={t.href} className="ilm-post" key={t.title}>
                <div className="ilm-post-img lm-trip-media">
                  <img src={t.img} alt="" loading="lazy" />
                  <span className="lm-tour-badge">{t.duration}</span>
                </div>
                <div className="ilm-post-body">
                  <h3>{t.title}</h3>
                  <p>{t.blurb}</p>
                  <span className="ilm-post-more">View Itinerary {ArrowR}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="ile-center lm-after-grid">
            <Link href="/destinations/" className="ile-btn ile-btn--ghost">Explore All International Trips</Link>
          </div>
        </div>
      </section>

      {/* International-only: Travel, Handled */}
      <section className="ile-section ile-section--white" aria-labelledby="it-handled-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">The International Difference</span>
            <h2 id="it-handled-h" className="lm-h2-amber">INTERNATIONAL TRAVEL, HANDLED</h2>
            <p className="ile-lead lm-center-lead">Traveling abroad adds logistics a domestic trip never does. We take all of it off your plate.</p>
          </div>
          <div className="ilp-grid-4" style={{ marginTop: 48 }}>
            {HANDLED.map((h) => (
              <div className="ilm-card" key={h.title}>
                <div className="ilm-card-ico">{h.icon}</div>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization made simple */}
      <section className="ile-section ile-section--cream" aria-labelledby="it-custom-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">How it works</span>
            <h2 id="it-custom-h" className="lm-h2-amber">CUSTOMIZATION MADE SIMPLE</h2>
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
        { name: 'Italy', path: '/europe/italy/' },
      ])} />
      <JsonLd data={destinationGraph({ name: "Italy", description: `Customizable educational tours to Italy for students, Rome, Florence, Venice, and Pompeii. Guided, curriculum-aligned, and fully supported, from group flights to licensed local guides.`, path: "/europe/italy/", trips: TRIPS.map((t) => ({ name: t.title, path: t.href })) })} />
    </div>
  )
}
