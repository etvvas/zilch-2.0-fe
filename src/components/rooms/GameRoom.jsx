import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import ActiveScoreboard from '../game/ActiveScoreboard';
// import Dice from '../game/Dice';
// import GameControls from '../game/GameControls';
// import PlayerProgress from '../game/PlayerProgress';
import Rules from '../game/Rules';
import Scoring from '../game/Scoring';
// import ScoringOptions from '../game/ScoringOptions';
import ResultsPage from '../results/ResultsPage';
import WaitingRoom from './WaitingRoom';

const GameRoom = () => {
  // const { room } = useParams();
  const [results, setResults] = useState(true);
  const history = useHistory();
  
  // can remove this after game logic is complete
  const room = 'room1'
  const gameState = {
    room1: {
      ready: ['1', '2'],
      currentPlayerIndex: 0,
      players: ['1', '2'],
      roomName: 'Room2',
      rounds: 1,
      targetScore: 5000,
      firstUser: {
        userName: 'user1',
        userId: '1',
        avatar: 'bear',
        gameId: '78',
        numberOfRounds: 1,
        playerScore: 100,
        roundScore: 50,
        playerZilches: 3,
        playerUberZilches: 1
      }, 
      secondUser: {
        userName: 'user2',
        userId: '2',
        avatar: 'polar-bear',
        gameId: '78',
        numberOfRounds: 2,
        playerScore: 1000,
        roundScore: 200,
        playerZilches: 6,
        playerUberZilches: 2
      }, 
    }
  }

  useEffect (() => {
    //CHANGE HERE FOR TESTING - this can be removed after game logic is complete
    setResults(true);
  }, [])

  const handleResultsClick = () => {
    history.push('/lobby');
  }

  return (
    <div className={main}>

      <div className={wrap}>

        {!results ? <WaitingRoom results={results} user1={gameState[room].firstUser} user2={gameState[room].secondUser} room={room}/> : null}

        {/* <PlayerProgress />
        <ActiveScoreboard />
        <Dice />
        <GameControls />
        <ScoringOptions /> */}
      
      {results ? <ResultsPage results={results} user1={gameState[room].firstUser} user2={gameState[room].secondUser} room={room} onResultsClick={handleResultsClick}/> : null}
      
      </div>

      <div className={footer}>
        <Rules />
        <Scoring />
        <button className={button}>Leave</button>
      </div>

    </div>
  )
}

const main = `
  relative
  flex
  flex-col
  items-center
`;

const wrap = `
  max-w-screen-sm
  w-full
  mx-auto
  p-4
  bg-white
  h-full
  sm:rounded-lg
  sm:my-8
  sm:p-12
`;

const footer = `
  max-w-screen-sm
  flex
  flex-row
  gap-2
  sm:gap-4
  justify-center
`;

const button = `
  text-indigo-500
  bg-gray-100
  sm:bg-purple-400
  sm:bg-opacity-50
  sm:text-white
  rounded-full
  py-1
  px-8
  my-4
  w-max
`;

export default GameRoom;
