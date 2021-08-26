import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSession } from '../../state/SessionProvider';
import {  SocketContext } from '../../state/SocketProvider';

const GameRoom = () => {
  //grab user session info 
  const session = useSession();;

  //grab params
  const {room} = useParams();

  //grab socket instance
  const socket = useContext(SocketContext);

  //useEffect that will trigger join event
    
  console.log(socket);
  socket.emit('JOIN_ROOM', session, room);

  useEffect(()=> {
    socket.on('WELCOME', (user, room) => {
      console.log('welcome', user, room);
    })
  }, [socket])

  
  return (
    <h1>game room</h1>
  )
}

export default GameRoom;
