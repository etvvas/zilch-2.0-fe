import React from 'react';
import { getUserById } from '../../utils/profile';

const GameHistory = ({games}) => {

  // const gameHistory = games.map((game, i)=> {
  //   const user1 = getUserById(game.firstUserId)
  //   const user2 = getUserById(game.secondUserId)
    
  //   return (
  //     <li key={i}>
        
  //     </li>
  //   )
  // })


  return(
    <>
    <h1>Game History</h1>
    </>
  )
}

export default GameHistory;
