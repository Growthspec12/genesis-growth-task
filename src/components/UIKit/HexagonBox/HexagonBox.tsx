import React, { ReactNode } from "react";
import clsx from "clsx";

import { ReactComponent as HexagonShape } from "assets/shapes/HexagonShape.svg";

import "./HexagonBox.css";

export interface HexagonBoxProps {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}

export function HexagonBox({
  children,
  className,
  contentClassName,
}: HexagonBoxProps) {
  return (
    <div className={clsx("hexagon", className)}>
      <HexagonShape className="hexagon__shape" preserveAspectRatio="none" />
      <div className={clsx("hexagon__content", contentClassName)}>
        {children}
      </div>
    </div>
  );
}
