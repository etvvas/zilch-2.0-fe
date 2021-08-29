import React, { useEffect } from 'react';
import { useSession } from '../../state/SessionProvider';

const GameControls = ({gameState}) => {

const session = useSession()
let disabled;
if(gameState.currentPlayerIndex) gameState.players[gameState.currentPlayerIndex] !== session.userId ? disabled = true : disabled = false
// ({players, currentPlayerIndex}, {userId}) => {
//   console.log(players, currentPlayerIndex, userId);
//   if(players[currentPlayerIndex] !== userId) {
//     return true
//   }
//   return false
// }
// useEffect(() => {
//   if(gameState) console.log(isDisabled(gameState, session)); 
// }, [gameState])
  return (
    <div className={diceControls}>
      <button 
        disabled={disabled}
        className={button + rollButton
        }>Roll</button>
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
  text-lg
  font-semibold
  tracking-wider
  uppercase
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
