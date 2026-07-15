import PageHero from '@/components/PageHero'
import HubSpotForm from '@/components/HubSpotForm'
import JsonLd from '@/lib/seo/JsonLd'
import { breadcrumb } from '@/lib/seo/schemas'

const PinIcon = (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" /></svg>)
const PhoneIcon = (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>)
const MailIcon = (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>)
const ClockIcon = (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>)

export default function ContactUsPage() {
  return (
    <>
      <PageHero
        eyebrow="We&rsquo;re Here to Help"
        title={<>Contact <em>Us</em></>}
        subtitle="Questions about a trip, a quote, or how it all works? Reach out and a real person will get back to you."
        image="/images/landmark/about-team.jpg"
        breadcrumb={[{ label: 'Contact Us' }]}
      />

      <section className="ile-section ile-section--white">
        <div className="ile-container">
          <div className="lm-contact-grid">
            <div className="lm-contact-info">
              <div className="lm-contact-item">
                <span className="lm-ci-ico">{PinIcon}</span>
                <div><h3>Address</h3><p>1 Central Street, Suite 205<br />Middleton, MA 01949</p></div>
              </div>
              <div className="lm-contact-item">
                <span className="lm-ci-ico">{PhoneIcon}</span>
                <div><h3>Phone</h3><a href="tel:+18888862781">888-886-2781</a></div>
              </div>
              <div className="lm-contact-item">
                <span className="lm-ci-ico">{MailIcon}</span>
                <div><h3>Email</h3><a href="mailto:Hello@landmarkeducationaltours.com">Hello@landmarkeducationaltours.com</a></div>
              </div>
              <div className="lm-contact-item">
                <span className="lm-ci-ico">{ClockIcon}</span>
                <div><h3>Business Hours</h3><p>Mon to Fri: 9:30 AM to 5:00 PM</p></div>
              </div>
            </div>

            <div className="lm-form-card" style={{ margin: 0, maxWidth: 'none' }}>
              <h2 className="lm-h2-amber">SEND US A MESSAGE</h2>
              <p className="lm-form-intro">Fill out the form and our team will be in touch shortly.</p>
              <HubSpotForm formId="aa49df7b-4d72-4723-99af-2f022b7b5f4d" />
            </div>
          </div>
        </div>
      </section>

      <JsonLd data={breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'Contact Us', path: '/contact-us/' },
      ])} />
    </>
  )
}
