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
            <p className={playerName}>ScrumMast3r</p>
            <svg className={noPlayerSvg + winning}>
              <use href={avatars + `#${avatar}`} />
            </svg>
            <p className={score}>1837 pts</p>
          </div>
          <div className={vs}>
            vs
          </div>
          <div className={side}>
            <p className={playerName}>_UXgUrU_</p>
            <svg className={svg}>
              <use href={avatars + `#${avatar}`} />
            </svg>
            <p className={score}>1837 pts</p>
          </div>
          <div>
            Waiting for opponent...
          </div>
          <button>Ready</button>
        </div>
      </div>
    </>
  )
}

const outerWrap = `
  flex
  flex-grow
  flex-col
  bg-gray-800
  text-purple-100
  rounded-lg
`;

const h3 = `
  text-lg
  text-center
  bg-gray-700
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
  text-sm
  text-green-300
  font-semibold
  italic
  tracking-wider
  truncate
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
  md:w-20
  md:h-20
  my-2
  mx-auto
  border-4
  border-transparent
`;

const noPlayerSvg = `
  w-20
  h-20
  md:w-20
  md:h-20
  my-2
  mx-auto
  border-4
  border-transparent
  filter
  grayscale
`

const score = `
  text-center
  text-sm
  text-gray-400
`;


export default PlayerVersusPlayer;
