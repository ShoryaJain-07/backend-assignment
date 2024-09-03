import mongoose, { Schema } from "mongoose";

const ethereumSchema = new Schema({
    price: Number,
})

export const Ethereum = mongoose.model("Ethereum", ethereumSchema);
