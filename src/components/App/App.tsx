import React from "react";
import { useSelector } from "react-redux";

import StartScreen from "components/screens/Start";
import GameScreen from "components/screens/Game";
import GameOverScreen from "components/screens/GameOver";
import { selectActiveScreen } from "slices/screens/selectors";
import { Screen } from "slices/screens";

import "./App.css";

function App() {
  const activeScreen = useSelector(selectActiveScreen);

  switch (activeScreen) {
    case Screen.Start:
      return <StartScreen />;
    case Screen.Game:
      return <GameScreen />;
    case Screen.GameOver:
      return <GameOverScreen />;
    default:
      throw new Error("Screen not found");
  }
}

export default App;
