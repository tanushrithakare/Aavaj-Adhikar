import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Schemes from './pages/Schemes/Schemes'
import SchemeDetail from './pages/SchemeDetail/SchemeDetail'
import Dashboard from './pages/Dashboard/Dashboard'
import ChatBot from './components/ChatBot/ChatBot'
import { SchemeProvider } from './context/SchemeContext'

function App() {
  return (
    <SchemeProvider>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schemes" element={<Schemes />} />
            <Route path="/scheme/:id" element={<SchemeDetail />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </SchemeProvider>
  )
}

export default App