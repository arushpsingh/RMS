import { connectDB } from "@/helper/db";
import { Resource } from "@/model/Resource";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

connectDB();

export async function GET() {
    let resources = [];
    try {
        resources = await Resource.find();
        return NextResponse.json({
            status: 200,
            statusText: "Success",
            data: resources,
        });
    } catch (error) {
        console.log("Failed to get resources:", error);
        return NextResponse.json(
            {
                message: "Failed to get resources",
                success: false,

                statusText: "Internal server error",
            },
            { status: 500 }
        );
    }
}

export async function POST(request) {
    const { firstname, lastname, email, userId } = await request.json();

    const authToken = request.cookies.get("authToken")?.value;
    const data = jwt.verify(authToken, process.env.JWT_KEY);
    try {
        const resource = new Resource({
            firstname,
            lastname,
            email,
            userId: data._id,
        });
        const createResource = await resource.save();
        const response = NextResponse.json(
            {
                statusText: "Resource added successfully",
                data: createResource,
            },
            { status: 200 }
        );
        return response;
    } catch (error) {
        console.log("Failed to add resource:", error);
        if (
            error.code === 11000 &&
            error.keyPattern &&
            error.keyPattern.email
        ) {
            // MongoDB duplicate key error (11000) for the unique email field
            return NextResponse.json(
                {
                    statusText: "Bad Request",
                    message:
                        "Email already exists. Please use a different email.",
                    success: false,
                },
                { status: 409 }
            );
        }
        return NextResponse.json(
            {
                message: "Failed to add resource",
                success: false,
                statusText: "Internal Server Error",
            },
            { status: 400 }
        );
    }
}
