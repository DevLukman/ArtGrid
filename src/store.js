import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import { loadState, saveState } from "./utils/helpers";

const preloadedState = {
  cart: loadState() || {
    items: [],
  },
};

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState().cart);
});

export default store;
