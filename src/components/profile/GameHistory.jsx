import React, { useEffect, useState } from 'react';
import avatars from '../../assets/avatars.svg'
import {getGameResults, getGameUberZilches, getGameZilches, getUserById} from '../../utils/profile.js'

const GameHistory = ({user, games}) => {
  console.log('games', games)
  const avatar = 'dice'
  const [game, setGame] = useState();

  // const gameHistory = games.map((game, i)=> {
  useEffect(()=> {
    Promise.all(games.map(async(game, i)=> {

    // this page gets angry when you add async to the map function

    // grab user profiles
    const user1 = await getUserById(game.firstUserId)
    const user2 = await getUserById(game.secondUserId)

    // grab player score
    const results = await getGameResults(game.gameId)
    const playerScore1 = results.map((result, i) => {
      if(result.userId === user1.userId) return result.playerScore
    })
    const playerScore2 = results.map((result, i) => {
      if(result.userId === user2.userId) return result.playerScore
    })

    // grab player zilches
    const zilches = await getGameZilches(game.gameId)
    const zilches1 = await zilches.map((zilch, i) => {
      if(zilch.userId === user1.userId) return zilch.playerZilches
    })
    const zilches2 = zilches.map((zilch, i) => {
      if(zilch.userId === user2.userId) return zilch.playerZilches; 
    })
  
    // grab player uber zilches
    const uberZilches = await getGameUberZilches(game.gameId)
       const uberZilches1 = uberZilches.map((uberZilch, i) => {
      if(uberZilch.userId === user1.userId) return uberZilches.playerUberZilches
    })
    const uberZilches2 = uberZilches.map((uberZilch, i) => {
      if(uberZilch.userId === user2.userId) return uberZilches.playerUberZilches
    })

    // // display win or loss
    // // determine who's profile we are viewing and match with playerScore
    // let userId;
    // switch(userId) { 
    //   case user.userId === user1.userId:
    //     // user1 return
    //     if(playerScore1 > playerScore2) {
    //       return 'WIN'
    //     } else {
    //       return 'LOSE'
    //     }
    //     break;
    //   case user.userId === user2.userId:
    //     // user2 return
    //     if(playerScore1 < playerScore2) {
    //       return 'WIN'
    //     } else {
    //       return 'LOSE'
    //     }
    //     break;
    //   default
    //   }
    // }
    


    return(
      <li key={i}>
        <div className={wrapper}>
          <div className={userOne}>
            <div className={userInfo}>
              <span className={user1Name}>{user1.username}</span>
              <div className={stats}>
                <h1 className={stat}>score: {playerScore1}</h1>
                <h2 className={stat}>zilches: {zilches1}</h2>
                <h2 className={stat}>uberZilches: {uberZilches1}</h2>
              </div>
            </div>
            <svg className={svg}>
              <use href={avatars + `#${avatar}`} />
            </svg>
          </div>
          <div class={winloss}>
            WIN
          </div>
          <div className={userTwo}>
            <svg className={svg}>
              <use href={avatars + `#${avatar}`} />
            </svg>
            <div className={userInfo}>
              <h1 className={user2Name}>{user2.username}</h1>
              <div className={stats}>
                <h1 className={stat}>score: {playerScore2}</h1>
                <h2 className={stat}>zilches: {zilches2}</h2>
                <h2 className={stat}>uberZilches: {uberZilches2}</h2>
              </div>
            </div>
          </div>
        </div>
      </li>
    )
  })
  ).then(setGame); 

}, [])
  

  return(
    <>
    <h1>Game History</h1>
    <ul>{game}</ul>
    </>
  )
}

const wrapper = `
  flex
  border
`;

const userOne = `
flex
justify-center
items-center
m-2
`;

const userTwo = `
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
  text-center
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
