import Cursor from "./_components/Cursor";
import Header from "./_components/Header";
import style from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <Cursor />
      <main>
        <div className={style.test}></div>
      </main>
    </>
  );
}
