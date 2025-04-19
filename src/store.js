import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";
// Configure the Redux store
// The store is the single source of truth for the entire application
// It holds the state of the application and allows us to dispatch actions to update the state
// We use the configureStore function from Redux Toolkit to create the store
// The configureStore function takes an object with a reducer property
// The reducer property is an object that maps the slice names to their corresponding reducers
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
