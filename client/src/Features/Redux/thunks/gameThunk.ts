import { createAsyncThunk } from '@reduxjs/toolkit';
import { getGameCategories, getLevel } from '../../../Services/gameServise';

export const getCategoriesThunk = createAsyncThunk('game/getCategories', async () =>
  getGameCategories()
    .then((data) => data)
    .catch((err) => Promise.reject(err)),
);

export const getLevelThunk = createAsyncThunk('game/getLevel', async () =>
  getLevel()
    .then((data) => data)
    .catch((err) => Promise.reject(err)),
);
