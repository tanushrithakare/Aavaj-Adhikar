import { useState, useEffect } from 'react';
import { apiService } from '../services/api';

export const useSchemes = () => {
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSchemes = async () => {
      try {
        setLoading(true);
        const data = await apiService.getSchemes();
        setSchemes(data);
      } catch (err) {
        setError('Failed to load schemes');
      } finally {
        setLoading(false);
      }
    };

    fetchSchemes();
  }, []);

  return { schemes, loading, error };
};