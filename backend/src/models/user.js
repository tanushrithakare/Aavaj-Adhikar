import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true,
        enum: ['north', 'south', 'east', 'west', 'central']
    },
    language: {
        type: String,
        required: true,
        enum: ['hindi', 'english', 'marathi', 'tamil', 'telugu', 'bengali', 'gujarati']
    },
    category: {
        type: String,
        enum: ['farmer', 'student', 'woman', 'senior-citizen', 'other'],
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

export default mongoose.model('User', userSchema);