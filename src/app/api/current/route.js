import { connectDB } from "@/helper/db";
import { User } from "@/model/User";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

connectDB();

export async function GET(request) {
    try {
        const authToken = request.cookies.get("authToken")?.value;
        if (!authToken) {
            return NextResponse.error("Auth token not provided", 401);
        }

        const data = jwt.verify(authToken, process.env.JWT_KEY);
        const userId = data._id;

        const user = await User.findById(userId).select("-password");

        if (!user) {
            return NextResponse.error("User not found", 404);
        }

        console.log("User details:", user);

        return NextResponse.json({ user });
    } catch (error) {
        console.error("Error fetching user", error.message);
        return NextResponse.error("Internal server error", 500);
    }
}
