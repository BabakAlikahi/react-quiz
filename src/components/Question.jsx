import { useState } from "react";
import Answer from "./Answer";
import QuestionTimer from "./QuestionTimer";
import QUESTION from "../questions";
function Question({
  index,

  onSelectAnswer,
  handelSkipAnswer,
}) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = "10000";
  if (answer.selectedAnswer) {
    timer = "1000";
  }

  if (answer.isCorrect) {
    timer = "2000";
  }

  function handelSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTION[index].answers[0] === answer,
      });
    }, 1000);

    setTimeout(() => {
      onSelectAnswer(answer);
    }, 2000);
  }

  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }
  return (
    <>
      <QuestionTimer
        key={timer}
        timeOut={timer}
        onTimeOut={answer.selectedAnswer===""?  handelSkipAnswer : null}
        mode={answerState}
      />
      <h2 className="mx-1 my-2 text-2xl text-slate-300">
        {QUESTION[index].text}
      </h2>
      <Answer
        answerState={answerState}
        answers={QUESTION[index].answers}
        selectedAnswer={answer.selectedAnswer}
        onSelect={handelSelectAnswer}
      />
    </>
  );
}

export default Question;
