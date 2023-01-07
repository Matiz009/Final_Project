import mongoose from "mongoose";
const Schema = new mongoose.Schema({
    razorPay_order_id: {
        type: String,
        required: true,
    },
    razorPay_payment_id: {
        type: String,
        required: true,
    },
    razorPay_signature: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const Payment = mongoose.model("Payment", Schema);