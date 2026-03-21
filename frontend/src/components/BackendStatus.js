import React, { useState, useEffect } from 'react';
import apiService from '../services/api';

function BackendStatus() {
  const [status, setStatus] = useState('Checking...');
  const [health, setHealth] = useState(null);

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const healthData = await apiService.getHealth();
        setHealth(healthData);
        setStatus('Connected ✅');
      } catch (error) {
        setStatus('Disconnected ❌');
        console.error('Backend connection failed:', error);
      }
    };

    checkBackend();
  }, []);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h3>Backend Status: {status}</h3>
      {health && (
        <div>
          <p>Service: {health.service}</p>
          <p>Last Check: {new Date(health.timestamp).toLocaleTimeString()}</p>
        </div>
      )}
    </div>
  );
}

export default BackendStatus;