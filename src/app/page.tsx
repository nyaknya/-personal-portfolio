import Header from "./_components/Header";
import style from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className={style.test}></div>
      </main>
    </>
  );
}
