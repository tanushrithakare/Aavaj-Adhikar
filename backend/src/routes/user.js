import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ 
    message: 'Voices endpoint working!',
    team: 'Backend Team'
  });
});

export default router;