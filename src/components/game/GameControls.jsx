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
      <button className={button + rollButton}>Roll</button>
      <button className={button + bankReady} disabled>Bank <span className={span}>250</span></button>
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

const span = `
  font-light
  text-lg
  tracking-normal
`;

export default GameControls;
