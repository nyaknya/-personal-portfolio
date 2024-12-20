"use client";

import { TextFade } from "../TextFade";
import { TextPullUp } from "../TextPullUp";
import style from "./MainVisual.module.css";

export default function MainVisual() {
  return (
    <section className={style["visual-box"]}>
      <div className="container">
        <h2>
          <TextPullUp>HELLO!</TextPullUp>
          <TextPullUp>I’m Frontend Developer</TextPullUp>
        </h2>
        <div className={style.description}>
          <TextFade direction="down">
            안녕하세요, 프론트엔드 개발자로 준비 중인 심은주입니다.
          </TextFade>
        </div>
        <div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
