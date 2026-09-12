import { useState } from 'react'
import './Creators.css'
import './PageHero.css'

export default function Creators() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    instagram: '',
    niche: '',
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
    if (!form.fullName.trim()) errs.fullName = 'Your name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email'
    if (!form.instagram.trim()) errs.instagram = 'At least one social media link is required'
    if (!form.niche.trim()) errs.niche = 'Please describe your content niche'
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
          <p className="aurevixa-kicker">For creators</p>
          <h1>Join Aurevixa's curated<br /><em>creator network</em>.</h1>
          <p className="aurevixa-page-lead">We match you with brands that fit your style and audience. We bring the brands, you bring the story.</p>
        </div>
      </section>

      <section className="aurevixa-page-section">
        <div className="aurevixa-container">
          <p className="aurevixa-kicker">What we look for</p>
          <h2>Creators who <em>love food</em><br />and have the audience to prove it.</h2>
          <div className="aurevixa-bordered-grid aurevixa-lookfor-grid">
            <div className="aurevixa-lookfor-card"><em>01</em><h3>Authentic voice</h3><p>Content that feels genuine, not overly produced or salesy.</p></div>
            <div className="aurevixa-lookfor-card"><em>02</em><h3>Engaged audience</h3><p>Quality of engagement matters more than follower count.</p></div>
            <div className="aurevixa-lookfor-card"><em>03</em><h3>Food-forward content</h3><p>Restaurants, cooking, dining culture — food is a regular theme.</p></div>
            <div className="aurevixa-lookfor-card"><em>04</em><h3>Professional approach</h3><p>Reliable communication and timely delivery on commitments.</p></div>
          </div>
        </div>
      </section>

      <section className="aurevixa-page-section aurevixa-enquiry-section" id="apply">
        <div className="aurevixa-container aurevixa-enquiry-grid">
          <div className="aurevixa-enquiry-left">
            <p className="aurevixa-kicker">Join the network</p>
            <h2>Apply to become an<br /><em>Aurevixa creator</em></h2>
            <p className="aurevixa-enquiry-text">Tell us about yourself and your content. We review every application personally and respond within one week.</p>
          </div>

          <div className="aurevixa-enquiry-right">
            {submitted ? (
              <div className="aurevixa-form-success">
                <h3>Application received.</h3>
                <p>Thank you for applying. We'll review your profile and get back to you within one week.</p>
              </div>
            ) : (
              <form className="aurevixa-form" onSubmit={handleSubmit} noValidate>
                <div className="aurevixa-form-group">
                  <label htmlFor="fullName">Full name *</label>
                  <input type="text" id="fullName" name="fullName" placeholder="Your name" value={form.fullName} onChange={handleChange} />
                  {errors.fullName && <span className="aurevixa-form-error">{errors.fullName}</span>}
                </div>
                <div className="aurevixa-form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" placeholder="you@email.com" value={form.email} onChange={handleChange} />
                  {errors.email && <span className="aurevixa-form-error">{errors.email}</span>}
                </div>
                <div className="aurevixa-form-group">
                  <label htmlFor="instagram">Instagram / social *</label>
                  <input type="text" id="instagram" name="instagram" placeholder="@username or URL" value={form.instagram} onChange={handleChange} />
                  {errors.instagram && <span className="aurevixa-form-error">{errors.instagram}</span>}
                </div>
                <div className="aurevixa-form-group">
                  <label htmlFor="niche">Content niche *</label>
                  <input type="text" id="niche" name="niche" placeholder="e.g. Fine dining, home cooking, food travel" value={form.niche} onChange={handleChange} />
                  {errors.niche && <span className="aurevixa-form-error">{errors.niche}</span>}
                </div>
                <div className="aurevixa-form-group">
                  <label htmlFor="message">Tell us about your content</label>
                  <textarea id="message" name="message" placeholder="What kind of content do you create?" value={form.message} onChange={handleChange} />
                </div>
                <button type="submit" className="aurevixa-button aurevixa-button-solid">Submit application</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
