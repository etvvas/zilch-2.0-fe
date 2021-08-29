import React from 'react';

const GameControls = () => {
  return (
    <div className={diceControls}>
      <button className={button + rollButton}>Roll</button>
      <button className={button + bankReady}>Bank <span className={span}>250</span></button>
    </div>
  )
}

const button = `
  py-4
  text-center
  w-full
  rounded
  border-b-4
  text-lg
  font-bold
  sm:text-2xl
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

const bankReady = `
  bg-green-500
  border-green-600
  text-white
`;

const span = `
  font-light
  text-lg
  tracking-normal
`;

export default GameControls;
