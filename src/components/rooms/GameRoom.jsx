import React, { useEffect, useState } from 'react';
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
  const [results, setResults] = useState(true);
  
  //CHANGE HERE FOR TESTING
  setResults(false);
  
  const [user1, setUser1] = useState({
    userId: '1',
    userName: "PlAyEr 1",
    avatar: 'dog',
    gameId: '1',
    numberOfRounds: 10,
    playerScore: 3000,
    playerZilches: 3,
    playerUberZilches: 1
  });
  const [user2, setUser2] = useState({
    userId: '2',
    userName: "pLaYeR 2",
    avatar: 'polar-bear',
    gameId: '1',
    numberOfRounds: 10,
    playerScore: 5000,
    playerZilches: 0,
    playerUberZilches: 0
  })
  
  useEffect (() => {
    setResults(false);
  }, [])

  return (
    <div className={main}>

      <div className={wrap}>

        {!results ? <WaitingRoom results={results} user1={user1} user2={user2}/> : null}

        {/* <PlayerProgress />
        <ActiveScoreboard />
        <Dice />
        <GameControls />
        <ScoringOptions /> */}
      
      {results ? <ResultsPage results={results} user1={user1} user2={user2} /> : null}
      
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
