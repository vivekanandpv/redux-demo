import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (counter) => counter + 1,
    decrement: (counter) => counter - 1,
    customMultiply: (counter, action) => counter * action.payload,
  },
});
