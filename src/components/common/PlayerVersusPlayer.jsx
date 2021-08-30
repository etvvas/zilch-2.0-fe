import React from 'react';
import avatars from '../../assets/avatars.svg';

const PlayerVersusPlayer = ({user1, user2, room}) => {
  room = 'Room1';
  const avatar = 'dice';
  // add conditional styling (noPlayerSvg) if player does not exist

  return (
    <>
      <div className={outerWrap}>
        <h3 className={h3}>{room}</h3>
        <div className={innerWrap}>
          <div className={side}>
            <p className={playerName}>Player 1</p>
            <svg className={noPlayerSvg + winning}>
              <use href={avatars + `#${avatar}`} />
            </svg>
            <p className={ready}>Ready!</p>
          </div>
          <div className={vs}>
            vs
          </div>
          <div className={side}>
            <p className={playerName}>Player 2</p>
            <svg className={svg}>
              <use href={avatars + `#${avatar}`} />
            </svg>
            <p className={ready}>Ready!</p>
          </div>
        </div>
          <button className={readyButton}>Ready</button>
        <div className={readyMessage}>
          {/* Case1: player joins, no other player has joined yet
            "waiting for opponent to join"
          */}
          {/* Case2: player joins and hits ready button 
            "waiting on opponent to be ready"
          */}
          {/*  */}
          Game will start when both players are ready.
        </div>
      </div>
    </>
  )
}

const outerWrap = `
  flex
  flex-grow
  flex-col
  rounded-lg
  w-full
`;

const h3 = `
  text-lg
  text-center
  p-2
  text-gray-300
  tracking-wider
  rounded-t-lg
`;

const innerWrap = `
  flex
  py-6
  px-10
  gap-6
  justify-center
`;

const side = `
  w-28
  md:max-w-32
`;

const playerName = `
  text-center
  text-xl
  text-gray-700
  font-semibold
  italic
  tracking-wider
  truncate
  font-bold
`;

const winning = `
  border-purple-400
  rounded-full
`;

const vs = `
  text-4xl
  font-light
  self-center
`;

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

const noPlayerSvg = `
  w-12
  h-12
  md:w-12
  md:h-12
  my-2
  mx-auto
  border-4
  border-transparent
  filter
  grayscale
`;

const ready = `
  font-bold
  text-green-500
  text-center
  tracking-wide
`;

const readyMessage = `
  text-center
`;

const readyButton = `
  py-2
  px-10
  block
  mx-auto
  my-4
  text-center
  text-lg
  text-white
  font-bold
  w-full
  rounded
  bg-indigo-500
  border-b-4
  border-indigo-600
  w-max
  sm:py-4
  sm:text-2xl
  hover:bg-indigo-600
  hover:border-indigo-700
`;

export default PlayerVersusPlayer;
