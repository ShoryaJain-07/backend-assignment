import axios from "axios";
import { asyncHandler } from "../utils/asyncHandler.js";
import {Transaction} from "../models/transaction.model.js";
import { ApiResponse } from "../utils/apiResponse.js";
import {ApiError} from "../utils/apiError.js"

const fetchTransactions = asyncHandler(async (req, res) => {
  try{
    const { address } = req.body;
    const { page } = req.query;
    const response = await axios.get(
      `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=${page}&offset=10&sort=asc&apikey=${process.env.ETHERSCAN_API_KEY}`
    );

      const transactions = response.data.result;
      let data;

      if (transactions) {
          console.log(1)
          transactions.map(async (transaction) => {
              data = await Transaction.create({
                  address: address,
                  blockNumber: transaction.blockNumber,
                  timeStamp: transaction.timeStamp,
                  hash: transaction.hash,
                  nonce: transaction.nonce,
                  blockHash: transaction.blockHash,
                  transactionIndex: transaction.transactionIndex,
                  from: transaction.from,
                  to: transaction.to,
                  value: transaction.value,
                  gas: transaction.gas,
                  gasPrice: transaction.gasPrice,
                  isError: transaction.isError,
                  txreceipt_status: transaction.txreceipt_status,
                  input: transaction.input,
                  contractAddress: transaction.contractAddress,
                  cumulativeGasUsed: transaction.cumulativeGasUsed,
                  gasUsed: transaction.gasUsed,
                  confirmations: transaction.confirmations,
                  methodId: transaction.methodId,
                  functionName: transaction.functionName,
              });
          });

      }

      return res.json(
        new ApiResponse(200, transactions, "fetched successfully")
      );
    
  } catch (error) {
      throw new ApiError(500, error)
  }
});

export { fetchTransactions };
