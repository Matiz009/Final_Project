import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
    },
});

export default store;

export const server = "http://localhost:4000/api/v1";