import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import {
    getMyOrders,
    getOrderDetails,
    placeOrder,
} from "../controllers/orders.js";
const router = express.Router();
router.post("/createOrder", placeOrder);
router.get("/myOrders", isAuthenticated, getMyOrders);
router.get("/order/:id", isAuthenticated, getOrderDetails);
export default router;