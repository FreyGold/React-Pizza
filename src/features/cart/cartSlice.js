import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addItem(state, action) {
      const itemExist = state.cart.find(
        (item) => item.id === action.payload.id,
      );
      if (itemExist) {
        return;
      }
      if (action.payload.soldOut) return;
      state.cart.push({
        ...action.payload,
        totalPrice: action.payload.unitPrice,
        quantity: 1,
      });
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity(state, action) {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
            totalPrice: item.totalPrice + item.unitPrice,
          };
        }
        return item;
      });
    },
    decreaseItemQuantity(state, action) {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          if (item.quantity === 1) return item;
          return {
            ...item,
            quantity: item.quantity - 1,
            totalPrice: item.totalPrice - item.unitPrice,
          };
        }
        return item;
      });
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  clearCart,
  decreaseItemQuantity,
  increaseItemQuantity,
  deleteItem,
} = cartSlice.actions;
export default cartSlice.reducer;
