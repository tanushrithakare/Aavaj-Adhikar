import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, User, Search } from 'lucide-react'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'All Schemes', href: '/schemes' },
    { name: 'For Students', href: '/schemes?category=student' },
    { name: 'For Farmers', href: '/schemes?category=farmer' },
    { name: 'For Women', href: '/schemes?category=women' },
  ]

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <div className="logo-icon">SS</div>
            <div className="logo-text">
              <span className="logo-title">SevaSetu</span>
              <span className="logo-subtitle">Empowering Lives</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link ${
                  location.pathname === item.href ? 'active' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="header-actions">
            <button className="icon-btn" aria-label="Search">
              <Search size={20} />
            </button>
            <Link to="/dashboard" className="icon-btn" aria-label="Dashboard">
              <User size={20} />
            </Link>
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-nav">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`mobile-nav-link ${
                  location.pathname === item.href ? 'active' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}

export default Header