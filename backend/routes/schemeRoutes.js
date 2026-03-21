import express from 'express';
import Scheme from '../models/Scheme.js';
import User from '../models/User.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Add scheme (admin for now)
router.post('/', async (req, res) => {
  const scheme = await Scheme.create(req.body);
  res.status(201).json(scheme);
});

// Get all schemes
router.get('/', async (req, res) => {
  const schemes = await Scheme.find();
  res.json(schemes);
});

// Get eligible schemes for logged-in user
router.get('/eligible', authMiddleware, async (req, res) => {
  const user = await User.findById(req.user.id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const schemes = await Scheme.find({
    $and: [
      { 'eligibility.incomeLimit': { $gte: user.income } },
      { 'eligibility.minAge': { $lte: user.age } },
      { 'eligibility.maxAge': { $gte: user.age } },
      {
        $or: [
          { 'eligibility.gender': user.gender },
          { 'eligibility.gender': 'Any' }
        ]
      },
      {
        $or: [
          { 'eligibility.category': user.category },
          { 'eligibility.category': 'Any' }
        ]
      }
    ]
  });

  res.json(schemes);
});

export default router;
