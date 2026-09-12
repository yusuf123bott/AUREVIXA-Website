import { useState } from 'react'
import './Restaurants.css'
import './PageHero.css'

export default function Restaurants() {
  const [form, setForm] = useState({
    restaurantName: '',
    contactName: '',
    email: '',
    phone: '',
    location: '',
    cuisine: '',
    budget: '',
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
    if (!form.restaurantName.trim()) errs.restaurantName = 'Restaurant name is required'
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
    <div className="restaurants-page">
      {/* Hero */}
      <section className="page-hero restaurants-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <p className="eyebrow animate-fade" style={{ color: 'var(--accent-400)' }}>For Restaurants</p>
          <h1 className="animate-fade-up delay-1">
            Fill your tables with<br />
            <span className="serif-italic" style={{ color: 'var(--accent-400)' }}>the right guests</span>
          </h1>
          <p className="page-hero-sub animate-fade-up delay-2">
            We connect you with creators whose audience matches your ideal diner.
            Authentic content, real bookings, measurable results.
          </p>
        </div>
      </section>

      {/* Value Props */}
      <section className="section">
        <div className="container">
          <div className="value-grid">
            <div className="value-card reveal">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3>Targeted Matchmaking</h3>
              <p>We analyze your cuisine, location, and target demographic to find creators whose audience will actually walk through your door.</p>
            </div>
            <div className="value-card reveal delay-1">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3>Full Campaign Management</h3>
              <p>From creative brief to final delivery, we handle every detail. You review, approve, and watch the reservations come in.</p>
            </div>
            <div className="value-card reveal delay-2">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 3v18h18" />
                  <path d="M7 14l4-4 4 4 6-6" />
                </svg>
              </div>
              <h3>Measurable Impact</h3>
              <p>We track reach, engagement, and real-world outcomes — covers, bookings, and repeat visits. No vanity metrics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section restaurants-process">
        <div className="container">
          <div className="restaurants-process-header reveal">
            <p className="eyebrow">The Process</p>
            <h2>From enquiry to <span className="serif-italic">fully booked</span></h2>
          </div>
          <div className="process-timeline">
            <div className="timeline-item reveal">
              <span className="timeline-number">01</span>
              <h4>Enquiry</h4>
              <p>Tell us about your restaurant, your goals, and what makes your food special.</p>
            </div>
            <div className="timeline-item reveal delay-1">
              <span className="timeline-number">02</span>
              <h4>Strategy Call</h4>
              <p>We schedule a call to understand your brand, audience, and campaign objectives.</p>
            </div>
            <div className="timeline-item reveal delay-2">
              <span className="timeline-number">03</span>
              <h4>Creator Matching</h4>
              <p>We shortlist 3–5 creators from our network whose style and audience fit your restaurant.</p>
            </div>
            <div className="timeline-item reveal delay-3">
              <span className="timeline-number">04</span>
              <h4>Campaign Launch</h4>
              <p>Content goes live across the creators' channels. We manage production and delivery.</p>
            </div>
            <div className="timeline-item reveal delay-4">
              <span className="timeline-number">05</span>
              <h4>Results &amp; Reporting</h4>
              <p>You receive a full report with reach, engagement, and booking impact data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="section enquiry-section" id="enquiry">
        <div className="container">
          <div className="enquiry-grid">
            <div className="enquiry-left reveal">
              <p className="eyebrow">Start the Conversation</p>
              <h2 className="enquiry-heading">
                Tell us about<br />
                your <span className="serif-italic">restaurant</span>
              </h2>
              <p className="enquiry-text">
                Share a few details and we'll be in touch within 48 hours to schedule
                a strategy call. No pressure, no obligation — just a conversation about
                how we can help fill your tables.
              </p>
              <div className="enquiry-points">
                <div className="enquiry-point">
                  <span className="enquiry-check">✓</span> 48-hour response time
                </div>
                <div className="enquiry-point">
                  <span className="enquiry-check">✓</span> No obligation, no pressure
                </div>
                <div className="enquiry-point">
                  <span className="enquiry-check">✓</span> Tailored to your restaurant
                </div>
              </div>
            </div>

            <div className="enquiry-right reveal delay-1">
              {submitted ? (
                <div className="form-success">
                  <div className="form-success-icon">✓</div>
                  <h3>Thank you!</h3>
                  <p>Your enquiry has been received. We'll be in touch within 48 hours to schedule your strategy call.</p>
                </div>
              ) : (
                <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="restaurantName">Restaurant Name *</label>
                      <input
                        type="text"
                        id="restaurantName"
                        name="restaurantName"
                        className="form-input"
                        placeholder="e.g. Maison Lumiere"
                        value={form.restaurantName}
                        onChange={handleChange}
                      />
                      {errors.restaurantName && <span className="form-error">{errors.restaurantName}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contactName">Your Name *</label>
                      <input
                        type="text"
                        id="contactName"
                        name="contactName"
                        className="form-input"
                        placeholder="e.g. Marcello Rinaldi"
                        value={form.contactName}
                        onChange={handleChange}
                      />
                      {errors.contactName && <span className="form-error">{errors.contactName}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        placeholder="you@restaurant.com"
                        value={form.email}
                        onChange={handleChange}
                      />
                      {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>
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
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="location">Location</label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        className="form-input"
                        placeholder="City, neighbourhood"
                        value={form.location}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="cuisine">Cuisine Type</label>
                      <select
                        id="cuisine"
                        name="cuisine"
                        className="form-select"
                        value={form.cuisine}
                        onChange={handleChange}
                      >
                        <option value="">Select cuisine</option>
                        <option value="fine-dining">Fine Dining</option>
                        <option value="italian">Italian</option>
                        <option value="japanese">Japanese</option>
                        <option value="french">French</option>
                        <option value="asian">Asian / Fusion</option>
                        <option value="casual">Casual Dining</option>
                        <option value="cafe">Cafe / Bakery</option>
                        <option value="bar">Bar / Lounge</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="budget">Estimated Budget</label>
                    <select
                      id="budget"
                      name="budget"
                      className="form-select"
                      value={form.budget}
                      onChange={handleChange}
                    >
                      <option value="">Select range</option>
                      <option value="under-2k">Under &pound;2,000</option>
                      <option value="2k-5k">&pound;2,000 &ndash; &pound;5,000</option>
                      <option value="5k-10k">&pound;5,000 &ndash; &pound;10,000</option>
                      <option value="10k-plus">&pound;10,000+</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Tell us about your goals *</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-textarea"
                      placeholder="What are you hoping to achieve? Any specific campaigns, events, or challenges?"
                      value={form.message}
                      onChange={handleChange}
                    />
                    {errors.message && <span className="form-error">{errors.message}</span>}
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg enquiry-submit">
                    Submit Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
