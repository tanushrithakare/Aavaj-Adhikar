import express from 'express';
import User from '../models/User.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Get logged-in user
router.get('/me', authMiddleware, async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  res.json(user);
});

// Update user profile (eligibility info)
router.put('/me', authMiddleware, async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    req.body,
    { new: true }
  ).select('-password');

  res.json(updatedUser);
});

export default router;
