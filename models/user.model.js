import mongoose from "mongoose";
import { type } from "os";
 

const userSchema=new mongoose.Schema({
    username:{type:String},
    Email:{type:String},
    Password:{type:String},
    Cpassword:{type:String}
})

export default mongoose.model.users||mongoose.model("user",userSchema)