import { connectDB } from "@/helper/db";
import { Resource } from "@/model/Resource";
import { NextResponse } from "next/server";

connectDB();

export async function GET(request, { params }) {
    console.log("params", params);
    const { userId } = params;
    try {
        const result = await Resource.find({ userId: userId });
        if (!result) {
            return NextResponse.json({
                status: 404,
                statusText: "Resource not found",
                message: "Resource not found for the provided userId",
                success: false,
            });
        }
        return NextResponse.json({
            status: 200,
            statusText: "Success",
            data: result,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            message: "Failed to get resources",
            success: false,
            status: 500,
            statusText: "Internal server error",
        });
    }
}
