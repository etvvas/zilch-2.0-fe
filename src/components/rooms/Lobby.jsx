import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { SocketContext } from '../../state/SocketProvider';
import useLobby from '../../state/hooks/useLobby';

import Room from './Room';
const rooms = [{roomName: 'Room1'}, {roomName: 'Room2'}, {roomName: 'Room3'}, {roomName: 'Room4'}, {roomName: 'Room5'}, {roomName: 'Room6'}];

const Lobby = () => {
  const socket = useContext(SocketContext)
  const [gameRooms, setGameRooms] = useState(rooms)
 
  useEffect(() => {
    socket.on('UPDATE_LOBBY', (socketRooms) => {
        const updatedRooms = rooms.map(room => {
        let newRoom;
        const match = socketRooms.find(item => item[room.roomName]?.roomName === room.roomName) 
        match ? newRoom = match[room.roomName] : newRoom = room
        return newRoom
      })
     setGameRooms(updatedRooms)
    })

    return () => {
      socket.removeListener('UPDATE_LOBBY')
      socket.emit('DISCONNECT')
    }
  }, [])


  // need to took in the lobby data to see if there is data that exists for the room
  // regardless of whether there is or isn't data, we need to pass a prop down
 
  const roomsElements = gameRooms.map((room) => (
    
    <li  key={room.roomName} className={li}>
      <Link to={`/lobby/${room.roomName}`}>
        <Room {...room} />
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
