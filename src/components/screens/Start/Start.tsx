import React from "react";
import { useDispatch } from "react-redux";

import { Button } from "components/UIKit/Button";
import { setGameScreen } from "slices/screens";

import HandImage from "assets/hand.svg";

import "./Start.css";

export const StartScreen = () => {
  const dispatch = useDispatch();

  const handleStartClick = () => {
    dispatch(setGameScreen());
  };

  return (
    <section className="start-screen">
      <div className="start-screen__image-container">
        <img src={HandImage} alt="Hand" className="start-screen__image" />
      </div>
      <div className="start-screen__column-container">
        <p className="start-screen__description-text">
          Who wants to be a millionaire?
        </p>
        <Button
          className="start-screen__start-button"
          onClick={handleStartClick}
        >
          Start
        </Button>
      </div>
    </section>
  );
};
