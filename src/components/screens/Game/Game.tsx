import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";

import { AnswersList } from "components/AnswersList";
import { QuestionsStepper } from "components/QuestionsStepper";
import { HamburgerButton } from "components/UIKit/HamburgerButton";
import { selectQuestionsState } from "slices/questions/selectors";
import { checkAnswer, goNextQuestion, setAnswer } from "slices/questions";
import { ScreenLayout } from "components/ScreenLayout";
import { addScore } from "slices/score";
import { setGameOverScreen } from "slices/screens";

import "./Game.css";

export default function GameScreen() {
  const [stepsListOpen, setStepsListOpen] = useState(false);

  const dispatch = useDispatch();
  const {
    isAnswerCorrect,
    shouldCheck,
    selectedAnswerIndex,
    currentQuestionIndex,
    questions,
  } = useSelector(selectQuestionsState);

  const question = questions[currentQuestionIndex];
  const answers = question.options;
  const prizeFunds = useMemo(
    () => questions.map((it) => it.prizeFund),
    [questions]
  );
  const lastAnswer = questions.length - 1 === currentQuestionIndex;

  const handleOptionClick = useCallback(
    (optionIndex: number) => {
      if (selectedAnswerIndex !== optionIndex) {
        dispatch(setAnswer(optionIndex));
      } else {
        dispatch(checkAnswer());
      }
    },
    [dispatch, selectedAnswerIndex]
  );

  useEffect(() => {
    const updateGameStatus = () => {
      if (isAnswerCorrect) {
        dispatch(goNextQuestion());
        dispatch(addScore(question.prizeFund));
      }

      if (lastAnswer || !isAnswerCorrect) {
        dispatch(setGameOverScreen());
      }
    };

    if (shouldCheck) {
      const timerId = setTimeout(updateGameStatus, 2000);

      return () => clearTimeout(timerId);
    }

    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldCheck]);

  return (
    <ScreenLayout className="screen-layout_background_black">
      <section className="game-screen">
        <HamburgerButton
          onClick={setStepsListOpen}
          className="game-screen__steps-list-button"
        />
        <div className="game-screen__question-container">
          <p className="game-screen__question-text">{question.question}</p>
          <AnswersList
            onOptionClick={handleOptionClick}
            options={answers}
            correctOptionIndex={shouldCheck ? question.correctAnswer : null}
            selectedOptionIndex={selectedAnswerIndex}
          />
        </div>
        <div
          className={clsx("game-screen__stepper-wrapper", {
            "game-screen__stepper-wrapper_state_opened": stepsListOpen,
          })}
        >
          <QuestionsStepper
            currentQuestion={currentQuestionIndex}
            prizeFunds={prizeFunds}
            className="game-screen__stepper"
          />
        </div>
      </section>
    </ScreenLayout>
  );
}
