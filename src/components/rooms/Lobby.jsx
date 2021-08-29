import React, {useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { SocketContext } from '../../state/SocketProvider';

import Room from './Room';

const Lobby = () => {
  const socket = useContext(SocketContext)

  useEffect(() => {
    socket.on('UPDATE_LOBBY', (gameRooms) => {
      console.log(gameRooms);
    })
    return () => {
      socket.removeListener('UPDATE_LOBBY')
      socket.emit('DISCONNECT')
    }
  }, [])
 
  const rooms = ['Room1', 'Room2', 'Room3', 'Room4', 'Room5', 'Room6'];
  const roomsElements = rooms.map((room) => (
    
    <li key={room} className={li}>
      <Link to={`/lobby/${room}`}>
        <Room room={room} />
      </Link>
    </li>
  ))
  

  return (
    <div className={wrap}>
      <h1 className={h1}>Zilch Lobby</h1>
      <ul className={ul}>
        {roomsElements}
      </ul>
    </div>
  )
}

const wrap = `
  max-w-screen-xl
  mx-auto
`;

const h1 = `
  text-4xl
  text-center
  mt-10
`;

const ul = `
  flex
  flex-wrap
  justify-evenly
  p-4
  md:p-10
`;

const li = `
  w-full
  p-2
  sm:w-1/2
  lg:w-1/3
`;

export default Lobby;
