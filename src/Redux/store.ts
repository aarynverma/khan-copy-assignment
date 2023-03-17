import { configureStore } from "@reduxjs/toolkit";

import SubjectReducer from "./SubjectDetail/SubjectDetail";
import ProgressBarReducer from "./ProgressBarDetails/ProgressBarDetails";

export const store = configureStore({
  reducer: {
    Subject: SubjectReducer,
    ProgressBarData: ProgressBarReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
