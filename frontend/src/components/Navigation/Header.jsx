import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="aavaj-header">
      <div className="header-container">
        <div className="header-content">

          {/* Logo Section */}
          <div className="logo-section">
            <NavLink to="/" className="emblem-logo">
              <div className="emblem-icon">🇮🇳</div>
            </NavLink>

            <div className="divider">|</div>

            <NavLink to="/" className="brand-logo">
              <div className="logo-text">
                <span className="brand-name">Aavaj Adhikar</span>
                <span className="brand-tagline">Voice & Rights</span>
              </div>
            </NavLink>

            <div className="divider">|</div>

            <a
              href="https://www.digitalindia.gov.in/"
              target="_blank"
              rel="noreferrer"
              className="digital-india"
            >
              <span>Digital India</span>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="nav-links">
            <NavLink to="/" end className="nav-link">
              Home
            </NavLink>

            <NavLink to="/schemes" className="nav-link">
              All Schemes
            </NavLink>

            <NavLink to="/categories" className="nav-link">
              Categories
            </NavLink>

            <NavLink to="/dashboard" className="nav-link">
              Dashboard
            </NavLink>
          </div>

          {/* User Section */}
          <div className="user-section">
            <div className="language-selector">
              <div className="language-icon">🌐</div>
              <span className="language-text">English</span>
            </div>

            <div className="theme-toggle">
              <button className="theme-btn">☀️</button>
            </div>

            <button className="signin-btn">
              Sign In
              <svg className="arrow-icon" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="mobile-nav">
            <NavLink
              to="/"
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/schemes"
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              All Schemes
            </NavLink>

            <NavLink
              to="/categories"
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Categories
            </NavLink>

            <NavLink
              to="/dashboard"
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </NavLink>

            <button className="mobile-signin-btn">Sign In</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
