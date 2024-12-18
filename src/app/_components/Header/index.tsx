"use client";

import style from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={style.header}>
      <h1>
        <Image src="/images/logo.svg" alt="로고" width={70} height={62} />
      </h1>
    </header>
  );
}
