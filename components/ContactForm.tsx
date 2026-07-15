'use client'

import { useState } from 'react'

// NOTE: not yet wired to a backend, shows a success state on submit.
// Wire the POST handler (email/HubSpot) before launch.
export default function ContactForm() {
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <div className="ilm-form">
        <div className="ilm-form-success">
          <span className="chk">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
          </span>
          <h3>Go raibh maith agat!</h3>
          <p>Thanks for reaching out, we&apos;ll get back to you within 1–2 business days.</p>
        </div>
      </div>
    )
  }

  return (
    <form className="ilm-form" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
      <h3>Get in Touch</h3>
      <p className="ilm-form-sub">Send us a note and a real person will reply.</p>
      <div className="ilm-form-row">
        <div className="ilm-field">
          <label htmlFor="cf-first">First Name <span className="req">*</span></label>
          <input id="cf-first" name="firstName" className="ilm-input" required autoComplete="given-name" />
        </div>
        <div className="ilm-field">
          <label htmlFor="cf-last">Last Name <span className="req">*</span></label>
          <input id="cf-last" name="lastName" className="ilm-input" required autoComplete="family-name" />
        </div>
      </div>
      <div className="ilm-field">
        <label htmlFor="cf-email">Email <span className="req">*</span></label>
        <input id="cf-email" name="email" type="email" className="ilm-input" required autoComplete="email" />
      </div>
      <div className="ilm-field">
        <label htmlFor="cf-msg">Your Message <span className="req">*</span></label>
        <textarea id="cf-msg" name="message" className="ilm-input" required rows={5} style={{ resize: 'vertical' }} />
      </div>
      <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }} />
      <button type="submit" className="ile-btn ile-btn--primary">Send Message</button>
      <p className="ilm-form-note">We respect your privacy. Your information is never shared or sold.</p>
    </form>
  )
}
