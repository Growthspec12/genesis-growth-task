/* eslint-disable import/prefer-default-export */
import { RootState } from "slices/store";

export const selectScore = (state: RootState) => state.score.score;
