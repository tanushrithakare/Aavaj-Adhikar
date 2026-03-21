import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ChatBot from './components/ChatBot/ChatBot';
import './App.css';

// ========== ADD THIS ERROR BOUNDARY COMPONENT ==========
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error);
    console.error('Error component stack:', errorInfo.componentStack);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '40px',
          textAlign: 'center',
          fontFamily: 'Inter, sans-serif',
          maxWidth: '600px',
          margin: '100px auto',
          backgroundColor: '#fef2f2',
          borderRadius: '12px',
          border: '1px solid #fecaca'
        }}>
          <h2 style={{ color: '#dc2626', marginBottom: '20px' }}>⚠️ Something went wrong</h2>
          <p style={{ marginBottom: '20px', color: '#475569' }}>
            We encountered an error. This is usually temporary.
          </p>
          <div style={{
            backgroundColor: 'white',
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '20px',
            fontFamily: 'monospace',
            fontSize: '12px',
            textAlign: 'left',
            maxHeight: '200px',
            overflow: 'auto'
          }}>
            <strong>Error:</strong> {this.state.error?.message || 'Unknown error'}
          </div>
          <button 
            onClick={() => window.location.reload()}
            style={{
              padding: '12px 24px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            Reload Page
          </button>
          <p style={{ marginTop: '15px', fontSize: '14px', color: '#64748b' }}>
            If the error persists, try clearing your browser cache.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
// ========== END OF ERROR BOUNDARY ==========

// ========== ADD THIS STORAGE CLEANUP FUNCTION ==========
const cleanInvalidStorage = () => {
  try {
    // Clean localStorage
    if (typeof localStorage !== 'undefined') {
      const keysToRemove = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        try {
          // Try to parse each item to check if it's valid JSON
          JSON.parse(localStorage.getItem(key));
        } catch (e) {
          console.warn('Found invalid localStorage item, marking for removal:', key);
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach(key => localStorage.removeItem(key));
    }

    // Clean sessionStorage
    if (typeof sessionStorage !== 'undefined') {
      const sessionKeysToRemove = [];
      for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        try {
          JSON.parse(sessionStorage.getItem(key));
        } catch (e) {
          console.warn('Found invalid sessionStorage item, marking for removal:', key);
          sessionKeysToRemove.push(key);
        }
      }
      sessionKeysToRemove.forEach(key => sessionStorage.removeItem(key));
    }
  } catch (error) {
    console.error('Error during storage cleanup:', error);
  }
};
// ========== END OF STORAGE CLEANUP ==========

function App() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState({
    name: 'Aarav Sharma',
    email: 'aarav.sharma@example.com',
    type: 'Student'
  });

  // ========== ADD THIS USEEFFECT FOR CLEANUP ==========
  useEffect(() => {
    // Run storage cleanup on app start
    cleanInvalidStorage();
    
    // Add global error handler
    const handleGlobalError = (event) => {
      console.error('Global error caught:', event.error);
      // Prevent default error dialog
      event.preventDefault();
    };
    
    const handleRejection = (event) => {
      console.error('Promise rejection caught:', event.reason);
      event.preventDefault();
    };
    
    window.addEventListener('error', handleGlobalError);
    window.addEventListener('unhandledrejection', handleRejection);
    
    return () => {
      window.removeEventListener('error', handleGlobalError);
      window.removeEventListener('unhandledrejection', handleRejection);
    };
  }, []);
  // ========== END OF USEEFFECT ==========

  return (
    // ========== WRAP EVERYTHING IN ERRORBOUNDARY ==========
    <ErrorBoundary>
      <div className="App">
        {/* Navigation Header */}
        <header className="app-header">
          <div className="container">
            <div className="nav-content">
              {/* Logo */}
              <div className="logo">
                <div className="logo-icon">AA</div>
                <div className="logo-text">
                  <span className="logo-title">Aavaj Adhikar</span>
                  <span className="logo-subtitle">Voice & Rights</span>
                </div>
              </div>

              {/* Desktop Navigation - Simplified */}
              <nav className="desktop-nav">
                <a href="/" className="nav-link">Home</a>
                <a href="/schemes" className="nav-link">All Schemes</a>
                <a href="/students" className="nav-link">Students</a>
                <a href="/farmers" className="nav-link">Farmers</a>
                <a href="/women" className="nav-link">Women</a>
                <a href="/health" className="nav-link">Health</a>
              </nav>

              {/* Profile Section */}
              <div className="profile-section">
                <button 
                  className="profile-btn"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                >
                  <div className="profile-avatar">
                    {user.name.charAt(0)}
                  </div>
                  <span className="profile-name">{user.name}</span>
                  <span className="dropdown-arrow">▼</span>
                </button>

                {/* Profile Dropdown */}
                {isProfileOpen && (
                  <div className="profile-dropdown">
                    <div className="profile-info">
                      <div className="profile-avatar-large">
                        {user.name.charAt(0)}
                      </div>
                      <div className="profile-details">
                        <div className="profile-detail-name">{user.name}</div>
                        <div className="profile-detail-email">{user.email}</div>
                        <div className="profile-detail-type">{user.type}</div>
                      </div>
                    </div>
                    <div className="dropdown-divider"></div>
                    <a href="/dashboard" className="dropdown-item" onClick={() => setIsProfileOpen(false)}>
                      📊 My Dashboard
                    </a>
                    <a href="/saved-schemes" className="dropdown-item" onClick={() => setIsProfileOpen(false)}>
                      💾 Saved Schemes
                    </a>
                    <a href="/applications" className="dropdown-item" onClick={() => setIsProfileOpen(false)}>
                      📝 My Applications
                    </a>
                    <div className="dropdown-divider"></div>
                    <a href="/settings" className="dropdown-item" onClick={() => setIsProfileOpen(false)}>
                      ⚙️ Settings
                    </a>
                    <button className="dropdown-item logout-btn" onClick={() => setIsProfileOpen(false)}>
                      🚪 Logout
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="mobile-menu-btn"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                ☰
              </button>
            </div>

            {/* Mobile Navigation - Simplified */}
            {isMobileMenuOpen && (
              <div className="mobile-nav">
                <a href="/" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                <a href="/schemes" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>All Schemes</a>
                <a href="/students" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Students</a>
                <a href="/farmers" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Farmers</a>
                <a href="/women" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Women</a>
                <a href="/health" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Health</a>
                <a href="/dashboard" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Dashboard</a>
              </div>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/schemes" element={<SchemesPage />} />
            <Route path="/students" element={<CategoryPage name="Students" />} />
            <Route path="/farmers" element={<CategoryPage name="Farmers" />} />
            <Route path="/women" element={<CategoryPage name="Women" />} />
            <Route path="/health" element={<CategoryPage name="Health" />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="app-footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <div className="footer-logo">
                  <div className="logo-icon">AA</div>
                  <div className="logo-text">
                    <span className="logo-title">Aavaj Adhikar</span>
                    <span className="logo-subtitle">Voice & Rights</span>
                  </div>
                </div>
                <p>Your gateway to government schemes and rights</p>
              </div>
              <div className="footer-section">
                <h3>Quick Links</h3>
                <a href="/students">For Students</a>
                <a href="/farmers">For Farmers</a>
                <a href="/women">For Women</a>
                <a href="/health">Health Schemes</a>
              </div>
              <div className="footer-section">
                <h3>Contact</h3>
                <p>📧 help@aavajadhikar.gov.in</p>
                <p>📞 1800-1234-5678</p>
                <p>📍 Digital India Bhavan, New Delhi</p>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2024 Aavaj Adhikar. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* ChatBot Component */}
        <ChatBot />
      </div>
    </ErrorBoundary>
    // ========== END OF ERRORBOUNDARY WRAPPER ==========
  );
}

// Home Page Component
function HomePage() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="brand-name">Aavaj Adhikar</span>
          </h1>
          <p className="hero-subtitle">
            Your voice for rights and access to government schemes. 
            Discover, apply, and benefit from schemes designed for you.
          </p>
          
          <div className="hero-cta">
            <a href="/schemes" className="cta-btn primary">
              Explore All Schemes
            </a>
            <div className="quick-categories">
              <a href="/students" className="category-btn">🎓 Students</a>
              <a href="/farmers" className="category-btn">👨‍🌾 Farmers</a>
              <a href="/women" className="category-btn">👩 Women</a>
              <a href="/health" className="category-btn">🏥 Health</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Other Page Components
function SchemesPage() {
  return (
    <div className="page-container">
      <h1>All Government Schemes</h1>
      <p>Browse through all available schemes</p>
    </div>
  );
}

function CategoryPage({ name }) {
  return (
    <div className="page-container">
      <h1>Schemes for {name}</h1>
      <p>Discover schemes specifically for {name.toLowerCase()}</p>
    </div>
  );
}

function DashboardPage() {
  return (
    <div className="page-container">
      <h1>User Dashboard</h1>
      <p>Manage your profile and applications</p>
    </div>
  );
}

export default App;