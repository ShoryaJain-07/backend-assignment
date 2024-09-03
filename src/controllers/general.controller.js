import axios from "axios";
import { Coin } from "../models/coin.model.js";
import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const updateCoin = (async (req, res) => {
    try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr"
        );

        const coin = await Coin.findOneAndUpdate(
          { name: "ethereum" },
            {
                $set: {price:response.data.ethereum.inr}
          },
          { new: true }
        );
    } catch (error) {
        throw new ApiError(500, error);
    }
})

export {updateCoin}