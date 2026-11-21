import { useState } from "react";
import { shuffled, type Question } from "./quiz";

export default function QuestionFields({ question }: { question: Question }) {
  const [options] = useState(() =>
    question.type === "short_answer" ? [] : shuffled(question.options),
  );

  if (question.type === "short_answer") {
    return (
      <p>
        <label htmlFor={`${question.id}-answer`}>Ваш ответ: </label>
        <input type="text" name={question.id} id={`${question.id}-answer`} autoComplete="off" />
      </p>
    );
  }

  return options.map((option) => {
    const inputId = `${question.id}-${option.id}`;
    return (
      <p key={option.id}>
        <input
          type={question.type === "multiple_choice" ? "checkbox" : "radio"}
          name={question.id}
          id={inputId}
          value={option.id}
        />{" "}
        <label htmlFor={inputId}>{option.text}</label>
      </p>
    );
  });
}
