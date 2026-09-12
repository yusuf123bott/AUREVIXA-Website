import './About.css'
import './PageHero.css'

export default function About() {
  return (
    <div className="about-page">
      <section className="page-hero about-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <p className="eyebrow animate-fade" style={{ color: 'var(--accent-400)' }}>About Us</p>
          <h1 className="animate-fade-up delay-1">
            We believe in the power of<br />
            <span className="serif-italic" style={{ color: 'var(--accent-400)' }}>a good meal, well told</span>
          </h1>
          <p className="page-hero-sub animate-fade-up delay-2">
            Aurevixa was founded on a simple idea: the best restaurant marketing
            doesn't feel like marketing at all. It feels like a recommendation from
            someone you trust.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section about-story">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story-left reveal">
              <p className="eyebrow">Our Story</p>
              <h2>From a dinner conversation<br />to a <span className="serif-italic">creative agency</span></h2>
            </div>
            <div className="about-story-right reveal delay-1">
              <p>
                Aurevixa started at a corner table in a small Italian restaurant in 2023.
                The owner was frustrated — his food was excellent, his reviews were glowing,
                but he couldn't fill the room on weekdays. Meanwhile, a food creator at the
                next table was posting about her meal and racking up thousands of views.
              </p>
              <p>
                The connection was obvious. The execution wasn't. Restaurants didn't have
                time to vet creators, negotiate rates, and manage campaigns. Creators didn't
                have time to cold-pitch restaurants and chase payments. Both sides needed
                a bridge.
              </p>
              <p>
                That's what Aurevixa is. We're not an influencer marketplace or a booking
                platform. We're a creative agency that specializes in one thing: connecting
                restaurants with the right creators and managing the entire process from
                brief to booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section about-values">
        <div className="container">
          <div className="about-values-header reveal">
            <p className="eyebrow">What We Stand For</p>
            <h2>Our <span className="serif-italic">principles</span></h2>
          </div>
          <div className="values-grid">
            <div className="value-tile reveal">
              <h3>Authenticity Over Reach</h3>
              <p>We'd rather work with a creator who has 10,000 engaged followers than 100,000 passive ones. Real influence is about trust, not numbers.</p>
            </div>
            <div className="value-tile reveal delay-1">
              <h3>Story Over Sell</h3>
              <p>The best content doesn't feel like an ad. We help creators tell genuine stories about their experiences, not read scripts.</p>
            </div>
            <div className="value-tile reveal delay-2">
              <h3>Results Over Vanity</h3>
              <p>Views and likes are nice. Booked tables are better. We measure success in covers, not impressions.</p>
            </div>
            <div className="value-tile reveal delay-3">
              <h3>Long-Term Over One-Off</h3>
              <p>We're not interested in hit-and-run campaigns. The best partnerships build over time and get better with each campaign.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="about-image-break">
        <img
          src="https://images.pexels.com/photos/4253300/pexels-photo-4253300.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Chefs working in a professional kitchen"
          loading="lazy"
        />
        <div className="about-image-break-overlay">
          <p className="serif-italic">
            "Behind every great restaurant is a story worth telling —<br />
            and behind every great story is someone worth telling it."
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="section about-team">
        <div className="container">
          <div className="about-team-header reveal">
            <p className="eyebrow">The Team</p>
            <h2>People who <span className="serif-italic">get it</span></h2>
          </div>
          <div className="team-grid">
            <div className="team-card reveal">
              <div className="team-avatar">
                <img
                  src="https://images.pexels.com/photos/8117415/pexels-photo-8117415.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Team member"
                  loading="lazy"
                />
              </div>
              <h4>Elena Marchetti</h4>
              <p className="team-role">Founder &amp; Creative Director</p>
              <p className="team-bio">Former restaurant owner turned strategist. Knows what it's like on both sides of the table.</p>
            </div>
            <div className="team-card reveal delay-1">
              <div className="team-avatar">
                <img
                  src="https://images.pexels.com/photos/6476257/pexels-photo-6476257.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Team member"
                  loading="lazy"
                />
              </div>
              <h4>James Okonkwo</h4>
              <p className="team-role">Head of Creator Partnerships</p>
              <p className="team-bio">Built and nurtures our 450+ creator network. Matches the right voice to the right brand.</p>
            </div>
            <div className="team-card reveal delay-2">
              <div className="team-avatar">
                <img
                  src="https://images.pexels.com/photos/7180492/pexels-photo-7180492.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Team member"
                  loading="lazy"
                />
              </div>
              <h4>Sofia Lindqvist</h4>
              <p className="team-role">Campaign Manager</p>
              <p className="team-bio">Keeps every campaign on brief, on time, and on budget. The detail-obsessed backbone of Aurevixa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <div className="about-cta-content reveal">
            <h2>Let's work together</h2>
            <p>Whether you're a restaurant or a creator, we'd love to hear from you.</p>
            <div className="about-cta-actions">
              <a href="/restaurants" className="btn btn-accent btn-lg">For Restaurants</a>
              <a href="/creators" className="btn btn-outline btn-lg">For Creators</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
