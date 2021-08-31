import React from 'react';
import { useHistory } from 'react-router-dom';
import PlayerVersusPlayer from '../common/PlayerVersusPlayer';
import Results from './Results';

// result
//  resultId;
//   gameId;
//   userId;
//   numberOfRounds;
//   playerScore;

// zilches
// zilchId;
//   gameId;
//   userId;
//   playerZilches;

// uberZilches
    // uberZilchId;
    // gameId;
    // userId;
    // playerUberZilches;

const ResultsPage = ({results}) => {
  const history = useHistory()

  const handleBackToLobby = () => {
    history.push('/lobby')
  }

  return (
    <>
      <div className={resultsPage}>
        <h1>Results Page</h1>
        <PlayerVersusPlayer results={results}/>
        <Results />
        <button className={readyButton} onClick={handleBackToLobby}>{results ? 'Back to Lobby' : 'Ready!'}</button>
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
