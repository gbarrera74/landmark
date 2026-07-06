import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'Accommodations',
  description:
    'Where students stay on the Irish Life Experience — supervised boarding schools and apartments in Waterford (Newtown School), Dublin (King\'s Hospital), and Galway (Gort na Coiribe).',
}

const PLACES = [
  {
    city: 'Waterford', name: 'Newtown School',
    d: 'Students are assigned to rooms sleeping up to five, with shared bathrooms — all within a 15-minute walk of Waterford’s historic city centre.',
    amen: ['Football fields & basketball courts (indoor + outdoor)', 'Lecture hall with movie screenings', 'Pool with designated swim times', '15-minute walk to the city centre'],
  },
  {
    city: 'Dublin', name: "King's Hospital",
    d: 'Regarded as one of Ireland’s leading boarding schools, with exceptionally comfortable, welcoming facilities and rooms of two to six beds, each with an ensuite bathroom.',
    amen: ['Ensuite rooms (2–6 beds)', 'Football fields, basketball & gym', 'Student lounges & pool (designated times)', '~15-minute drive to Dublin city centre'],
  },
  {
    city: 'Galway', name: 'Gort na Coiribe',
    d: 'In the centre of Galway, a short stroll from the popular Eyre Square — modern two-to-six-bedroom apartments with single and twin rooms, used by the national university during term.',
    amen: ['Apartment-style living (2–6 bedrooms)', 'Single & twin rooms', 'Central Galway, near Eyre Square', 'Safe, comfortable residential setting'],
  },
]

export default function AccommodationsPage() {
  return (
    <main>
      <PageHero
        eyebrow="For Parents"
        title={<>Safe, Supervised <em>Homes Away From Home</em></>}
        subtitle="In each of the three cities, students stay in comfortable, well-located boarding schools and apartments — supervised around the clock."
        image="/images/photo-1979.jpg"
        breadcrumb={[{ label: 'For Parents', href: '/parents/' }, { label: 'Accommodations' }]}
      />
      <section className="ile-section ile-section--cream">
        <div className="ile-container">
          <div className="ilp-grid-3">
            {PLACES.map((p) => (
              <div className="ilp-infocard" key={p.city}>
                <div className="ilm-track-kicker" style={{ marginBottom: 6 }}>{p.city}</div>
                <h3 style={{ marginBottom: 12 }}>{p.name}</h3>
                <p style={{ color: 'var(--lm-ink-muted)', fontSize: 14.5, lineHeight: 1.7, marginBottom: 18 }}>{p.d}</p>
                <ul className="ilp-check">{p.amen.map((a) => <li key={a} style={{ fontSize: 14 }}>{a}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Questions About Where They'll Stay?" primary={{ label: 'Read the FAQ', href: '/parents/faq/' }} secondary={{ label: 'Contact Us', href: '/contact/' }} />
    </main>
  )
}
