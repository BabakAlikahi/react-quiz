import QuizComplete from "../assets/quiz-complete.png";
import QUESTION from "../questions";

function Summery({ userAnswers }) {
  const skippedAnswer = userAnswers.filter((answer) => answer === null);
  const correctAnswer = userAnswers.filter(
    (answer, index) => answer === QUESTION[index].answers[0],
  );

  const skippedAnswerShared = Math.round(
    (skippedAnswer.length / userAnswers.length) * 100,
  );
  const correctAnswerShared = Math.round(
    (correctAnswer.length / userAnswers.length) * 100,
  );

  const inCorrectAnswerShared = 100 - skippedAnswerShared - correctAnswerShared;

  return (
    <div id="summary">
      <img src={QuizComplete} alt="QuizComplete" />
      <h2>Quiz Complete</h2>
      <div
        id="summery-status"
        className="mt-4 w-full justify-center gap-6 lg:flex"
      >
        <p className="flex flex-col items-center gap-3">
          <span className="number text-4xl font-bold text-slate-950">
            {skippedAnswerShared}%
          </span>
          <span className="text">skipped</span>
        </p>
        <p className="flex flex-col items-center gap-3">
          <span className="number text-4xl font-bold text-slate-950">
            {correctAnswerShared}%
          </span>
          <span className="text">answered correctly</span>
        </p>
        <p className="flex flex-col items-center gap-3">
          <span className="number text-4xl font-bold text-slate-950">
            {inCorrectAnswerShared}%
          </span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>

      <ul>
        {userAnswers.map((answer, index) => {
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTION[index].text}</p>
              <p className="user-answer">{answer ?? "skipped"}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Summery;
