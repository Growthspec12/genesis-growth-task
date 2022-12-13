import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "components/UIKit/Button";
import formatCurrency from "helpers/formatCurrency";
import { selectScore } from "slices/score/selectors";
import { resetAnswers } from "slices/questions";
import { resetScore } from "slices/score";
import { setGameScreen } from "slices/screens";
import { ScreenLayout } from "components/ScreenLayout";

import HandImage from "assets/hand.svg";

import "./GameOver.css";

function GameOverScreen() {
  const dispatch = useDispatch();
  const score = useSelector(selectScore);

  const handleTryClick = () => {
    dispatch(resetAnswers());
    dispatch(resetScore());
    dispatch(setGameScreen());
  };

  return (
    <ScreenLayout>
      <section className="game-over-screen">
        <div className="game-over-screen__image-container">
          <img src={HandImage} alt="Hand" className="game-over-screen__image" />
        </div>
        <div className="game-over-screen__column-container">
          <div className="game-over-screen__total-score-text">Total score:</div>
          <p className="game-over-screen__score">
            {formatCurrency(score)} earned
          </p>
          <Button
            className="game-over-screen__start-button"
            onClick={handleTryClick}
          >
            Try again
          </Button>
        </div>
      </section>
    </ScreenLayout>
  );
}

export default GameOverScreen;
