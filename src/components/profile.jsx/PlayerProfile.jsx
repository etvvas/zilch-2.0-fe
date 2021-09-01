import React, { useEffect, useState } from 'react';
import { useSession } from '../../state/SessionProvider';
import avatars from '../../assets/avatars.svg';
import { useParams } from 'react-router-dom';
import { getPlayerGames, getPlayerUberZilches, getPlayerWins, getPlayerZilches, getUser } from '../../utils/profile.js';
import PlayerStats from './PlayerStats';
// import { getPlayerGames, getPlayerUberZilches, getPlayerWins, getPlayerZilches, getUser } from '../../services/profile';

const PlayerProfile = () => {
  const {username} = useParams();
  console.log(username)

  const [user, setUser] = useState({});
  const [wins, setWins] = useState(0);
  const [games, setGames] = useState([])
  const [losses, setLosses] = useState(0);
  const [zilches, setZilches] = useState(0);
  const [uberZilches, setUberZilches] = useState(0);

  useEffect(async() => {
    const fetchedUser = await getUser(username);
    setUser(fetchedUser);

    const fetchedWins = await getPlayerWins(user.userId)
    setWins(fetchedWins.length);
    
    const fetchedGames = await getPlayerGames(user.userId);
    setGames(fetchedGames);
    const losses = fetchedGames.length - wins 
    setLosses(losses);
    
    const fetchedZilches = await getPlayerZilches(user.userId);
    const allZilches = Array.from(fetchedZilches).reduce((a, b) => a.playerZilches + b.playerZilches, 0)
    setZilches(allZilches)

    
    const fetchedUberZilches = await getPlayerUberZilches(user.userId)
    const allUberZilches = Array.from(fetchedUberZilches).reduce((a, b) => a.playerUberZilches + b.playerUberZilches, 0)
    setUberZilches(allUberZilches)
  }, [])


  return (
    <>
    <h1>{user.username}'s Profile</h1>
    <div>
      <svg className={svg}>
        <use href={avatars + `#${user.avatar}`} />
      </svg>
      <PlayerStats user={user} wins={wins} losses={losses} zilches={zilches} uberZilches={uberZilches}/>

      {/* <h1>Game History</h1>
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
