/* eslint-disable @next/next/no-img-element */
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'
import BrochureBand from '@/components/BrochureBand'
import JsonLd from '@/lib/seo/JsonLd'
import { breadcrumb } from '@/lib/seo/schemas'

const WHY = [
  { title: 'Responsible Planning', text: 'Student travel programs are planned responsibly, start to finish.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>) },
  { title: 'Financial Protection', text: 'Financial transactions are protected and transparent.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>) },
  { title: 'Vetted Safety', text: 'Safety protocols meet or exceed industry standards.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>) },
  { title: 'Trusted Partner', text: 'Educators can confidently partner with a vetted travel provider.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>) },
]

const AFFILIATIONS = [
  { name: 'Student & Youth Travel Association (SYTA)', logo: '/images/landmark/accred-syta.png', id: 'Member #13443', means: 'Upholding student-travel safety and business standards.' },
  { name: 'American Bus Association (ABA)', logo: '/images/landmark/accred-aba.png', id: 'Member #84360', means: 'Motorcoach safety, compliance, and reliability.' },
  { name: 'Better Business Bureau (BBB)', logo: '/images/landmark/accred-bbb.png', id: 'Business ID 544197', means: 'Accredited, transparent business conduct.' },
  { name: 'International Air Transport Association (IATA)', logo: '/images/landmark/accred-iata.png', id: 'IATA Code 22576046', means: 'Licensed, secure group air ticketing.' },
]

const DISTRICTS = [
  { name: 'Broward County Public Schools', logo: '/images/landmark/district-broward.jpg', id: '146497' },
  { name: 'New York City Department of Education', logo: '/images/landmark/district-nyc-doe.png', id: 'LAN255539 01' },
  { name: 'Newark Board of Education', logo: '/images/landmark/district-newark.jpg', id: '20409' },
  { name: 'Boston Public Schools', logo: '/images/landmark/district-boston.png', id: '111804' },
  { name: 'Penfield Central School District', logo: '/images/landmark/district-penfield.png', id: '3692' },
  { name: 'Holyoke Public Schools', logo: '/images/landmark/district-holyoke.png', id: '34003' },
  { name: 'Oakland Unified School District', logo: '/images/landmark/district-oakland.png', id: '9314' },
  { name: 'Alliance College-Ready Public Schools', logo: '/images/landmark/district-alliance.png', id: '68985' },
  { name: 'Miami-Dade County Public Schools', logo: '/images/landmark/district-miami-dade.png', id: '6528841' },
]

export default function Accreditations() {
  return (
    <>
      <PageHero
        eyebrow="accreditations and certifications"
        title={<>Accreditations &amp; <em>Certifications</em></>}
        subtitle="The professional standards and affiliations that keep our educational travel safe, transparent, and academically sound."
        image="/images/landmark/dc-hero.jpg"
        breadcrumb={[{ label: "Accreditations & Certifications" }]}
      />

      {/* Why accreditations matter */}
      <section className="ile-section ile-section--white" aria-labelledby="accred-why-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">Why it matters</span>
            <h2 id="accred-why-h" className="lm-h2-amber">WHY ACCREDITATIONS MATTER</h2>
            <p className="ile-lead lm-center-lead">Educational group travel isn&rsquo;t just about destinations — it&rsquo;s about duty of care, student safety, and academic value. Our certifications and professional memberships help ensure that:</p>
          </div>
          <div className="ilp-grid-4" style={{ marginTop: 44 }}>
            {WHY.map((w) => (
              <div className="ilm-card" key={w.title}>
                <div className="ilm-card-ico">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
          <div className="ile-center lm-narrow" style={{ marginTop: 32 }}>
            <p className="ile-lead lm-center-lead">These affiliations aren&rsquo;t logos for show — they represent ongoing compliance, ethical standards, and professional oversight.</p>
          </div>
        </div>
      </section>

      {/* Professional affiliations */}
      <section className="ile-section ile-section--cream" aria-labelledby="accred-affil-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">Professional affiliations</span>
            <h2 id="accred-affil-h" className="lm-h2-amber">OUR ACCREDITATIONS &amp; MEMBERSHIPS</h2>
            <p className="ile-lead lm-center-lead">Recognized industry credentials that schools and parents can independently verify.</p>
          </div>
          <div className="lm-accred-grid" style={{ marginTop: 40 }}>
            {AFFILIATIONS.map((a) => (
              <div className="lm-accred-item" key={a.name}>
                <div className="lm-accred-logo"><img src={a.logo} alt={`${a.name} member logo`} loading="lazy" /></div>
                <h3>{a.name}</h3>
                <p className="lm-accred-id">{a.id}</p>
                <p className="lm-accred-means">{a.means}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* District partnerships */}
      <section className="ile-section ile-section--white" aria-labelledby="accred-district-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">Approved vendor</span>
            <h2 id="accred-district-h" className="lm-h2-amber">SCHOOL DISTRICT PARTNERSHIPS</h2>
            <p className="ile-lead lm-center-lead">Registered and approved to work with school districts across the country.</p>
          </div>
          <div className="lm-accred-grid lm-accred-grid--districts" style={{ marginTop: 40 }}>
            {DISTRICTS.map((d) => (
              <div className="lm-accred-item" key={d.name}>
                <div className="lm-accred-logo"><img src={d.logo} alt={`${d.name} logo`} loading="lazy" /></div>
                <h3>{d.name}</h3>
                <p className="lm-accred-id">Registration #{d.id}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust close */}
      <section className="ile-section ile-section--cream" aria-labelledby="accred-trust-h">
        <div className="ile-container ile-center lm-narrow">
          <span className="ile-eyebrow">Designed for students</span>
          <h2 id="accred-trust-h" className="lm-h2-amber">TRUSTED BY EDUCATORS</h2>
          <p className="ile-lead lm-center-lead">We work closely with teachers and group leaders to ensure each itinerary aligns with learning objectives while maintaining a high standard of care.</p>
        </div>
      </section>

      <CtaBand
        eyebrow="Have questions?"
        title="Questions about our credentials?"
        text="We’re happy to walk your business office through our accreditations, planning process, and safety standards."
        primary={{ label: 'Start Planning Your Trip', href: '/get-a-quote/' }}
        secondary={{ label: 'Ask About Our Standards', href: '/contact-us/' }}
      />

      <BrochureBand />
      <JsonLd data={breadcrumb([
        { name: "Home", path: "/" },
        { name: "Accreditations & Certifications", path: "/accreditations-certifications/" },
      ])} />
    </>
  )
}
