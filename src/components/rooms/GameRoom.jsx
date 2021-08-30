import React, { useContext, useEffect, useState } from "react";
import ActiveScoreboard from "../game/ActiveScoreboard";
import Dice from "../game/Dice";
import GameControls from "../game/GameControls";
import PlayerProgress from "../game/PlayerProgress";
// import Player from "../game/Players";
import Rules from "../game/Rules";
import ScoringOptions from "../game/ScoringOptions";
import { useHistory, useParams } from "react-router-dom";
import { useSession } from "../../state/SessionProvider";
import { SocketContext } from "../../state/SocketProvider";

const GameRoom = () => {
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

    socket.on("ROLLED", (dice, scoringOptions) => {
      setDice(dice);
      setScoringOptions(
        scoringOptions.map((option, i) => {
          return {
            ...option,
            id: i,
            selected: false,
          };
        })
      );
    });

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
    //  console.log( "STATE", gameState);     
    //  console.log("CURRENT PLAYER", currentPlayer); 
    //   let matchingUser;
    //   gameState.firstUser.userId === currentPlayer
    //     ? (matchingUser = "firstUser")
    //     : (matchingUser = "secondUser");
    //   if(gameState[matchingUser].roundScore >= 300)  setBankDisabled(false)
    })

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
    // const updateState = scoringOptions.map(option => {

    // })
    setScoringOptions(updatedScoringOptions);
    const selectedScoringOption = updatedScoringOptions.filter(option => option.selected === true)
    socket.emit('UPDATE_SELECTED', selectedScoringOption)
  };


  if (gameState.ready && gameState.ready.length < 2) {
    console.log(gameState.ready);
    return (
      <button
        onClick={handleReady}
        disabled={gameState.ready.find((user) => user === session.userId)}
      >
        READY
      </button>
    );
  }

  return (
    <div className={main}>

      <div className={wrap}>
        <PlayerProgress />
        <ActiveScoreboard />
        <Dice dice={dice} />
        <GameControls 
        gameState={gameState} 
        currentPlayer={currentPlayer} 
        scoringOptions={scoringOptions}
        rollDisabled={rollDisabled}
        bankDisabled={bankDisabled}
        isDisabled={isDisabled}/>
        <ScoringOptions
          scoringOptions={scoringOptions}
          currentPlayer={currentPlayer}
          onChange={handleScoreSelect}
        />
        <Rules />
      </div>
      <Rules />
    </div>
  );
};

const main = `
  relative
  flex
  flex-col
  items-center
`;

const wrap = `
  max-w-screen-sm
  mx-auto
  p-4
  bg-white
  h-full
  sm:rounded-lg
  sm:my-8
  sm:p-12
`;

export default GameRoom;
