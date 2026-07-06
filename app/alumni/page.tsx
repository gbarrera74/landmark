import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'Alumni',
  description:
    'Once an ILE student, always part of the family. Connect with Alumni Ambassadors, reconnect with friends from your summer, and see how alumni stay involved.',
}

const ARROW = <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>

const WAYS = [
  { t: 'Alumni Ambassadors', d: 'Prospective families can connect with our Ambassadors — past students who answer first-hand questions about life on the program.' },
  { t: 'Reconnect with Friends', d: 'Lost touch with friends from your summer? Our alumni community helps you find each other again, year after year.' },
  { t: 'Alumni Stories', d: 'From published authors to those who built a life in Ireland, our alumni carry their experience into everything they do.' },
]

export default function AlumniPage() {
  return (
    <main>
      <PageHero
        eyebrow="Alumni"
        title={<>Once ILE, <em>Always ILE</em></>}
        subtitle="Generations of students have crossed the Atlantic with us since 1998 — and the bonds formed over one Irish summer last a lifetime."
        image="/images/ireland-galway-twilight.jpg"
        breadcrumb={[{ label: 'Alumni' }]}
      />

      <section className="ile-section ile-section--cream">
        <div className="ile-container ile-center">
          <span className="ile-eyebrow">Stay Connected</span>
          <h2 className="ile-h2">Part of the Family for Life</h2>
          <div className="ilp-grid-3" style={{ marginTop: 44 }}>
            {WAYS.map((w) => (
              <div className="ilm-card" key={w.t}>
                <h3 style={{ fontSize: 20, marginBottom: 10 }}>{w.t}</h3>
                <p style={{ fontSize: 14.5, color: 'var(--lm-ink-muted)', lineHeight: 1.7 }}>{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ile-section ile-section--cream-deep ile-center">
        <div className="ile-container">
          <span className="ile-eyebrow">A Legacy of Summers</span>
          <h2 className="ile-h2">Decades of Memories</h2>
          <p className="ile-lead">From Blarney Castle to the Poulnabrone Dolmen, our alumni galleries span generations of students discovering Ireland together. Multi-generational families now send their own children on the very program they once loved.</p>
        </div>
      </section>

      {/* In Memoriam */}
      <section className="ile-section ile-section--forest ile-center">
        <div className="ile-container">
          <span className="ile-eyebrow">In Memoriam</span>
          <h2 className="ile-h2">Remembering Our Community</h2>
          <p className="ile-lead">We hold a special place for the members of our ILE family who are no longer with us. Their spirit remains part of every summer we share.</p>
          <div style={{ marginTop: 28 }}>
            <Link href="/contact/" className="ile-btn ile-btn--outline-light">Get in Touch {ARROW}</Link>
          </div>
        </div>
      </section>

      <CtaBand title="Send the Next Generation" text="Were you an ILE student? Help a young person in your life discover the magic of Ireland." />
    </main>
  )
}
