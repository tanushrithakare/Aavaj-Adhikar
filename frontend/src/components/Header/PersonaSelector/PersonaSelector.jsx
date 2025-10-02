import React from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap, Sprout, Users, Heart, Briefcase } from 'lucide-react'
import './PersonaSelector.css'

const PersonaSelector = () => {
  const personas = [
    {
      id: 'student',
      icon: GraduationCap,
      title: 'Students',
      description: 'Scholarships, education loans, and career opportunities',
      color: 'var(--navy-blue)',
      gradient: 'linear-gradient(135deg, var(--navy-blue), var(--navy-blue-light))',
      count: '150+ Schemes'
    },
    {
      id: 'farmer',
      icon: Sprout,
      title: 'Farmers',
      description: 'Subsidies, crop insurance, and agricultural support',
      color: 'var(--citrus-green)',
      gradient: 'linear-gradient(135deg, var(--citrus-green), var(--citrus-green-light))',
      count: '120+ Schemes'
    },
    {
      id: 'women',
      icon: Users,
      title: 'Women',
      description: 'Entrepreneurship, health, and empowerment schemes',
      color: 'var(--saffron-orange)',
      gradient: 'linear-gradient(135deg, var(--saffron-orange), var(--saffron-orange-light))',
      count: '80+ Schemes'
    },
    {
      id: 'health',
      icon: Heart,
      title: 'Health',
      description: 'Medical insurance, healthcare, and wellness programs',
      color: 'var(--teal)',
      gradient: 'linear-gradient(135deg, var(--teal), var(--teal-light))',
      count: '60+ Schemes'
    },
    {
      id: 'labour',
      icon: Briefcase,
      title: 'Workers & Labour',
      description: 'Social security, skill development, and employment',
      color: 'var(--charcoal-gray)',
      gradient: 'linear-gradient(135deg, var(--charcoal-gray), #475569)',
      count: '90+ Schemes'
    }
  ]

  return (
    <section className="persona-section">
      <div className="container">
        <div className="section-header">
          <h2>Find Schemes For You</h2>
          <p>Select your category to discover relevant government schemes</p>
        </div>
        
        <div className="persona-grid">
          {personas.map((persona, index) => (
            <Link
              key={persona.id}
              to={`/schemes?category=${persona.id}`}
              className="persona-card slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="persona-icon"
                style={{ background: persona.gradient }}
              >
                <persona.icon size={32} color="white" />
              </div>
              
              <div className="persona-content">
                <h3 className="persona-title">{persona.title}</h3>
                <p className="persona-description">{persona.description}</p>
                <div className="persona-count">{persona.count}</div>
              </div>
              
              <div className="persona-hover-effect" style={{ background: persona.gradient }}></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PersonaSelector