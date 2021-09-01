/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect} from 'react';
import { displayLeaders, displayWins, getUsers, getWins, orderWins } from '../../services/users';

const Leaderboard = () => {
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        const placeholderFunc = async () => {
            const users = await getUsers();
            const wins = await getWins(users)
            const order = await orderWins(wins)
            const leaders = await displayLeaders(order)
            await setLeaderboard(leaders)
            console.log(leaders)
        }
        return placeholderFunc()
    }, [])

    return (
      <div className={outer}>
        <div className={wrap}>
          <h1 className={h1}><span className={span}>Zilch 2.0</span> Leaderboard</h1>
          <table className={table}>
              <thead>
                  <tr>
                      <th className={td + firstTh}>#</th>
                      <th className={td + secondTh}>Player</th>
                      <th className={td + lastTh}>Wins</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td className={td + standing}>1</td>
                      <td className={td + player}>ScrumMast3r</td>
                      <td className={td + score}>666</td>
                  </tr>
                  <tr>
                      <td className={td + standing}>2</td>
                      <td className={td + player}>_UXgUrU_</td>
                      <td className={td + score}>420</td>
                  </tr>
                  <tr>
                      <td className={td + standing}>3</td>
                      <td className={td + player}>t3chW1Z</td>
                      <td className={td + score}>69</td>
                  </tr>
              </tbody>
          </table>
        </div>
      </div>
    )
}

const outer = `
  flex
  flex-col
  sm:px-4
  leaderboard
`;

const wrap = `
  max-w-screen-sm
  sm:mx-auto
  bg-white
  rounded-xl
  p-4
  sm:my-12
  sm:p-12
  w-full
`;

const h1 = `
  text-xl
  sm:text-4xl
  text-center
  mt-4
  mb-4
  sm:mb-8
`;

const span = `
  font-black
  text-indigo-500
`;

const table = `
    w-full
    rounded
    bg-gray-800
    rounded-t-lg
    text-gray-100
    text-sm
`;

const td = `
    p-2
    tracking-wider
`;

const firstTh = `
    w-10
    text-left
    pl-4
`;

const secondTh = `
    text-left
`;

const lastTh = `
    w-16
    text-right
    pr-4
`;

const standing = `
    text-left
    pl-4
`;

const player = `
    text-green-300
`;

const score = `
    text-right
    pr-4
`;

export default Leaderboard
