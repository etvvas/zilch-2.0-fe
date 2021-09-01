import React from 'react';

const Results = () => {
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
