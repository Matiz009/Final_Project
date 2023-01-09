import express from "express";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
import {
    getAdminOrders,
    getMyOrders,
    getOrderDetails,
    placeOrder,
    processOrder,
} from "../controllers/orders.js";
const router = express.Router();
router.post("/createOrder", placeOrder);
router.get("/myOrders", isAuthenticated, getMyOrders);

router.get("/order/:id", isAuthenticated, getOrderDetails);

// Add Admin Middleware
router.get("/admin/orders", isAuthenticated, authorizeAdmin, getAdminOrders);
router.get("/admin/order/:id", isAuthenticated, authorizeAdmin, processOrder);

export default router;