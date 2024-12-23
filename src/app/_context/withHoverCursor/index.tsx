import React from "react";
import { useCursor } from "@/app/_context/CursorContext";

export function withHoverCursor<T extends object>(
  Component: React.ComponentType<T>
) {
  return function WrappedComponent(props: T) {
    const { setCursorHovered } = useCursor();

    return (
      <div
        onMouseEnter={() => setCursorHovered(true)}
        onMouseLeave={() => setCursorHovered(false)}
      >
        <Component {...props} />
      </div>
    );
  };
}
