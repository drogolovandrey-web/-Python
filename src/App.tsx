import { Fragment, useLayoutEffect } from "react";
import Home from "./pages/Home";
import Lecture1 from "./pages/Lecture1";
import Lecture2 from "./pages/Lecture2";
import Lecture3 from "./pages/Lecture3";
import Practice1 from "./pages/Practice1";
import Practice2 from "./pages/Practice2";
import Practice3 from "./pages/Practice3";
import Test from "./pages/Test";

const pages = [
  { id: "home", title: "Главная", component: Home },
  { id: "lecture-1", title: "Лекция 1", component: Lecture1 },
  { id: "practice-1", title: "Практика 1", component: Practice1 },
  { id: "lecture-2", title: "Лекция 2", component: Lecture2 },
  { id: "practice-2", title: "Практика 2", component: Practice2 },
  { id: "lecture-3", title: "Лекция 3", component: Lecture3 },
  { id: "practice-3", title: "Практика 3", component: Practice3 },
  { id: "test", title: "Тест", component: Test },
];

export default function App() {
  const pageId = new URLSearchParams(window.location.search).get("page") ?? "home";
  const page = pages.find((item) => item.id === pageId);

  useLayoutEffect(() => {
    const anchor = window.location.hash.slice(1);
    if (anchor) document.getElementById(anchor)?.scrollIntoView();
  }, []);

  if (!page)
    return (
      <main>
        <h1>Страница не найдена</h1>
        <a href="?page=home">На главную</a>
      </main>
    );

  const Page = page.component;

  return (
    <>
      <nav aria-label="Материалы курса">
        {pages.map((item, index) => (
          <Fragment key={item.id}>
            {index > 0 && " | "}
            <a href={`?page=${item.id}`} aria-current={item.id === page.id ? "page" : undefined}>
              {item.title}
            </a>
          </Fragment>
        ))}
      </nav>

      <main>
        <Page />
      </main>
    </>
  );
}
