import dotenv from 'dotenv';
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { io } from 'socket.io-client';
import Room from './Room';
dotenv.config();

const RoomsList = () => {
  const socket = io(`${process.env.REACT_APP_LOCAL_APP}`)
  console.log(socket)

  const rooms = ['Room 1', 'Room 2', 'Room 3', 'Room 4', 'Room 5', 'Room 6'];

  useEffect(() => {
    socket.on('connection', () => console.log('connected'));
  }, [])

  const roomsElements = rooms.map((room) => (
    <li key={room}>
      <Link to={`/rooms/${room}`}>
        <Room room={room} />
      </Link>
    </li>
  ))

  return (
    <ul>
      {roomsElements}
    </ul>
  )
}

export default RoomsList;
