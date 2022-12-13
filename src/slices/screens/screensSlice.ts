/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export enum Screen {
  Start,
  Game,
  GameOver,
}

interface ScreensState {
  activeScreen: Screen;
}

const initialState: ScreensState = {
  activeScreen: Screen.Start,
};

const screensSlice = createSlice({
  name: "screens",
  initialState,
  reducers: {
    setStartScreen: (state) => {
      state.activeScreen = Screen.Start;
    },
    setGameScreen: (state) => {
      state.activeScreen = Screen.Game;
    },
    setGameOverScreen: (state) => {
      state.activeScreen = Screen.GameOver;
    },
  },
});

export const { setGameOverScreen, setGameScreen, setStartScreen } =
  screensSlice.actions;
export default screensSlice.reducer;
