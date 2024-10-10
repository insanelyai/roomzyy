import { connect } from "@/lib/connect";
import Property from "@/models/Property";
import { NextRequest, NextResponse } from "next/server";

connect();
export async function GET(req: NextRequest) {
  try {
    const property = await Property.find({});

    if (!property) {
      return NextResponse.json({
        message: "Property not found",
        status: 404,
      });
    }

    return NextResponse.json(property, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "An error occurred while fetching the property",
      },
      { status: 500 }
    );
  }
}
