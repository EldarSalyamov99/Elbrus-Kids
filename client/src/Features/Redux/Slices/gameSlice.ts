import { createSlice } from '@reduxjs/toolkit';
import type { CategoryType } from '../../../Types/gameTypes';
import { getAnswerThunk, getCategoriesThunk } from '../thunks/gameThunk';

const initialState: CategoryType[] = [];

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoriesThunk.fulfilled, (state, action) => action.payload);
    builder.addCase(getAnswerThunk.fulfilled, (state, action) =>
      state.forEach((el) => {
        if (el.id === action.payload) {
          console.log(el.Questions.length);
          el.progress += Math.ceil((1 / el.Questions.length) * 100);
        }
        return el;
      }),
    );
  },
});

export default gameSlice.reducer;
