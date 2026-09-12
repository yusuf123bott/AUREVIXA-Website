import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import './Home.css'

export default function Home() {
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero" ref={heroRef}>
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow animate-fade delay-1" style={{ color: 'var(--accent-400)' }}>
            Restaurants &times; Creators
          </p>
          <h1 className="hero-title animate-fade-up delay-2">
            Where restaurants meet<br />
            their <span className="serif-italic hero-title-accent">storytellers</span>
          </h1>
          <p className="hero-sub animate-fade-up delay-3">
            Aurevixa connects ambitious restaurants with the creators who can fill
            their tables — pairing authentic storytelling with measurable impact.
          </p>
          <div className="hero-actions animate-fade-up delay-4">
            <Link to="/restaurants" className="btn btn-accent btn-lg">
              I'm a Restaurant
            </Link>
            <Link to="/creators" className="btn btn-light btn-lg">
              I'm a Creator
            </Link>
          </div>
        </div>
        <div className="hero-scroll animate-fade delay-6">
          <span>Scroll</span>
          <div className="hero-scroll-line" />
        </div>
      </section>

      {/* Intro / Manifesto */}
      <section className="section intro-section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-left reveal">
              <p className="eyebrow">Our Belief</p>
              <h2 className="intro-heading">
                Great food deserves<br />
                <span className="serif-italic">great storytelling.</span>
              </h2>
            </div>
            <div className="intro-right reveal delay-1">
              <p className="intro-text">
                We're a creative agency built for the restaurant industry. We believe
                that behind every memorable meal is a story worth telling — and behind
                every packed dining room is a creator whose audience trusts their taste.
              </p>
              <p className="intro-text">
                Aurevixa bridges the gap between restaurants and the influential voices
                shaping where people eat. We handle the matchmaking, the creative
                direction, and the campaign management so both sides can focus on
                what they do best.
              </p>
              <Link to="/about" className="link-arrow" style={{ marginTop: '1rem' }}>
                Learn more about us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Path Section */}
      <section className="section dual-section">
        <div className="container">
          <div className="dual-header reveal">
            <p className="eyebrow">Two Paths, One Mission</p>
            <h2>Choose your path</h2>
            <hr className="divider" />
          </div>

          <div className="dual-cards">
            <Link to="/restaurants" className="dual-card dual-card-restaurants reveal">
              <div className="dual-card-image">
                <img
                  src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Elegant restaurant interior"
                  loading="lazy"
                />
                <div className="dual-card-overlay" />
              </div>
              <div className="dual-card-body">
                <p className="dual-card-label">For Restaurants</p>
                <h3 className="dual-card-title">
                  Fill your tables with<br />the right guests
                </h3>
                <p className="dual-card-text">
                  Partner with creators whose audience matches your ideal diner.
                  We manage everything from brief to booking.
                </p>
                <span className="link-arrow dual-card-link">
                  Start your enquiry
                </span>
              </div>
            </Link>

            <Link to="/creators" className="dual-card dual-card-creators reveal delay-2">
              <div className="dual-card-image">
                <img
                  src="https://images.pexels.com/photos/12674096/pexels-photo-12674096.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Creator filming food content"
                  loading="lazy"
                />
                <div className="dual-card-overlay" />
              </div>
              <div className="dual-card-body">
                <p className="dual-card-label">For Creators</p>
                <h3 className="dual-card-title">
                  Turn your taste into<br />paid partnerships
                </h3>
                <p className="dual-card-text">
                  Work with restaurants that match your style and audience.
                  We bring the brands, you bring the story.
                </p>
                <span className="link-arrow dual-card-link">
                  Apply to join
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            <div className="stat reveal">
              <span className="stat-number">120+</span>
              <span className="stat-label">Restaurant Partners</span>
            </div>
            <div className="stat reveal delay-1">
              <span className="stat-number">450+</span>
              <span className="stat-label">Creator Network</span>
            </div>
            <div className="stat reveal delay-2">
              <span className="stat-number">2.4M</span>
              <span className="stat-label">Monthly Reach</span>
            </div>
            <div className="stat reveal delay-3">
              <span className="stat-number">98%</span>
              <span className="stat-label">Partner Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="section featured-section">
        <div className="container">
          <div className="featured-header reveal">
            <div>
              <p className="eyebrow">Selected Work</p>
              <h2>Campaigns that <span className="serif-italic">moved the needle</span></h2>
            </div>
            <Link to="/work" className="link-arrow">
              View all work
            </Link>
          </div>

          <div className="featured-grid">
            <article className="featured-item featured-item-large reveal">
              <img
                src="https://images.pexels.com/photos/1327393/pexels-photo-1327393.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Gourmet plated dish"
                loading="lazy"
              />
              <div className="featured-item-overlay">
                <span className="featured-tag">Fine Dining</span>
                <h3>Maison Lumiere</h3>
                <p>3x weekend covers in six weeks</p>
              </div>
            </article>

            <article className="featured-item reveal delay-1">
              <img
                src="https://images.pexels.com/photos/8357241/pexels-photo-8357241.jpeg?auto=compress&cs=tinysrgb&w=700"
                alt="Creator filming cooking content"
                loading="lazy"
              />
              <div className="featured-item-overlay">
                <span className="featured-tag">Casual Dining</span>
                <h3>Salt &amp; Stone</h3>
                <p>1.2M video views, 340 covers</p>
              </div>
            </article>

            <article className="featured-item reveal delay-2">
              <img
                src="https://images.pexels.com/photos/7627408/pexels-photo-7627408.jpeg?auto=compress&cs=tinysrgb&w=700"
                alt="Restaurant dishes on table"
                loading="lazy"
              />
              <div className="featured-item-overlay">
                <span className="featured-tag">New Launch</span>
                <h3>Olive &amp; Ember</h3>
                <p>Sold out opening week</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section process-section">
        <div className="container">
          <div className="process-header reveal">
            <p className="eyebrow">How It Works</p>
            <h2>A simple, proven <span className="serif-italic">process</span></h2>
          </div>
          <div className="process-grid">
            <div className="process-step reveal">
              <span className="process-number">01</span>
              <h4>Discover</h4>
              <p>We learn your story, your aesthetic, and what makes your restaurant or content unique.</p>
            </div>
            <div className="process-step reveal delay-1">
              <span className="process-number">02</span>
              <h4>Match</h4>
              <p>We pair restaurants with creators whose audience and style align with the brand.</p>
            </div>
            <div className="process-step reveal delay-2">
              <span className="process-number">03</span>
              <h4>Create</h4>
              <p>Campaigns are produced with creative direction that feels authentic, not forced.</p>
            </div>
            <div className="process-step reveal delay-3">
              <span className="process-number">04</span>
              <h4>Measure</h4>
              <p>We track reach, engagement, and real-world impact — covers, bookings, buzz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section testimonial-section">
        <div className="container-narrow">
          <div className="testimonial reveal">
            <div className="testimonial-quote-mark">&ldquo;</div>
            <blockquote className="testimonial-text">
              Aurevixa didn't just send us influencers — they sent us the <em className="serif-italic">right</em> ones.
              Our weekends went from half-empty to fully booked within a month.
            </blockquote>
            <div className="testimonial-author">
              <p className="testimonial-name">Marcello Rinaldi</p>
              <p className="testimonial-role">Owner, Maison Lumiere</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content reveal">
            <h2 className="cta-heading">
              Ready to begin?
            </h2>
            <p className="cta-text">
              Whether you're a restaurant looking to fill tables or a creator looking
              for your next partnership — your story starts here.
            </p>
            <div className="cta-actions">
              <Link to="/restaurants" className="btn btn-accent btn-lg">Enquire as a Restaurant</Link>
              <Link to="/creators" className="btn btn-outline btn-lg">Apply as a Creator</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
