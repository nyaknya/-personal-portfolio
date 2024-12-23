"use client";

import Image from "next/image";
import style from "./IntroduceImage.module.css";

export default function IntroduceImage() {
  return (
    <div className={style["image-box"]}>
      <Image src="/images/myimage.png" alt="사진" width={290} height={290} />
    </div>
  );
}
