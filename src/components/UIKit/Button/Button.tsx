import clsx from "clsx";
import React, { ButtonHTMLAttributes, forwardRef } from "react";

import "./Button.css";

const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...restButtonProps }, ref) => (
  <button
    type="button"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...restButtonProps}
    ref={ref}
    className={clsx("button", className)}
  />
));

export default Button;
