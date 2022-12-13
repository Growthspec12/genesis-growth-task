/* eslint-disable import/prefer-default-export */
import { RootState } from "slices/store";

export const selectActiveScreen = (state: RootState) =>
  state.screens.activeScreen;
