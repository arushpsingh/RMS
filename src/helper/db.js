import mongoose from "mongoose";

const {MONGO_URI} = process.env;

export const connectDB = async() =>{
    try{
        const connection = await mongoose.connect(MONGO_URI)
        console.log("Db connected");
    }catch(error){
        console.log("Failed to connect", error);
    }
}