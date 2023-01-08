import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { placeOrder } from "../controllers/orders.js";
const router = express.Router();
router.post("/createOrder", isAuthenticated, placeOrder);
export default router;