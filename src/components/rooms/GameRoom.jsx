import React, { useContext, useEffect, useState } from "react";
import ActiveScoreboard from "../game/ActiveScoreboard";
import Dice from "../game/Dice";
import GameControls from "../game/GameControls";
import PlayerProgress from "../game/PlayerProgress";
import Players from "../game/Players";
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
    });
    return () => socket.emit("DISCONNECT");
  }, []);

  const handleReady = () => {
    socket.emit("PLAYER_READY", room, session.userId);
  };

  const handleScoreSelect = ({ target }) => {
    const updatedScoringOptions = scoringOptions.map((option) => {
      if (option.id === JSON.parse(target.value).id)
        return { ...option, selected: !option.selected };
      else return option;
    });
    setScoringOptions(updatedScoringOptions);
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
    <div className="relative">
      <div className={wrap}>
        <PlayerProgress />
        <Players />
        <ActiveScoreboard />
        <Dice dice={dice} />
        <GameControls gameState={gameState} currentPlayer={currentPlayer} />
        <ScoringOptions
          scoringOptions={scoringOptions}
          currentPlayer={currentPlayer}
          onChange={handleScoreSelect}
        />
        <Rules />
      </div>
    </div>
  );
};

const wrap = `
  max-w-screen-sm
  mx-auto
  p-4
`;

export default GameRoom;
