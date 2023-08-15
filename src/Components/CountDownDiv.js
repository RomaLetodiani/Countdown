import React, { useEffect, useState } from 'react';
import CountDown from './CountDown';

const CountDownDiv = (props) => {
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const newYearCounter = () => {
      const now = new Date();

      const newYearDate = new Date(props.newYear, 0, 1);

      const timeDiff = newYearDate - now;

      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

      setRemainingTime({ days, hours, minutes, seconds });
    };

    const interval = setInterval(newYearCounter, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [props.newYear]);

  return (
    <div className="flex flex-wrap gap-10 justify-center items-center">
      <CountDown numbers={remainingTime.days} name={'Days'} />
      <CountDown numbers={remainingTime.hours} name={'Hours'} />
      <CountDown numbers={remainingTime.minutes} name={'Minutes'} />
      <CountDown numbers={remainingTime.seconds} name={'Seconds'} />
    </div>
  );
};

export default CountDownDiv;
