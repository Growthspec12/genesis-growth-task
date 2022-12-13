import React from "react";
import clsx from "clsx";

import { HexagonButton } from "components/UIKit/HexagonButton";

import "./AnswersList.css";

export interface AnswersListProps {
  correctOptionIndex: null | number;
  selectedOptionIndex: null | number;
  options: string[];
  onOptionClick: (answer: number) => void;
  className?: string;
}

export function AnswersList({
  correctOptionIndex,
  selectedOptionIndex,
  options,
  onOptionClick,
  className,
}: AnswersListProps) {
  return (
    <ol type="A" className={clsx("options-list", className)}>
      {options.map((option, i) => (
        <HexagonButton
          className="options-list__item"
          disabled={correctOptionIndex !== null}
          onClick={() => onOptionClick(i)}
          isSelected={selectedOptionIndex === i}
          isError={
            correctOptionIndex !== null
              ? correctOptionIndex !== selectedOptionIndex &&
                selectedOptionIndex === i
              : false
          }
          isSuccess={
            correctOptionIndex !== null
              ? (correctOptionIndex === selectedOptionIndex &&
                  selectedOptionIndex === i) ||
                correctOptionIndex === i
              : false
          }
        >
          {option}
        </HexagonButton>
      ))}
    </ol>
  );
}
