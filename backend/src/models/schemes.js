import mongoose from 'mongoose';

const schemeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['scholarship', 'agriculture', 'women-empowerment', 'education', 'health', 'employment']
    },
    eligibility: {
        ageLimit: { type: Number },
        incomeLimit: { type: Number },
        gender: { type: String, enum: ['male', 'female', 'both'] },
        category: { type: String }, // SC/ST/OBC/General
        education: { type: String },
        // Add other eligibility criteria
    },
    benefits: {
        type: [String], // Array of benefits
        required: true
    },
    documentsRequired: {
        type: [String],
        required: true
    },
    applicationProcess: {
        type: String,
        required: true
    },
    applicationLink: {
        type: String
    },
    deadline: {
        type: Date
    },
    languages: {
        type: [String], // Available languages for information
        required: true
    },
    contactInfo: {
        phone: String,
        email: String,
        website: String
    },
    regionSpecific: {
        type: [String], // Which regions this scheme applies to
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

export default mongoose.model('Scheme', schemeSchema);