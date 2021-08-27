import React from 'react';

const Dice = () => {

  return (
    <div className={diceDisplay}>
      <i className={die + 'fa-dice-one'}></i>
      <i className={die + 'fa-dice-two'}></i>
      <i className={die + 'fa-dice-three'}></i>
      <i className={die + 'fa-dice-four'}></i>
      <i className={die + 'fa-dice-five'}></i>
      <i className={die + 'fa-dice-six'}></i>
    </div>
  )
}

const diceDisplay = `
  flex
  justify-center
  my-4
  gap-1

  sm:gap-4
  sm:justify-between
  xs:gap-2
`;

const die = `
  fas
  text-6xl
  text-gray-700

  sm:text-8xl
`;


export default Dice;
