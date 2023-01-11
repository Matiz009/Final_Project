import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cartItems: {
    bambooPlant: {
      quantity: 0,
      price: 200,
    },
    crotonPlant: {
      quantity: 0,
      price: 900,
    },
    philodendronPlant: {
      quantity: 0,
      price: 800,
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
});
