import React from 'react';
import PlayerVersusPlayer from '../common/PlayerVersusPlayer';

const WaitingRoom = ({results}) => {
  return(
    <>
      <PlayerVersusPlayer results={results} />
      <button className={readyButton}>{results ? 'Back to Lobby' : 'Ready!'}</button>
    </>
    
  )
}

const readyButton = `
  py-2
  px-10
  block
  mx-auto
  my-4
  text-center
  text-lg
  text-white
  font-bold
  w-full
  rounded
  bg-indigo-500
  border-b-4
  border-indigo-600
  w-max
  sm:py-4
  sm:text-2xl
  hover:bg-indigo-600
  hover:border-indigo-700
`;

export default WaitingRoom;
