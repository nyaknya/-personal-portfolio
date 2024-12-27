"use client";

import style from "./MainAbout.module.css";
import IntroduceTab from "../IntroduceTab";
import { withHoverCursor } from "@/app/_context/withHoverCursor";
import IntroduceImage from "../IntroduceImage";
import IntroduceHistory from "../IntroduceHistory";

const HoverableImageBox = withHoverCursor(IntroduceImage);
const HoverableTab = withHoverCursor(IntroduceTab);
const HoverbleHistory = withHoverCursor(IntroduceHistory);

export default function MainAbout() {
  return (
    <section className={`container-middle ${style["main-about"]}`}>
      <h2>introduce Me</h2>
      <div className={style["introduce-box"]}>
        <HoverableImageBox />
        <HoverableTab />
      </div>
      <HoverbleHistory />
    </section>
  );
}
