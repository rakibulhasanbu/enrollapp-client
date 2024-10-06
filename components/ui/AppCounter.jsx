import { useEffect, useState, useCallback } from "react";

function CountdownTimer({ registrationDeadline }) {
  const calculateTimeLeft = useCallback(() => {
    const difference = +new Date(registrationDeadline) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }, [registrationDeadline]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const formatTimeLeft = () => {
    const { days, hours, minutes, seconds } = timeLeft;

    return `${days ? `${days}d ` : ""}${hours ? `${hours}h ` : ""}${
      minutes ? `${minutes}min ` : ""
    }${seconds ? `${seconds}s` : ""}`.trim();
  };

  return (
    <h2 className="border-2 font-medium border-borderColor rounded-md md:text-3xl p-4 md:p-6 text-center md:font-medium">
      <span>Time Left:</span>{" "}
      <span style={{ whiteSpace: "nowrap" }}>
        {formatTimeLeft() || <span>Time&aposs up!</span>}
      </span>
    </h2>
  );
}

export default CountdownTimer;
