import React, { useState } from 'react';
import ActiveScoreboard from '../game/ActiveScoreboard';
import Dice from '../game/Dice';
import GameControls from '../game/GameControls';
import PlayerProgress from '../game/PlayerProgress';
import Rules from '../game/Rules';
import ScoringOptions from '../game/ScoringOptions';
import ResultsPage from '../results/ResultsPage';
import WaitingRoom from './WaitingRoom';

const GameRoom = () => {
  const [results, setResults] = useState(true);

  return (
    <div className={main}>

      <div className={wrap}>
        {!results ? <WaitingRoom results={results}/> : null}




        {/* <PlayerProgress />
        <ActiveScoreboard />
        <Dice />
        <GameControls />
        <ScoringOptions />
        <Rules /> */}
      </div>
      {results ? <ResultsPage results={results} /> : null}
      <Rules />
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
  mx-auto
  p-4
  bg-white
  h-full
  sm:rounded-lg
  sm:my-8
  sm:p-12
`;

export default GameRoom;
