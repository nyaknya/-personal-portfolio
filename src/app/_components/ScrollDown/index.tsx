"use client";

import Image from "next/image";
import style from "./ScrollDown.module.css";

export default function ScrollDown() {
  return (
    <div className={style["scroll-down"]}>
      <span>Scroll Down</span>
      <Image
        src="/images/arrowdown.svg"
        alt="아래 화살표"
        width={23}
        height={18}
      />
    </div>
  );
}
