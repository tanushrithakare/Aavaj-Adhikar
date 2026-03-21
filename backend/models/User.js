import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  // eligibility fields (for later)
  age: Number,
  gender: String,
  state: String,
  category: String,
  income: Number
}, { timestamps: true });

export default mongoose.model('User', userSchema);
