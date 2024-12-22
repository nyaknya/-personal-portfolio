"use client";

import Image from "next/image";
import IconTooltip from "../IconTooltip";
import { TextFade } from "../TextFade";
import { TextPullUp } from "../TextPullUp";
import style from "./MainVisual.module.css";
import Link from "next/link";
import FadeInLoop from "../FadeInLoop";
import ScrollDown from "../ScrollDown";

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
        <TextFade direction="down">
          <ul>
            <li>
              <IconTooltip tooltip="GitHub">
                <Link href="https://github.com/nyaknya" target="_blank">
                  <Image
                    src="/images/github.png"
                    alt="깃허브 바로가기"
                    width={46}
                    height={46}
                  />
                </Link>
              </IconTooltip>
            </li>
            <li>
              <IconTooltip tooltip="이력서 PDF">
                <Image
                  src="/images/profile.png"
                  alt="이력서 띄우기"
                  width={46}
                  height={46}
                />
              </IconTooltip>
            </li>
            <li>
              <IconTooltip tooltip="sim784442@gmail.com">
                <Link href="mailto:sim784442@gmail.com">
                  <Image
                    src="/images/email.png"
                    alt="이메일"
                    width={46}
                    height={46}
                  />
                </Link>
              </IconTooltip>
            </li>
            <li>
              <IconTooltip tooltip="벨로그 바로가기">
                <Link href="https://velog.io/@nyaknya/posts" target="_blank">
                  <Image
                    src="/images/velog.png"
                    alt="벨로그 바로가기"
                    width={46}
                    height={46}
                  />
                </Link>
              </IconTooltip>
            </li>
          </ul>
        </TextFade>
        <ScrollDown />
      </div>
      <div className={style["fade-anibox"]}>
        <FadeInLoop />
      </div>
    </section>
  );
}
