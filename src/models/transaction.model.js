import mongoose, { Schema } from "mongoose";

const transactionSchema = new Schema({
  address: String,
  blockNumber: String,
  timeStamp: String,
  hash: String,
  nonce: String,
  blockHash: String,
  transactionIndex: String,
  from: String,
  to: String,
  value: String,
  gas: String,
  gasPrice: String,
  isError: String,
  txreceipt_status: String,
  input: String,
  contractAddress: String,
  cumulativeGasUsed: String,
  gasUsed: String,
  confirmations: String,
  methodId: String,
  functionName: String,
});

export const Transaction = mongoose.model("Transaction", transactionSchema)