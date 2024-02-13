import { User } from "@/model/User";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
    const { userId } = params;
    try{
        const getUser = await User.findById(userId).select("-password");
        if(getUser){
            return NextResponse.json({
                message: "User retrieved successfully",
                success: true,
                status: 200,
                data: getUser
            })
        }else{
            return NextResponse.json({
                message: "User not found",
                success: truefalse,
                status: 404
            })
        }
    }catch(error){
        return NextResponse.json({
            message: "Error getting user",
            success: false,
            status: 500
        })
    }
}

export async function DELETE(request, {params}){
    const { userId } = params;
    try{
        const deletedUser = await User.findByIdAndDelete(userId);
        if(deletedUser){
            return NextResponse.json({
                message: "User deleted successfully",
                success: true,
                status: 200,
            })
        }else{
            return NextResponse.json({
                message: "User not found",
                success: false,
                status: 404,
            })
        }
    }catch(error){
        return NextResponse.json({
            message: "Error deleting user",
            success: false,
            status: 500
        })
    }
}

export async function PUT(request, {params}){
    const { userId } = params;
    const { firstname, lastname, password } = await request.json();

    try{
        const user = await User.findById(userId);
        if(user){
            user.firstname = firstname
            user.lastname = lastname
            user.password = password
            
            const updatedUser = await user.save();
            return NextResponse.json({
                message: "User updated successfully",
                success: true,
                status: 200,
                data: updatedUser
            });
        }else{
            return NextResponse.json({
                message: "User not found",
                success: false,
                status: 404,
            });
        }
    }catch(error){
        console.error("Error updating user",error);
        return NextResponse.json({
            message: "Failed to updated user",
            success: false,
            status: 500,
        })
    }
}