"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import style from "./Cursor.module.css";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  const x = useSpring(0, { stiffness: 150, damping: 20 });
  const y = useSpring(0, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <motion.div
      className={style.cursor}
      ref={cursorRef}
      style={{
        x,
        y,
      }}
    />
  );
}
