import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ 
    message: 'Get all voice recordings',
    team: 'Backend Team - Voices Module'
  });
});

export default router;