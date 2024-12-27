"use client";

import Link from "next/link";
import style from "./IntroduceHistory.module.css";
import Image from "next/image";

export default function IntroduceHistory() {
  return (
    <div className={style.history}>
      <h3>이력</h3>
      <div className={style["history-box-wrap"]}>
        <div className={style["history-box"]}>
          <ul>
            <li>
              <strong>2020. 02</strong>
              <p>홍익디자인고등학교 멀티미디어디자인과 졸업 </p>
            </li>
            <li>
              <strong>2020.01 ~ 2020.06</strong>
              <p>스마트기기 UI/UX 웹디자인 (웹퍼블리셔) 교육 수료</p>
            </li>
            <li>
              <strong>
                2020.12 ~ 2021.08 <span>9개월</span>
              </strong>
              <p>
                <b>넛지커뮤니케이션즈</b>
                웹 퍼블리셔 및 웹 디자이너 <br />
                워드프레스/카페24를 활용한 웹사이트, 쇼핑몰 개발
              </p>
            </li>
          </ul>
        </div>
        <div className={style["history-box"]}>
          <ul>
            <li>
              <strong>
                2021.11 ~ 2023.11 <span>2년</span>
              </strong>
              <p>
                <b>
                  여기다여기
                  <Link
                    href="https://diamond-nerve-9e2.notion.site/44dc3f3a136a463e9a9152f4577c15e9?pvs=4"
                    target="_blank "
                  >
                    <Image
                      src="/images/openlink.svg"
                      alt="경력사항 링크 이미지 버튼"
                      width={18}
                      height={18}
                    />
                  </Link>
                </b>
                웹 퍼블리셔 및 웹 디자이너 <br />
                2년 간 다양한 업종의 웹사이트 100개 이상 제작
              </p>
            </li>
            <li>
              <strong>
                2023.11 ~ 2024.05 <span>6개월</span>
              </strong>
              <p>
                <b>코드잇 스프린트 프론트엔드 트랙 3기(부트캠프)</b>
                React, TS, Next.JS 등 프론트엔드 개발에 필요한 <br />
                요소들 학습, 3번의 팀 프로젝트 협업 경험
              </p>
            </li>
          </ul>
        </div>
        <div className={style["history-box"]}>
          <ul>
            <li>
              <strong>
                2024.12 ~ 2025.02 <span>2개월</span>
              </strong>
              <p>
                <b>코드잇 스프린트 프론트엔드 단기심화 6기(부트캠프)</b>
                Tailwind, Jest, CI/CD 등 테스트 코드에 대한 학습
                <br />
                백엔드, 디자이너와의 협업을 통한 프로젝트 및 유지보수
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
