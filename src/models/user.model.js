import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: String,
    address: String,
    
})

export const User = mongoose.model("User", userSchema);