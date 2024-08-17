import { useCallback, useRef, useState } from "react";

import QUESTIONS from "../questions";

import Question from "./Question";
import QuizComplete from "../assets/quiz-complete.png";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState("");
  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const quizComplete = activeQuestionIndex === QUESTIONS.length;

  const handelSelectAnswer = useCallback(
    function handelSelectAnswer(selectedAnswer) {
      setAnswerState("answered");
      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
      });
      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }
      }, 1000);

      setTimeout(() => {
        setAnswerState("");
      }, 2000);
    },
    [activeQuestionIndex],
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
        questionText={QUESTIONS[activeQuestionIndex].text}
        answers={QUESTIONS[activeQuestionIndex].answers}
        answerState={answerState}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        onSelectAnswer={handelSelectAnswer}
        handelSkipAnswer={handelSkipAnswer}
      />
    </div>
  );
}

export default Quiz;
