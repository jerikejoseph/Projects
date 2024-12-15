import mongoose from "mongoose";

export async function Connection() {
    const db=mongoose.connect(process.env.DB_URL+process.env.DB_NAME)
    return db  
}