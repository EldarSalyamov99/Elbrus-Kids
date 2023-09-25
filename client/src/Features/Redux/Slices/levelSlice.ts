import { createSlice } from '@reduxjs/toolkit';
import type { LevelType } from '../../../Types/gameTypes';
import { getLevelThunk } from '../thunks/gameThunk';

const initialState: LevelType = {
  number: 0,
};

export const levelSlice = createSlice({
  name: 'level',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getLevelThunk.fulfilled, (state, action) => action.payload);
  },
});

export default levelSlice.reducer;
