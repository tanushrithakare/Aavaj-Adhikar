import React, { createContext, useContext, useState, useEffect } from 'react'
import { schemeData } from '../data/schemeData'

const SchemeContext = createContext()

export const useScheme = () => {
  const context = useContext(SchemeContext)
  if (!context) {
    throw new Error('useScheme must be used within a SchemeProvider')
  }
  return context
}

export const SchemeProvider = ({ children }) => {
  const [schemes, setSchemes] = useState([])
  const [savedSchemes, setSavedSchemes] = useState([])
  const [appliedSchemes, setAppliedSchemes] = useState([])
  const [loading, setLoading] = useState(true)

  // Load data on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        // Simulate API call
        setTimeout(() => {
          setSchemes(schemeData)
          setLoading(false)
        }, 1000)
      } catch (error) {
        console.error('Error loading scheme data:', error)
        setLoading(false)
      }
    }

    loadData()
  }, [])

  const saveScheme = (schemeId) => {
    const scheme = schemes.find(s => s.id === schemeId)
    if (scheme && !savedSchemes.find(s => s.id === schemeId)) {
      setSavedSchemes(prev => [...prev, scheme])
    }
  }

  const unsaveScheme = (schemeId) => {
    setSavedSchemes(prev => prev.filter(scheme => scheme.id !== schemeId))
  }

  const applyToScheme = (schemeId) => {
    const scheme = schemes.find(s => s.id === schemeId)
    if (scheme && !appliedSchemes.find(s => s.id === schemeId)) {
      setAppliedSchemes(prev => [...prev, scheme])
    }
  }

  const value = {
    schemes,
    savedSchemes,
    appliedSchemes,
    loading,
    saveScheme,
    unsaveScheme,
    applyToScheme
  }

  return (
    <SchemeContext.Provider value={value}>
      {children}
    </SchemeContext.Provider>
  )
}