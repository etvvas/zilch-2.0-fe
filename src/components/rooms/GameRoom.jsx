import React, { useContext, useEffect, useState } from 'react';
import ActiveScoreboard from '../game/ActiveScoreboard';
import Dice from '../game/Dice';
import GameControls from '../game/GameControls';
import PlayerProgress from '../game/PlayerProgress';
import Players from '../game/Players';
import Rules from '../game/Rules';
import ScoringOptions from '../game/ScoringOptions';
import { useHistory, useParams } from 'react-router-dom';
import { useSession } from '../../state/SessionProvider';
import {  SocketContext } from '../../state/SocketProvider';
// import socket from '../../socket/socket.js'

const GameRoom = () => {
  const [gameState, setGameState] = useState({});
  const [currentPlayer, setCurrentPlayer] = useState('');
  const [dice , setDice] = useState([]);
  const [scoringOptions , setScoringOptions] = useState([]);

  // console.log(readyUsers);
  //map out readyUsers
  const history = useHistory();
  //grab user session info 
  const session = useSession();;

  //grab params
  const {room} = useParams();

  //grab socket instance
const socket = useContext(SocketContext)

  //useEffect that will trigger join event
    
useEffect(() => {
  socket.emit('JOIN_ROOM', session, room)
  socket.on('ROOM_JOINED', (gameState) => {
    setGameState(gameState[room])
  })

  socket.on('FULL_ROOM', () =>{ 
    history.push('/lobby') 
    setTimeout(() => alert('Room Full'), 300)
  })

  socket.on('START_GAME', (gameState, index, players) => {
    setGameState(gameState[room])
    setCurrentPlayer(players[index])
  })

  socket.on('READY', gameState => setGameState(gameState[room]));

  socket.on('ROLLED', (dice, scoringOptions) => {
    setDice(dice);
    setScoringOptions(scoringOptions);
  })

  socket.on('BANKED', (gameState, index, players) => {
    setGameState(gameState[room])
    setCurrentPlayer(players[index])
  })
  
  return () => socket.emit('DISCONNECT')

}, [])

const handleReady = () => {
  socket.emit('PLAYER_READY', room, session.userId)
}

 if (gameState.ready && gameState.ready.length < 2) {
  console.log(gameState.ready);
  return <button 
    onClick={handleReady}
    disabled={gameState.ready.find(user => user === session.userId)}
  >READY</button>
 }
   
  return (
    <div className="relative">

      <div className={wrap}>
        <PlayerProgress />
        <Players />
        <ActiveScoreboard />
        <Dice dice={dice}/>
        <GameControls gameState={gameState} currentPlayer={currentPlayer}/>
        <ScoringOptions scoringOptions={scoringOptions} currentPlayer={currentPlayer}/>
        <Rules />
      </div>
    </div>
    
  )
}

const wrap = `
  max-w-screen-sm
  mx-auto
  p-4
`;

export default GameRoom;
