import clsx from "clsx";
import React, { useState } from "react";

import "./HamburgerButton.css";

export interface HamburgerButtonProps {
  onClick?: (state: boolean) => void;
  className?: string;
}

export function HamburgerButton({ onClick, className }: HamburgerButtonProps) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    const newState = !clicked;

    setClicked(newState);
    onClick?.(newState);
  };

  return (
    <button
      type="button"
      className={clsx(
        "hamburger-button",
        {
          "hamburger-button_state_clicked": clicked,
        },
        className
      )}
      onClick={handleClick}
    >
      <div className="hamburger-button__line" />
      <div className="hamburger-button__line" />
      <div className="hamburger-button__line" />
    </button>
  );
}
