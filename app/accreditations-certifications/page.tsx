/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import BrochureBand from '@/components/BrochureBand'
import JsonLd from '@/lib/seo/JsonLd'
import { breadcrumb } from '@/lib/seo/schemas'

// Professional affiliations (logos + membership identifiers), mirrored 1:1 from the live site.
const AFFILIATIONS = [
  { name: 'Student & Youth Travel Association (SYTA)', logo: '/images/landmark/accred-syta.png', id: 'Member #13443' },
  { name: 'European Tourism Association (ETOA)', logo: '/images/landmark/accred-etoa.png', id: 'Member #84360' },
  { name: 'American Bus Association (ABA)', logo: '/images/landmark/accred-aba.png', id: '' },
  { name: 'Travel Insured International', logo: '/images/landmark/accred-travel-insured.png', id: '' },
  { name: 'Better Business Bureau (BBB)', logo: '/images/landmark/accred-bbb.png', id: 'Business ID 544197' },
  { name: 'International Air Transport Association (IATA)', logo: '/images/landmark/accred-iata.png', id: 'IATA Code 22576046' },
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
  { name: 'Chicago Public Schools', logo: '/images/landmark/district-chicago.png', id: '45957' },
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
      <section className="ile-section ile-section--white">
        <div className="ile-container ilp-prose ilp-prose--center lm-content-prose">
            <p>Our professional affiliations and standards that support safe, responsible educational travel.</p>
        </div>
      </section>
      <section className="ile-section ile-section--cream" aria-labelledby="accreditations-certifications-s0">
        <div className="ile-container ilp-prose lm-content-prose">
          <h2 id="accreditations-certifications-s0" className="lm-h2-amber">Why Accreditations Matter</h2>
            <p>Educational group travel isn’t just about destinations, it’s about duty of care, student safety, and academic value. Our certifications and professional memberships help ensure that:</p>
            <p>These affiliations aren’t logos for show, they represent ongoing compliance, ethical standards, and professional oversight.</p>
            <ul className="lm-content-list">
              <li>Student travel programs are planned responsibly</li>
              <li>Financial transactions are protected and transparent</li>
              <li>Safety protocols meet or exceed industry standards</li>
              <li>Educators can confidently partner with a vetted travel provider</li>
            </ul>
        </div>
      </section>
      <section className="ile-section ile-section--white" aria-labelledby="accreditations-certifications-s1">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <h2 id="accreditations-certifications-s1" className="lm-h2-amber">Our Accreditations &amp; Professional Affiliations</h2>
            <p className="ile-lead lm-center-lead">Building a community that works with you and your group in mind.</p>
          </div>
          <div className="lm-accred-grid" style={{ marginTop: 40 }}>
            {AFFILIATIONS.map((a) => (
              <div className="lm-accred-item" key={a.name}>
                <div className="lm-accred-logo"><img src={a.logo} alt={`${a.name} member logo`} loading="lazy" /></div>
                <h3>{a.name}</h3>
                {a.id && <p className="lm-accred-id">{a.id}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="ile-section ile-section--cream" aria-labelledby="accreditations-certifications-s2">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <h2 id="accreditations-certifications-s2" className="lm-h2-amber">Landmark School District Accreditations</h2>
            <p className="ile-lead lm-center-lead">Recognized partnerships and certifications that support safe, compliant, and educationally sound student travel.</p>
          </div>
          <div className="lm-accred-grid lm-accred-grid--districts" style={{ marginTop: 40 }}>
            {DISTRICTS.map((d) => (
              <div className="lm-accred-item" key={d.name}>
                <div className="lm-accred-logo"><img src={d.logo} alt={`${d.name} logo`} loading="lazy" /></div>
                <h3>{d.name}</h3>
                <p className="lm-accred-id">Accreditation #{d.id}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="ile-section ile-section--white" aria-labelledby="accreditations-certifications-s3">
        <div className="ile-container ilp-prose lm-content-prose">
          <h2 id="accreditations-certifications-s3" className="lm-h2-amber">Trusted by Educators. Designed for Students.</h2>
            <p>We work closely with teachers and group leaders to ensure each itinerary aligns with learning objectives while maintaining a high standard of care.</p>

        </div>
      </section>
      <section className="ile-section ile-section--cream" aria-labelledby="accreditations-certifications-s4">
        <div className="ile-container ilp-prose lm-content-prose">
          <h2 id="accreditations-certifications-s4" className="lm-h2-amber">Planning an Educational Trip?</h2>
            <p>If you’re evaluating travel providers for your next school or student group trip, we’re happy to answer questions about our credentials, planning process, or safety standards.</p>

        </div>
      </section>
      <section className="ile-section ile-section--white" aria-labelledby="accreditations-certifications-s5">
        <div className="ile-container ilp-prose lm-content-prose">
          <h2 id="accreditations-certifications-s5" className="lm-h2-amber">Ready to Start Planning?</h2>
            <p>Start planning Your Trip Today with a Landmark Educational Tours specialist to learn more about our programs!</p>

        </div>
      </section>
      <section className="ile-section ile-section--cream">
        <div className="ile-container ile-center">
          <Link href="/get-a-quote/" className="ile-btn ile-btn--primary">Start Planning Your Trip</Link>
        </div>
      </section>
      <BrochureBand />
      <JsonLd data={breadcrumb([
        { name: "Home", path: "/" },
        { name: "Accreditations & Certifications", path: "/accreditations-certifications/" },
      ])} />
    </>
  )
}
