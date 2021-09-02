import React from 'react';

const PlayerStats = ({user, wins, losses, zilches, uberZilches}) => {
  return(
    <>
    <h1>Player Stats</h1>
    <h2>user: {user.username}</h2>
    <h2>wins: {wins}</h2>
    <h2>losses: {losses} </h2>
    <h2>zilches: {zilches} </h2>
    <h2>uberZilches: {uberZilches} </h2>
    </>
  )
}

export default PlayerStats;
