import React from 'react';

const Dice = () => {

  return (
    <div className={diceDisplay}>
      <i className={die + 'fa-dice-one roll'}></i>
      <i className={die + 'fa-dice-two roll'}></i>
      <i className={die + 'fa-dice-three roll'}></i>
      <i className={die + 'fa-dice-four roll'}></i>
      <i className={die + 'fa-dice-five roll'}></i>
      <i className={die + 'fa-dice-six roll'}></i>
    </div>
  )
}

const diceDisplay = `
  flex
  justify-between
  my-4
  gap-1
  
  sm:gap-4
`;

const die = `
  fas
  text-5xl
  text-gray-700
  sm:text-8xl
`;


export default Dice;
