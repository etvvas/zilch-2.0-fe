/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import avatars from '../../assets/avatars.svg';
import { allLeaders } from "../../services/users";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const placeholderFunc = async () => {
      const leaders = await allLeaders();
      await setLeaderboard(leaders);
      setLoading(false);
    };
    return placeholderFunc();
  }, []);

  const leaderElements = leaderboard.map((leader, i) => (
    <tr>
      <td className={td + standing}>{i + 1}</td>
      <td className={td + player}>
        <Link to={`/profile/${leader.username}`}>
          <div className={playerDiv}>
            <svg className={svg}>
              <use href={avatars + `#${leader.avatar}`} />
            </svg>
            <h3>{leader.username}</h3>
          </div>
        </Link>
      </td>
      <td className={td + score}>{leader.wins}</td>
    </tr>
  ));

  if (loading)
    return (
      <div className={outer}>
        <div className={wrap}>
          <h1 className={h1}>
            <span className={span}>Zilch 2.0</span> Leaderboard
          </h1>
          <table className={table}>
            <thead>
              <tr>
                <th className={td + firstTh}>#</th>
                <th className={td + secondTh}>Player</th>
                <th className={td + lastTh}>Wins</th>
              </tr>
            </thead>
            <tbody>
              <h1>LOADING...</h1>
            </tbody>
          </table>
        </div>
      </div>
    );
    
  return (
    <div className={outer}>
      <div className={wrap}>
        <h1 className={h1}>
          <span className={span}>Zilch 2.0</span> Leaderboard
        </h1>
        <table className={table}>
          <thead>
            <tr>
              <th className={td + firstTh}>#</th>
              <th className={td + secondTh}>Player</th>
              <th className={td + lastTh}>Wins</th>
            </tr>
          </thead>
          <tbody>{leaderElements}</tbody>
        </table>
      </div>
    </div>
  );
};

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

const svg = `
  w-8
  h-8
  sm:w-12
  sm:h-12
  border-4
  border-black
  border-opacity-10
  rounded-full
`;

const playerDiv = `
  flex
  flex-row
  gap-2
  items-center
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
    rounded-lg
    bg-gray-800
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
