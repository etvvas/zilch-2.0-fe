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
    setGames(fetchedGames);
    const losses = fetchedGames.length - wins 
    setLosses(losses);
    
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
  }, [])

  // stats renders sometimes; not enough time to fetch

  // global rank = take leaderboard (wins), match userId, and get index + 1
  return (
    <div>
    {loading 
      ? <h1>Loading...</h1> 
      : <>

        <div className={outer}>
          <div className={wrap}>
            <h1 className={h1}><span className={span}>{user.username}</span>'s Profile</h1>
            <svg className={svg}>
              <use href={avatars + `#${user.avatar}`} />
            </svg>
            <div class={title}>
              <h2>Global Rank</h2>
              <div className={rankDiv}>#{rank}</div>  
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

const title = `
  text-center
`;

const rankDiv = `
  text-5xl
  font-black
  text-pink-500
  `;

const h1 = `
  text-xl
  sm:text-4xl
  text-center
  mt-4
  mb-4
  sm:mb-8
`;

const span = `
  font-black
  text-indigo-500
`;

const svg = `
  w-40
  h-40
  md:w-40
  md:h-40
  my-2
  mx-auto
  border-4
  border-transparent
`;

export default PlayerProfile;
