import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Twitter, Facebook, Instagram } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-icon">SS</div>
              <div className="logo-text">
                <span className="logo-title">SevaSetu</span>
                <span className="logo-subtitle">Empowering Lives</span>
              </div>
            </div>
            <p className="footer-description">
              Your gateway to government schemes. Simplifying access to benefits 
              for students, farmers, women, and workers across India.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/schemes">All Schemes</Link>
              <Link to="/schemes?category=student">For Students</Link>
              <Link to="/schemes?category=farmer">For Farmers</Link>
              <Link to="/schemes?category=women">For Women</Link>
            </div>
          </div>

          <div className="footer-section">
            <h3>Categories</h3>
            <div className="footer-links">
              <Link to="/schemes?category=education">Education</Link>
              <Link to="/schemes?category=agriculture">Agriculture</Link>
              <Link to="/schemes?category=health">Health</Link>
              <Link to="/schemes?category=employment">Employment</Link>
              <Link to="/schemes?category=social-welfare">Social Welfare</Link>
            </div>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={16} />
                <span>help@sevasetu.gov.in</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>1800-1234-5678</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Digital India Bhavan, New Delhi</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 SevaSetu. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/accessibility">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer