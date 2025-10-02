import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Users, IndianRupee } from 'lucide-react'
import './SchemeCard.css'

const SchemeCard = ({ scheme }) => {
  const getEligibilityColor = (eligibility) => {
    switch (eligibility) {
      case 'eligible':
        return 'var(--citrus-green)'
      case 'not-eligible':
        return 'var(--saffron-orange)'
      default:
        return 'var(--charcoal-gray)'
    }
  }

  const getCategoryColor = (category) => {
    const colors = {
      student: 'var(--navy-blue)',
      farmer: 'var(--citrus-green)',
      women: 'var(--saffron-orange)',
      health: 'var(--teal)',
      labour: 'var(--charcoal-gray)'
    }
    return colors[category] || 'var(--navy-blue)'
  }

  return (
    <div className="scheme-card slide-up">
      <div className="scheme-header">
        <div className="scheme-category" style={{ 
          background: getCategoryColor(scheme.category),
          color: 'white'
        }}>
          {scheme.category.charAt(0).toUpperCase() + scheme.category.slice(1)}
        </div>
        <div 
          className="eligibility-pill"
          style={{ 
            background: `rgba(${getEligibilityColor(scheme.eligibility)}, 0.1)`,
            color: getEligibilityColor(scheme.eligibility),
            border: `1px solid ${getEligibilityColor(scheme.eligibility)}`
          }}
        >
          {scheme.eligibility === 'eligible' ? 'You are eligible' : 
           scheme.eligibility === 'not-eligible' ? 'Not eligible' : 'Check eligibility'}
        </div>
      </div>

      <h3 className="scheme-title">{scheme.name}</h3>
      <p className="scheme-description">{scheme.description}</p>

      <div className="scheme-benefits">
        {scheme.benefit && (
          <div className="benefit-item">
            <IndianRupee size={16} />
            <span>{scheme.benefit}</span>
          </div>
        )}
        <div className="benefit-item">
          <Users size={16} />
          <span>Ages {scheme.ageRange}</span>
        </div>
        <div className="benefit-item">
          <Calendar size={16} />
          <span>Deadline: {scheme.deadline}</span>
        </div>
      </div>

      <div className="scheme-actions">
        <Link to={`/scheme/${scheme.id}`} className="btn btn-primary scheme-details-btn">
          View Details
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  )
}

export default SchemeCard