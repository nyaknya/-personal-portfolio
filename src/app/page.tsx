"use client";

import Cursor from "./_components/Cursor";
import Header from "./_components/Header";
import MainVisual from "./_components/MainVisual";
import style from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <Cursor />
      <main>
        <MainVisual />
        <div className={style.test}></div>
      </main>
    </>
  );
}
