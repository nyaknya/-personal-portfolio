"use client";
import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

export function TextFade({
  direction,
  children,
  className = "",
  staggerChildren = 0.1,
}: {
  direction: "up" | "down";
  children: ReactNode;
  className?: string;
  staggerChildren?: number;
}) {
  const FADE_DOWN = {
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
    hidden: { opacity: 0, y: direction === "down" ? -18 : 18 },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : ""}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren,
          },
        },
      }}
      className={className}
    >
      <motion.div variants={FADE_DOWN}>{children}</motion.div>
    </motion.div>
  );
}
