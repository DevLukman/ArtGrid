import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addArtwork(state, action) {
      state.cart.push(action.payload);
    },
    deleteArtwork(state, action) {
      state.cart = state.cart.filter((art) => art.id !== action.payload);
    },
  },
});

export const { addArtwork, deleteArtwork } = cartSlice.actions;
export default cartSlice.reducer;

export const getCart = (store) => store.cart.cart;
export const getTotalPrice = (store) =>
  store.cart.cart.reduce((sum, item) => sum + item.price, 0);
export const getTotalQuantity = (store) => store.cart.cart.length;

// export default cartSlice.reducer;
// export const getCart = (store) => store.cart.cart;
// export const getUserName = (store) => store.user.username;
// export const getTotalCartQuantity = (store) =>
//   store.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

// export const getTotalCartPrice = (store) =>
//   store.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
// export const getCurrentQuantityById = (id) => (store) =>
//   store.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

// //Reselect
