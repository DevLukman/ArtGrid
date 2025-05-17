import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addArtwork(state, action) {
      const newItem = action.payload;
      const existing = state.items.find((artwork) => artwork.id === newItem.id);
      if (!existing) {
        state.items?.push(newItem);
        toast.success(`${newItem.name} added to cart`);
      } else {
        toast.success(`${newItem.name} is already in cart`);
      }
    },
    deleteArtwork(state, action) {
      const deletedItem = action.payload;
      const inCart = state.items.find((item) => item.id === deletedItem);
      state.items = state.items.filter((art) => art.id !== deletedItem);
      toast.success(`${inCart.name} removed from cart`);
    },
    clearCart() {
      return initialState;
    },
  },
});

export const { addArtwork, deleteArtwork, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
export const getCart = (state) => state.cart.items;
export const getTotalPrice = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.price, 0);
export const getTotalQuantity = (state) => state.cart.items?.length;
