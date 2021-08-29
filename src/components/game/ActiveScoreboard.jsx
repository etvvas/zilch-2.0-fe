import React from 'react';
import avatars from '../../assets/avatars.svg';

const ActiveScoreboard = () => {
  const avatar1 = 'polar-bear';

  return (

    // use this for staying scrolled to the bottom of table when new values added https://stackoverflow.com/questions/37620694/how-to-scroll-to-bottom-in-react

    <div className={scoreBoard}>
      <div className={currentPlayer}>
        <div className={playerStats}>
          <h2 className={h2}>_UXgUrU_</h2>
          <svg className={svg}>
            <use href={avatars + `#${avatar1}`} />
          </svg>
          <p className={tag}>You're up!</p>
          {/* <p>6669 pts</p> */}
        </div>
      </div>

      <div className={currentScoreboard}>
        <table className={table}>
          <thead className={thead}>
            <tr className="border-b-4">
              <td className={th + 'w-full'}>Round</td>
              <td className={th + 'w-20'}>Total</td>
            </tr>
          </thead>
          <tbody className={tbody}>
            <tr className={tr}>
              <td className={td + 'w-full'}>500</td>
              <td className={td + 'w-20'}>4200</td>
            </tr>
            <tr className={tr}>
              <td className={td + 'w-full'}>Zilch!</td>
              <td className={td + 'w-20'}>4200</td>
            </tr>
            <tr className={tr}>
              <td className={td + 'w-full'}>Zilch!</td>
              <td className={td + 'w-20'}>4200</td>
            </tr>
            <tr className={tr}>
              <td className={td + 'w-full'}>Uberzilch! -500</td>
              <td className={td + 'w-20'}>3700</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

const scoreBoard = `
  bg-gray-100
  my-4
  rounded-lg

  grid
  grid-cols-2
`;

const playerStats = `
h-full
  flex
  flex-col
  gap-2
  items-center
  justify-center
`;

const tag = `
  text-indigo-500
  tracking-wider
`;

const svg = `
  w-16
  h-16
  my-2
  border-2
  border-indigo-400
  rounded-full
`;

const h2 = `
  px-4
  font-bold
  text-indigo-600
  text-center
  w-full
  truncate
  overflow-ellipsis
`;

const currentPlayer = `
`;

const currentScoreboard = `
  flex
  flex-col
  bg-gray-200
  rounded-r-lg
`;

const table = `
  w-full
`;

const thead = `
`;

const tbody = `
  overflow-y-hidden
  w-full
`;

const th = `
  font-black
  text-right
  text-sm
  pt-3
  px-2
  sm:px-6
  tracking-wider
`;

const tr = `
  w-full
`;

const td = `
  text-right
  text-gray-500
  font-semibold
  p-2
  sm:text-sm
  sm:py-2
  sm:px-6
  tracking-wider
`;

export default ActiveScoreboard;
