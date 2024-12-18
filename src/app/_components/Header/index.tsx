"use client";

import style from "./Header.module.css";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

export default function Header() {
  const { scrollYProgress } = useScroll();

  return (
    <header className={style.header}>
      <motion.div
        className={style.progress}
        style={{
          scaleX: scrollYProgress,
        }}
      ></motion.div>
      <h1>
        <Image src="/images/logo.svg" alt="로고" width={70} height={62} />
      </h1>
    </header>
  );
}
