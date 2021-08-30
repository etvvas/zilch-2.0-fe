import React, {useContext, useEffect, useState} from 'react';
import { useSession } from '../../state/SessionProvider';
import { SocketContext } from '../../state/SocketProvider';

const GameControls = ({gameState, currentPlayer}) => {
const [disabled, setDisabled] = useState(true)
const {userId} = useSession()
const socket = useContext(SocketContext)


useEffect(() => {
    if(currentPlayer === userId) setDisabled(false)
    else setDisabled(true)
 }, [currentPlayer])
 

const handleRoll = () => {
  socket.emit('ROLL')
}

const handleBank = () => {
  socket.emit('BANK')
}

  return (
    <div className={diceControls}>
      <button 
        disabled={disabled}
        className={button + rollButton}
        onClick={handleRoll}>Roll</button>
      <button 
      disabled={disabled}
      className={button + bankReady}
      onClick={handleBank} 
      >Bank</button>
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
