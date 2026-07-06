import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Since 1998, the Irish Life Experience has helped North American high schoolers grow through cultural exploration in Ireland. Learn about our mission, values, and outcomes.',
}

const ARROW = <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>

const MISSION = [
  'To give students the opportunity of living and learning in a different cultural environment.',
  'To provide each student a broad understanding of the cultural, economic, political, and social life of a contemporary country.',
  'To offer an international travel experience that inspires students to explore other areas of the world.',
]
const OUTCOMES = [
  'Lived on campus alongside peers from across North America',
  'Developed an understanding of Irish history from early AD to the present',
  'Read and reflected on Irish and Anglo-Irish literature',
  'Learned and performed traditional Irish folk dance',
  'Been introduced to the basics of the Irish language',
  'Gained a working knowledge of Irish drama, music, and song',
  'Engaged with Irish sport — Gaelic football, hurling, and rugby',
]

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Us"
        title={<>Cultural Exploration That <em>Shapes Who You Become</em></>}
        subtitle="For over 25 years, we've believed that stepping into another culture is one of the most powerful ways a young person can grow."
        image="/images/ireland-countryside-ruins.jpg"
        breadcrumb={[{ label: 'About Us' }]}
      />

      {/* Founding */}
      <section className="ile-section ile-section--cream">
        <div className="ile-container">
          <div className="ilp-prose ilp-prose--center ile-center">
            <span className="ile-eyebrow" style={{ justifyContent: 'center', display: 'inline-flex' }}>Since 1998</span>
            <h2 style={{ marginTop: 14 }}>Founded on a Simple Belief</h2>
            <p>The Irish Life Experience was founded on the belief that cultural exploration can play an important role in helping to develop a young adult&apos;s identity. Since 1998, our executives, managers, teachers, and counselors have successfully led countless groups of students abroad.</p>
            <p>Our experienced team is dedicated to helping students learn about different cultures and traditions — while maintaining the highest level of education, safety, and fun.</p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="ile-section ile-section--white">
        <div className="ile-container ile-center">
          <span className="ile-eyebrow">Our Mission</span>
          <h2 className="ile-h2">Three Promises to Every Student</h2>
          <div className="ilp-grid-3" style={{ marginTop: 44 }}>
            {MISSION.map((m, i) => (
              <div className="ilm-card" key={i}>
                <div className="ilm-card-ico" style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 24 }}>{i + 1}</div>
                <p style={{ fontSize: 15.5, color: 'var(--lm-ink)', lineHeight: 1.7 }}>{m}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="ile-section ile-section--cream-deep">
        <div className="ile-container">
          <div className="ilp-split">
            <div className="ilp-split-body">
              <span className="ile-eyebrow">By the End of the Summer</span>
              <h2>Every Student Comes Home Having…</h2>
              <ul className="ilp-prose" style={{ marginTop: 12 }}>
                {OUTCOMES.map((o) => <li key={o}>{o}</li>)}
              </ul>
            </div>
            <div className="ilp-split-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/photo-8282.jpg" alt="ILE students in Ireland" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Team teaser */}
      <section className="ile-section ile-section--white ile-center">
        <div className="ile-container">
          <span className="ile-eyebrow">The People Behind It</span>
          <h2 className="ile-h2">Nearly 150 Years of Combined Experience</h2>
          <p className="ile-lead">Our team has the knowledge and the &ldquo;know-how&rdquo; to make every student&apos;s experience unforgettable — and most of us were once students on this very program.</p>
          <div style={{ marginTop: 28 }}>
            <Link href="/meet-the-team/" className="ile-btn ile-btn--primary">Meet the Team {ARROW}</Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
