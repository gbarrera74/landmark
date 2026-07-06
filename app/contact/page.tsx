import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactForm from '@/components/ContactForm'
import { SITE } from '@/lib/seo/schemas'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with the Irish Life Experience. Call 855-IRISH-LIFE, email info@irishlifeexperience.com, or send us a message — a real person will reply.',
}

function Pin() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" /></svg> }
function Phone() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></svg> }
function Mail() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg> }

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title={<>Get in <em>Touch</em></>}
        subtitle="Have a question about the program, pricing, or what your student's summer will look like? We'd love to hear from you."
        image="/images/ireland-blarney-castle.jpg"
        breadcrumb={[{ label: 'Contact' }]}
      />
      <section className="ile-section ile-section--cream">
        <div className="ile-container">
          <div className="ilm-lead-grid">
            <div>
              <span className="ile-eyebrow">Reach Us</span>
              <h2 className="ile-h2" style={{ marginBottom: 24 }}>We&apos;re Here to Help</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <a href={`tel:${SITE.phone}`} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <span style={{ width: 50, height: 50, borderRadius: 14, background: 'var(--lm-white)', border: '1px solid var(--lm-line)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--lm-primary-700)', flexShrink: 0 }}><span style={{ width: 22, height: 22 }}><Phone /></span></span>
                  <span><span style={{ display: 'block', fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--lm-ink-muted)' }}>Call Us</span><span style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 18, color: 'var(--lm-primary-900)' }}>{SITE.phoneDisplay}</span></span>
                </a>
                <a href={`mailto:${SITE.email}`} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <span style={{ width: 50, height: 50, borderRadius: 14, background: 'var(--lm-white)', border: '1px solid var(--lm-line)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--lm-primary-700)', flexShrink: 0 }}><span style={{ width: 22, height: 22 }}><Mail /></span></span>
                  <span><span style={{ display: 'block', fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--lm-ink-muted)' }}>Email Us</span><span style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 18, color: 'var(--lm-primary-900)' }}>{SITE.email}</span></span>
                </a>
                <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <span style={{ width: 50, height: 50, borderRadius: 14, background: 'var(--lm-white)', border: '1px solid var(--lm-line)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--lm-primary-700)', flexShrink: 0 }}><span style={{ width: 22, height: 22 }}><Pin /></span></span>
                  <span><span style={{ display: 'block', fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--lm-ink-muted)' }}>Visit Us</span><span style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 18, color: 'var(--lm-primary-900)' }}>{SITE.address.street}, {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}</span></span>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}
