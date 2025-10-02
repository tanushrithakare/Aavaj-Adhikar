import React from 'react'
import Hero from '../../components/Hero/Hero'
import PersonaSelector from '../../components/PersonaSelector/PersonaSelector'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <PersonaSelector />
    </div>
  )
}

export default Home