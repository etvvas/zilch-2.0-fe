import { XIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';

const Scoring = () => {
  const [isScoringOpen, setIsScoringOpen] = useState(false);

  const handleModal = () => {
    setIsScoringOpen(!isScoringOpen)
    window.scrollTo(0, 0)
  }

  return (
    <div className="w-full flex justify-center">
      <button 
        onClick={handleModal}
        className={scoringButton}>Scoring</button>

      <div className={
        isScoringOpen
        ? modal
        : modal + 'hidden'}>
        <div className={modalWrap}>
            <button className={x}>
              <XIcon 
                onClick={() => setIsScoringOpen(!isScoringOpen)}
                 />
            </button>
            <div className={modalInner}>
                <h2 className={h2}>SCORING</h2>

                <div className={container}>
                    <div className={side}>
                        <h3 className={h3}>Single die</h3>
                        <div className={dice}>
                          <i className={die + 'fa-dice-one'}></i><span className={span}>100 Points Each</span>
                        </div>
                        <div className={dice}>
                          <i className={die + 'fa-dice-five'}></i><span className={span}>50 Points Each</span>
                        </div>

                        <h3 className={h3}>Three of a Kind</h3>
                        <div className={dice}>
                          <i className={die + 'fa-dice-one'}></i>
                          <i className={die + 'fa-dice-one'}></i>
                          <i className={die + 'fa-dice-one'}></i><span className={span}>1000 Points</span>
                        </div>
                        <div className={dice}>
                          <i className={die + 'fa-dice-two'}></i>
                          <i className={die + 'fa-dice-two'}></i>
                          <i className={die + 'fa-dice-two'}></i><span className={span}>200 Points</span>
                        </div>
                        <div className={dice}>
                          <i className={die + 'fa-dice-three'}></i>
                          <i className={die + 'fa-dice-three'}></i>
                          <i className={die + 'fa-dice-three'}></i><span className={span}>300 Points</span>
                        </div>
                        <div className={dice}>
                          <i className={die + 'fa-dice-four'}></i>
                          <i className={die + 'fa-dice-four'}></i>
                          <i className={die + 'fa-dice-four'}></i><span className={span}>400Points</span>
                        </div>
                        <div className={dice}>
                          <i className={die + 'fa-dice-five'}></i>
                          <i className={die + 'fa-dice-five'}></i>
                          <i className={die + 'fa-dice-five'}></i><span className={span}>500 Points</span>
                        </div>
                        <div className={dice}>
                          <i className={die + 'fa-dice-six'}></i>
                          <i className={die + 'fa-dice-six'}></i>
                          <i className={die + 'fa-dice-six'}></i><span className={span}>600 Points</span>
                        </div>
                    </div>
                    <div className={side}>
                        <h3 className={h3}> Four or More of a Kind:</h3> 
                        <div className={subtext}>Every extra die doubles the score.</div>
                        <div className={dice}>
                                <i className={die + 'fa-dice-three'}></i>
                                <i className={die + 'fa-dice-three'}></i>
                                <i className={die + 'fa-dice-three'}></i>
                                <i className={die + 'fa-dice-three'}></i><span className={span}>600 Points</span>
                        </div>

                        <div className={dice}>
                                <i className={die + 'fa-dice-three'}></i>
                                <i className={die + 'fa-dice-three'}></i>
                                <i className={die + 'fa-dice-three'}></i>
                                <i className={die + 'fa-dice-three'}></i>
                                <i className={die + 'fa-dice-three'}></i><span className={span}>1200 Points</span>
                        </div>

                        <h3 className={h3}>Straight</h3>
                        <div className={dice}>
                            <i className={die + 'fa-dice-one'}></i>
                            <i className={die + 'fa-dice-two'}></i>
                            <i className={die + 'fa-dice-three'}></i>
                            <i className={die + 'fa-dice-four'}></i>
                            <i className={die + 'fa-dice-five'}></i>
                            <i className={die + 'fa-dice-six'}></i>
                        </div>
                        <span className={span}>1500 Points</span>

                        <h3 className={h3}>Any Three Pairs</h3>
                        <div className={dice}>
                            <i className={die + 'fa-dice-two'}></i>
                            <i className={die + 'fa-dice-two'}></i>
                            <i className={die + 'fa-dice-four'}></i>
                            <i className={die + 'fa-dice-four'}></i>
                            <i className={die + 'fa-dice-five'}></i>
                            <i className={die + 'fa-dice-five'}></i>
                        </div>
                        <span className={span}>1500 Points</span>

                    </div>
                </div>
                {/* <button 
                  onClick={() => setIsScoringOpen(!isScoringOpen)}
                  className={closeButton}>Close</button> */}
            </div>
        </div>
      </div>
    </div>
  )
}


const container = `
  sm:grid
  sm:grid-cols-2
`;

const side = `
  
`;

const dice = `
  flex
  flex-row
  gap-2
  items-center
`;

const die = `
  fas
  text-4xl
  text-indigo-800
  opacity-50
`;

const scoringButton = `
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

  overflow-hidden

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
  mt-4
  sm:mt-8
`;

const h3 = `
  text-md
  sm:text-lg
  font-extrabold

  mt-4
  mb-1
`;


const subtext = `
  text-xs
  mb-2
`;

const span = `
  text-sm
  font-semibold
`;

export default Scoring;


