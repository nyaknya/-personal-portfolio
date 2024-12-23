"use client";

import BackgroundLine from "./_components/BackgroundLine";
import Cursor from "./_components/Cursor";
import Header from "./_components/Header";
import MainAbout from "./_components/MainAbout";
import MainVisual from "./_components/MainVisual";
import { CursorProvider } from "./_context/CursorContext";

export default function Home() {
  return (
    <CursorProvider>
      <Header />
      <Cursor />
      <main>
        <MainVisual />
        <MainAbout />
      </main>
      <BackgroundLine />
    </CursorProvider>
  );
}
