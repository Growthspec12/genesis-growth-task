/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ScoreState {
  score: number;
}

const initialState: ScoreState = {
  score: 0,
};

const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    addScore: (state, action: PayloadAction<number>) => {
      state.score += action.payload;
    },
    resetScore: (state) => {
      state.score = 0;
    },
  },
});

export const { addScore, resetScore } = scoreSlice.actions;
export default scoreSlice.reducer;
