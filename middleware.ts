export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  const isAuthPage =
    req.nextUrl.pathname === "/login" ||
    req.nextUrl.pathname === "/signup";

  // Logged-in users → go to dashboard
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Not logged-in → block dashboard
  if (!token && req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/signup", "/dashboard/:path*"],
};

