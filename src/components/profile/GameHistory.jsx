import React, { useEffect, useState } from 'react';
import { getUserById } from '../../utils/profile';
import avatars from '../../assets/avatars.svg'

const GameHistory = ({user, games}) => {
  console.log('games', games)
  const avatar = 'dice'

  const gameHistory = games.map((game, i)=> {

    // this page gets angry when you add async to the map function

    // grab user profiles
    // const user1 = await getUserById(game.firstUserId)
    // const user2 = await getUserById(game.secondUserId)

    //grab player score
    // const results = await getGameResults(game.gameId)
    // const playerScore1 = results.map(result, i => {
    //   if(result.userId === user1.userId) return result.playerScore
    // })
    // const playerScore2 = results.map(results, i => {
    //   if(results.userId === user2.userId) return 
    //     result.playerScore
    // })

    // grab player zilches
    // const zilches = await getGameZilches(game.gameId)
    // const zilches1 = zilches.map(zilch, i => {
    //   if(zilch.userId === user1.userId) return zilch.playerZilch
    // })
    // const zilches2 = zilches.map(zilch, i => {
    //   if(zilch.userId === user2.userId) return zilch.playerZilch
    // })
  
    // grab player uber zilches
    // const uberZilches = await getGameUberZilches(game.gameId)
    //    const uberZilches1 = uberZilches.map(uberZilch, i => {
    //   if(uberZilch.userId === user1.userId) return uberZilch.playerUberZilch
    // })
    // const uberZilches2 = uberZilches.map(uberZilch, i => {
    //   if(uberZilch.userId === user2.userId) return uberZilch.playerUberZilch
    // })

    // display win or loss
    // determine who's profile we are viewing and match with playerScore
    // if(user.userId === user1.userId) {
    //   // user1 return
    //   if(playerScore1 > playerScore2) {
    //     return 'WIN'
    //   } else {
    //     return 'LOSE'
    //   }
    // } else {
    //   // user2 return
    //   if(playerScore1 < playerScore2) {
    //     return 'WIN'
    //   } else {
    //     return 'LOSE'
    //   }
    // }

    
    return(
      <li key={i}>
        <div className={wrapper}>
          <div className={user1}>
            <div className={userInfo}>
              <span className={user1Name}>username</span>
              <div className={stats}>
                <h1 className={stat}>score: 0</h1>
                <h2 className={stat}>zilches: 0</h2>
                <h2 className={stat}>uberZilches: 0</h2>
              </div>
            </div>
            <svg className={svg}>
              <use href={avatars + `#${avatar}`} />
            </svg>
          </div>
          <div class={winloss}>
            WIN
          </div>
          <div className={user2}>
            <svg className={svg}>
              <use href={avatars + `#${avatar}`} />
            </svg>
            <div className={userInfo}>
              <h1 className={user2Name}>username</h1>
              <div className={stats}>
                <h1 className={stat}>score: 0</h1>
                <h2 className={stat}>zilches: 0</h2>
                <h2 className={stat}>uberZilches: 0</h2>
              </div>
            </div>
          </div>
        </div>
      </li>
    )
  });

  return(
    <>
    <h1>Game History</h1>
    <ul>{gameHistory}</ul>
    </>
  )
}

const wrapper = `
  flex
  border
`;

const user1 = `
flex
justify-center
items-center
m-2
`;

const user2 = `
flex
justify-center
items-center
m-2
`;

const userInfo = `
flex
flex-col
`;

const user1Name = `
text-right
m-1
`;

const user2Name = `
m-1
`;

const svg = `
  w-20
  h-20
`;

const stats = `
  flex
`;

const stat = `
  m-1
`;

const winloss = `
  flex
  justify-center
  items-center
  p-2
`;


export default GameHistory;
