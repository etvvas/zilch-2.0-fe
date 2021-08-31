import React, {useContext} from 'react';

import { SocketContext } from '../../state/SocketProvider';

const GameControls = ({gameState, dice, isDisabled, rollDisabled, bankDisabled, isFreeRoll}) => {
console.log(bankDisabled);
const socket = useContext(SocketContext)

// if the sum of the users points < 300, disable bank button
 
const handleRoll = () => {
  socket.emit('ROLL', dice)
}

const handleBank = () => {
  socket.emit('BANK')
}

  return (
    <div className={diceControls}>
      <button 
        disabled={isDisabled || rollDisabled}
        className={button + rollButton}
        onClick={handleRoll}>{isFreeRoll ? 'Free Roll!' : 'Roll'} </button>
      <button 
      disabled={isDisabled || bankDisabled}
      className={button + bankReady}
      onClick={handleBank} 
      >Bank {gameState.firstUser?.roundScore ? gameState.firstUser?.roundScore : gameState.secondUser?.roundScore }</button>
    </div>
  )
}

const button = `
  py-2
  sm:py-4
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

// const bankNotReady = `
//   bg-gray-200
//   border-gray-300
//   text-gray-600
// `;

const bankReady = `
  bg-green-500
  border-green-600
  text-white
`;

// const span = `
//   font-light
//   text-lg
//   tracking-normal
// `;

export default GameControls;
