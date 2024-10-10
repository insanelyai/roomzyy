// app/api/properties/route.ts
import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import { join } from "path";
import { v4 as uuidv4 } from "uuid";
import Property from "@/models/Property";
import { connect } from "@/lib/connect";

const UPLOAD_DIR = join(process.cwd(), "public", "uploads");

// Ensure the upload directory exists
async function ensureUploadDirExists() {
  try {
    await fs.access(UPLOAD_DIR);
  } catch {
    await fs.mkdir(UPLOAD_DIR, { recursive: true });
  }
}

connect()
export async function POST(req: Request) {
  try {
    
    ensureUploadDirExists()
    const formData = await req.formData();
    const property = {
      propertyName: formData.get("propertyName") as string,
      address: formData.get("address") as string,
      bedrooms: parseInt(formData.get("bedrooms") as string, 10),
      bathrooms: parseFloat(formData.get("bathrooms") as string),
      area: parseFloat(formData.get("area") as string),
      propertyType: formData.get("propertyType") as string,
      gender: formData.get("gender") as string,
      amenities: formData.getAll("amenities").map((a) => a.toString()),
      description: formData.get("description") as string,
      price: parseFloat(formData.get("price") as string),
      contactEmail: formData.get("contactEmail") as string,
      contactPhone: formData.get("contactPhone") as string,
      images: [] as string[],
    };

    const files = formData.getAll("images") as File[];

    for (const file of files) {
      if (file) {
        const uniqueFileName = `${uuidv4()}-${file.name}`;
        const filePath = join(UPLOAD_DIR, uniqueFileName);

        // Save the file locally
        const arrayBuffer = await file.arrayBuffer();
        await fs.writeFile(filePath, Buffer.from(arrayBuffer));

        property.images.push(`/uploads/${uniqueFileName}`);
      }
    }

   
    const newProperty = new Property({
        rent: property.price,
        noOfRooms: property.bedrooms + property.bathrooms,
        address: property.address,
        name: property.propertyName,
        propertyType: property.propertyType,
        amenities: property.amenities,
        propertyDescription: property.description,
        email: property.contactEmail,
        phone: property.contactPhone,
        propertyImages: property.images,
        area: property.area,
        gender: property.gender
    });

    const savedProperty = await newProperty.save();

    return NextResponse.json({
      message: "Property registered successfully",
      property: savedProperty,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to register property" },
      { status: 500 }
    );
  }
}
