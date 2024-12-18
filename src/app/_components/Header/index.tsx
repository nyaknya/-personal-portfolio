"use client";

import style from "./Header.module.css";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";

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
      <nav>
        <ul>
          <li>
            <Link href="#">Intro</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Project</Link>
          </li>
          <li>
            <Link href="#" className={style.contact}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
