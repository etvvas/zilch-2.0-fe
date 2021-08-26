import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSession } from '../../state/SessionProvider';
import { socket, SocketContext } from '../../state/SocketProvider';

const GameRoom = () => {
  //grab user session info 
  const session = useSession();;

  //grab params
  const {room} = useParams();

  //grab socket instance
  const socket = useContext(SocketContext);

  //useEffect that will trigger join event
    
  socket.emit('JOIN_GAME', session, room);
  useEffect(()=> {

    socket.on('WELCOME', msg => {
    console.log(msg)
    })
  })

  
  return (
    <h1>game room</h1>
  )
}

export default GameRoom;
