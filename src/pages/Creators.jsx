import { useState } from 'react'
import './Creators.css'
import './PageHero.css'

export default function Creators() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    instagram: '',
    tiktok: '',
    youtube: '',
    niche: '',
    audienceSize: '',
    contentStyle: '',
    location: '',
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
    if (!form.instagram.trim() && !form.tiktok.trim() && !form.youtube.trim()) {
      errs.instagram = 'At least one social media link is required'
    }
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
    <div className="creators-page">
      {/* Hero */}
      <section className="page-hero creators-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <p className="eyebrow animate-fade" style={{ color: 'var(--accent-400)' }}>For Creators</p>
          <h1 className="animate-fade-up delay-1">
            Turn your taste into<br />
            <span className="serif-italic" style={{ color: 'var(--accent-400)' }}>paid partnerships</span>
          </h1>
          <p className="page-hero-sub animate-fade-up delay-2">
            Join a network of creators who love food as much as their followers do.
            We match you with restaurants that fit your style — and handle the logistics.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <div className="creators-benefits-grid">
            <div className="benefit-card reveal">
              <div className="benefit-number">01</div>
              <h3>Curated Brand Matches</h3>
              <p>We don't blast you with every restaurant. We send you opportunities that match your aesthetic, audience, and content style.</p>
            </div>
            <div className="benefit-card reveal delay-1">
              <div className="benefit-number">02</div>
              <h3>Fair, Transparent Pay</h3>
              <p>You see the brief, the deliverables, and the fee upfront. No haggling, no last-minute changes, no chasing invoices.</p>
            </div>
            <div className="benefit-card reveal delay-2">
              <div className="benefit-number">03</div>
              <h3>Creative Freedom</h3>
              <p>We provide direction, not scripts. Your audience follows you for your voice — we want it to stay that way.</p>
            </div>
            <div className="benefit-card reveal delay-3">
              <div className="benefit-number">04</div>
              <h3>Long-Term Relationships</h3>
              <p>Great matches become ongoing partnerships. Many of our creators work with the same restaurants across multiple campaigns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="section creators-lookfor">
        <div className="container">
          <div className="lookfor-grid">
            <div className="lookfor-left reveal">
              <p className="eyebrow">Who We're Looking For</p>
              <h2 className="lookfor-heading">
                Creators who <span className="serif-italic">love food</span><br />
                and have the audience to prove it
              </h2>
              <p className="lookfor-text">
                We work with creators across food, lifestyle, travel, and culture —
                anyone whose audience trusts their taste on where to eat. Here's what
                we look for:
              </p>
            </div>
            <div className="lookfor-right reveal delay-1">
              <ul className="lookfor-list">
                <li>
                  <span className="lookfor-check">✓</span>
                  <div>
                    <strong>Authentic voice</strong>
                    <p>Content that feels genuine, not overly produced or salesy.</p>
                  </div>
                </li>
                <li>
                  <span className="lookfor-check">✓</span>
                  <div>
                    <strong>Engaged audience</strong>
                    <p>Quality of engagement matters more than follower count.</p>
                  </div>
                </li>
                <li>
                  <span className="lookfor-check">✓</span>
                  <div>
                    <strong>Food-forward content</strong>
                    <p>Restaurants, cooking, dining culture — food is a regular theme.</p>
                  </div>
                </li>
                <li>
                  <span className="lookfor-check">✓</span>
                  <div>
                    <strong>Professional approach</strong>
                    <p>Reliable communication and timely delivery on commitments.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section application-section" id="apply">
        <div className="container">
          <div className="application-header reveal">
            <p className="eyebrow">Join the Network</p>
            <h2>Apply to become an <span className="serif-italic">Aurevixa creator</span></h2>
            <p className="application-intro">
              Tell us about yourself and your content. We review every application
              personally and respond within one week.
            </p>
          </div>

          <div className="application-form-wrap reveal delay-1">
            {submitted ? (
              <div className="form-success">
                <div className="form-success-icon">✓</div>
                <h3>Application received!</h3>
                <p>Thank you for applying. We'll review your profile and get back to you within one week.</p>
              </div>
            ) : (
              <form className="application-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="fullName">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className="form-input"
                      placeholder="Your name"
                      value={form.fullName}
                      onChange={handleChange}
                    />
                    {errors.fullName && <span className="form-error">{errors.fullName}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-input"
                      placeholder="+44 7123 456789"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="location">Location</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      className="form-input"
                      placeholder="City, country"
                      value={form.location}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-section-label">Social Channels</div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="instagram">Instagram</label>
                    <input
                      type="text"
                      id="instagram"
                      name="instagram"
                      className="form-input"
                      placeholder="@username or URL"
                      value={form.instagram}
                      onChange={handleChange}
                    />
                    {errors.instagram && <span className="form-error">{errors.instagram}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="tiktok">TikTok</label>
                    <input
                      type="text"
                      id="tiktok"
                      name="tiktok"
                      className="form-input"
                      placeholder="@username or URL"
                      value={form.tiktok}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="youtube">YouTube</label>
                    <input
                      type="text"
                      id="youtube"
                      name="youtube"
                      className="form-input"
                      placeholder="Channel URL (optional)"
                      value={form.youtube}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="audienceSize">Total Audience Size</label>
                    <select
                      id="audienceSize"
                      name="audienceSize"
                      className="form-select"
                      value={form.audienceSize}
                      onChange={handleChange}
                    >
                      <option value="">Select range</option>
                      <option value="under-10k">Under 10,000</option>
                      <option value="10k-50k">10,000 &ndash; 50,000</option>
                      <option value="50k-100k">50,000 &ndash; 100,000</option>
                      <option value="100k-500k">100,000 &ndash; 500,000</option>
                      <option value="500k-plus">500,000+</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="niche">Content Niche *</label>
                    <input
                      type="text"
                      id="niche"
                      name="niche"
                      className="form-input"
                      placeholder="e.g. Fine dining reviews, home cooking, food travel"
                      value={form.niche}
                      onChange={handleChange}
                    />
                    {errors.niche && <span className="form-error">{errors.niche}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contentStyle">Content Style</label>
                    <select
                      id="contentStyle"
                      name="contentStyle"
                      className="form-select"
                      value={form.contentStyle}
                      onChange={handleChange}
                    >
                      <option value="">Select style</option>
                      <option value="video">Video / Reels</option>
                      <option value="photo">Photography</option>
                      <option value="mixed">Mixed Media</option>
                      <option value="blog">Blog / Written</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Tell us about your content</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="What kind of content do you create? What restaurants or food do you feature? Any recent campaigns?"
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg enquiry-submit">
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
