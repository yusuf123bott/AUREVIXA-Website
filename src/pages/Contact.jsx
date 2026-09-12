import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: null })
  }

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Your name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email'
    if (!form.message.trim()) errs.message = 'Please enter your message'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setSubmitted(true)
  }

  return (
    <div className="aurevixa-dark-page">
      <section className="aurevixa-page-hero">
        <div className="aurevixa-container">
          <p className="aurevixa-kicker">Contact</p>
          <h1>Let's start a<br /><em>conversation</em>.</h1>
          <p className="aurevixa-page-lead">Have a question or a partnership idea? We'd love to hear from you.</p>
        </div>
      </section>

      <section className="aurevixa-page-section aurevixa-enquiry-section">
        <div className="aurevixa-container aurevixa-enquiry-grid">
          <div className="aurevixa-enquiry-left">
            <p className="aurevixa-kicker">Get in touch</p>
            <h2>Reach us<br />directly.</h2>
            <p className="aurevixa-enquiry-text">Drop us a line and we'll get back to you within 48 hours.</p>
            <div className="aurevixa-contact-methods">
              <div><span className="aurevixa-kicker">Email</span><a href="mailto:hello@aurevixa.com">hello@aurevixa.com</a></div>
            </div>
          </div>

          <div className="aurevixa-enquiry-right">
            {submitted ? (
              <div className="aurevixa-form-success">
                <h3>Message sent.</h3>
                <p>Thank you for reaching out. We'll get back to you within 48 hours.</p>
              </div>
            ) : (
              <form className="aurevixa-form" onSubmit={handleSubmit} noValidate>
                <div className="aurevixa-form-group">
                  <label htmlFor="name">Your name *</label>
                  <input type="text" id="name" name="name" placeholder="Your full name" value={form.name} onChange={handleChange} />
                  {errors.name && <span className="aurevixa-form-error">{errors.name}</span>}
                </div>
                <div className="aurevixa-form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" placeholder="you@email.com" value={form.email} onChange={handleChange} />
                  {errors.email && <span className="aurevixa-form-error">{errors.email}</span>}
                </div>
                <div className="aurevixa-form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" placeholder="Tell us what's on your mind" value={form.message} onChange={handleChange} />
                  {errors.message && <span className="aurevixa-form-error">{errors.message}</span>}
                </div>
                <button type="submit" className="aurevixa-button aurevixa-button-solid">Send message</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
