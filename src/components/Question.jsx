import Answer from "./Answer";
import QuestionTimer from "./QuestionTimer";

function Question({
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
  handelSkipAnswer,
}) {
  return (
    <>
      <QuestionTimer timeOut={10000} onTimeOut={handelSkipAnswer} />
      <h2 className="mx-1 my-2 text-2xl text-slate-300">{questionText}</h2>
      <Answer
        answerState={answerState}
        answers={answers}
        selectedAnswer={selectedAnswer}
        onSelect={onSelectAnswer}
      />
    </>
  );
}

export default Question;
