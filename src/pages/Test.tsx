import { useEffect, useRef, useState, type FormEvent } from "react";
import QuestionFields from "../QuestionFields";
import { grade, isComplete, isCorrect, questions, readAnswer } from "../quiz";

const blocks = [
  { id: 1, title: "Краткий ответ", instruction: "Введите ответ в поле под вопросом." },
  { id: 2, title: "Выбор нескольких ответов", instruction: "Отметьте все верные варианты." },
  { id: 3, title: "Вопросы на поиск ошибки", instruction: "Отметьте один вариант, который отвечает условию вопроса." },
  { id: 4, title: "Выбор одного ответа", instruction: "В каждом вопросе отметьте один верный вариант." },
];

export default function Test() {
  const form = useRef<HTMLFormElement>(null);
  const warning = useRef<HTMLParagraphElement>(null);
  const result = useRef<HTMLElement>(null);
  const [attempt, setAttempt] = useState(0);
  const [missing, setMissing] = useState(0);
  const [answers, setAnswers] = useState<FormData | null>(null);
  const score =
    answers === null ? null : questions.filter((q) => isCorrect(q, readAnswer(q, answers))).length;

  useEffect(() => {
    if (score !== null) result.current?.focus();
  }, [score]);
  useEffect(() => {
    if (missing > 0) warning.current?.focus();
  }, [missing]);
  useEffect(() => {
    if (attempt > 0) form.current?.querySelector("input")?.focus();
  }, [attempt]);

  function finish(allowMissing = false) {
    if (answers || !form.current) return;
    const data = new FormData(form.current);
    const count = questions.filter((q) => !isComplete(readAnswer(q, data))).length;
    if (count && !allowMissing) {
      setMissing(count);
      return;
    }
    setMissing(0);
    setAnswers(data);
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    finish();
  }

  return (
    <>
      <h1>Итоговый тест</h1>
      <p>
        Тест содержит {questions.length} вопросов в четырёх блоках. За полностью правильный ответ
        начисляется 1 балл. В блоке с несколькими ответами нужно отметить все верные варианты.
      </p>
      <p>
        Оценки: 27–30 — «Отлично», 23–26 — «Хорошо», 18–22 — «Удовлетворительно», 0–17 —
        «Неудовлетворительно». После проверки появятся объяснения и ссылки на материалы. Ответы
        остаются на странице до новой попытки. Между посещениями они не сохраняются.
      </p>
      <form
        id="test-form"
        ref={form}
        noValidate
        onSubmit={submit}
        onInput={() => setMissing(0)}
        onChange={() => setMissing(0)}
      >
        <div id="questions" key={attempt}>
          {blocks.map((block) => (
            <section key={block.id} aria-labelledby={`block-${block.id}`}>
              <h2 id={`block-${block.id}`}>{block.title}</h2>
              <p>{block.instruction}</p>
              {questions.filter((question) => question.block === block.id).map((question) => (
                <fieldset
                  key={question.id}
                  id={`q-${question.id}`}
                  data-question-id={question.id}
                  disabled={answers !== null}
                  aria-describedby={answers ? `feedback-${question.id}` : undefined}
                >
                  <legend>{question.id}. {question.prompt}</legend>
                  <QuestionFields question={question} />
                  {answers && (
                    <p id={`feedback-${question.id}`} className="feedback">
                      <strong>
                        {isCorrect(question, readAnswer(question, answers)) ? "Правильно. " : "Неправильно. "}
                      </strong>
                      {question.explanation} <a href={question.source}>К материалу курса</a>
                    </p>
                  )}
                </fieldset>
              ))}
            </section>
          ))}
        </div>
        <p id="unanswered-warning" ref={warning} role="alert" tabIndex={-1} hidden={!missing}>
          {missing > 0 &&
            `Осталось без ответа ${missing} из ${questions.length} вопросов. Заполните их или завершите тест с пропусками. За такие вопросы начисляется 0 баллов.`}
        </p>
        <button id="check-test" type="submit" disabled={answers !== null}>
          Проверить ответы
        </button>{" "}
        <button id="finish-incomplete" type="button" hidden={!missing} onClick={() => finish(true)}>
          Завершить с пропусками
        </button>
      </form>
      <section
        id="result"
        ref={result}
        aria-live="polite"
        aria-labelledby="result-heading"
        tabIndex={-1}
        hidden={score === null}
      >
        <h2 id="result-heading">Результат</h2>
        <p id="result-summary">
          {score !== null &&
            `Правильных ответов ${score} из ${questions.length} (${((score / questions.length) * 100).toFixed(1).replace(".", ",")} %). Оценка «${grade(score)}».`}
        </p>
      </section>
      <button
        id="retry-test"
        type="button"
        hidden={answers === null}
        onClick={() => {
          setAnswers(null);
          setMissing(0);
          setAttempt(attempt + 1);
        }}
      >
        Пройти заново
      </button>
      <p>
        <a href="?page=practice-3">Назад к практике 3</a> · <a href="?page=home">На главную</a>
      </p>
    </>
  );
}
