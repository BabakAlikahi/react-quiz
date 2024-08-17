import { useCallback, useRef, useState } from "react";

import QUESTIONS from "../questions";

import Question from "./Question";
import QuizComplete from "../assets/quiz-complete.png";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizComplete = activeQuestionIndex === QUESTIONS.length;

  const handelSelectAnswer = useCallback(
    function handelSelectAnswer(selectedAnswer) {
      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
      });
    },

    [],
  );

  const handelSkipAnswer = useCallback(() => {
    handelSelectAnswer(null);
  }, []);
  if (quizComplete) {
    return (
      <div id="summary">
        <img src={QuizComplete} alt="Quiz complete" />
        <h2>quiz complete</h2>
      </div>
    );
  }

  return (
    <div
      className="mx-auto w-11/12 rounded-lg p-8 text-center lg:w-1/2"
      id="quiz"
    >
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handelSelectAnswer}
        handelSkipAnswer={handelSkipAnswer}
      />
    </div>
  );
}

export default Quiz;
