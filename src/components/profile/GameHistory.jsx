import React from 'react';
import { getUserById } from '../../utils/profile';

const GameHistory = ({games}) => {

  // fetch by id (user1, user2)
    //render username and avatar
  // fetch results by gameId
    // compare games to userId && gameId
  // fetch zilches by gameId
    // compare games to userId && gameId
  // fetch uberzilches by gameId
    // compare games to userId && gameId




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
