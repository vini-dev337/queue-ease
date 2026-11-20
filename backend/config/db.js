import mongoose from "mongoose";

async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database is connected");
    }catch(error){
        console.log("Connection failed",error);
    }
};

export default connectDB;