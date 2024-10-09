import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  dob: Date;
  collegeDetails?: {
    name: string;
    degree: string;
    graduationYear: number;
  };
  professionalDetails?: {
    companyName: string;
    position: string;
    yearsOfExperience: number;
  };
  bio: string;
  about: string;
  interests: string[];
  gender: "Male" | "Female";
  activities: string[];
  socialMedia: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    [key: string]: string | undefined;
  };
  role: string;
}

const UserSchema: Schema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    collegeDetails: {
      name: { type: String },
      degree: { type: String },
      graduationYear: { type: Number },
    },
    professionalDetails: {
      companyName: { type: String },
      position: { type: String },
      yearsOfExperience: { type: Number },
    },
    bio: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    interests: {
      type: [String],
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: true,
    },
    activities: {
      type: [String],
      required: true,
    },
    socialMedia: {
      facebook: { type: String },
      twitter: { type: String },
      instagram: { type: String },
      linkedin: { type: String },
      // Allow additional social media platforms
      type: Map,
      of: String,
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"], // Add more roles if needed
      required: true,
    },
  },
  
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

const user = mongoose.models.User || mongoose.model("User", UserSchema);
export default user;
