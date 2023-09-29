import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Slices/userSlice';
import gameReducer from './Slices/gameSlice';
import levelReducer from './Slices/levelSlice';
import themeReducer from './Slices/themesSlice';
import questReducer from './Slices/QuestsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    game: gameReducer,
    level: levelReducer,
    themes: themeReducer,
    quests: questReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
