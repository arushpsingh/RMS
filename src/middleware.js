import { NextRequest, NextResponse } from "next/server";

export function middleware(request) {
    const authToken = request.cookies.get("authToken")?.value;
    console.log("Middleware executed", authToken);

    if (request.nextUrl.pathname === "/api/login") {
        return;
    }

    const loggedInUserNotAccessPaths =
        request.nextUrl.pathname === "/login" ||
        request.nextUrl.pathname === "/sign-up";

    if (loggedInUserNotAccessPaths) {
        // Accessing not secured route
        if (authToken) {
            return NextResponse.redirect(new URL("/profile/user", request.url));
        }
    } else {
        // Accessing secured route
        if (!authToken) {
            if (request.nextUrl.pathname.startsWith("/api")) {
                return NextResponse.json(
                    {
                        message: "Access denied",
                        success: false,
                    },
                    { status: 401 }
                );
            }
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

    // return NextResponse.redirect(new URL('/home', request.url));
}

export const config = {
    matcher: [
        "/login",
        "/sign-up",
        "/",
        "/add-resources",
        "/show-resources",
        "/profile/:path*",
        "/api/current",
    ],
};
