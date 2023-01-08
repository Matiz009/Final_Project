import { asyncError } from "../middlewares/errorMiddleware.js";
import { OrderModel } from "../models/OrderModel.js";
export const placeOrder = asyncError(async(req, res, next) => {
    const {
        shippingInfo,
        orderItems,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingCharges,
        totalAmount,
    } = req.body;
    const user = "req.user._id";
    const orderOptions = {
        shippingInfo,
        orderItems,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingCharges,
        totalAmount,
        user,
    };
    await OrderModel.create(orderOptions);
    res.status(201).json({
        success: true,
        message: "Order Placed Successfully using COD",
    });
});