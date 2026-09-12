import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className="aurevixa-dark-page aurevixa-notfound">
      <div className="aurevixa-container aurevixa-notfound-content">
        <p className="aurevixa-kicker">Error 404</p>
        <h1>This page<br /><em>doesn't exist</em>.</h1>
        <p className="aurevixa-page-lead">The page you're looking for has been moved or never existed.</p>
        <Link to="/" className="aurevixa-button aurevixa-button-solid">Back to home</Link>
      </div>
    </div>
  )
}
