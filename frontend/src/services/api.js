const API_BASE_URL = 'http://localhost:5000/api';

export const api = {
  // Schemes
  getSchemes: (params = {}) => 
    fetch(`${API_BASE_URL}/schemes?${new URLSearchParams(params)}`),
  
  getScheme: (id) => 
    fetch(`${API_BASE_URL}/schemes/${id}`),
  
  getSchemesByCategory: (category) => 
    fetch(`${API_BASE_URL}/schemes/category/${category}`),

  // Auth
  register: (userData) => 
    fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    }),

  login: (credentials) => 
    fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    })
};
