import React, { useEffect, useState } from 'react';
import avatars from '../../assets/avatars.svg';
import { useParams } from 'react-router-dom';
import { getPlayerGames, getPlayerUberZilches, getPlayerWins, getPlayerZilches, getUser } from '../../utils/profile.js';
import PlayerStats from './PlayerStats';
import GameHistory from './GameHistory';
import { allLeaders } from '../../services/users';

const PlayerProfile = () => {
  const {username} = useParams();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [wins, setWins] = useState(0);
  const [games, setGames] = useState([])
  const [losses, setLosses] = useState(0);
  const [zilches, setZilches] = useState(0);
  const [uberZilches, setUberZilches] = useState(0);
  const [rank, setRank] = useState(0)

  useEffect(() => {

    const holder = async() => {
    const fetchedUser = await getUser(username)
    setUser(fetchedUser);

    const fetchedWins = await getPlayerWins(fetchedUser.userId)
    setWins(fetchedWins.length);
    
    const fetchedGames = await getPlayerGames(fetchedUser.userId);
    const filteredGames = fetchedGames.filter(fetchedGame => fetchedGame.timestampEnd)
    setGames(filteredGames);
    const filteredLosses = (filteredGames.length - fetchedWins.length) 
    setLosses(filteredLosses);
    
    const fetchedZilches = await getPlayerZilches(fetchedUser.userId);
    const allZilches = fetchedZilches.reduce((a, b) => a + b.playerZilches, 0)
    setZilches(allZilches)

    const fetchedUberZilches = await getPlayerUberZilches(fetchedUser.userId)
    const allUberZilches = fetchedUberZilches.reduce((a, b) => a + b.playerUberZilches, 0)
    setUberZilches(allUberZilches)

    const leaders = await allLeaders();
    const index = leaders.findIndex(leader => leader.userId === fetchedUser.userId)
    setRank(index+1)

    setLoading(false);
    }

    holder()
  }, [username])

  return (
    <div>
    {loading 
      ? <h1>Loading...</h1> 
      : <>

        <div className={outer}>
          <div className={wrap}>
            <div class={header}>
              <svg className={svg}>
                <use href={avatars + `#${user.avatar}`} />
              </svg>
              <div className={title}>
                <h1 className={h1}><span className={span}>{user.username}</span></h1>
                <div className={rankDiv}>#{rank}</div>  
                <h2 className={rankLabel}>Global Rank</h2>
              </div>
            </div>
            <div>
              <PlayerStats user={user} wins={wins} losses={losses} zilches={zilches} uberZilches={uberZilches}/>
              <GameHistory user={user} games={games}/>
            </div>
          </div>
        </div>
      </>
    }
    </div>
  )
}

const outer = `
  flex
  flex-col
  sm:px-4
  leaderboard
`;

const wrap = `
  max-w-screen-md
  sm:mx-auto
  bg-white
  rounded-xl
  p-4
  sm:my-12
  sm:p-12
  w-full
`;

const header = `
  flex
  flex-row
  items-center
  gap-4
  mb-6
`;

const title = `
  flex
  flex-col
`;

const rankDiv = `
  text-4xl
  sm:text-5xl
  font-semibold
  text-pink-500
`;

const rankLabel = `
  font-semibold
  text-sm
  text-pink-400
`;

const h1 = `
  text-2xl
  sm:text-4xl
  truncate
  mb-2
`;

const span = `
  font-black
  text-indigo-500
  truncate
`;

const svg = `
  w-24
  h-24
  md:w-40
  md:h-40
  border-4
  border-transparent
`;

export default PlayerProfile;
