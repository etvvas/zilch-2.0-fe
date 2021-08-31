import React from 'react';
import avatars from '../../assets/avatars.svg';

const PlayerVersusPlayer = ({user1, user2, room, results}) => {
  room = 'Titanium';
  const avatar = 'dice';
  // add conditional styling (noPlayerSvg) if player does not exist
console.log('results', results)
  return (
    <>
      <div className={outerWrap}>
        <h3 className={h3}>{room} Room</h3>
        </div>
        <div className={innerWrap}>
          <div className={side}>
            <p className={playerName + playerOne}>ScrumMast3r</p>
            <svg className={noPlayerSvg + winning}>
              <use href={avatars + `#${avatar}`} />
            </svg>
            {!results  
              ? <p className={ready}>Ready</p>
              : null
            }
          </div>
          <div className={vs}>
            vs
          </div>
          <div className={side}>
            <p className={playerName + playerTwo}>_UXgUrU_</p>
            <svg className={svg}>
              <use href={avatars + `#${avatar}`} />
            </svg>
            {!results  
              ? <p className={ready}>Ready</p>
              : null
            }
          </div>
      </div>
        <div className={readyMessage}>
          {!results  
              ? 'Game will start when both players are ready.'
              : null
          }
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
  text-2xl
  text-center
  p-2
  text-indigo-500
  font-bold
  tracking-wide
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
  w-20
  h-20
  md:w-12
  md:h-12
  my-2
  mx-auto
  border-4
  border-transparent
`;

const noPlayerSvg = `
  w-20
  h-20
  md:w-12
  md:h-12
  my-2
  mx-auto
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
  text-sm
  text-gray-700
  border-b
  italic
`;

const playerOne = `
  text-purple-500
`;

const playerTwo = `
  text-pink-500
`;

export default PlayerVersusPlayer;
