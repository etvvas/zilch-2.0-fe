import React from 'react';
import PlayerVersusPlayer from '../common/PlayerVersusPlayer';
import { useSession } from '../../state/SessionProvider';

const WaitingRoom = ({ results, onReady, ready, user1, user2, room }) => {
  const session = useSession()
  return (
    <>
      <PlayerVersusPlayer results={results} user1={user1} user2={user2} room={room} />
      <button
        className={readyButton}
        onClick={onReady}
        disabled={ready.find((user) => user === session.userId)}
      >{results ? 'Back to Lobby' : 'Ready!'}</button>
      <div className={readyMessage}>
        {!results  
            ? 'Game will start when both players are ready.'
            : null
        }
      </div>
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

const readyMessage = `
  text-center
  text-sm
  text-gray-700
  italic
  mt-8
`;

export default WaitingRoom;
