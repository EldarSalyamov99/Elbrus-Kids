import { createSlice } from '@reduxjs/toolkit';
import type { CategoryType } from '../../../Types/gameTypes';
import { getCategoriesThunk } from '../thunks/gameThunk';

const initialState: CategoryType[] = [];

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoriesThunk.fulfilled, (state, action) => action.payload);
  },
});

export default gameSlice.reducer;
