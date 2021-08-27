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
  return () => socket.emit('DISCONNECT')

}, [])

useEffect(()=> {
  socket.on('WELCOME', (user, room) => {
    console.log('welcome', user, room);
  })
  socket.on('FULL_ROOM', () => history.push('/lobby') )
}, [socket])

  
  return (
    <h1>game room</h1>
  )
}

export default GameRoom;
