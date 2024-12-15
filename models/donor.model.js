import mongoose from "mongoose";
import { type } from "os";


const donorSchema=new mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    dob:{type:String},
    phone:{type:Number},
    place:{type:String},
    Bgroup:{type:String},
    // profile:{type:String}

})

export default mongoose.model.donors||mongoose.model("donor",donorSchema)