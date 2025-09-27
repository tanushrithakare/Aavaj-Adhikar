import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    schemeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Scheme',
        required: true
    },
    status: {
        type: String,
        enum: ['draft', 'submitted', 'under-review', 'approved', 'rejected'],
        default: 'draft'
    },
    applicationData: {
        type: Map, // Flexible structure for different schemes
        of: mongoose.Schema.Types.Mixed
    },
    submittedAt: {
        type: Date
    },
    notes: {
        type: String
    }
}, {
    timestamps: true
});

export default mongoose.model('Application', applicationSchema);