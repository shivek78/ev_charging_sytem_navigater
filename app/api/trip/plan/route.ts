import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const body = await req.json();
  // This is a stub. Ideally you'd call your routing engine + charger selection algorithm.
  // For now, return a fake route with stops near the destination.
  return NextResponse.json({
    stops: [
      { id: "fake-1", name: "ChargeStop 1", lat: body.endLat ?? 30.9, lng: body.endLng ?? 75.8, etaMin: 20 }
    ],
    explanation: { consensus: "Planned with range-safe stops", details: [] }
  });
}
