import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Slices/userSlice';
import gameReducer from './Slices/gameSlice';
import levelReducer from './Slices/levelSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    game: gameReducer,
    level: levelReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
