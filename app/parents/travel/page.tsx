import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'Travel',
  description:
    'How students travel to Ireland — group flights from Logan Airport (BOS), counselors who meet connecting students, what to bring, and options to extend the trip.',
}

const STEPS = [
  { t: 'Group Flight from Logan (BOS)', d: 'Students fly round-trip together from Boston’s Logan Airport to Ireland, accompanied by ILE staff the entire way.' },
  { t: 'Connecting Students Are Met', d: 'Students with connecting flights into Logan are met after security by ILE counselors, escorted to the Aer Lingus terminal, and helped through check-in — and assisted again on the return.' },
  { t: 'Arrival & Transfers in Ireland', d: 'All ground transportation in Ireland is included. From the airport to each city and every tour, students travel together as a group.' },
  { t: 'The Return Home', d: 'Staff accompany students back through the airport on the return, reuniting them with connecting flights or family.' },
]
const BRING = [
  'A valid passport (valid for at least 6 months beyond travel)',
  'Proof of valid international health insurance',
  'A signed Participant & Parent Release',
  '$500–$700 in recommended spending money',
  'A debit/credit card (with your bank notified of travel)',
]

export default function TravelPage() {
  return (
    <main>
      <PageHero
        eyebrow="For Parents"
        title={<>Getting There, <em>Together</em></>}
        subtitle="From the moment students leave Logan Airport to the day they return, they travel as a supervised group — with staff at every step."
        image="/images/ireland-cliffs-stacks.jpg"
        breadcrumb={[{ label: 'For Parents', href: '/parents/' }, { label: 'Travel' }]}
      />

      <section className="ile-section ile-section--cream">
        <div className="ile-container ile-center" style={{ marginBottom: 48 }}>
          <span className="ile-eyebrow">How It Works</span>
          <h2 className="ile-h2">The Journey, Step by Step</h2>
        </div>
        <div className="ile-container">
          <div className="ilp-timeline">
            {STEPS.map((s, i) => (
              <div className="ilp-step" key={s.t}>
                <div className="ilp-step-num">{i + 1}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ile-section ile-section--white">
        <div className="ile-container">
          <div className="ilp-split">
            <div className="ilp-split-body">
              <span className="ile-eyebrow">Before You Fly</span>
              <h2>What to Bring</h2>
              <p>A few essentials make travel day smooth. We send a full handbook with detailed packing guidance after enrollment.</p>
              <ul className="ilp-prose" style={{ marginTop: 8 }}>
                {BRING.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
            <div className="ilp-split-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/photo-8282.jpg" alt="ILE students ready to travel" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="ile-section ile-section--cream-deep ile-center">
        <div className="ile-container">
          <span className="ile-eyebrow">Make a Trip of It</span>
          <h2 className="ile-h2">Extend the Adventure</h2>
          <p className="ile-lead">Many families turn the program into a longer trip. Our partner Juniper Tours designs custom European itineraries for ILE families — and parents receive a discounted rate. Any airfare difference from an itinerary change is the traveler’s responsibility.</p>
          <div style={{ marginTop: 28 }}>
            <a href="https://junipertours.com" target="_blank" rel="noopener noreferrer" className="ile-btn ile-btn--ghost">Explore Juniper Tours</a>
          </div>
        </div>
      </section>

      <CtaBand title="Have a Travel Question?" primary={{ label: 'Read the FAQ', href: '/parents/faq/' }} secondary={{ label: 'Contact Us', href: '/contact/' }} />
    </main>
  )
}
