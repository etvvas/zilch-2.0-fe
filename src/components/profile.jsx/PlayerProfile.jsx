import React, { useEffect, useState } from 'react';
import { useSession } from '../../state/SessionProvider';
import avatars from '../../assets/avatars.svg';
import { useParams } from 'react-router-dom';
import { getPlayerGames, getPlayerWins, getPlayerZilches, getUser } from '../../utils/profile.js';
// import { getPlayerGames, getPlayerUberZilches, getPlayerWins, getPlayerZilches, getUser } from '../../services/profile';

const PlayerProfile = () => {
  const {username} = useParams();
  console.log(username)

  const [user, setUser] = useState({});
  const [wins, setWins] = useState('');
  const [games, setGames] = useState([])
  const [losses, setLosses] = useState('');
  const [zilches, setZilches] = useState('');
  const [uberZilches, setUberZilches] = useState('');

  useEffect(async() => {
    const fetchedUser = await getUser(username);
    setUser(fetchedUser);

    const fetchedWins = await getPlayerWins(user.userId)
    setWins(fetchedWins.length);
    
    const fetchedGames = await getPlayerGames(user.userId);
    setGames(fetchedGames);
    setLosses(fetchedGames.length - wins);
    
    const fetchedZilches = await getPlayerZilches(user.userId);
    const allZilches = fetchedZilches.reduce((a, b) => a.playerZilches + b.playerZilches, 0)
    setZilches(allZilches)


  //   // const fetchedUberZilches = await getPlayerUberZilches(user.userId)
  //   const fetchedUberZilches = [
  //     {
  //       userId: '1',
  //       gameId: '1',
  //       playerUberZilches: 18,
  //       uberZilchId: '1',
  //       username: 'username'
  //     },
  //     {
  //       userId: '1',
  //       gameId: '2',
  //       playerUberZilches: 6,
  //       uberZilchId: '2',
  //       username: 'username'
  //     },
  //     {
  //       userId: '1',
  //       gameId: '3',
  //       playerUberZilches: 4,
  //       uberZilchId: '3',
  //       username: 'username'
  //     }
  //   ]
  //   const allUberZilches = fetchedUberZilches.reduce((a, b) => ({
  //     playerUberZilches: a.playerUberZilches + b.playerUberZilches
  //   }))
  //   setUberZilches(allUberZilches.playerUberZilches)
  }, [])

  return (
    <>
    <h1>{user.username}'s Profile</h1>
    <div>
      <svg className={svg}>
        <use href={avatars + `#${user.avatar}`} />
      </svg>
      <h2>user: {user.username}</h2>
      <h2>wins: {wins}</h2>
      <h2>losses: {losses} </h2>
      <h2>zilches: {zilches} </h2>
      {/* <h2>uberZilches: {uberZilches} </h2>

      <h1>Game History</h1>
      {games.map} */}
    </div>
    </>
  )
}

const svg = `
  w-12
  h-12
  md:w-12
  md:h-12
  my-2
  mx-auto
  border-4
  border-transparent
`;

export default PlayerProfile;
