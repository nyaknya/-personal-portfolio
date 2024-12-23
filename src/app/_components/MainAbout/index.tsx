"use client";

import Image from "next/image";
import style from "./MainAbout.module.css";
import IntroduceTab from "../IntroduceTab";

export default function MainAbout() {
  return (
    <section className={`container-middle ${style["main-about"]}`}>
      <h2>introduce Me</h2>
      <div className={style["introduce-box"]}>
        <div className={style["image-box"]}>
          <Image
            src="/images/myimage.png"
            alt="사진"
            width={290}
            height={290}
          />
        </div>
        <IntroduceTab />
      </div>
      <div className={style.history}>
        <h3>이력</h3>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}
