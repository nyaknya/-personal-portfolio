"use client";

import style from "./BackgroundLine.module.css";

export default function BackgroundLine() {
  return (
    <div className={style["bg-box"]}>
      <span className={style.line}></span>
      <span className={style.line}></span>
      <span className={style.line}></span>
      <span className={style.line}></span>
      <span className={style.line}></span>
      <span className={style.line}></span>
      <span className={style.line}></span>
      <span className={style.line}></span>
      <span className={style.line}></span>
    </div>
  );
}
