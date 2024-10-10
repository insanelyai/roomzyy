import mongoose, { Schema, model, Document, mongo } from "mongoose";

// Define the interface for the property
interface Property extends Document {
  location: string;
  rent: number;
  gender: "male" | "female" | "any"; // or any specific gender requirement
  noOfRooms: number;
  area: number;
  occupied: boolean;
  nextInspection: Date;
  address: string;
  name: string;
  propertyType: "apartment" | "house" | "PG" | "Hostel"; // You can add more types
  amenities: string[]; // Array of amenities
  propertyDescription: string;
  email: string;
  phone: string;
  propertyImages: string[]; // Array of image URLs
}

// Define the schema
const propertySchema = new Schema<Property>(
  {
    rent: { type: Number, required: true },

    noOfRooms: { type: Number, required: true },

    area: { type: Number, required: true },
    address: { type: String, required: true },
    name: { type: String, required: true },
    propertyType: {
      type: String,
      enum: ["apartment", "house", "pg", "hostel"],
      required: true,
    },
    gender: {
        type: String,
        enum: ["Female", "Male", "Any"],
        required: true,
        default: "any", 
      },
    amenities: { type: [String], required: true },
    propertyDescription: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    propertyImages: { type: [String], required: true }, // Array to store image URLs
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create the model
const Property =
  mongoose.models.Property || mongoose.model("Property", propertySchema);
export default Property;
