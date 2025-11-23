import { NextResponse } from "next/server";
import { verifyJwt } from "@/lib/jwt"; // helper to verify token
import User from "@/lib/models/User";
export async function GET(req: Request) {
  try {
    const cookie = req.headers.get("cookie") || "";
    // parse token (simple)
    const token = cookie.split("token=")[1]?.split(";")[0];
    if (!token) return NextResponse.json({ user: null });
    const payload = await verifyJwt(token);
    const user = await User.findById(payload.id).lean();
    return NextResponse.json({ user });
  } catch {
    return NextResponse.json({ user: null });
  }
}
