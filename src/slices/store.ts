import { configureStore } from "@reduxjs/toolkit";

import scoreReducer from "./score";
import questionsReducer from "./questions";
import screensReducer from "./screens";

export const store = configureStore({
  reducer: {
    score: scoreReducer,
    questions: questionsReducer,
    screens: screensReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
