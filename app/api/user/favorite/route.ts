import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/lib/models/User";
import { verifyJwt } from "@/lib/jwt";

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const token = req.headers.get("cookie")?.split("token=")[1];
  const payload = await verifyJwt(token);
  const user = await User.findById(payload.id);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  user.favorites = Array.from(new Set([...(user.favorites||[]), body.stationId]));
  await user.save();
  return NextResponse.json({ favorites: user.favorites });
}
export async function DELETE(req: Request) {
  await connectDB();
  const body = await req.json();
  const token = req.headers.get("cookie")?.split("token=")[1];
  const payload = await verifyJwt(token);
  const user = await User.findById(payload.id);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  user.favorites = (user.favorites || []).filter((id) => id !== body.stationId);
  await user.save();
  return NextResponse.json({ favorites: user.favorites });
}
