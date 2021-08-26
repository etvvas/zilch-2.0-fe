import React from 'react';
import avatars from '../../assets/avatars.svg';

const Room = ({ room }) => {
  
  const avatar = 'polar-bear';

  return (
    <>
      <div className={outerWrap}>
        <h3 className={h3}>{room}</h3>
        <div className={innerWrap}>
          <div>
            <p className={playerName}>Player 1</p>
            <svg className={svg}>
              <use href={avatars + `#${avatar}`} />
            </svg>
            <p className={score}>1837 pts</p>
          </div>
          <div className={vs}>
            vs
          </div>
          <div>
            <p className={playerName}>Player 2</p>
            <svg className={svg}>
              <use href={avatars + `#${avatar}`} />
            </svg>
            <p className={score}>1837 pts</p>
          </div>

        </div>
      </div>
    </>
  )
}

const outerWrap = `
  flex
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
`;

const playerName = `
  text-center
`;

const vs = `
  text-4xl
  font-light
  self-center
`;

const svg = `
  w-20
  h-20
`;

const score = `
  text-center
`;

export default Room;
