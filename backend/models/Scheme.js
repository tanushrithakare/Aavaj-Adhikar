import mongoose from "mongoose";

const schemeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },   // was: name
    description: { type: String, required: true },

    ministry: { type: String },
    state: { type: String, required: true },

    category: {
      type: String,
      required: true,
      enum: ["Education", "Health", "Financial Aid", "Women", "Senior Citizen"]
    },

    eligibility: {
      minAge: Number,
      maxAge: Number,
      maxIncome: Number,          // was: incomeLimit
      gender: {
        type: String,
        enum: ["Male", "Female", "Any"],
        default: "Any"
      },
      beneficiaryType: { type: String }
    },

    benefits: String,
    documentsRequired: [String],
    officialLink: String          // was: applyLink
  },
  { timestamps: true }
);

/* Enables search */
schemeSchema.index({ title: "text", description: "text" });

export default mongoose.model("Scheme", schemeSchema);
