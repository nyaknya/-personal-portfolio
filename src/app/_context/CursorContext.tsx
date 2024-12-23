import React, { createContext, useContext, useState } from "react";

const CursorContext = createContext<{
  isHovered: boolean;
  setCursorHovered: (hovered: boolean) => void;
}>({
  isHovered: false,
  setCursorHovered: () => {},
});

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [isHovered, setHovered] = useState(false);

  return (
    <CursorContext.Provider value={{ isHovered, setCursorHovered: setHovered }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  return useContext(CursorContext);
}
