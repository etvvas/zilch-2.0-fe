import React, {useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { SocketContext } from '../../state/SocketProvider';

import Room from './Room';


const Lobby = () => {
  const socket = useContext(SocketContext)
  useEffect(() => {
    socket.on('ENTER_LOBBY', (data) => {
      console.log(data);
    })
    return () => socket.emit('DISCONNECT')
  }, [])
 
  const rooms = ['Room 1', 'Room 2', 'Room 3', 'Room 4', 'Room 5', 'Room 6'];

  useEffect(() => {
  socket.emit('ENTER_LOBBY')
  socket.on('ENTERED_LOBBY', msg => console.log(msg))
  // socket.on('ENTER_LOBBY', gameRooms => console.log(gameRooms))

  }, [socket])

  const roomsElements = rooms.map((room) => (
    
    <li key={room}>
      <Link to={`/lobby/${room}`}>
        <Room room={room} />
      </Link>
    </li>
  ))

  return (
    <>
      <h1>Zilch lobby</h1>
      <ul className={ul}>
        {roomsElements}
      </ul>
    </>
  )
}

const ul = `
  flex
  flex-wrap
  gap-4
  justify-evenly
  p-10
`;

export default Lobby;
