import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/restaurants', label: 'For Brands' },
  { to: '/creators', label: 'For Creators' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="nav">
        <div className="aurevixa-container nav-inner">
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            <span className="nav-logo-text">Aurevixa</span>
          </Link>

          <nav className="nav-links">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'nav-link-active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <Link to="/contact" className="nav-cta" onClick={closeMenu}>
            Get in touch
          </Link>

          <button
            className={`nav-burger ${menuOpen ? 'nav-burger-open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu-open' : ''}`}>
        <nav className="mobile-menu-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className={({ isActive }) =>
                `mobile-menu-link ${isActive ? 'mobile-menu-link-active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" onClick={closeMenu} className="mobile-menu-link">
            Get in touch
          </Link>
        </nav>
      </div>
      {menuOpen && <div className="mobile-menu-overlay" onClick={closeMenu} />}
    </>
  )
}
