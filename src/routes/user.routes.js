import { Router } from "express";
import { fetchTransactions, getExpenses } from "../controllers/user.controller.js";

const router = Router();

router.route("/fetch-transactions").post(fetchTransactions)
router.route("/get-expenses").get(getExpenses)

export default router;
