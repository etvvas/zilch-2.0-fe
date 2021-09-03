export default function identifyUser(gameState){
    let matchingUser;
    gameState.firstUser.userId === gameState.players[gameState.currentPlayerIndex]
      ? (matchingUser = "firstUser")
      : (matchingUser = "secondUser");
    return matchingUser
}