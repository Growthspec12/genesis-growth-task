import React from "react";
import clsx from "clsx";

import { Step } from "components/UIKit/Step";
import formatCurrency from "helpers/formatCurrency";
import makeAscendingOrder from "helpers/makeAscendingOrder";

import "./QuestionsStepper.css";

export interface QuestionsStepperProps {
  prizeFunds: number[];
  currentQuestion: number;
  className?: string;
}

export function QuestionsStepper({
  prizeFunds,
  currentQuestion,
  className,
}: QuestionsStepperProps) {
  return (
    <div className={clsx("questions-stepper", className)}>
      {makeAscendingOrder(prizeFunds).map((prize, i) => (
        <Step currentStep={i} activeStep={currentQuestion} key={`${prize}`}>
          {formatCurrency(prize)}
        </Step>
      ))}
    </div>
  );
}
