import { createSlice } from '@reduxjs/toolkit';
import type { CategoryType } from '../../../Types/gameTypes';
import { getThemesThunk } from '../thunks/gameThunk';

const initialState: CategoryType[] = [];

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getThemesThunk.fulfilled, (state, action) => action.payload);
  },
});

export default themeSlice.reducer;
