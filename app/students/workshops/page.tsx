import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'Workshops',
  description:
    'Hands-on Irish workshops — Gaelic football and hurling, traditional music and dance, baking soda bread and boxty, Celtic crafts, and guided city walking tours.',
}

const GROUPS = [
  { title: 'Sport', items: ['Gaelic Football', 'Hurling', 'Advanced Irish Dance'] },
  { title: 'Music & Dance', items: ['Irish Music Session', 'Tin Whistle'] },
  { title: 'Food & Baking', items: ['Soda Bread', 'Scones', 'Boxty'] },
  { title: 'Craft', items: ['Celtic Cards', 'Celtic Frames', 'County T-Shirts', "St. Brigid's Cross"] },
  { title: 'Culture & Walking Tours', items: ['Dublin Walking Tour', 'Waterford Walking Tour', 'The Troubles'] },
]

export default function WorkshopsPage() {
  return (
    <main>
      <PageHero
        eyebrow="For Students"
        title={<>Get Off the Sidelines &amp; <em>Dive In</em></>}
        subtitle="Workshops are where Irish culture becomes hands-on — swing a hurley, bake soda bread, learn the tin whistle, and craft a St. Brigid's cross. Every student completes at least three."
        image="/images/ireland-cliffs-sunset.jpg"
        breadcrumb={[{ label: 'For Students', href: '/students/' }, { label: 'Workshops' }]}
      />
      <section className="ile-section ile-section--cream">
        <div className="ile-container">
          {GROUPS.map((g) => (
            <div key={g.title} style={{ marginBottom: 40 }}>
              <span className="ile-eyebrow" style={{ marginBottom: 18, display: 'inline-flex' }}>{g.title}</span>
              <div className="ilp-grid-3">
                {g.items.map((w) => (
                  <div className="ilm-card" key={w} style={{ padding: '26px 24px', display: 'flex', alignItems: 'center', gap: 14 }}>
                    <span style={{ width: 12, height: 12, borderRadius: 4, background: 'linear-gradient(140deg, var(--lm-primary), var(--lm-secondary))', flexShrink: 0 }} />
                    <h3 style={{ fontSize: 18 }}>{w}</h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CtaBand title="Find Your New Favorite Thing" />
    </main>
  )
}
