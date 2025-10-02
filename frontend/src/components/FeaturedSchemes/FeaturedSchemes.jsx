import React from 'react'
import { Link } from 'react-router-dom'
import { useScheme } from '../../context/SchemeContext'
import SchemeCard from '../SchemeCard/SchemeCard'
import { ArrowRight } from 'lucide-react'
import './FeaturedSchemes.css'

const FeaturedSchemes = () => {
  const { schemes } = useScheme()
  const featuredSchemes = schemes.slice(0, 6)

  return (
    <section className="featured-schemes">
      <div className="container">
        <div className="section-header">
          <h2>Featured Schemes</h2>
          <p>Discover some of the most popular government schemes</p>
        </div>
        
        <div className="schemes-grid">
          {featuredSchemes.map((scheme, index) => (
            <SchemeCard key={scheme.id} scheme={scheme} />
          ))}
        </div>
        
        <div className="view-all-container">
          <Link to="/schemes" className="btn btn-primary view-all-btn">
            View All Schemes
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedSchemes