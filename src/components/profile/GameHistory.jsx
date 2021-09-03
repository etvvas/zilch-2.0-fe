import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import avatars from '../../assets/avatars.svg'
import {getGameResults, getGameUberZilches, getGameZilches, getUserById, getWinner} from '../../utils/profile.js'

const GameHistory = ({user, games}) => {
  const [game, setGame] = useState();
  const [loading, setLoading] = useState(true)

  useEffect(()=> {

    Promise.all(games.map(async(game, i)=> {

    // grab target_score
    const target = game.targetScore;

    // grab user profiles
    const user1 = await getUserById(game.firstUserId)
    const user2 = await getUserById(game.secondUserId)

    // grab player score
    const results = await getGameResults(game.gameId)
    const playerScore1 = results.map((result) => {
      if(result.userId === user1.userId) return result.playerScore
    })
    const playerScore2 = results.map((result) => {
      if(result.userId === user2.userId) return result.playerScore
    })

    // grab player zilches
    const zilches = await getGameZilches(game.gameId)
    const zilches1 = await zilches.map((zilch) => {
      if(zilch.userId === user1.userId) return zilch.playerZilches
    })
    const zilches2 = zilches.map((zilch) => {
      if(zilch.userId === user2.userId) return zilch.playerZilches; 
    })
  
    // grab player uber zilches
    const uberZilches = await getGameUberZilches(game.gameId)
       const uberZilches1 = uberZilches.map((uberZilch) => {
      if(uberZilch.userId === user1.userId) return uberZilch.playerUberZilches
    })
    const uberZilches2 = uberZilches.map((uberZilch) => {
      if(uberZilch.userId === user2.userId) return uberZilch.playerUberZilches
    })

    // grab player result per game/*  */
    let result;
    result = getWinner(user, user1, user2, playerScore1, playerScore2, result)
      
    return(
      <li key={i} className={li}>
        <div className={wrapper}>
          <div className={targetClass}>
            <div className="text-green-300">{result}</div>
            <div>Goal: {target}</div>
          </div>
          <div class={winloss}>
            <Link to={`/profile/${user1.username}`}>
              <div className={side}>
                  <svg className={svg}>
                    <use href={avatars + `#${user1.avatar}`} />
                  </svg>
                  <h3 className={user1Name}>{user1.username}</h3>
                <div className={stats}>
                  <div className={stat + statText}>
                    <span className={points}>{playerScore1}</span> 
                    <span className={text}> pts</span>
                  </div>
                  <div className={stat + statText}>
                    <span className={points}>{zilches1}</span>
                    <span className={text}> zilches</span>
                  </div>
                  <div className={stat + statText}>
                    <span className={stat}>{uberZilches1}</span>
                    <span className={text}> uberZilches</span>
                  </div>
                </div>
              </div>
            </Link>
            <span className={vs}>vs</span>
            <Link to={`/profile/${user2.username}`}>
              <div className={side}>
                <svg className={svg}>
                  <use href={avatars + `#${user2.avatar}`} />
                </svg>
                <h3 className={user2Name}>{user2.username}</h3>
                <div className={stats}>
                  <div className={stat + statText}>
                    <span className={points}>{playerScore2}</span> 
                    <span className={text}> pts</span>
                  </div>
                  <div className={stat + statText}>
                    <span className={points}>{zilches2}</span>
                    <span className={text}> zilches</span>
                  </div>
                  <div className={stat + statText}>
                    <span className={stat}>{uberZilches2}</span>
                    <span className={text}> uberZilches</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </li>
    )
  })).then(setGame).finally(() => setLoading(false));
  }, [games])
  

  return(
    <>
    {loading 
      ? <h1>Loading...</h1>
      : <>
        <h1 className={h1}>Game History</h1>
          <ul className={ul}>{game}</ul>
        </>
    }
    </>
  )
}

const ul = `
  flex
  flex-wrap
  justify-start
  flex-col
  sm:flex-row 
`;

const li = `
  sm:w-1/2
  w-full
  p-1
`;

const h1 = `
  text-lg
  text-gray-600
  sm:text-lg
  font-semibold
`;

const wrapper = `
  flex
  flex-col
  bg-gray-800
  rounded-lg
`;

const targetClass = `
  bg-gray-700
  rounded-t-lg
  text-gray-300
  text-xs
  font-semibold
  tracking-wide
  text-center
  p-2
  flex
  flex-row
  justify-between
`;

const side = `
  flex
  flex-col
  w-24
  items-center
  justify-center
`;

const vs = `
  text-gray-400
  text-2xl
  font-light
  mt-4
`;

const user1Name = `
  text-purple-400
  font-semibold
  tracking-wide
  my-2
`;

const user2Name = `
  text-pink-400
  font-semibold
  tracking-wide
  my-2
`;

const svg = `
  w-12
  h-12
`;

const stats = `
  flex
  flex-col
  text-center
`;

const text = `
  text-gray-400
  text-xs
`;

const points = `
  text-gray-200
`;

const statText = `
  text-sm
  font-light
  text-white
`;

const stat = `
  text-xs
`;

const winloss = `
  flex
  justify-center
  gap-4
  my-4
`;


export default GameHistory;
