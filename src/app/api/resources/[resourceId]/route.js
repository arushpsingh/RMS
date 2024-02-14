import { Resource } from "@/model/Resource";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
    const { resourceId } = params;
    try{
        const getResource = await Resource.findById(resourceId);
        if(getResource){
            return NextResponse.json({
                message: "Resource retrieved successfully",
                success: true,
                
                data: getResource
            }, {status: 200,})
        }else{
            return NextResponse.json({
                message: "Resource not found",
                success: false,
                
            },{status: 404})    
        }
    }catch(error){
        return NextResponse.json({
            message: "Error getting resource",
            success: false,
            
        }, {status: 500})
    }
}

export async function DELETE(request, {params}){
    const { resourceId } = params;
    try{
        const deletedResource = await Resource.findByIdAndDelete(resourceId);
        if(deletedResource){
            return NextResponse.json({
                message: "Resource deleted successfully",
                success: true,
                
            }, {status: 200})
        }else{
            return NextResponse.json({
                message: "Resource not found",
                success: false,
                
            }, {status: 404})
        }
    }catch(error){
        return NextResponse.json({
            message: "Error deleting resource",
            success: false,
            
        }, {status: 500})
    }
}

export async function PUT(request, {params}){
    const { resourceId } = params;
    const { firstname, lastname } = await request.json();
    try{
        const resource = await Resource.findById(resourceId);
        if(resource){
            resource.firstname = firstname;
            resource.lastname = lastname;

            const updatedResource = await resource.save();
            return NextResponse.json({
                message: "Resource updated successfully",
                success: true,
                
                data: updatedResource
            }, {status: 200,});
        }else{
            return NextResponse.json({
                message: "Resource not found",
                success: false,
                
            }, {status: 404,})
        }
    }catch(error){
        console.error("Error updating resource");
        return NextResponse.json({
            message: "Failed to update resource",
            success: false,
            
        }, {status: 500})
    }
}