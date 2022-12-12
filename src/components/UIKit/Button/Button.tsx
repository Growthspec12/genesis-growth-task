import clsx from "clsx";
import React, { ButtonHTMLAttributes, forwardRef } from "react";

import "./Button.css";

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...restButtonProps }, ref) => (
  <button
    {...restButtonProps}
    ref={ref}
    className={clsx("button", className)}
  />
));
