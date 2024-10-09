import { connect } from "@/lib/connect";
import User, { IUser } from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

connect();

interface AuthPayload {
  id: string;
  username: string;
  email: string;
  role: string;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { email, password }: { email: string; password: string } =
      await request.json();

    const isUser = (await User.findOne({ email })) as IUser;

    if (!isUser) {
      return NextResponse.json(
        { message: "User does not exist" },
        { status: 404 }
      );
    }

    const validPassword = await bcrypt.compare(password, isUser.password);

    if (!validPassword) {
      return NextResponse.json(
        { message: "Invalid password" },
        { status: 401 } // Changed to 401 Unauthorized for invalid credentials
      );
    }

    const payload: AuthPayload = {
      id: isUser.id,
      username: isUser.username,
      email: isUser.email,

      role: isUser.role,
    };

    const response = NextResponse.json(
      {
        message: "User authenticated successfully",
        user: payload,
      },
      { status: 200 }
    );

    const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
      expiresIn: "1d",
    });

    response.cookies.set("user", token, { httpOnly: true, secure: true });

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "INTERNAL SERVER ERROR" },
      { status: 500 }
    );
  }
}
