import React, { useContext } from "react";
import { SocketContext } from "../../state/SocketProvider";
import WaitingRoom from './WaitingRoom';
import ActiveScoreboard from "../game/ActiveScoreboard";
import Dice from "../game/Dice";
import GameControls from "../game/GameControls";
import PlayerProgress from "../game/PlayerProgress";
import Rules from "../game/Rules";
import ScoringOptions from "../game/ScoringOptions";
import Scoring from '../game/Scoring';
import ResultsPage from '../results/ResultsPage';
import useGameLogic from "../../state/hooks/useGameLogic";

const GameRoom = () => {
  const socket = useContext(SocketContext);
  const [
    room,
    results,
    gameState,
    currentPlayer,
    dice,
    scoringOptions,
    rollDisabled,
    bankDisabled,
    isDisabled,
    isRolled,
    isZilch,
    isFreeRoll,
    loading,
    roundScores,
    handleReady,
    handleLeave,
    handleScoreSelect,
  ] = useGameLogic(socket)
 
  if(loading) return <h1>Loading...</h1>
else 

  return (
    <div className={main}>

        {results ? <ResultsPage socket={socket} results={results} ready={gameState.ready} 
        user1={results ? results.firstUser : gameState.firstUser} 
        user2={results ? results.secondUser : gameState.secondUser} room={room} winner={gameState.winner}/> : 
      <div className={wrap}>
        {(gameState.ready && gameState.ready.length < 2) ? <WaitingRoom results={results} onReady={handleReady} ready={gameState.ready} user1={gameState.firstUser} user2={gameState.secondUser} room={room}/> 
        : <>
        <PlayerProgress gameState={gameState}/>
        <ActiveScoreboard 
        roundScores={roundScores}
        gameState={gameState}
        currentPlayer={currentPlayer}/>
        <Dice dice={dice} isRolled={isRolled} />
        <GameControls
          isFreeRoll={isFreeRoll}
          gameState={gameState}
          dice={dice}
          currentPlayer={currentPlayer}
          scoringOptions={scoringOptions}
          rollDisabled={rollDisabled}
          bankDisabled={bankDisabled}
          isDisabled={isDisabled} />
        <ScoringOptions
          isZilch={isZilch}
          scoringOptions={scoringOptions}
          currentPlayer={currentPlayer}
          onChange={handleScoreSelect}
          isFreeRoll={isFreeRoll}
          rollDisabled={rollDisabled}
          bankDisabled={bankDisabled}
        />
        </>
  }
      </div>

  }
      <div className={footer}>
        <Rules />
        <Scoring />
        <button 
        className={button} 
        onClick={handleLeave}>
          Leave
          </button>
      </div>
       
      
    </div>
  );
};

const main = `
  h-full
  flex
  flex-col
  items-center
`;

const wrap = `
  relative
  max-w-screen-sm
  w-full
  mx-auto
  p-4
  bg-white
  sm:rounded-lg
  sm:mt-12
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
