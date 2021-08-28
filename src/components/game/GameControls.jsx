import React from 'react';

const GameControls = () => {
  return (
    <div className={diceControls}>
      <button className={button + rollButton}>Roll</button>
      <button className={button + bankButton}>Bank</button>
    </div>
  )
}

const button = `
  py-4
  text-center
  w-full
  rounded
  border-b-4
  text-2xl
  font-bold
  tracking-widest
`;

const diceControls = `
  flex
  flex-row
  gap-4
  my-4
`;

const rollButton = `
  bg-indigo-500
  border-indigo-600
  text-white
`;

const bankButton = `
  bg-green-500
  border-green-600
  text-white
`;

export default GameControls;
