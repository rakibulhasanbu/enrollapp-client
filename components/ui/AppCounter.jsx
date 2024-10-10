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

  // Updated flip card style for single digits per box
  const renderFlipCard = (value) => (
    <div className="relative p-2 w-12 h-12 bg-gray-900 text-white text-3xl font-bold flex justify-center items-center ">
      <span>{value.toString().padStart(2, "0")}</span>
    </div>
  );

  return (
    <div className="flex justify-center bg-blue-200 py-2 items-center space-x-3">
      {/* Days */}
      <div className="flex flex-col items-center">
        {renderFlipCard(timeLeft.days || 0)}
        <span className="text-sm mt-2 text-gray-700 font-bold">DAYS</span>
      </div>

      {/* Separator */}
      <span className="text-3xl font-bold text-gray-700">:</span>

      {/* Hours */}
      <div className="flex flex-col items-center">
        {renderFlipCard(timeLeft.hours || 0)}
        <span className="text-sm mt-2 text-gray-700 font-bold">HRS</span>
      </div>

      {/* Separator */}
      <span className="text-3xl font-bold text-gray-700">:</span>

      {/* Minutes */}
      <div className="flex flex-col items-center">
        {renderFlipCard(timeLeft.minutes || 0)}
        <span className="text-sm mt-2 text-gray-700 font-bold">MINS</span>
      </div>

      {/* Separator */}
      <span className="text-3xl font-bold text-gray-700">:</span>

      {/* Seconds */}
      <div className="flex flex-col items-center">
        {renderFlipCard(timeLeft.seconds || 0)}
        <span className="text-sm mt-2 text-gray-700 font-bold">SECS</span>
      </div>
    </div>
  );
}

export default CountdownTimer;
