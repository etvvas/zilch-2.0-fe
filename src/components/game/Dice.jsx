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
  gap-2
  justify-between
  my-4
`;

const die = `
  fas
  text-6xl
  text-gray-700
`;


export default Dice;
