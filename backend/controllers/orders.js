import { asyncError } from "../middlewares/errorMiddleware.js";
import { OrderModel } from "../models/OrderModel.js";
import ErrorHandler from "../utils/ErrorHandler.js";
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
    console.log(shippingInfo);
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
export const getMyOrders = asyncError(async(req, res, next) => {
    const orders = await OrderModel.find();

    res.status(200).json({
        success: true,
        orders,
    });
});

export const getOrderDetails = asyncError(async(req, res, next) => {
    try {
        const order = await OrderModel.findById(req.params.id);
        if (!order) {
            return res.status(400).send("Record not present");
        }
        return res.send(order);
    } catch (err) {
        res.status(400).send("invalid id");
        console.log(err);
    }
});
export const getAdminOrders = asyncError(async(req, res, next) => {
    const orders = await OrderModel.find();

    res.status(200).json({
        success: true,
        orders,
    });
});

export const processOrder = asyncError(async(req, res, next) => {
    const order = await OrderModel.findById(req.params.id);

    if (!order) return next(new ErrorHandler("Invalid Order Id", 404));

    if (order.orderStatus === "Preparing") order.orderStatus = "Shipped";
    else if (order.orderStatus === "Shipped") {
        order.orderStatus = "Delivered";
        order.deliveredAt = new Date(Date.now());
    } else if (order.orderStatus === "Delivered")
        return next(new ErrorHandler("Food Already Delivered", 400));

    await order.save();

    res.status(200).json({
        success: true,
        message: "Status Updated Successfully",
    });
});