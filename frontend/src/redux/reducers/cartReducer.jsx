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
    philodedronPlant: {
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

export const cartReducer = createReducer(initialState, {});
