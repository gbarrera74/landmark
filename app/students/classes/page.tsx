import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'Classes',
  description:
    'The Irish Life Experience curriculum: Gaelic language, Irish history, Irish-American history, Irish studies, literature, dance, and drama — taught where it all happened.',
}

const CLASSES = [
  { name: 'Gaelic Language', hours: '8 Hours', d: "Study basic Irish language, grammar, and vocabulary — then hear Gaelic spoken firsthand on your journey, especially on the Aran Islands where it's still the first language." },
  { name: 'Irish History', hours: '8 Hours', d: 'Discover how Ireland and its culture were formed, from Pre-Celtic Ireland (c. 2500 BC) through the path to independence (1916–1922) — including Catholic Emancipation, the Famine, and emigration.' },
  { name: 'Irish-American History', hours: '8 Hours', d: 'Learn how the Irish helped build American settlements and how that legacy still shapes American culture — from Ulster emigration to the Famine years and beyond.' },
  { name: 'Irish Literature', hours: '8 Hours', d: 'A study of Ireland’s writers, playwrights, and poets — Seamus Heaney, James Joyce, Oscar Wilde, W.B. Yeats, Brian Friel, J.M. Synge, Frank O’Connor, and more.' },
  { name: 'Irish Studies', hours: '8 Hours', d: 'Explore Ireland’s currency, education, genealogy, and geography — plus the European community, law, media, politics, and social concerns.' },
  { name: 'Irish Folk Dance', hours: '5 Hours', d: 'Learn, participate in, and enjoy the traditional folk dances of Ireland.' },
  { name: 'Drama', hours: '5 Hours', d: 'A study of contemporary Irish drama. In groups, students study an assigned historical Irish figure, write a limerick, and prepare a creative group performance.' },
]

export default function ClassesPage() {
  return (
    <main>
      <PageHero
        eyebrow="For Students"
        title={<>Classes That Bring Ireland <em>to Life</em></>}
        subtitle="Mornings of engaging, hands-on classes — then afternoons exploring the very places the lessons describe. This isn't a classroom; it's a country."
        image="/images/photo-3301.jpg"
        breadcrumb={[{ label: 'For Students', href: '/students/' }, { label: 'Classes' }]}
      />
      <section className="ile-section ile-section--cream">
        <div className="ile-container">
          <div className="ilp-grid-2">
            {CLASSES.map((c) => (
              <div className="ilp-infocard" key={c.name}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12, marginBottom: 10 }}>
                  <h3 style={{ margin: 0 }}>{c.name}</h3>
                  <span style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 12, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--lm-primary-700)', background: 'var(--lm-cream)', padding: '5px 12px', borderRadius: 999, whiteSpace: 'nowrap' }}>{c.hours}</span>
                </div>
                <p style={{ color: 'var(--lm-ink-muted)', fontSize: 15, lineHeight: 1.7 }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Ready to Start Learning?" />
    </main>
  )
}
