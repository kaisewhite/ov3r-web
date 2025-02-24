import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // If we're at the root path, redirect to /console/home
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/console/home", request.url));
  }

  return NextResponse.next();
}
