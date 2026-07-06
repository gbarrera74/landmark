import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'The Program — 25-Day Summer in Ireland',
  description:
    'A 25-day all-inclusive summer study-abroad program in Ireland for high school students — classes, workshops, and guided tours across Waterford, Dublin, and Galway. See what\'s included and pricing.',
}

const ARROW = <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>

const INCLUDED = [
  'Round-trip flight from Logan Airport (BOS) to Ireland',
  '24 nights of accommodations, with all meals',
  'Teachers, coordinators, and counselors throughout',
  'Full tuition for all classes and workshops',
  'All ground transportation in Ireland',
  'Featured tours, excursions, and admissions',
]
const NOT_INCLUDED = [
  'International health insurance (proof of coverage required)',
  'Personal spending money ($500–$700 recommended)',
  'Souvenirs, snacks, and personal items',
  'Optional add-ons (amusement rides, concerts, movies)',
  'Credit-card processing fee ($140)',
]
const CLASSES = [
  'Gaelic (Irish) Language', 'Irish History', 'Irish-American History & Genealogy',
  'Irish Literature', 'Drama', 'Music & Song', 'Irish Folk Dance', 'Gaelic Sports (GAA)',
]
const CITIES = [
  { n: '01', city: 'Waterford', d: "Ireland's oldest city — your first home, steps from the historic centre." },
  { n: '02', city: 'Dublin', d: 'The vibrant capital — Croke Park, museums, and cobbled streets.' },
  { n: '03', city: 'Galway', d: 'The cultural heart of the west — and the Gaeltacht of the Aran Islands.' },
]

const DAY = [
  { when: 'Morning', time: '7am – 12pm', t: 'Classes & Workshops', d: 'Irish History, Gaelic, Literature, or Drama — followed by a hands-on workshop like hurling, soda-bread baking, or tin-whistle lessons.' },
  { when: 'Midday', time: '12 – 1pm', t: 'Lunch & Free Time', d: 'A meal on campus and a breath before the afternoon’s adventure — explore the city, write home, or play a pick-up match.' },
  { when: 'Afternoon', time: '1 – 6pm', t: 'Guided Tours', d: 'Out into Ireland: a castle, a museum, the Cliffs of Moher, a Galway market, or a live match at Croke Park.' },
  { when: 'Evening', time: '6 – 11pm', t: 'Dinner & Together Time', d: 'A meal with new friends, a chat with home, music or a movie in the lounge — lights out at 11.' },
]

export default function ProgramsPage() {
  return (
    <main>
      <PageHero
        eyebrow="The Program"
        title={<>25 Days. Three Cities. <em>One Unforgettable Summer.</em></>}
        subtitle="The Irish Life Experience is an all-inclusive summer study-abroad program that immerses North American high schoolers in the culture, history, and warmth of Ireland."
        image="/images/photo-8282.jpg"
        breadcrumb={[{ label: 'The Program' }]}
      />

      {/* Ireland intro */}
      <section className="ile-section ile-section--cream">
        <div className="ile-container">
          <div className="ilp-split">
            <div className="ilp-split-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/photo-1749.jpg" alt="Students laughing on a green Irish hillside" loading="lazy" />
            </div>
            <div className="ilp-split-body">
              <span className="ile-eyebrow">Why Ireland</span>
              <h2>A Land That Stays With You</h2>
              <p>Our Irish Life Experience team has a deep affinity with Ireland, and we&apos;ve crafted the ultimate itinerary to make each student&apos;s journey not only unique — but unforgettable.</p>
              <p>Breathtaking landscapes and famously friendly, welcoming people leave everyone wanting to return for more <em>craic</em>. Over 25 days, students don&apos;t just visit Ireland — they live it.</p>
              <Link href="/apply/" className="ile-btn ile-btn--primary">Apply Now {ARROW}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="ile-section ile-section--white ile-section--tight">
        <div className="ile-container">
          <div className="ilp-stats">
            <div className="ilp-stat-box"><div className="n">Since 1998</div><div className="l">Trusted Experience</div></div>
            <div className="ilp-stat-box"><div className="n">25</div><div className="l">Days in Ireland</div></div>
            <div className="ilp-stat-box"><div className="n">3</div><div className="l">Historic Cities</div></div>
            <div className="ilp-stat-box"><div className="n">7:1</div><div className="l">Student-to-Staff Ratio</div></div>
          </div>
        </div>
      </section>

      {/* Inclusions */}
      <section className="ile-section ile-section--cream">
        <div className="ile-container ile-center">
          <span className="ile-eyebrow">All-Inclusive</span>
          <h2 className="ile-h2">One Price, Everything Covered</h2>
          <p className="ile-lead">From the moment you leave Logan Airport to the day you return home, the essentials are taken care of.</p>
        </div>
        <div className="ile-container" style={{ marginTop: 44 }}>
          <div className="ilp-grid-2">
            <div className="ilp-infocard">
              <h3><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#5C9E32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg> What&apos;s Included</h3>
              <ul className="ilp-check">{INCLUDED.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
            <div className="ilp-infocard">
              <h3><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#C9722E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg> Not Included</h3>
              <ul className="ilp-cross">{NOT_INCLUDED.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="ile-section ile-section--white">
        <div className="ile-container ile-center">
          <span className="ile-eyebrow">Tuition</span>
          <h2 className="ile-h2">Program Pricing</h2>
          <p className="ile-lead">Apply and pay in full before January 1 to lock in the early rate. A $600 deposit secures your spot, with an additional $1,000 due by March 1.</p>
        </div>
        <div className="ile-container" style={{ marginTop: 48 }}>
          <div className="ilp-pricing">
            <div className="ilp-price ilp-price--featured">
              <span className="ilp-price-tag">Best Value</span>
              <div className="ilp-price-label">Apply &amp; pay before Jan 1</div>
              <div className="ilp-price-amount">$6,050</div>
              <div className="ilp-price-note">All-inclusive · airfare to activities</div>
            </div>
            <div className="ilp-price">
              <div className="ilp-price-label">Apply after Jan 1</div>
              <div className="ilp-price-amount">$6,550</div>
              <div className="ilp-price-note">All-inclusive · airfare to activities</div>
            </div>
          </div>
          <p className="ile-center" style={{ marginTop: 28, color: 'var(--lm-ink-muted)', fontSize: 14 }}>
            A $140 credit-card processing fee applies. <Link href="/apply/" style={{ color: 'var(--lm-primary-700)', fontWeight: 700 }}>See the full application &amp; payment details →</Link>
          </p>
        </div>
      </section>

      {/* Curriculum */}
      <section className="ile-section ile-section--cream-deep">
        <div className="ile-container ile-center">
          <span className="ile-eyebrow">Learn</span>
          <h2 className="ile-h2">A Real Curriculum, Brought to Life</h2>
          <p className="ile-lead">Mornings of engaging classes and workshops, reinforced by afternoons exploring the very places the lessons describe.</p>
          <div className="ilp-grid-4" style={{ marginTop: 44 }}>
            {CLASSES.map((c) => (
              <div className="ilm-card" key={c} style={{ padding: '24px 22px' }}>
                <h3 style={{ fontSize: 17 }}>{c}</h3>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <Link href="/students/classes/" className="ile-btn ile-btn--ghost">Explore the Classes {ARROW}</Link>
          </div>
        </div>
      </section>

      {/* A Day in Your Summer */}
      <section className="ile-section ile-section--white">
        <div className="ile-container ile-center">
          <span className="ile-eyebrow">Daily Rhythm</span>
          <h2 className="ile-h2">A Day in Your Summer</h2>
          <p className="ile-lead">Mornings to learn. Afternoons to explore. Evenings to remember.</p>
          <div className="ilp-grid-4" style={{ marginTop: 48, textAlign: 'left' }}>
            {DAY.map((d) => (
              <div className="ilm-card" key={d.t} style={{ padding: '28px 26px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'baseline', gap: 8, marginBottom: 14 }}>
                  <span style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 14, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--lm-primary-700)' }}>{d.when}</span>
                  <span style={{ fontSize: 12, color: 'var(--lm-ink-muted)', fontWeight: 600 }}>{d.time}</span>
                </div>
                <h3 style={{ fontSize: 19, marginBottom: 8 }}>{d.t}</h3>
                <p style={{ fontSize: 14.5, color: 'var(--lm-ink-muted)', lineHeight: 1.7 }}>{d.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three cities */}
      <section className="ile-section ile-section--forest">
        <div className="ile-container ile-center">
          <span className="ile-eyebrow">The Journey</span>
          <h2 className="ile-h2">Three Cities, One Summer</h2>
          <div className="ilm-cities-grid">
            {CITIES.map((c) => (
              <div className="ilm-city" key={c.city}>
                <div className="ilm-city-num">{c.n}</div>
                <h3>{c.city}</h3>
                <p>{c.d}</p>
              </div>
            ))}
          </div>
          <div className="ilm-cities-path">Waterford <span>→</span> Dublin <span>→</span> Galway</div>
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
