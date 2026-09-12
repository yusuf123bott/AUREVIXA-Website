import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="aurevixa-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">Aurevixa</Link>
            <p className="footer-tagline">Creator marketing, thoughtfully executed.</p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4 className="footer-heading">Explore</h4>
              <Link to="/restaurants">For Brands</Link>
              <Link to="/creators">For Creators</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Connect</h4>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Get Started</h4>
              <Link to="/restaurants">Enquire as a brand</Link>
              <Link to="/creators">Apply as a creator</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} Aurevixa. All rights reserved.</p>
          <p className="footer-credit">Thoughtfully executed.</p>
        </div>
      </div>
    </footer>
  )
}
