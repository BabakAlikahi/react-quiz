import React, { useRef } from "react";

function Answer({ answers, selectedAnswer, answerState, onSelect }) {
  const shuffleAnswers = useRef();

  if (!shuffleAnswers.current) {
    shuffleAnswers.current = [...answers];
    shuffleAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul className="mt-6 flex flex-col items-center gap-2">
      {shuffleAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;

        let cssClasses = "";

        if (answerState === "answered" && isSelected) {
          cssClasses = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClasses = answerState;
        }

        return (
          <li key={answer} className="mx-auto w-11/12 text-center">
            <button
              onClick={() => {
                onSelect(answer);
              }}
              className={`answer-btn ${cssClasses}`}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Answer;
