import type { ReactNode } from "react";

type CoursePageProps = {
  title: string;
  sections: { id: string; title: string }[];
  previous: string;
  next: string;
  goal?: ReactNode;
  children: ReactNode;
};

export default function CoursePage({
  title,
  sections,
  previous,
  next,
  goal,
  children,
}: CoursePageProps) {
  return (
    <>
      <h1>{title}</h1>
      <nav aria-label="Оглавление">
        <p>Содержание</p>
        <ul>
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`}>{section.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      {goal && (
        <p className="practice-goal">
          <strong>Цель работы</strong>
          {goal}
        </p>
      )}
      {children}
      <nav aria-label="Переходы по курсу">
        <a href={`?page=${previous}`}>← Назад</a> · <a href="?page=home">На главную</a> ·{" "}
        <a href={`?page=${next}`}>Далее →</a>
      </nav>
    </>
  );
}
