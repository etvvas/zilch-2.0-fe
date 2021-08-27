import React from 'react';
import ActiveScoreboard from '../game/ActiveScoreboard';
import Dice from '../game/Dice';
import GameControls from '../game/GameControls';
import PlayerProgress from '../game/PlayerProgress';
import Players from '../game/Players';
import ScoringOptions from '../game/ScoringOptions';

const GameRoom = () => {
  
  return (
    <div className={wrap}>
      <Players />
      <ActiveScoreboard />
      <Dice />
      <GameControls />
      <ScoringOptions />
      <PlayerProgress />
    </div>
  )
}

const wrap = `
  max-w-screen-sm
  mx-auto
  p-4
`;

export default GameRoom;
