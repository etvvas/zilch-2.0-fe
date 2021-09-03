import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSession } from "../../state/SessionProvider";
import identifyUser  from "../../utils/identifyUser.js";
import rooms from '../../roomData.js'
const useGameLogic = (socket) => {
  const history = useHistory();
  const session = useSession();
  const { room } = useParams();
  const [results, setResults] = useState(false);
  const [gameState, setGameState] = useState({});
  const [currentPlayer, setCurrentPlayer] = useState("");
  const [dice, setDice] = useState([]);
  const [scoringOptions, setScoringOptions] = useState([]);
  const [rollDisabled, setRollDisabled] = useState(true);
  const [bankDisabled, setBankDisabled] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isRolled, setIsRolled] = useState(false);
  const [isZilch, setIsZilch] = useState(false);
  const [isFreeRoll, setIsFreeRoll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [roundScores, setRoundScores] = useState([]);

  const findMatchingRoom = room => {
    return rooms.find(lobbyRoom => lobbyRoom.roomName === room)
  }

  useEffect(() => {
    const targetScore = findMatchingRoom(room)
    socket.emit("JOIN_ROOM", session, room, targetScore);
    socket.on("ROOM_JOINED", (gameState) => {
      setGameState(gameState[room]);
      setLoading(false);
    });

    socket.on("FULL_ROOM", () => {
      history.push("/lobby");
      setTimeout(() => alert("Room Full"), 300);
    });

    socket.on("START_GAME", (gameState, index, players) => {
      setGameState(gameState[room]);
      setCurrentPlayer(players[index]);
      setRollDisabled(!(session.userId === players[index]));
      setBankDisabled(true);
      setIsDisabled(!(session.userId === players[index]));
    });

    socket.on("READY", (gameState) => setGameState(gameState[room]));

    socket.on("ZILCH", (newCurrentPlayer, roundScores) => {
      setIsZilch(true);
      setCurrentPlayer(newCurrentPlayer);
      setRollDisabled(false);
      setBankDisabled(true);
      setIsDisabled(!(session.userId === newCurrentPlayer));
      setDice([]);
      setScoringOptions([]);
      setRoundScores(roundScores);
    });

    socket.on("ROLLED", (dice, scoringOptions, isFreeRoll) => {
      setIsRolled(true);
      setRollDisabled(true);
      setIsZilch(false);
      setIsFreeRoll(false);
      if (isFreeRoll) {
        setIsFreeRoll(true);
        setRollDisabled(false);
        setIsZilch(true);
      }

      setDice(dice);
      setTimeout(() => {
        setScoringOptions(
          scoringOptions.map((option) => {
            return {
              ...option,
              selected: false,
            };
          })
        );
        setIsRolled(false);
      }, 500);
    });

    socket.on("BANKED", (gameState, index, players, roundScores) => {
      setRoundScores(roundScores);
      setGameState(gameState[room]);
      setCurrentPlayer(players[index]);
      setIsFreeRoll(false);
      setRollDisabled(false);
      setBankDisabled(true);
      setIsDisabled(!(session.userId === players[index]));
    });

    socket.on("UPDATE_SCORING_OPTIONS", (dice, scoringOptions, gameState) => {
      setGameState(gameState);
      setScoringOptions(scoringOptions);
      setDice(dice);
      setIsZilch(false);
      if (gameState.isFreeRoll) {
        setIsFreeRoll(true);
      }
      const matchingUser = identifyUser(gameState);

      if (gameState[matchingUser].roundScore >= 300) {
        setBankDisabled(false);
      }
      setRollDisabled(false);
    });

    socket.on("GAME_OVER", (gameData) => {
      setResults(gameData);
    });
    
    socket.on("connect", () => {
      console.log("GAMEROOM CONNECTED");
    });
    socket.on("disconnect", (reason) => {
      console.log("GAMEROOM", reason);
    });

    socket.on("OPPONENT_DISCONNECT", () => {
      alert("Other player has disconnected, redirecting to Lobby");
      history.push("/lobby");
    });

    return () => socket.emit("DISCONNECT");
  }, []);

  const handleReady = () => {
    socket.emit("PLAYER_READY", room, session.userId);
  };

  const handleLeave = () => {
    history.push("/lobby");
    socket.emit("DISCONNECT");
  };

  const handleScoreSelect = ({ target }) => {
    const updatedScoringOptions = scoringOptions.map((option) => {
      if (option.choice === JSON.parse(target.value).choice)
        return { ...option, selected: true };
      else return option;
    });

    setScoringOptions(updatedScoringOptions);
    const selectedScoringOption = updatedScoringOptions.filter(
      (option) => option.selected === true
    );
    socket.emit("UPDATE_SELECTED", selectedScoringOption);
  };
  return [
    room,
    results,
    gameState,
    currentPlayer,
    dice,
    scoringOptions,
    rollDisabled,
    bankDisabled,
    isDisabled,
    isRolled,
    isZilch,
    isFreeRoll,
    loading,
    roundScores,
    handleReady,
    handleLeave,
    handleScoreSelect,
  ];
};

export default useGameLogic;
