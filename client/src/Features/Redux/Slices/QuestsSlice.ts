import { createSlice } from '@reduxjs/toolkit';
import type { CategoryType, QuestType } from '../../../Types/gameTypes';
import { getQuestsThunk } from '../thunks/gameThunk';

const initialState: QuestType[] = [];

export const questSlice = createSlice({
  name: 'quest',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getQuestsThunk.fulfilled, (state, action) => action.payload);
  },
});

export default questSlice.reducer;
