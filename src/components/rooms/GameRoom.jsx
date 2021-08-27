import React, { useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSession } from '../../state/SessionProvider';
import {  SocketContext } from '../../state/SocketProvider';
// import socket from '../../socket/socket.js'


const GameRoom = () => {
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
  socket.on('FULL_ROOM', () =>{ 
    history.push('/lobby') 
    setTimeout(() => alert('Room Full'), 300)
  })
  return () => socket.emit('DISCONNECT')

}, [])

  return (
    <h1>game room</h1>
  )
}

export default GameRoom;
