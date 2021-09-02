/* eslint-disable no-restricted-globals */
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { getLogout } from '../../services/auth';
import { useSession, useSetSession } from '../../state/SessionProvider';


const Navigation = ({ isOpen, setIsOpen, socket }) => {
  const history = useHistory();
  const session = useSession();
  const setSession = useSetSession();
  const slug = useLocation()
  
  const handleLobby = () => {
    setIsOpen(!isOpen)
    socket.emit('DISCONNECT')
    history.push(`/lobby`)
  }
  const handleProfile = () => {
    setIsOpen(!isOpen)
    socket.emit('DISCONNECT')
    history.push(`/profile/${session.username}`)
  }

  const handleLeaderboard = () => {
     setIsOpen(!isOpen)
     socket.emit('DISCONNECT')
    history.push('/leaderboard')
  }

  const handleLogout = () => {
    const yes = confirm('Are you sure you want to logout?')
    if(yes){ setSession(null)
    getLogout();    
    history.push("/") }
    return
  }

  return (
    <nav className={
      isOpen
        ? nav
        : nav + 'hidden'}>
      <ul className={ul}>
        <li className={li + `${slug.pathname === '/lobby' ? selected : null}`} onClick={handleLobby}>Lobby</li>
        <li className={li + `${session && slug.pathname === `/profile/${session.username}` ? selected : null}`} onClick={handleProfile}>Profile</li>
        <li className={li + `${slug.pathname === '/leaderboard' ? selected : null}`} onClick={handleLeaderboard}>Leaderboard</li>
        <li className={li}>About</li>
        <li className={li} onClick={handleLogout}>Log Out</li>
      </ul>
    </nav>
  )
}

const nav = `
  shadow-md
  bg-gray-800
  sm:block
`;

const ul = `
  mx-auto
  flex 
  flex-col
  gap-2
  py-8
  px-2
  justify-evenly 
  sm:p-2
  max-w-screen-xl

  sm:flex-row
  sm:gap-2
`;

const li = `
  rounded-md
  tracking-wider
  text-purple-100 
  cursor-pointer
  w-full
  text-lg
  
  sm:text-sm
  hover:text-white
  hover:bg-purple-900
  px-6
  py-2
  
  sm:text-center

`;

const selected = `
  bg-purple-500 
  bg-opacity-20 
  2xl:text-white
`;

export default Navigation;
