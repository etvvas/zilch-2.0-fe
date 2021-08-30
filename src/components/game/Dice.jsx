import React from 'react';
import { wordify } from '../../utils/dice.js';

const Dice = ({dice}) => {
  const diceElements = dice.map((eachDie, i) => {
    return <i key={i} className={die + `fa-dice-${wordify(eachDie)} roll + ${eachDie.held ? held : null }`}></i>
  })

  return(
    <div className={diceDisplay}>
      {diceElements}
    </div>
  )
}

const diceDisplay = `
  flex
  justify-around
  my-4
  gap-1
  sm:gap-4
  sm:justify-between
`;

const die = `
  fas
  text-5xl
  text-gray-700
  sm:text-7xl
`;

const held = `
text-blue-400
`;

export default Dice;

// original code for reference
//  <i className={die + 'fa-dice-one roll'}></i>
// <i className={die + 'fa-dice-two roll'}></i>
// <i className={die + 'fa-dice-three roll' + held}></i>
// <i className={die + 'fa-dice-four roll'}></i>
// <i className={die + 'fa-dice-five roll' + held}></i>
// <i className={die + 'fa-dice-six roll'}></i> 
