"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import style from "./IntroduceTab.module.css";

export default function IntroduceTab() {
  const [activeTab, setActiveTab] = useState(0);

  const tabVariants = {
    hidden: { opacity: 0, y: 20 }, // 처음에 콘텐츠가 안 보이는 상태
    visible: { opacity: 1, y: 0 }, // 화면에 나타나는 상태
    exit: { opacity: 0, y: -20 }, // 전환 시 사라지는 상태
  };

  return (
    <div className={style["introduce-tab"]}>
      {/* 탭 목록 */}
      <ul className={style["tab-list"]}>
        <li
          className={`${style["tab-item"]} ${
            activeTab === 0 ? style["active"] : ""
          }`}
          onClick={() => setActiveTab(0)}
        >
          왜 프론트엔드인지?
        </li>
        <li
          className={`${style["tab-item"]} ${
            activeTab === 1 ? style["active"] : ""
          }`}
          onClick={() => setActiveTab(1)}
        >
          내용미정 내용미정
        </li>
        <li
          className={`${style["tab-item"]} ${
            activeTab === 2 ? style["active"] : ""
          }`}
          onClick={() => setActiveTab(2)}
        >
          내용미정 내용미정
        </li>
      </ul>

      {/* 탭 콘텐츠 */}
      <motion.div
        key={activeTab} // `key`가 바뀔 때마다 새롭게 마운트
        className={style["tab-content"]}
        variants={tabVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.5 }} // 애니메이션 속도 조정
      >
        {activeTab === 0 && (
          <div>
            <h3>Q. 왜 프론트엔드인지?</h3>
            <p>
              디자이너 · 퍼블리셔로 웹 세계에 발을 들이고 시간이 지나
              디자이너라는 직업에 대해 자신감을 잃어갔습니다. 차라리 퍼블리셔로,
              나아가 프론트엔드 개발자로 성장하고 싶다는 결심이 들어 개발 공부
              및 준비를 시작했습니다. 코드란 ‘보여지는 것’. 즉 비주얼과 가장
              멀어보이는데, 텍스트로 화면을 표현해낸다는 점에서 프론트엔드에 큰
              흥미를 느낍니다. 일에 있어서는 책임과 소통을 가장 중요하게
              생각합니다. 열린 마음으로 뭐든 시도하고 받아들이는 개발자가
              되겠습니다!
            </p>
          </div>
        )}
        {activeTab === 1 && (
          <div>
            <h3>내용미정 내용미정</h3>
            <p>
              내용미정 내용미정 내용미정 내용미정 내용미정 내용미정 내용미정
              내용미정 내용미정 내용미정 내용미정 내용미정 내용미정 내용미정
              내용미정 내용미정 내용미정 내용미정 내용미정 내용미정 내용미정
              내용미정 내용미정
            </p>
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <h3>내용미정 내용미정</h3>
            <p>
              내용미정 내용미정 내용미정 내용미정 내용미정 내용미정 내용미정
              내용미정 내용미정 내용미정 내용미정 내용미정 내용미정 내용미정
              내용미정 내용미정 내용미정 내용미정 내용미정 내용미정 내용미정
              내용미정 내용미정
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
