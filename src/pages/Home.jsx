import { Link } from 'react-router-dom'
import './Home.css'

const steps = [
  ['01', 'Discover', 'Understand the brand, audience and campaign objective.'],
  ['02', 'Match', 'Identify creators whose audience and content align with the campaign.'],
  ['03', 'Coordinate', 'Manage communication and campaign coordination between the relevant parties.'],
  ['04', 'Deliver', 'Keep the collaboration organized from planning through final deliverables.'],
]

export default function Home() {
  return (
    <div className="aurevixa-home">
      <section className="aurevixa-hero aurevixa-dark-section">
        <div className="aurevixa-container aurevixa-hero-grid">
          <div className="aurevixa-hero-copy">
            <p className="aurevixa-kicker">Creator marketing · Hyderabad</p>
            <h1>Creator marketing,<br /><em>thoughtfully</em> executed.</h1>
            <p className="aurevixa-lead">Aurevixa connects brands with relevant creators and coordinates partnerships designed around the right audience, content and campaign objective.</p>
            <div className="aurevixa-actions">
              <Link className="aurevixa-button aurevixa-button-solid" to="/restaurants">For brands <span>↗</span></Link>
              <Link className="aurevixa-button aurevixa-button-outline" to="/creators">Join the creator network</Link>
            </div>
          </div>
          <div className="aurevixa-visual-placeholder"><span>[ hero visual placeholder ]</span><small>Campaign imagery to be added</small></div>
        </div>
      </section>

      <section className="aurevixa-dark-section aurevixa-path-section">
        <div className="aurevixa-container">
          <p className="aurevixa-kicker">What brings you to Aurevixa?</p>
          <div className="aurevixa-path-grid aurevixa-bordered-grid">
            <div className="aurevixa-path-card">
              <p className="aurevixa-kicker">For brands &amp; restaurants</p>
              <h2>Connect with the right creators through Aurevixa.</h2>
              <Link className="aurevixa-button aurevixa-button-solid" to="/restaurants">For brands <span>↗</span></Link>
            </div>
            <div className="aurevixa-path-card">
              <p className="aurevixa-kicker">For creators</p>
              <h2>Join Aurevixa's curated creator network.</h2>
              <Link className="aurevixa-button aurevixa-button-outline" to="/creators">For creators <span>↗</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="aurevixa-dark-section aurevixa-stat-section">
        <div className="aurevixa-container aurevixa-stat-grid">
          <div><div className="aurevixa-stat-number">65<sup>+</sup></div><h2>Food creators in our network</h2></div>
          <p>A curated network of food creators built around relevance, audience and content—not numbers alone.</p>
        </div>
      </section>

      <section className="aurevixa-light-section aurevixa-about-section">
        <div className="aurevixa-container">
          <p className="aurevixa-kicker">What we do</p>
          <h2>The right creator can change how a brand is<br className="desktop-break" /> experienced.</h2>
          <p className="aurevixa-body-copy">Aurevixa sits between brands and creators — identifying creators whose audience and content genuinely fit, coordinating communication, and bringing campaigns together with clarity. Every collaboration is considered and professionally managed, from first conversation to final delivery.</p>
        </div>
      </section>

      <section className="aurevixa-dark-section aurevixa-process-section">
        <div className="aurevixa-container">
          <p className="aurevixa-kicker">How it works</p>
          <h2>From brief to delivered campaign.</h2>
          <div className="aurevixa-process-grid aurevixa-bordered-grid">
            {steps.map(([number, title, text]) => <div className="aurevixa-process-card" key={number}><em>{number}</em><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="aurevixa-dark-section aurevixa-network-section">
        <div className="aurevixa-container aurevixa-two-column">
          <div><p className="aurevixa-kicker">Creator network</p><h2>A network built around relevance.</h2></div>
          <div><p>A curated network of food creators managed by Aurevixa.</p><p>Creator profiles are private. Aurevixa matches the right creators to each campaign directly — nothing about individual creators is published or browsable.</p></div>
        </div>
      </section>

      <section className="aurevixa-dark-section aurevixa-values-section">
        <div className="aurevixa-container"><p className="aurevixa-kicker">Why Aurevixa</p><div className="aurevixa-values-grid">{['Curated', 'Connected', 'Focused', 'Professional'].map((value) => <div key={value}><h3>{value}</h3><p>Creators are considered for relevance.</p></div>)}</div></div>
      </section>
      <div className="aurevixa-help-tab">✳</div>
    </div>
  )
}
