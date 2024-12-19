"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import style from "./TextPullUp.module.css";

export function TextPullUp({ children }: { children: React.ReactNode }) {
  const text = typeof children === "string" ? children : "";
  const splittedText = text.split("");

  const pullupVariant = {
    initial: { y: 10, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
      },
    }),
  };

  const ref = useRef(null);
  return (
    <div className={style["text-wrap"]}>
      {splittedText.map((current, i) => (
        <motion.div
          key={i}
          ref={ref}
          variants={pullupVariant}
          initial="initial"
          animate="animate"
          custom={i}
        >
          {current === " " ? <span>&nbsp;</span> : current}
        </motion.div>
      ))}
    </div>
  );
}
