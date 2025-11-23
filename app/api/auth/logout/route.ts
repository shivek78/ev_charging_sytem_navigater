import { NextResponse } from "next/server";

export async function POST() {
  // Clear the auth cookie
  const res = NextResponse.json(
    { message: "Logged out successfully" },
    { status: 200 }
  );

  // Remove token cookie
  res.cookies.set("token", "", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/", // must match login path
    expires: new Date(0), // expires immediately
  });

  return res;
}
