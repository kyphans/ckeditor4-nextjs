// import { isAuthenticated } from "@/Utils/Auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isAuthenticated = true;
const protectedRoutesPattern = /^\/admin(?!\/sign-in\/?$)/;
const signInRoutePattern = /^\/admin\/sign-in$/;

export default function middleware(req: NextRequest) {
  const { pathname, origin } = req.nextUrl;
  const isAdminRoute = protectedRoutesPattern.test(pathname);
  const isSignInRoute = signInRoutePattern.test(pathname);

  if (isAdminRoute && !isAuthenticated && !isSignInRoute) {
    return NextResponse.redirect(new URL("/admin/sign-in", origin).toString());
  }

  if (isAuthenticated && isSignInRoute) {
    return NextResponse.redirect(new URL("/admin", origin).toString());
  }
}