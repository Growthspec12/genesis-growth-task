import React, { ButtonHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

import { HexagonBox } from "components/UIKit/HexagonBox";

import "./HexagonButton.css";

export interface HexagonButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected: boolean;
  isError: boolean;
  isSuccess: boolean;
  boxClassName?: string;
}

export const HexagonButton = forwardRef<HTMLButtonElement, HexagonButtonProps>(
  (
    { children, className, isSelected, isError, isSuccess, ...restButtonProps },
    ref
  ) => (
    <button
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...restButtonProps}
      type="button"
      className={clsx(
        "hexagon-button",
        {
          "hexagon-button_state_selected": isSelected,
          "hexagon-button_state_success": isSuccess,
          "hexagon-button_state_error": isError,
        },
        className
      )}
      ref={ref}
    >
      <div className="hexagon-button__line" />
      <HexagonBox className="hexagon-button__box">{children}</HexagonBox>
      <div className="hexagon-button__line" />
    </button>
  )
);
