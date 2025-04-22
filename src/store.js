import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
// Get artworks from localStorage
function loadedArtworkFromStorage() {
  const artStored = localStorage.getItem("cart");
  return artStored ? JSON.parse(artStored) : [];
}

function addArtworkToStorage(state) {
  localStorage.setItem("cart", JSON.stringify(state.cart));
}
const preloadedState = {
  cart: loadedArtworkFromStorage(),
};
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  addArtworkToStorage(store.getState());
});

export default store;
