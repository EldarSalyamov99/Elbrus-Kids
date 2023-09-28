import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getGameCategories,
  getLevel,
  getTHemes,
  getQuests,
  getAnswer,
} from '../../../Services/gameServise';

export const getCategoriesThunk = createAsyncThunk('game/getCategories', async () =>
  getGameCategories()
    .then((data) => data)
    .catch((err) => Promise.reject(err)),
);

export const getLevelThunk = createAsyncThunk('level/getLevel', async () =>
  getLevel()
    .then((data) => data)
    .catch((err) => Promise.reject(err)),
);

export const getThemesThunk = createAsyncThunk('theme/getThemes', async (id: number) =>
  getTHemes(id)
    .then((data) => data)
    .catch((err) => Promise.reject(err)),
);

export const getQuestsThunk = createAsyncThunk('quest/getQuests', async (id: number) =>
  getQuests(id)
    .then((data) => data)
    .catch((err) => Promise.reject(err)),
);

export const getAnswerThunk = createAsyncThunk('game/getAnswer', async (id: number) =>
  getAnswer(id)
    .then((data) => data)
    .catch((err) => Promise.reject(err)),
);
