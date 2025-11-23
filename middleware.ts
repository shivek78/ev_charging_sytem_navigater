import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const publicPaths = ["/login", "/signup", "/api/"];
  if (publicPaths.some(p => req.nextUrl.pathname.startsWith(p))) return NextResponse.next();
  if (!token) return NextResponse.redirect(new URL("/login", req.url));
  return NextResponse.next();
}
export const config = { matcher: ["/dashboard/:path*", "/"] }; // adapt as needed
