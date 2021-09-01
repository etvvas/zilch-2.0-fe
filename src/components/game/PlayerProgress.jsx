import React from 'react';

const PlayerProgress = ({gameState}) => {
  let firstPlayerPercentage
  let secondPlayerPercentage

  if(gameState.gameId){
  const firstPlayerScore = gameState.firstUser.playerScore / gameState.targetScore
  const secondPlayerScore = gameState.secondUser.playerScore / gameState.targetScore
  
  firstPlayerPercentage = Math.floor(firstPlayerScore * 100)
  secondPlayerPercentage = Math.floor(secondPlayerScore * 100)
  // console.log(firstPlayerPercentage)
  // console.log(secondPlayerPercentage)
  }

  return (
  <>
  {gameState.gameId ?
    <div>
      <div class="relative pt-1">
        <div className={stats}>
          <div className={nameOne}>{gameState.firstUser.userName}</div>
          <div className={scoreOne}>{gameState.firstUser.playerScore}</div>
        </div>
        <div class="overflow-hidden h-2 text-xs flex bg-pink-200">
          <div style={{ width: `${firstPlayerPercentage}%` }} class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
        </div>
      </div>
      <div class="relative pt-1">
        <div class="overflow-hidden h-2 text-xs flex bg-purple-200">
          <div style={{ width: `${secondPlayerPercentage}%` }} class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
        </div>
        <div className={stats}>
          <div className={nameTwo}>{gameState.secondUser.userName}</div>
          <div className={scoreTwo}>{gameState.secondUser.playerScore}</div>
        </div>
      </div>
      <div >
        <p>Race to <span>{gameState.targetScore} pts</span></p>
      </div>
    </div>
    : null
}
</>
  )
}

const stats = `
  hidden
  sm:flex
  justify-between
`;

const nameOne = `
  text-xs
  text-pink-500
  italic
`;

const nameTwo = `
  text-xs
  text-purple-500
  italic
`;

const scoreOne = `
  text-xs
  text-right
  text-pink-500
  italic
`;

const scoreTwo = `
  text-xs
  text-right
  text-purple-500
  italic
`;

export default PlayerProgress;
