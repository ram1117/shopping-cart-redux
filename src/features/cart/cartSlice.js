import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../components/cartItems';

const initialState = {
  cartItems,
  amount: 4,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
});

export default cartSlice.reducer;
