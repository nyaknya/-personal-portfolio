"use client";

import { TextPullUp } from "../TextPullUp";
import style from "./MainVisual.module.css";

export default function MainVisual() {
  return (
    <section className={style["visual-box"]}>
      <div className="container">
        <h2>
          <TextPullUp text="HELLO!" />
          <TextPullUp text="I’m Frontend Developer" />
        </h2>
        <p>안녕하세요, 프론트엔드 개발자로 준비 중인 심은주입니다.</p>
      </div>
    </section>
  );
}
