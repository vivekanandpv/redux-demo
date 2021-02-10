import { createSlice } from '@reduxjs/toolkit';

export const citySlice = createSlice({
  name: 'cities',
  initialState: [],
  reducers: {
    addCity: (cities, action) => {
      cities.push(action.payload);
    },
  },
});
