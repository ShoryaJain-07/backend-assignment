import { Router } from "express";
import { fetchTransactions } from "../controllers/user.controller.js";

const router = Router();

router.route("/fetch-transactions").post(fetchTransactions)

export default router;
