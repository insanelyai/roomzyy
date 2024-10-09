import jwt, { JwtPayload } from "jsonwebtoken";
import { NextRequest } from "next/server"; // Assuming you are using Next.js

export async function getToken(request: NextRequest): Promise<JwtPayload | false> {
  try {
    const token = request.cookies.get('user')?.value;
    console.log(token);
    if (!token) {
      return false;
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;

    if (!payload) {
      return false;
    }

    return payload;

  } catch (error) {
    console.error(error);
    return false; // In case of error, returning false
  }
}
