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
                <p className={p}>You can reroll any dice that you didn't score with. Once you have scored points from all six dice
                    you
                    get a free roll!</p>

                <h2 className={h2}>SCORING</h2>
                <div className="scoring-modal-grid">
                    <div className="scoring-modal-half">
                        <h3 className={h3}>Single die</h3>
                        <div className="scoring-dice">
                            <i className="fas fa-dice-one"></i><span>100 Points Each</span>
                        </div>
                        <div className="scoring-dice">
                            <i className="fas fa-dice-five"></i><span>50 Points Each</span>
                        </div>

                        <h3 className={h3}>Three of a Kind</h3>
                        <div className="scoring-dice">
                            <i className="fas fa-dice-one"></i>
                            <i className="fas fa-dice-one"></i>
                            <i className="fas fa-dice-one"></i><span>1000 Points</span>
                        </div>
                        <div className="scoring-dice">
                            <i className="fas fa-dice-two"></i>
                            <i className="fas fa-dice-two"></i>
                            <i className="fas fa-dice-two"></i><span>200 Points</span>
                        </div>
                        <div className="scoring-dice">
                            <i className="fas fa-dice-three"></i>
                            <i className="fas fa-dice-three"></i>
                            <i className="fas fa-dice-three"></i><span>300 Points</span>
                        </div>
                        <div className="scoring-dice"><i className="fas fa-dice-four"></i>
                            <i className="fas fa-dice-four"></i>
                            <i className="fas fa-dice-four"></i><span>400Points</span>
                        </div>
                        <div className="scoring-dice">
                            <i className="fas fa-dice-five"></i>
                            <i className="fas fa-dice-five"></i>
                            <i className="fas fa-dice-five"></i><span>500 Points</span>
                        </div>
                        <div className="scoring-dice"><i className="fas fa-dice-six"></i>
                            <i className="fas fa-dice-six"></i>
                            <i className="fas fa-dice-six"></i><span>600 Points</span>
                        </div>
                    </div>
                    <div className="scoring-modal-half">
                        <h3 className={h3}> Four or More of a Kind:</h3> <div className="subtext">Every Extra Die Doubles the Three of a Kind Score</div>
                        <div className="scoring-dice">
                                <i className="fas fa-dice-three"></i>
                                <i className="fas fa-dice-three"></i>
                                <i className="fas fa-dice-three"></i>
                                <i className="fas fa-dice-three"></i><span>600 Points</span>
                        </div>

                        <div className="scoring-dice">
                                <i className="fas fa-dice-three"></i>
                                <i className="fas fa-dice-three"></i>
                                <i className="fas fa-dice-three"></i>
                                <i className="fas fa-dice-three"></i>
                                <i className="fas fa-dice-three"></i><span>1200 Points</span>
                        </div>

                        <h3 className={h3}>Straight</h3>
                        <div className="scoring-dice">
                            <i className="fas fa-dice-one"></i>
                            <i className="fas fa-dice-two"></i>
                            <i className="fas fa-dice-three"></i>
                            <i className="fas fa-dice-four"></i>
                            <i className="fas fa-dice-five"></i>
                            <i className="fas fa-dice-six"></i>
                        </div>
                        <span>1500 Points</span>

                        <h3 className={h3}>Any Three Pairs</h3>
                        <div className="scoring-dice">
                            <i className="fas fa-dice-two"></i>
                            <i className="fas fa-dice-two"></i>
                            <i className="fas fa-dice-four"></i>
                            <i className="fas fa-dice-four"></i>
                            <i className="fas fa-dice-five"></i>
                            <i className="fas fa-dice-five"></i>
                        </div>
                        <span>1500 Points</span>
                    </div>
                </div>
                {/* <button 
                  onClick={() => setisRulesOpen(!isRulesOpen)}
                  className={closeButton}>Close</button> */}
            </div>
        </div>
      </div>
    </div>
  )
}

const rulesButton = `
  bg-purple-400
  bg-opacity-50
  rounded-full
  py-1
  px-8
  my-4
  mx-auto
  text-white
  mx-auto
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
  pb-2
`;

const modalWrap = `
  relative
  max-w-screen-sm
  mx-auto
  bg-white
  rounded
  h-full
  pt-12
  sm:h-4/5
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
  font-black
  mt-8
`;

const h3 = `
  text-lg
  font-bold
  mt-4
  mb-1
`;

const p = `
  text-sm
`;

export default Rules;
