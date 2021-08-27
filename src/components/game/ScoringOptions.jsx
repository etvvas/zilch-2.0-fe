import React from 'react';

const ScoringOptions = () => {
  return (
    <div className={scoringOptionsDisplay}>
      <button className={button + scoringButton}>1 One: 100 pts</button>
      <button className={button + scoringButton}>3 Fives: 300 pts</button>
      <button className={button + scoringButton}>1 Five: 50 pts</button>
      <button className={button + scoringButton}>1 Five: 50 pts</button>
      <button className={button + scoringButton}>1 Five: 50 pts</button>
    </div>
  )
}

const button = `
`;

const scoringOptionsDisplay = `
  flex
  flex-wrap
  gap-4
  justify-center
  p-6
  bg-gray-200
  rounded-lg
`;

const scoringButton = `
  flex-grow
  py-4
  text-center
  rounded
  border
  bg-white
  shadow-sm

  w-1/3
`;

export default ScoringOptions;
