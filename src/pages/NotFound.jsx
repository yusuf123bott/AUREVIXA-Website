import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound-bg" />
      <div className="notfound-overlay" />
      <div className="container notfound-content">
        <p className="eyebrow animate-fade" style={{ color: 'var(--accent-400)' }}>
          Error 404
        </p>
        <h1 className="notfound-title animate-fade-up delay-1">
          This table<br />
          <span className="serif-italic" style={{ color: 'var(--accent-400)' }}>doesn't exist</span>
        </h1>
        <p className="notfound-text animate-fade-up delay-2">
          The page you're looking for has been moved, renamed, or perhaps never
          existed. Let's get you back to something delicious.
        </p>
        <div className="notfound-actions animate-fade-up delay-3">
          <Link to="/" className="btn btn-accent btn-lg">Back to Home</Link>
          <Link to="/contact" className="btn btn-light btn-lg">Contact Us</Link>
        </div>
      </div>
    </div>
  )
}
