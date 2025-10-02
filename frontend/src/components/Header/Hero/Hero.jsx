import React, { useState } from 'react'
import { Search, ArrowRight, Users, TrendingUp, Award } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const stats = [
    { icon: Users, number: '500+', label: 'Schemes Available' },
    { icon: TrendingUp, number: '10M+', label: 'Beneficiaries' },
    { icon: Award, number: '50+', label: 'Departments' },
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Redirect to schemes page with search query
      window.location.href = `/schemes?search=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Your Gateway to
              <span className="gradient-text"> Government Schemes</span>
            </h1>
            <p className="hero-description">
              Discover, apply, and benefit from hundreds of government schemes 
              designed for students, farmers, women, and workers. Simplified access 
              to empower your dreams.
            </p>
            
            <form onSubmit={handleSearch} className="search-container">
              <div className="search-input-wrapper">
                <Search className="search-icon" size={20} />
                <input
                  type="text"
                  placeholder="Search by keyword, department, or for whom (e.g., 'Student Loan')"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
              </div>
              <button type="submit" className="btn btn-primary search-btn">
                Search
                <ArrowRight size={16} />
              </button>
            </form>
          </div>

          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div key={stat.label} className="stat-card fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="stat-icon">
                  <stat.icon size={24} />
                </div>
                <div className="stat-content">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hero-background">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>
    </section>
  )
}

export default Hero