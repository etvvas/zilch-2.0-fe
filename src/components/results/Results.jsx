import React from 'react';

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

const Results = ({user1, user2}) => {
  console.log('users', user1, user2)
  return(
    <>
    <h1>Results</h1>
    <table>
      <thead>
          <tr>
              <td>Player</td>
              <td>Rounds</td>
              <td>Score</td>
              <td>Zilches</td>
              <td>Uber Zilches</td>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td id="p1-name"></td>
              <td id="p1-rounds"></td>
              <td id="p1-score"></td>
              <td id="p1-zilches"></td>
              <td id="p1-uberzilches"></td>
          </tr>
          <tr>
              <td id="p2-name"></td>
              <td id="p2-rounds"></td>
              <td id="p2-score"></td>
              <td id="p2-zilches"></td>
              <td id="p2-uberzilches"></td>
          </tr>
      </tbody>
    </table>
    </>
  )
}

export default Results;
