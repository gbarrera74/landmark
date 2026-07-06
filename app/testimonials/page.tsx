import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'Testimonials',
  description:
    'In their own words — students and parents on the Irish Life Experience. Read what families from across the US and Canada say about their summer in Ireland.',
}

type T = { q: string; name: string; meta: string; img?: string }

const STUDENTS: T[] = [
  { q: 'Being able to travel to Ireland through the Irish Life Experience was probably the best decision I could have ever made.', name: 'Rowan M.', meta: 'Student · 2022 · Seeley Lake, MT' },
  { q: 'Last summer I did the ILE and it was one of the best summers of my life.', name: 'Eva L.', meta: 'Student · 2022 · Brooklyn, NY', img: '/images/testimonial-eva.jpg' },
  { q: 'The summer of 2019 was my favorite summer. There was never a dull moment during the whole trip.', name: 'Daniel S.', meta: 'Student · 2019 · Brielle, NJ' },
  { q: 'No words can truly describe the Irish Life Experience and the magic that ebbs from deep within.', name: 'Natalie H.', meta: 'Student · 2022 · St. Ignatius, MT', img: '/images/testimonial-nathalie.jpg' },
  { q: 'You will walk away from the experience with a second family and a second home.', name: 'Anna C.', meta: 'Student · 2014 · Irvine, CA' },
  { q: 'Joining the Irish Life Experience was truly the best decision of my life.', name: 'Owen M.', meta: 'Student · 2015 · Duxbury, MA' },
  { q: 'There are not enough words to describe this once-in-a-lifetime opportunity.', name: 'Hannah B.', meta: 'Student · 2017 · Channahon, IL' },
  { q: 'This trip was absolutely worth it.', name: 'Cameron D.', meta: 'Student · 2022 · Honolulu, HI', img: '/images/testimonial-cameron.jpg' },
  { q: 'It is one of the greatest experiences I have ever had. Period.', name: 'Emily B.', meta: 'Student · 2013 · Carrollton, GA' },
]

const PARENTS: T[] = [
  { q: 'I dropped off a shy, nervous girl — and she came home a stronger, more self-assured young woman.', name: 'Peggy L.', meta: 'Parent of Elizabeth · 2019 · Canton, GA' },
  { q: 'The Irish Life Experience was everything we could have asked for — and more.', name: 'Sean K.', meta: 'Parent of Ian · 2019 · Seekonk, MA' },
  { q: "Everything about ILE is really wonderful — truly a 'life experience.'", name: 'Eileen G.', meta: 'Parent of Eva · 2022 · Brooklyn, NY' },
  { q: 'Words cannot express how grateful we are to Taryn and the ILE team.', name: 'Amanda M.', meta: 'Parent of Rowan · 2022 · Seeley Lake, MT' },
  { q: 'My daughter came home a different person… more confident, mature, and full of life!', name: 'Teresa H.', meta: 'Parent of Aubrie · 2014 · Naples, FL' },
  { q: 'The Irish Life Experience enhances the senses, stirs the curiosity, and soothes the soul.', name: 'Teresa G.', meta: 'Parent of Christina · 2014 · Naples, FL' },
]

function Card({ t }: { t: T }) {
  return (
    <div className="ilm-tst">
      <div className="ilm-tst-quote">&ldquo;</div>
      <div className="ilm-tst-stars">★★★★★</div>
      <p>{t.q}</p>
      <div className="ilm-tst-by">
        {t.img
          ? /* eslint-disable-next-line @next/next/no-img-element */ <img src={t.img} alt={t.name} loading="lazy" />
          : <div className="ilm-tst-avatar">{t.name.charAt(0)}</div>}
        <div>
          <div className="ilm-tst-name">{t.name}</div>
          <div className="ilm-tst-role">{t.meta}</div>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Testimonials"
        title={<>In Their Own <em>Words</em></>}
        subtitle="Twenty-five years of summers, and the same story again and again: students who arrived curious and came home changed."
        image="/images/photo-2063.jpg"
        breadcrumb={[{ label: 'Testimonials' }]}
      />
      <section className="ile-section ile-section--cream">
        <div className="ile-container">
          <h2 className="ile-h2 ile-center" style={{ marginBottom: 40 }}>From Our Students</h2>
          <div className="ilm-tst-grid">{STUDENTS.map((t) => <Card key={t.name + t.meta} t={t} />)}</div>
        </div>
      </section>
      <section className="ile-section ile-section--white">
        <div className="ile-container">
          <h2 className="ile-h2 ile-center" style={{ marginBottom: 40 }}>From Our Parents</h2>
          <div className="ilm-tst-grid">{PARENTS.map((t) => <Card key={t.name + t.meta} t={t} />)}</div>
        </div>
      </section>
      <CtaBand title="Write Your Own Story" />
    </main>
  )
}
