import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'For Students',
  description:
    'Classes, workshops, and tours across Ireland — see what awaits on the Irish Life Experience summer program, from Gaelic football to the Aran Islands.',
}

const ARROW = <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>

const AREAS = [
  { kicker: 'Learn', t: 'Classes', d: 'Gaelic, history, literature, drama, music, and more — taught where it all happened.', href: '/students/classes/' },
  { kicker: 'Do', t: 'Workshops', d: 'Hands-on Irish sports, dance, and music workshops that get you off the sidelines.', href: '/students/workshops/' },
  { kicker: 'Explore', t: 'Tours', d: 'From Croke Park to the Aran Islands — guided excursions across the island.', href: '/students/tours/' },
]

export default function StudentsPage() {
  return (
    <main>
      <PageHero
        eyebrow="For Students"
        title={<>Your Irish Adventure <em>Starts Here</em></>}
        subtitle="Experience the world, dive into a new culture, and make lifelong friends — all in one unforgettable summer."
        image="/images/photo-1979.jpg"
        breadcrumb={[{ label: 'For Students' }]}
      />

      <section className="ile-section ile-section--cream">
        <div className="ile-container ile-center">
          <span className="ile-eyebrow">What You&apos;ll Do</span>
          <h2 className="ile-h2">Three Ways to Dive In</h2>
          <p className="ile-lead">Every day blends learning, doing, and exploring — so the culture isn&apos;t something you read about, it&apos;s something you live.</p>
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

      {/* adventure banner */}
      <section className="ile-section ile-section--forest ile-center">
        <div className="ile-container">
          <span className="ile-script" style={{ color: 'var(--lm-secondary-soft)', fontSize: 36 }}>The adventure awaits…</span>
          <h2 className="ile-h2">Experience the World &amp; Make Lifelong Friends</h2>
          <p className="ile-lead">You&apos;ll arrive as a traveler and leave with a second family — and a confidence that lasts long after the plane lands home.</p>
          <div style={{ marginTop: 30, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/apply/" className="ile-btn ile-btn--gold">Apply Now</Link>
            <Link href="/contact/" className="ile-btn ile-btn--outline-light">Request Info</Link>
          </div>
        </div>
      </section>

      {/* what to expect */}
      <section className="ile-section ile-section--white">
        <div className="ile-container">
          <div className="ilp-split ilp-split--reverse">
            <div className="ilp-split-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/photo-8282.jpg" alt="ILE students together in Ireland" loading="lazy" />
            </div>
            <div className="ilp-split-body">
              <span className="ile-eyebrow">A Day in the Life</span>
              <h2>Mornings to Learn, Afternoons to Explore</h2>
              <p>Most days begin with engaging classes and workshops, then spill out into the streets, fields, and coastlines of Ireland for tours and activities. Evenings are for music, friends, and the occasional ceilidh.</p>
              <p>You&apos;ll practice Gaelic with locals on the Aran Islands, cheer at a live match in Croke Park, and trace your own heritage back through the centuries.</p>
              <Link href="/students/tours/" className="ile-btn ile-btn--primary">See the Tours {ARROW}</Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Ready to Make This Summer Count?" />
    </main>
  )
}
