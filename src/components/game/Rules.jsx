import { XIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';

const Rules = () => {
  const [isRulesOpen, setisRulesOpen] = useState(false);

  const handleModal = () => {
    setisRulesOpen(!isRulesOpen)
    window.scrollTo(0, 0)
  }

  return (
    <div className="w-full flex justify-center">
      <button 
        onClick={handleModal}
        className={rulesButton}>Rules</button>

      <div className={
        isRulesOpen
        ? modal
        : modal + 'hidden'}>
        <div className={modalWrap}>
            <button className={x}>
              <XIcon 
                onClick={() => setisRulesOpen(!isRulesOpen)}
                 />
            </button>
            <div className={modalInner}>
                <h2 className={h2}>RULES</h2>
                <h3 className={h3}>Roll Dice</h3>
                <p className={p}>You start your turn by rolling all six dice.</p>
    
                <h3 className={h3}>Rolled scoring dice?</h3>
                <p className={p}>If you rolled some scoring dice then you need to take some of those points before you can roll again. </p>
    
                <h3 className={h3}>No scoring dice? You zilched!</h3>
                <p className={p}>You bank no points and it's the end of your turn. If this is your third zilch in a row then you lose 500 points.</p>
    
                <h3 className={h3}>Scored 300 or more? Bank the points.</h3>
                <p className={p}>Once you have taken at least 300 points you can choose to bank them and end your turn or keep on rolling the dice. But careful, if you keep rolling you could zilch out.</p>
    
                <h3 className={h3}>Re-roll the remaining dice</h3>
                <p className={p}>You can reroll any dice that you didn't score with. Once you have scored points from all six dice you get a free roll!</p>
            </div>
        </div>
      </div>
    </div>
  )
}

const rulesButton = `
text-indigo-500
bg-gray-100
  sm:bg-purple-400
  sm:bg-opacity-50
  sm:text-white
  rounded-full
  py-1
  px-8
  my-4
  w-max
`;

const modal = `
  bg-black
  bg-opacity-50
  fixed
  top-0
  left-0
  right-0
  bottom-0
  px-2
  pt-20
  sm:pt-36
  pb-2
`;

const modalWrap = `
  relative
  max-w-screen-sm
  mx-auto
  bg-white
  rounded
  pt-12

  h-full
  sm:h-auto

`;

const modalInner = `
  border-t
  overflow-y-auto
  h-full
  px-8
  pb-8
`;

const x = `
  absolute
  top-2
  right-2
  w-8
  h-8
  text-gray-700
`;

const h2 = `
  text-2xl
  text-center
  text-indigo-700
  font-black
  mt-8
`;

const h3 = `
  text-md
  sm:text-lg
  font-extrabold
  mt-4
  mb-1
`;

const p = `
  text-sm
`;

export default Rules;
