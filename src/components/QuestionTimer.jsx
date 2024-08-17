import { useEffect, useState } from "react";

function QuestionTimer({ timeOut, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(timeOut);

  useEffect(() => {
    setTimeout(onTimeOut, timeOut);
  }, [timeOut, onTimeOut]);

  useEffect(() => {
    setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  }, []);

  return <progress value={remainingTime} max={timeOut} />;
}

export default QuestionTimer;
