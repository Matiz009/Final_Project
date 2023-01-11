import { createReducer } from "@reduxjs/toolkit";

export const orderReducer = createReducer({}, {
    createOrderRequest: (state) => {
        state.loading = true;
    },
    createOrderSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    createOrderFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    clearMessage: (state) => {
        state.message = null;
    },
    clearError: (state) => {
        state.error = null;
    },
});