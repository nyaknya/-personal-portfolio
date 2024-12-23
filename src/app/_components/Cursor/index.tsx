"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect } from "react";
import { useCursor } from "@/app/_context/CursorContext";
import style from "./Cursor.module.css";

export default function Cursor() {
  const { isHovered } = useCursor();

  const x = useSpring(0, { stiffness: 150, damping: 20 });
  const y = useSpring(0, { stiffness: 150, damping: 20 });
  const scale = useSpring(1, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  useEffect(() => {
    scale.set(isHovered ? 0.3 : 1);
  }, [isHovered, scale]);

  return (
    <motion.div
      className={style.cursor}
      style={{
        x,
        y,
        scale, // 크기 조정
      }}
    />
  );
}
