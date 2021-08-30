import React from 'react';
import ActiveScoreboard from '../game/ActiveScoreboard';
import Dice from '../game/Dice';
import GameControls from '../game/GameControls';
import PlayerProgress from '../game/PlayerProgress';
import Rules from '../game/Rules';
import Scoring from '../game/Scoring';
import ScoringOptions from '../game/ScoringOptions';
import WaitingRoom from './WaitingRoom';

const GameRoom = () => {

  return (
    <div className={main}>

      <div className={wrap}>
        <WaitingRoom />




        {/* <PlayerProgress />
        <ActiveScoreboard />
        <Dice />
        <GameControls />
        <ScoringOptions />
        <Rules /> */}
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
  mx-auto
  p-4
  bg-white
  h-full
  sm:rounded-lg
  sm:my-8
  sm:p-12
`;

const footer = `
  w-full
  flex
  flex-row
  gap-2
  justify-center
`;

const button = `
  bg-purple-400
  bg-opacity-50
  rounded-full
  py-1
  px-8
  my-4
  text-white
  w-max
`;

export default GameRoom;
