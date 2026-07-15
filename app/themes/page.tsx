/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import BrochureBand from '@/components/BrochureBand'
import JsonLd from '@/lib/seo/JsonLd'
import { breadcrumb } from '@/lib/seo/schemas'

const ArrowR = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
)

const THEMES = [
  { title: "HBCU Campus Tours", href: "/usa-trips/washington-dc/hbcu-campus-tours/", img: "/images/landmark/dc-howard-university.jpg" },
  { title: "US History & Civics", href: "/usa-trips/washington-dc/washington-dc-civics-student-tour/", img: "/images/landmark/thomas-jefferson-memorial.jpg" },
  { title: "The Crucible: Salem, MA", href: "/usa-trips/boston/boston-and-salem-school-trip/", img: "/images/landmark/salem-massachusetts.jpg" },
  { title: "Performing Arts", href: "/usa-trips/new-york-city/nyc-performing-arts-tour/", img: "/images/landmark/broadway-sign-nyc.jpg" },
  { title: "Spanish Immersion", href: "/usa-trips/chicago/chicago-spanish-immersion-school-trip/", img: "/images/landmark/chicago-3.jpg" },
  { title: "French Immersion", href: "/canada/quebec-city/", img: "/images/landmark/quebec-hero.jpg" },
  { title: "YMCA / Summer Camp", href: "/usa-trips/new-york-city/ymca-summer-camp/", img: "/images/landmark/murray-high-school-nyc.jpg" },
  { title: "African American History", href: "/usa-trips/washington-dc/african-american-history-dc-student-tour/", img: "/images/landmark/dc-nmaahc.jpg" },
  { title: "Scouts", href: "/usa-trips/washington-dc/scouts/", img: "/images/landmark/dc-hero.jpg" },
  { title: "Yellowstone School Trip", href: "/yellowstone-national-park-school-trip/", img: "/images/landmark/yellowstone-grand-prismatic.jpg" },
  { title: "Yellowstone Field Trip", href: "/yellowstone-national-park-field-trip/", img: "/images/landmark/yellowstone-falls.jpg" },
  { title: "Private School Trips", href: "/private-school-class-trips/", img: "/images/landmark/private-school-students.jpg" },
]

export default function Themes() {
  return (
    <>
      <PageHero
        eyebrow="Landmark Educational Tours"
        title={<>Top Tour <em>Themes</em></>}
        subtitle="Curriculum-focused programs built around what your students are studying, from civics and the arts to language immersion and the outdoors."
        image="/images/landmark/dc-nmaahc.jpg"
        breadcrumb={[{ label: 'Themes' }]}
      />
      <section className="ile-section ile-section--white" aria-labelledby="themes-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">Tours &amp; Themes</span>
            <h2 id="themes-h" className="lm-h2-amber">EXPLORE BY THEME</h2>
            <p className="ile-lead lm-center-lead">Every theme is fully customizable to your group, grade level, and subject focus.</p>
          </div>
          <div className="ilm-blog-grid">
            {THEMES.map((t) => (
              <Link href={t.href} className="ilm-post" key={t.title}>
                <div className="ilm-post-img lm-trip-media"><img src={t.img} alt="" loading="lazy" /></div>
                <div className="ilm-post-body">
                  <h3>{t.title}</h3>
                  <span className="ilm-post-more">Explore {ArrowR}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="ile-center lm-after-grid">
            <Link href="/get-a-quote/" className="ile-btn ile-btn--primary">Start Planning Your Trip</Link>
          </div>
        </div>
      </section>
      <BrochureBand />
      <JsonLd data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'Themes', path: '/themes/' }])} />
    </>
  )
}
