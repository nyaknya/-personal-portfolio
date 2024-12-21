"use client";

import Image from "next/image";
import styles from "./FadeInLoop.module.css";

interface FadeInLoopProps {
  images: string[];
}

export default function FadeInLoop({ images }: FadeInLoopProps) {
  const duration = images.length * 2;

  return (
    <div className={styles.container}>
      {images.map((src, index) => (
        <div
          key={index}
          className={styles.imgbox}
          style={{
            animationDelay: `${index * (duration / images.length)}s`,
            animationDuration: `${duration}s`,
          }}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
