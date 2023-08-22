import React from 'react';

const CountDown = (props) => {
  return (
    <div className="flex flex-col justify-between items-center rounded-lg w-28 p-4 bg-[#000000b3] ">
      <p className={`text-4xl ${props.numbers.length < 3 ? 'w-[2ch]' : ''} `}>
        {props.numbers <= 9 ? `0${props.numbers}` : props.numbers}
      </p>
      <p>{props.name}</p>
    </div>
  );
};

export default CountDown;
