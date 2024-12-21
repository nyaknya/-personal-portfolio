"use client";

import { ReactNode } from "react";

interface IconToolTipProps {
  children: ReactNode;
}

export default function IconTooltip({ children }: IconToolTipProps) {
  return <div>{children}</div>;
}
