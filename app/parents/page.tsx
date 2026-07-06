import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'For Parents',
  description:
    'Safety, accommodations, travel, and answers for parents. The Irish Life Experience pairs a fully chaperoned program with experienced staff so your student can explore Ireland with confidence.',
}

const ARROW = <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>

const AREAS = [
  { kicker: 'Where They Stay', t: 'Accommodations', d: 'Safe, supervised boarding-school and apartment housing in each city.', href: '/parents/accommodations/' },
  { kicker: 'Your Questions', t: 'FAQ', d: 'Spending money, phones, laundry, medical, curfews — answered.', href: '/parents/faq/' },
  { kicker: 'Getting There', t: 'Travel', d: 'Group flights from Logan (BOS) with staff accompanying students.', href: '/parents/travel/' },
]
const SAFETY = [
  'Staff on duty at all times',
  'All staff trained and certified in CPR and First Aid',
  'A maintained student-to-staff ratio of 7:1',
  'Hospitals located near each campus',
  'Emergency numbers available to parents',
  'Clear guidelines and curfews for every student',
]

export default function ParentsPage() {
  return (
    <main>
      <PageHero
        eyebrow="For Parents"
        title={<>Book with <em>Confidence</em></>}
        subtitle="A fully chaperoned program, experienced staff who were once students themselves, and a 25-year track record of bringing students home happier and more capable."
        image="/images/photo-8282.jpg"
        breadcrumb={[{ label: 'For Parents' }]}
      />

      <section className="ile-section ile-section--cream">
        <div className="ile-container ile-center">
          <span className="ile-eyebrow">Everything You Need</span>
          <h2 className="ile-h2">Start Here</h2>
          <div className="ilp-grid-3 ilm-tracks-grid" style={{ marginTop: 48 }}>
            {AREAS.map((a) => (
              <Link href={a.href} className="ilm-track" key={a.t}>
                <div className="ilm-track-kicker">{a.kicker}</div>
                <h3>{a.t}</h3>
                <p>{a.d}</p>
                <span className="ilm-track-arrow">Learn more {ARROW}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="ile-section ile-section--white">
        <div className="ile-container">
          <div className="ilp-split">
            <div className="ilp-split-body">
              <span className="ile-eyebrow">Safety First</span>
              <h2>Their Safety Is Our Foundation</h2>
              <p>From the moment students leave Logan Airport, they&apos;re in the care of a dedicated team. Our safety practices are built to give parents real peace of mind.</p>
              <ul className="ilp-prose" style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 12, marginTop: 8 }}>
                {SAFETY.map((s) => <li key={s} style={{ position: 'relative', paddingLeft: 32, fontSize: 16, lineHeight: 1.6, color: 'var(--lm-ink)' }}><span style={{ position: 'absolute', left: 0, top: 2, width: 20, height: 20, borderRadius: '50%', background: 'var(--lm-primary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span>{s}</li>)}
              </ul>
            </div>
            <div className="ilp-split-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/photo-1749.jpg" alt="Students enjoying Ireland safely with ILE" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Inclusions snapshot */}
      <section className="ile-section ile-section--cream-deep ile-center">
        <div className="ile-container">
          <span className="ile-eyebrow">Dream, Discover &amp; Travel</span>
          <h2 className="ile-h2">One All-Inclusive Price</h2>
          <p className="ile-lead">Airfare from Logan, 24 nights of accommodation with meals, tuition, transportation, tours, and a full team of teachers and counselors — all covered.</p>
          <div style={{ marginTop: 30, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/programs/" className="ile-btn ile-btn--primary">See What&apos;s Included {ARROW}</Link>
            <Link href="/parents/faq/" className="ile-btn ile-btn--ghost">Read the FAQ</Link>
          </div>
        </div>
      </section>

      <CtaBand title="Have a Question? Talk to a Real Person." text="We're happy to walk you through anything — safety, logistics, payments, or what your student's summer will look like." primary={{ label: 'Apply Now', href: '/apply/' }} secondary={{ label: 'Contact Our Team', href: '/contact/' }} />
    </main>
  )
}
