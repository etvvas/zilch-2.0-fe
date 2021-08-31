import React from 'react';
import PlayerVersusPlayer from '../common/PlayerVersusPlayer';
import Results from './Results';

const ResultsPage = ({user1, user2, results, onResultsClick}) => {

  return (
    <>
      <div className={resultsPage}>
        <h1>Results Page</h1>
        <PlayerVersusPlayer results={results} user1={user1} user2={user2}/>
        <Results user1={user1} user2={user2}/>
        <button className={readyButton} onClick={onResultsClick}>{results ? 'Back to Lobby' : 'Ready!'}</button>
      </div>
    </>
  )
}

const resultsPage = `
  bg-white
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

export default ResultsPage;
