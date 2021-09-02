import React from 'react';
import { useHistory } from 'react-router-dom';
import PlayerVersusPlayer from '../common/PlayerVersusPlayer';
import Results from './Results';

const ResultsPage = ({results, socket, user1, user2, room, winner}) => {
  const history = useHistory()

  const handleBackToLobby = () => {
    history.push('/lobby')
    socket.emit('DISCONNECT')
  }
  console.log('winner', winner)
  return (
    <>
      <div className={outer}>
        <div className={wrap}>
          <div className={resultsPage}>
            <PlayerVersusPlayer results={results} user1={user1} user2={user2} room={room} winner={winner}/>
            <Results user1={user1} user2={user2}/>
            <button className={readyButton} onClick={handleBackToLobby}>{results ? 'Back to Lobby' : 'Ready!'}</button>
          </div>
        </div>
      </div>
      
    </>
  )
}


const outer = `
  flex
  flex-col
  sm:px-4
  w-full
  results
`;

const wrap = `
  max-w-screen-sm
  sm:mx-auto
  bg-white
  rounded-xl
  p-4
  sm:my-12
  sm:p-12
  w-full
`;

const resultsPage = `
  bg-white
`;

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

export default ResultsPage;
