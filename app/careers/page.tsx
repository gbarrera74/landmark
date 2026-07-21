/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'
import BrochureBand from '@/components/BrochureBand'
import JsonLd from '@/lib/seo/JsonLd'
import { breadcrumb } from '@/lib/seo/schemas'

const APPLY = 'mailto:Hello@landmarkeducationaltours.com?subject=Application%20%E2%80%94%20Trip%20Manager'

const PERKS = [
  { title: 'Employee-Owned', text: 'We’re an employee-owned company — you share in the success you help create.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>) },
  { title: 'Travel Perks', text: 'Do what you love, then go see it — travel is at the heart of everything we do.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22l3-1 3-9 4 3-1 6 2-1 2-7 5 1a2 2 0 0 0 1-4l-5-2 3-6a2 2 0 0 0-3-2l-4 6-6-2-2 2 5 3-2 5z" /></svg>) },
  { title: 'Former Educators Welcome', text: 'Classroom and travel experience are valued here — bring your passion for learning.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>) },
]

const ArrowR = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
)

export default function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Join Our team"
        title={<><em>Careers</em> at Landmark</>}
        subtitle="Explore our current openings and help us make educational travel possible for every student."
        image="/images/landmark/chicago-hero.jpg"
        breadcrumb={[{ label: "Careers" }]}
      />

      {/* Why work here */}
      <section className="ile-section ile-section--white">
        <div className="ile-container">
          <div className="ilm-intro-grid">
            <div className="ilm-intro-media">
              <img src="/images/landmark/about-team.jpg" alt="The Landmark Educational Tours team" />
            </div>
            <div className="ilm-intro-body">
              <span className="ile-eyebrow">Join Our Team</span>
              <h2 className="lm-h2-amber">Do work that changes how students see the world</h2>
              <p>We are a group of travel-hungry individuals on a mission to create opportunities for educational and affordable travel for all. As an employee-owned company, everyone here has a real stake in the journeys we build. Join us on that mission and apply to be on our team today.</p>
              <Link href="#roles" className="ile-btn ile-btn--ghost">View open roles {ArrowR}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Life at Landmark */}
      <section className="ile-section ile-section--cream" aria-labelledby="careers-life-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">Life at Landmark</span>
            <h2 id="careers-life-h" className="lm-h2-amber">WHY YOU&rsquo;LL LOVE IT HERE</h2>
          </div>
          <div className="ilp-grid-3" style={{ marginTop: 44 }}>
            {PERKS.map((p) => (
              <div className="ilm-card" key={p.title}>
                <div className="ilm-card-ico">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="ile-section ile-section--white" id="roles" aria-labelledby="careers-roles-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">We&rsquo;re hiring</span>
            <h2 id="careers-roles-h" className="lm-h2-amber">OPEN POSITIONS</h2>
          </div>
          <div className="lm-narrow" style={{ marginTop: 32 }}>
            <div className="ilp-infocard lm-job-card">
              <div className="lm-job-head">
                <h3>Trip Manager</h3>
                <span className="lm-job-badge">Actively recruiting</span>
              </div>
              <ul className="lm-content-list">
                <li><strong>Employment Type:</strong> Part-Time / Freelance</li>
                <li><strong>Location:</strong> United States (remote)</li>
              </ul>
              <p style={{ color: 'var(--lm-ink-muted)', fontSize: 15, lineHeight: 1.7 }}>Travel with our groups and bring each itinerary to life — the on-the-ground role that makes every Landmark trip run smoothly.</p>
              <a href={APPLY} className="ile-btn ile-btn--primary" style={{ marginTop: 8 }}>Apply for this role</a>
            </div>
          </div>
        </div>
      </section>

      {/* Talent community */}
      <section className="ile-section ile-section--cream" aria-labelledby="careers-talent-h">
        <div className="ile-container ile-center lm-narrow">
          <span className="ile-eyebrow">Don&rsquo;t see a fit?</span>
          <h2 id="careers-talent-h" className="lm-h2-amber">STAY IN TOUCH</h2>
          <p className="ile-lead lm-center-lead">We&rsquo;re growing. Send us your resume and we&rsquo;ll keep you in mind as new roles open up.</p>
          <div className="lm-after-grid">
            <a href={APPLY} className="ile-btn ile-btn--ghost">Send Your Resume {ArrowR}</a>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Come along"
        title="Ready to join the team?"
        text="Help us make educational travel possible for every student. We’d love to hear from you."
        primary={{ label: 'Apply Now', href: APPLY }}
        secondary={{ label: 'Learn About Landmark', href: '/about-landmark/' }}
      />

      <BrochureBand />
      <JsonLd data={breadcrumb([
        { name: "Home", path: "/" },
        { name: "Careers", path: "/careers/" },
      ])} />
    </>
  )
}
