import express from 'express';
import Scheme from '../models/Scheme.js';

const router = express.Router();

// Get all schemes with filters
router.get('/', async (req, res) => {
    try {
        const { category, region, language, search } = req.query;
        
        let filter = { isActive: true };
        
        if (category) filter.category = category;
        if (region) filter.regionSpecific = { $in: [region] };
        if (language) filter.languages = { $in: [language] };
        if (search) filter.title = { $regex: search, $options: 'i' };

        const schemes = await Scheme.find(filter);
        res.json({ success: true, count: schemes.length, data: schemes });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Get scheme by ID
router.get('/:id', async (req, res) => {
    try {
        const scheme = await Scheme.findById(req.params.id);
        if (!scheme) {
            return res.status(404).json({ success: false, message: 'Scheme not found' });
        }
        res.json({ success: true, data: scheme });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Add new scheme (admin only)
router.post('/', async (req, res) => {
    try {
        const scheme = await Scheme.create(req.body);
        res.status(201).json({ success: true, data: scheme });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

export default router;