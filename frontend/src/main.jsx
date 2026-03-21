import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// Global error handling for Vite
const originalConsoleError = console.error;
console.error = (...args) => {
  if (args[0] && typeof args[0] === 'string' && args[0].includes('URI malformed')) {
    console.warn('Suppressed URI malformed error from Vite');
    return;
  }
  originalConsoleError.apply(console, args);
};

// Safe override of decodeURI
if (typeof window !== 'undefined') {
  const originalDecodeURI = window.decodeURI;
  window.decodeURI = function(uri) {
    try {
      return originalDecodeURI(uri);
    } catch (e) {
      console.warn('decodeURI failed, returning empty string');
      return '';
    }
  };
  
  const originalDecodeURIComponent = window.decodeURIComponent;
  window.decodeURIComponent = function(str) {
    try {
      return originalDecodeURIComponent(str);
    } catch (e) {
      console.warn('decodeURIComponent failed, returning empty string');
      return '';
    }
  };
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)