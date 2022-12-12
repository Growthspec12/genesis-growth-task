import clsx from "clsx";
import React, { FunctionComponent, useState } from "react";

import "./HamburgerButton.css";

interface HamburgerButtonProps {
  onClick?: (state: boolean) => void;
  className?: string;
}

export const HamburgerButton: FunctionComponent<HamburgerButtonProps> = ({
  onClick,
  className,
}) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    const newState = !clicked;

    setClicked(newState);
    onClick?.(newState);
  };

  return (
    <button
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
};
