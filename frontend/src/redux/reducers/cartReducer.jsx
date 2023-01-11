import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cartItems: {
    bambooPlant: {
      quantity: 0,
      price: 200,
    },
    crotonPlant: {
      quantity: 0,
      price: 500,
    },
    philodendronPlant: {
      quantity: 0,
      price: 1000,
    },
  },
  subTotal: 0,
  tax: 0,
  shippingCharges: 0,
  total: 0,
  shippingInfo: {},
};

export const cartReducer = createReducer(initialState, {
  bambooPlantIncrement: (state) => {
    state.cartItems.bambooPlant.quantity += 1;
  },
  crotonPlantIncrement: (state) => {
    state.cartItems.crotonPlant.quantity += 1;
  },
  philodendronPlantIncrement: (state) => {
    state.cartItems.philodendronPlant.quantity += 1;
  },
  bambooPlantDecrement: (state) => {
    state.cartItems.bambooPlant.quantity -= 1;
  },
  crotonPlantDecrement: (state) => {
    state.cartItems.crotonPlant.quantity -= 1;
  },
  philodendronPlantDecrement: (state) => {
    state.cartItems.philodendronPlant.quantity -= 1;
  },
  calculatePrice: (state) => {
    state.subTotal =
      state.cartItems.bambooPlant.price * state.cartItems.bambooPlant.quantity +
      state.cartItems.crotonPlant.price * state.cartItems.crotonPlant.quantity +
      state.cartItems.philodendronPlant.price *
        state.cartItems.philodendronPlant.quantity;

    state.tax = state.subTotal * 0.18;
    state.shippingCharges = state.subTotal > 1000 ? 0 : 200;
    state.total = state.subTotal + state.tax + state.shippingCharges;
  },
});
