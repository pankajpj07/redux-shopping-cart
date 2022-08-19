import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemList: [],
    totalQuantity: 0,
    showCart: false,
    changed: false,
  },
  reducers: {
    initiateData(state, action) {
      state.itemList = action.payload.itemList;
      state.totalQuantity = action.payload.totalQuantity;
      state.showCart = action.payload.showCart;

      console.log("new state", state);
    },
    addToCart(state, action) {
      state.changed = true;
      const newItem = action.payload;
      const itemExist = state.itemList.find((item) => item.id === newItem.id);
      if (itemExist) {
        itemExist.quantity++;
        itemExist.totalPrice += newItem.price;
      } else {
        state.itemList.push({
          id: newItem.id,
          name: newItem.name,
          quantity: 1,
          price: newItem.price,
          totalPrice: newItem.price,
        });
        state.totalQuantity++;
      }
    },
    removeFromCart(state, action) {
      state.changed = true;
      const id = action.payload;
      const itemExist = state.itemList.find((item) => item.id === id);
      if (itemExist.quantity === 1) {
        state.itemList = state.itemList.filter((item) => item.id !== id);
        state.totalQuantity--;
      } else {
        itemExist.quantity--;
        itemExist.totalPrice -= itemExist.price;
      }
    },
    setShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});
export const cartActions = cartSlice.actions;

export default cartSlice;
