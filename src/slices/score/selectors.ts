import { RootState } from "slices/store";

export const selectScore = (state: RootState) => state.score.score;
