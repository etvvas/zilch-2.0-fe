import React from 'react';

const ScoringOptions = () => {
  return (
    <div className={scoringOptionsDisplay}>
      <button className={button + scoringButton}>1 One: 100 pts</button>
      <button className={button + scoringButton}>3 Fives: 300 pts</button>
      <button className={button + scoringButton}>1 Five: 50 pts</button>
      <button className={button + scoringButton}>1 Five: 50 pts</button>
    </div>
  )
}

const button = `
  py-4
  text-center
  w-full
  rounded
`;

const scoringOptionsDisplay = `
  flex
  flex-wrap
  gap-4
`;

const scoringButton = `
  border
  w-1/2
`;

export default ScoringOptions;
