import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Review from "@/lib/models/Review";
import { verifyJwt } from "@/lib/jwt";

export async function GET(req: Request) {
  await connectDB();
  const stationId = new URL(req.url).searchParams.get("stationId");
  const reviews = await Review.find({ stationId }).sort({ createdAt: -1 }).lean();
  return NextResponse.json({ reviews });
}

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const token = req.headers.get("cookie")?.split("token=")[1];
  const payload = await verifyJwt(token);
  const review = await Review.create({ stationId: body.stationId, userId: payload.id, rating: body.rating, comment: body.comment });
  return NextResponse.json({ review });
}
