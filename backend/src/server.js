import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({
    message: '🎤 Aavaj-Adhikar Backend API',
    status: 'Server is running successfully!',
    team: 'Backend Development Team'
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString()
  });
});

// Simple routes without imports first
app.get('/api/users', (req, res) => {
  res.json({ message: 'Users API working!' });
});

app.get('/api/voices', (req, res) => {
  res.json({ message: 'Voices API working!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend Server running on port ${PORT}`);
});