import { asyncError } from "../middlewares/errorMiddleware.js";
import { UserModel } from "../models/UserModel.js";
import { OrderModel } from "../models/OrderModel.js";
export const myProfile = (req, res, next) => {
    res.status(200).json({
        success: true,
        user: req.user,
    });
};
export const logout = (req, res, next) => {
    req.session.destroy((error) => {
        if (error) {
            return next(error);
        }
        res.clearCookie("connect.sid");
        res.status(200).json({
            message: "Logged Out",
        });
    });
};

export const getAdminUsers = asyncError(async(req, res, next) => {
    const users = await UserModel.find();
    res.status(200).json({
        success: true,
        users,
    });
});

export const getAdminStats = asyncError(async(req, res, next) => {
    const usersCount = await UserModel.countDocuments();

    const orders = await OrderModel.find();

    const preparingOrders = orders.filter((i) => i.orderStatus === "Preparing");
    const shippedOrders = orders.filter((i) => i.orderStatus === "Shipped");
    const deliveredOrders = orders.filter((i) => i.orderStatus === "Delivered");

    let totalIncome = 0;

    orders.forEach((i) => {
        totalIncome += i.totalAmount;
    });

    res.status(200).json({
        success: true,
        usersCount,
        ordersCount: {
            total: orders.length,
            preparing: preparingOrders.length,
            shipped: shippedOrders.length,
            delivered: deliveredOrders.length,
        },
        totalIncome,
    });
});