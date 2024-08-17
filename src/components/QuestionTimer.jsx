import { useEffect, useState } from "react";

function QuestionTimer({ timeOut, onTimeOut, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeOut);

  useEffect(() => {
    const timer = setTimeout(onTimeOut, timeOut);

    return () => clearTimeout(timer);
  }, [timeOut, onTimeOut]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return <progress value={remainingTime} max={timeOut} className={mode} />;
}

export default QuestionTimer;
