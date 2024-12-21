"use client";

import { ReactNode } from "react";
import style from "./IconTooltip.module.css";

interface IconToolTipProps {
  children: ReactNode;
  tooltip: string;
}

export default function IconTooltip({
  children,
  tooltip = "",
}: IconToolTipProps) {
  return (
    <div className={style["tooltip-box"]}>
      <div>{children}</div>
      <div className={style.tooltip}>{tooltip}</div>
    </div>
  );
}
