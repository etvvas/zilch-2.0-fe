import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSession } from "../../state/SessionProvider";
import { SocketContext } from "../../state/SocketProvider";
import WaitingRoom from './WaitingRoom';
import ActiveScoreboard from "../game/ActiveScoreboard";
import Dice from "../game/Dice";
import GameControls from "../game/GameControls";
import PlayerProgress from "../game/PlayerProgress";
import Rules from "../game/Rules";
import ScoringOptions from "../game/ScoringOptions";
import Scoring from '../game/Scoring';
import ResultsPage from '../results/ResultsPage';

const GameRoom = () => {
  const [results, setResults] = useState(false)
  const [gameState, setGameState] = useState({});
  const [currentPlayer, setCurrentPlayer] = useState("");
  const [dice, setDice] = useState([]);
  const [scoringOptions, setScoringOptions] = useState([]);
  const history = useHistory();
  const session = useSession();
  const { room } = useParams();
  const socket = useContext(SocketContext);
  const [rollDisabled, setRollDisabled] = useState(true)
  const [bankDisabled, setBankDisabled] = useState(true)
  const [isDisabled, setIsDisabled] = useState(true)
  const [isRolled, setIsRolled] = useState(false);
  const [isZilch, setIsZilch] = useState(false)
  const [isFreeRoll, setIsFreeRoll] = useState(false)
  // const [pastScores, setPastScores] = useState([])


  useEffect(() => {
    socket.emit("JOIN_ROOM", session, room);
    socket.on("ROOM_JOINED", (gameState) => {
      setGameState(gameState[room]);
    });

    socket.on("FULL_ROOM", () => {
      history.push("/lobby");
      setTimeout(() => alert("Room Full"), 300);
    });

    socket.on("START_GAME", (gameState, index, players) => {
      setGameState(gameState[room]);
      setCurrentPlayer(players[index]);

      // refactor to custom hook setting all pieces of state at once
      setRollDisabled(!(session.userId === players[index]))
      setBankDisabled(true)
      setIsDisabled(!(session.userId === players[index]))

    });

    socket.on("READY", (gameState) => setGameState(gameState[room]));

    socket.on('ZILCH', newCurrentPlayer => {
        setIsZilch(true)
        setCurrentPlayer(newCurrentPlayer)
        setRollDisabled(false)
        setBankDisabled(true)
        setIsDisabled(!(session.userId === newCurrentPlayer))
        setDice([])
        setScoringOptions([])
    })

    socket.on("ROLLED", (dice, scoringOptions, isFreeRoll) => {
      setIsRolled(true)
      setRollDisabled(true)
      setIsZilch(false)
      setIsFreeRoll(false)
      // setIsFreeRoll(false)
      if(isFreeRoll){
        setIsFreeRoll(true)
        setRollDisabled(false)
        setIsZilch(true)
      }
      
      // indicate zilch on FE
    
      setDice(dice);
      setTimeout(() => {
        setScoringOptions(
          scoringOptions.map((option, i) => {
            return {
              ...option,
              id: i,
              selected: false,
            };
          })
        )
        setIsRolled(false)
      }, 500)
    }

    );

    socket.on("BANKED", (gameState, index, players) => {
      setGameState(gameState[room]);
      setCurrentPlayer(players[index]);

      // refactor to custom hook setting all pieces of state at once
      setRollDisabled(false)
      setBankDisabled(true)
      setIsDisabled(!(session.userId === players[index]))
    });

    socket.on('UPDATE_SCORING_OPTIONS', (dice, scoringOptions, gameState) => {
      setGameState(gameState)
      setScoringOptions(scoringOptions)
      setDice(dice)
      setIsZilch(false)
      if(gameState.isFreeRoll){
        setIsFreeRoll(true)
      }

      let matchingUser;
      console.log('CURRENT PLAYER', gameState.players[gameState.currentPlayerIndex]);
      console.log('FIRST USER ID', gameState.firstUser.userId);
      gameState.firstUser.userId === gameState.players[gameState.currentPlayerIndex]
        ? (matchingUser = "firstUser")
        : (matchingUser = "secondUser");
      console.log('GAMESTATE', gameState[matchingUser].roundScore);
      if (gameState[matchingUser].roundScore >= 300) {
        setBankDisabled(false)
      }
      setRollDisabled(false)
      // setBankDisabled(false)
    })

    socket.on('GAME_OVER', (gameData) => {
      console.log(gameData)
      setResults(gameData)
    })
    socket.on("connect", () => {
      console.log('GAMEROOM CONNECTED');
    });
    socket.on("disconnect", (reason) => {
      console.log('GAMEROOM', reason);
    });

    return () => socket.emit("DISCONNECT");
  }, []);

  const handleReady = () => {
    socket.emit("PLAYER_READY", room, session.userId);
  };

  const handleScoreSelect = ({ target }) => {
    const updatedScoringOptions = scoringOptions.map((option) => {
      if (option.id === JSON.parse(target.value).id)
        return { ...option, selected: true };
      else return option;
    });
   
    setScoringOptions(updatedScoringOptions);
    const selectedScoringOption = updatedScoringOptions.filter(option => option.selected === true)
    socket.emit('UPDATE_SELECTED', selectedScoringOption)

  };

  return (
    <div className={main}>

        {results ? <ResultsPage socket={socket} results={results} ready={gameState.ready} user1={gameState.firstUser} user2={gameState.secondUser} room={room} winner={gameState.winner}/> : 
      <div className={wrap}>
        {(gameState.ready && gameState.ready.length < 2) ? <WaitingRoom results={results} onReady={handleReady} ready={gameState.ready} user1={gameState.firstUser} user2={gameState.secondUser} room={room}/> 
        : <>
        <PlayerProgress gameState={gameState}/>
        <ActiveScoreboard 
        gameState={gameState}
        currentPlayer={currentPlayer}/>
        <Dice dice={dice} isRolled={isRolled} />
        <GameControls
          isFreeRoll={isFreeRoll}
          gameState={gameState}
          dice={dice}
          currentPlayer={currentPlayer}
          scoringOptions={scoringOptions}
          rollDisabled={rollDisabled}
          bankDisabled={bankDisabled}
          isDisabled={isDisabled} />
        <ScoringOptions
          isZilch={isZilch}
          scoringOptions={scoringOptions}
          currentPlayer={currentPlayer}
          onChange={handleScoreSelect}
        />
        </>
  }
      </div>

  }
      <div className={footer}>
        <Rules />
        <Scoring />
        <button className={button}>Leave</button>
      </div>
       
      
    </div>
  );
};

const main = `
  h-full
  relative
  flex
  flex-col
  items-center
`;

const wrap = `
  max-w-screen-sm
  w-full
  mx-auto
  p-4
  bg-white
  sm:rounded-lg
  sm:mt-12
  sm:p-12
`;

const footer = `
  max-w-screen-sm
  flex
  flex-row
  gap-2
  sm:gap-4
  justify-center
`;

const button = `
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

export default GameRoom;
