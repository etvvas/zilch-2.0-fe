import React from 'react';
import PlayerVersusPlayer from '../common/PlayerVersusPlayer';
import { useSession } from '../../state/SessionProvider';

const WaitingRoom = ({ results, onReady, ready }) => {
  const session = useSession()
  return (
    <>
      <PlayerVersusPlayer results={results} />
      <button
        className={readyButton}
        onClick={onReady}
        disabled={ready.find((user) => user === session.userId)}
      >{results ? 'Back to Lobby' : 'Ready!'}</button>
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
