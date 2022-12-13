import { RootState } from "slices/store";

export const selectActiveScreen = (state: RootState) =>
  state.screens.activeScreen;
