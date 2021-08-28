import React, { useContext, useEffect, useState } from 'react';
import ActiveScoreboard from '../game/ActiveScoreboard';
import Dice from '../game/Dice';
import GameControls from '../game/GameControls';
import PlayerProgress from '../game/PlayerProgress';
import Players from '../game/Players';
import ScoringOptions from '../game/ScoringOptions';
import { useHistory, useParams } from 'react-router-dom';
import { useSession } from '../../state/SessionProvider';
import {  SocketContext } from '../../state/SocketProvider';
// import socket from '../../socket/socket.js'

const GameRoom = () => {
  const [readyUsers, setReadyUsers] = useState([])
  const [gameState, setGameState] = useState({});
  console.log(readyUsers);
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
    console.log(gameState);
    setGameState(gameState[room])
  })
  socket.on('FULL_ROOM', () =>{ 
    history.push('/lobby') 
    setTimeout(() => alert('Room Full'), 300)
  })
  socket.on('START_GAME', msg => console.log(msg))
  socket.on('READY', (player) => {
    setReadyUsers(prevState => [...prevState, player])
  })
  return () => socket.emit('DISCONNECT')

}, [] )

const handleReady = () => {
  socket.emit('PLAYER_READY')
  console.log(gameState);
}

  return (
    
    <div className={wrap}>
      <PlayerProgress />
      <Players />
      <ActiveScoreboard />
      <Dice />
      <GameControls />
      <ScoringOptions />
      <PlayerProgress />
      <button 
      onClick={handleReady}
      disabled={readyUsers.find(user => user === session.username)}
      >READY</button>

    </div>
  )
}

const wrap = `
  max-w-screen-sm
  mx-auto
  p-4
`;

export default GameRoom;
