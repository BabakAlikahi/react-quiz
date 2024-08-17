import { useState } from "react";
import QUESTIONS from "../questions";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  function handelSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }

  return (
    <div
      className="mx-auto w-11/12 rounded-lg p-8 text-center lg:w-1/2"
      id="quiz"
    >
      <h2 className="mx-1 my-2 text-2xl text-slate-300">
        {QUESTIONS[activeQuestionIndex].text}
      </h2>
      <ul className="mt-6 flex flex-col items-center gap-2">
        {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
          <li key={answer} className="mx-auto w-11/12 text-center">
            <button
              onClick={() => {
                handelSelectAnswer(answer);
              }}
              className="focus::text-white w-full rounded-3xl border-none bg-blue-300 px-8 py-4 text-xs text-slate-950 transition-all hover:bg-purple-800 hover:text-white focus:bg-purple-800"
            >
              {answer}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Quiz;
