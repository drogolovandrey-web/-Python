import bank from "./questions.json";

type Item = { id: string; text: string };
type BaseQuestion = {
  id: string;
  block: number;
  prompt: string;
  explanation: string;
  source: string;
};

export type Question = BaseQuestion &
  (
    | { type: "short_answer"; answer: string[] }
    | { type: "single_choice"; options: Item[]; answer: string }
    | { type: "multiple_choice"; options: Item[]; answer: string[] }
  );

type Answer = string | string[];
export const questions = bank as Question[];

function normalize(value: string) {
  return value.trim().replace(/\s+/g, " ").toLowerCase();
}

export function grade(score: number) {
  if (score >= 27) return "Отлично";
  if (score >= 23) return "Хорошо";
  if (score >= 18) return "Удовлетворительно";
  return "Неудовлетворительно";
}

export function isCorrect(question: Question, answer: Answer) {
  if (question.type === "multiple_choice") {
    return (
      Array.isArray(answer) &&
      answer.length === question.answer.length &&
      question.answer.every((id) => answer.includes(id))
    );
  }
  if (typeof answer !== "string") return false;
  if (question.type === "single_choice") return answer === question.answer;
  return question.answer.some((accepted) => normalize(answer) === normalize(accepted));
}

export function readAnswer(question: Question, data: FormData): Answer {
  if (question.type === "multiple_choice") return data.getAll(question.id).map(String);
  return String(data.get(question.id) ?? "");
}

export function isComplete(answer: Answer) {
  return typeof answer === "string" ? normalize(answer) !== "" : answer.length > 0;
}

export function shuffled<T>(items: T[]): T[] {
  const result = [...items];

  for (let index = result.length - 1; index > 0; index--) {
    const other = Math.floor(Math.random() * (index + 1));
    [result[index], result[other]] = [result[other], result[index]];
  }

  return result;
}
