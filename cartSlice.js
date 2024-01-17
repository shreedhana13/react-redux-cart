// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    increaseQuantity: (state, action) => {
      const { itemId } = action.payload;
      const item = state.find(item => item.id === itemId);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const { itemId } = action.payload;
      const item = state.find(item => item.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const { increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
