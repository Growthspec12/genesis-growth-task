import React, { ReactNode } from "react";
import clsx from "clsx";

import { HexagonBox } from "../HexagonBox";

import "./Step.css";

export interface StepProps {
  activeStep: number;
  currentStep: number;
  children: ReactNode;
  className?: string;
}

export function Step({
  className,
  children,
  activeStep,
  currentStep,
}: StepProps) {
  return (
    <div
      className={clsx(
        "step",
        {
          step_state_active: activeStep === currentStep,
          step_state_next: activeStep < currentStep,
          step_state_previous: activeStep > currentStep,
        },
        className
      )}
    >
      <div className="step__line" />
      <HexagonBox className="step__hexagon-box">{children}</HexagonBox>
      <div className="step__line" />
    </div>
  );
}
