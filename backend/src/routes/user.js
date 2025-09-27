import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// User registration
router.post('/register', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ 
            success: true, 
            message: 'User registered successfully',
            data: user 
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

// Get user profile
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json({ success: true, data: user });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

export default router;