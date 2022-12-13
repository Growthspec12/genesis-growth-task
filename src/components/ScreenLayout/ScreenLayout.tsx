import clsx from "clsx";
import React, { ReactNode } from "react";

import "./ScreenLayout.css";

export interface ScreenLayoutProps {
  children: ReactNode;
  className?: string;
}

export function ScreenLayout({ children, className }: ScreenLayoutProps) {
  return (
    <div className={clsx("screen-layout", className)}>
      <div className="screen-layout__container">{children}</div>
    </div>
  );
}
