import React from 'react';
import ActiveScoreboard from '../game/ActiveScoreboard';
import Dice from '../game/Dice';
import GameControls from '../game/GameControls';
import PlayerProgress from '../game/PlayerProgress';
import ScoringOptions from '../game/ScoringOptions';

const GameRoom = () => {

  
  return (
    <div className={wrap}>
      <h1 className={h1}>ScrumMast3r vs _UXgUrU_</h1>


      <ActiveScoreboard />

      <div className={mainControls}>
        <Dice />
        <GameControls />
      </div>

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

const h1 = `
  text-2xl
  text-center
  my-10
`;

const mainControls = `

`;


export default GameRoom;
