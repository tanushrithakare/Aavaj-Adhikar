import React from 'react'
import './PersonaSelector.css'

const PersonaSelector = () => {
  return (
    <section className='persona-section'>
      <div className='container'>
        <h2>Find Schemes For You</h2>
        <div className='persona-grid'>
          <div className='persona-card'>Students</div>
          <div className='persona-card'>Farmers</div>
          <div className='persona-card'>Women</div>
        </div>
      </div>
    </section>
  )
}

export default PersonaSelector
