import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'Apply',
  description:
    'How to apply to the Irish Life Experience — complete the application, submit recommendations and a transcript, and reserve your spot with a $600 deposit. Decisions within 14 days.',
}

const PORTAL = 'https://portal.irishlifeexperience.com/'

const STEPS = [
  { t: 'Complete the Application', d: 'Both the student and a parent/guardian fill out the application, including short essay responses about your motivation, interests, and what you hope to experience in Ireland.' },
  { t: 'Submit Recommendations & Transcript', d: 'Provide written recommendations from at least one teacher and one counselor, along with a current school transcript.' },
  { t: 'Reserve Your Spot', d: 'Submit a $600 deposit with your application ($100 is non-refundable if not accepted) to hold your place.' },
  { t: 'Hear Back Within 14 Days', d: 'Our team reviews each completed application and notifies you of the decision — typically within two weeks.' },
  { t: 'Confirm Your Place', d: 'Once accepted, an additional $1,000 is due by March 1, with the balance due by June 1. Early-bird payment before January 1 locks in the lower rate.' },
]
const NEED = [
  'Completed student & parent application',
  'One teacher recommendation',
  'One counselor recommendation',
  'A current school transcript',
  'A $600 deposit to reserve your spot',
  'Proof of international health insurance (before departure)',
]

export default function ApplyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Apply"
        title={<>Begin Your Irish <em>Adventure</em></>}
        subtitle="Spots fill quickly each year, so we encourage you to apply early. The final deadline is April 1 — but the sooner you apply, the better your options."
        image="/images/photo-8282.jpg"
        breadcrumb={[{ label: 'Apply' }]}
      />

      <section className="ile-section ile-section--cream">
        <div className="ile-container ile-center" style={{ marginBottom: 48 }}>
          <span className="ile-eyebrow">The Process</span>
          <h2 className="ile-h2">Five Simple Steps</h2>
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
          <div className="ile-center" style={{ marginTop: 44 }}>
            <a href={PORTAL} target="_blank" rel="noopener noreferrer" className="ile-btn ile-btn--primary">Start Your Application</a>
          </div>
        </div>
      </section>

      <section className="ile-section ile-section--white">
        <div className="ile-container">
          <div className="ilp-grid-2">
            <div className="ilp-infocard">
              <h3>What You&apos;ll Need</h3>
              <ul className="ilp-check">{NEED.map((n) => <li key={n}>{n}</li>)}</ul>
            </div>
            <div className="ilp-infocard" style={{ background: 'var(--lm-primary-900)', color: '#fff', borderColor: 'transparent' }}>
              <h3 style={{ color: '#fff' }}>Pricing at a Glance</h3>
              <div style={{ marginTop: 6 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.12)' }}><span style={{ color: 'rgba(255,255,255,0.82)' }}>Apply &amp; pay before Jan 1</span><strong style={{ color: 'var(--lm-secondary)', fontFamily: 'var(--font-head)' }}>$6,050</strong></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.12)' }}><span style={{ color: 'rgba(255,255,255,0.82)' }}>Apply after Jan 1</span><strong style={{ color: '#fff', fontFamily: 'var(--font-head)' }}>$6,550</strong></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.12)' }}><span style={{ color: 'rgba(255,255,255,0.82)' }}>Deposit with application</span><strong style={{ color: '#fff', fontFamily: 'var(--font-head)' }}>$600</strong></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0' }}><span style={{ color: 'rgba(255,255,255,0.82)' }}>Due by March 1</span><strong style={{ color: '#fff', fontFamily: 'var(--font-head)' }}>+$1,000</strong></div>
              </div>
              <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.6)', marginTop: 14 }}>A $140 credit-card processing fee applies. All-inclusive of airfare, room &amp; board, tuition, tours, and activities.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Questions Before You Apply?" text="We're happy to walk you and your student through anything at all." primary={{ label: 'Start Your Application', href: PORTAL }} secondary={{ label: 'Contact Our Team', href: '/contact/' }} />
    </main>
  )
}
