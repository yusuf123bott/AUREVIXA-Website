import { useState } from 'react'
import './Restaurants.css'
import './PageHero.css'

export default function Restaurants() {
  const [form, setForm] = useState({
    restaurantName: '',
    contactName: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null })
    }
  }

  const validate = () => {
    const errs = {}
    if (!form.restaurantName.trim()) errs.restaurantName = 'Brand name is required'
    if (!form.contactName.trim()) errs.contactName = 'Your name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email'
    if (!form.message.trim()) errs.message = 'Please tell us a bit about your goals'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
  }

  return (
    <div className="aurevixa-dark-page">
      <section className="aurevixa-page-hero">
        <div className="aurevixa-container">
          <p className="aurevixa-kicker">For brands &amp; restaurants</p>
          <h1>Connect with the right<br /><em>creators</em> through Aurevixa.</h1>
          <p className="aurevixa-page-lead">We identify creators whose audience and content genuinely fit your brand, coordinate communication, and bring campaigns together with clarity.</p>
        </div>
      </section>

      <section className="aurevixa-page-section">
        <div className="aurevixa-container">
          <p className="aurevixa-kicker">The process</p>
          <h2>From enquiry to <em>delivered campaign</em>.</h2>
          <div className="aurevixa-bordered-grid aurevixa-process-grid">
            <div className="aurevixa-process-card"><em>01</em><h3>Enquiry</h3><p>Tell us about your brand, your goals, and what makes your food special.</p></div>
            <div className="aurevixa-process-card"><em>02</em><h3>Strategy</h3><p>We schedule a call to understand your brand, audience, and campaign objectives.</p></div>
            <div className="aurevixa-process-card"><em>03</em><h3>Matching</h3><p>We shortlist creators from our network whose style and audience fit your brand.</p></div>
            <div className="aurevixa-process-card"><em>04</em><h3>Delivery</h3><p>Content goes live and we manage production and delivery end to end.</p></div>
          </div>
        </div>
      </section>

      <section className="aurevixa-page-section aurevixa-enquiry-section" id="enquiry">
        <div className="aurevixa-container aurevixa-enquiry-grid">
          <div className="aurevixa-enquiry-left">
            <p className="aurevixa-kicker">Start the conversation</p>
            <h2>Tell us about<br />your <em>brand</em></h2>
            <p className="aurevixa-enquiry-text">Share a few details and we'll be in touch within 48 hours to schedule a strategy call.</p>
          </div>

          <div className="aurevixa-enquiry-right">
            {submitted ? (
              <div className="aurevixa-form-success">
                <h3>Thank you.</h3>
                <p>Your enquiry has been received. We'll be in touch within 48 hours.</p>
              </div>
            ) : (
              <form className="aurevixa-form" onSubmit={handleSubmit} noValidate>
                <div className="aurevixa-form-group">
                  <label htmlFor="restaurantName">Brand name *</label>
                  <input type="text" id="restaurantName" name="restaurantName" placeholder="e.g. Maison Lumiere" value={form.restaurantName} onChange={handleChange} />
                  {errors.restaurantName && <span className="aurevixa-form-error">{errors.restaurantName}</span>}
                </div>
                <div className="aurevixa-form-group">
                  <label htmlFor="contactName">Your name *</label>
                  <input type="text" id="contactName" name="contactName" placeholder="Your name" value={form.contactName} onChange={handleChange} />
                  {errors.contactName && <span className="aurevixa-form-error">{errors.contactName}</span>}
                </div>
                <div className="aurevixa-form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" placeholder="you@brand.com" value={form.email} onChange={handleChange} />
                  {errors.email && <span className="aurevixa-form-error">{errors.email}</span>}
                </div>
                <div className="aurevixa-form-group">
                  <label htmlFor="message">Tell us about your goals *</label>
                  <textarea id="message" name="message" placeholder="What are you hoping to achieve?" value={form.message} onChange={handleChange} />
                  {errors.message && <span className="aurevixa-form-error">{errors.message}</span>}
                </div>
                <button type="submit" className="aurevixa-button aurevixa-button-solid">Submit enquiry</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
