import mongoose, { Schema } from "mongoose";

const coinSchema = new Schema({
    name: String,
    price: Number,
})

export const Coin = mongoose.model("Coin", coinSchema);
