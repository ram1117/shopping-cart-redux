import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../components/cartItems';

const initialState = {
  cartItems,
  amount: cartItems.length,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      // eslint-disable-next-line
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      // eslint-disable-next-line
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount += 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount -= 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      // eslint-disable-next-line
      state.amount = amount;
      // eslint-disable-next-line
      state.total = total;
    },
  },
});

// console.log(cartSlice);
export const {
  clearCart, removeItem, increase, decrease, calculateTotals,
} = cartSlice.actions;
export default cartSlice.reducer;
