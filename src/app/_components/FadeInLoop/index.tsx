"use client";

import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import style from "./FadeInLoop.module.css";

export default function FadeInLoop() {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    autoplay: true,
    autoplaySpeed: 800,
    fade: true,
    arrows: false,
  };

  useEffect(() => {
    if (sliderRef.current) {
      setTimeout(() => {
        sliderRef.current?.slickGoTo(0);
      }, 100);
    }
  }, []);

  return (
    <div className={(style["slide-container"], "main-slide")}>
      <Slider ref={sliderRef} {...settings} className={style.imgbox}>
        <Image
          src="/images/main_react.png"
          alt="리액트 로고"
          width={427}
          height={380}
          className={style["slider-img"]}
        />
        <Image
          src="/images/main_next.png"
          alt="넥스트 로고"
          width={900}
          height={181}
          className={style["slider-img"]}
        />
        <Image
          src="/images/main_ts.png"
          alt="타입스크립트 로고"
          width={335}
          height={335}
          className={style["slider-img"]}
        />
      </Slider>
    </div>
  );
}
