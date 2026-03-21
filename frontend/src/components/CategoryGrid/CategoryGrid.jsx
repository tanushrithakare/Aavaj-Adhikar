import React from 'react';
import './CategoryGrid.css';

const CategoryGrid = () => {
  const categories = [
    {
      id: 1,
      name: 'Students',
      hindiName: 'छात्र',
      icon: '🎓',
      description: 'Scholarships and educational schemes',
      count: '150+ Schemes',
      color: '#4CAF50'
    },
    {
      id: 2,
      name: 'Farmers',
      hindiName: 'किसान',
      icon: '👨‍🌾',
      description: 'Agricultural subsidies and loans',
      count: '80+ Schemes',
      color: '#FF9800'
    },
    {
      id: 3,
      name: 'Women',
      hindiName: 'महिलाएं',
      icon: '👩',
      description: 'Empowerment and welfare schemes',
      count: '120+ Schemes',
      color: '#E91E63'
    },
    {
      id: 4,
      name: 'Entrepreneurs',
      hindiName: 'उद्यमी',
      icon: '💼',
      description: 'Business grants and startup schemes',
      count: '90+ Schemes',
      color: '#9C27B0'
    },
    {
      id: 5,
      name: 'Senior Citizens',
      hindiName: 'वरिष्ठ नागरिक',
      icon: '👴',
      description: 'Pension and healthcare schemes',
      count: '60+ Schemes',
      color: '#607D8B'
    },
    {
      id: 6,
      name: 'Health',
      hindiName: 'स्वास्थ्य',
      icon: '🏥',
      description: 'Healthcare and medical schemes',
      count: '110+ Schemes',
      color: '#F44336'
    },
    {
      id: 7,
      name: 'Education',
      hindiName: 'शिक्षा',
      icon: '📚',
      description: 'Educational support schemes',
      count: '95+ Schemes',
      color: '#2196F3'
    },
    {
      id: 8,
      name: 'Housing',
      hindiName: 'आवास',
      icon: '🏠',
      description: 'Housing and shelter schemes',
      count: '70+ Schemes',
      color: '#795548'
    },
    {
      id: 9,
      name: 'Employment',
      hindiName: 'रोजगार',
      icon: '💼',
      description: 'Job and skill development schemes',
      count: '85+ Schemes',
      color: '#FF5722'
    },
    {
      id: 10,
      name: 'Rural Development',
      hindiName: 'ग्रामीण विकास',
      icon: '🌾',
      description: 'Rural infrastructure schemes',
      count: '75+ Schemes',
      color: '#8BC34A'
    }
  ];

  return (
    <section className="categories-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tabs">
            <button className="tab active">Categories</button>
            <button className="tab">States/UTs</button>
            <button className="tab">Central Ministries</button>
          </div>
          
          <h2 className="section-title">
            Find schemes based
            <span className="title-line">on categories</span>
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="categories-container">
          <div className="background-shapes">
            <div className="shape shape-left"></div>
            <div className="shape shape-right"></div>
          </div>
          
          <div className="categories-grid">
            {categories.map((category, index) => (
              <div 
                key={category.id}
                className="category-card"
                style={{ '--category-color': category.color }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card-content">
                  <div className="category-icon" style={{ backgroundColor: category.color + '20' }}>
                    <span className="icon" style={{ color: category.color }}>
                      {category.icon}
                    </span>
                  </div>
                  
                  <div className="category-info">
                    <h3 className="category-name">
                      {category.name}
                      <span className="hindi-name">({category.hindiName})</span>
                    </h3>
                    <p className="category-description">{category.description}</p>
                    <div className="scheme-count">
                      <span className="count">{category.count}</span>
                    </div>
                  </div>
                  
                  <div className="category-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                
                <div className="category-hover-effect" style={{ backgroundColor: category.color + '15' }}></div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="view-all-container">
          <button className="view-all-btn">
            View All Categories
            <svg className="view-all-arrow" viewBox="0 0 24 24">
              <path fill="currentColor" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;