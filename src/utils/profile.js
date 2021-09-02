export const getUser = async (username) => {
  const user = await fetch(`${process.env.REACT_APP_HEROKU_URL}/api/v1/users/${username}`)

  const json = user.json()
  return json;
}

export const getPlayerWins = async (id) => {
  const wins = await fetch(`${process.env.REACT_APP_HEROKU_URL}/api/v1/users/${id}/wins`)
  
  const json = wins.json()
  return json;  
}

export const getPlayerGames = async (id) => {
  const games = await fetch(`${process.env.REACT_APP_HEROKU_URL}/api/v1/users/${id}/games`)
  
  const json = games.json()
  return json; 
}

export const getPlayerZilches = async (id) => {
  const zilches = await fetch(`${process.env.REACT_APP_HEROKU_URL}/api/v1/users/${id}/zilches`)
  
  const json = zilches.json()
  return json; 
}

export const getPlayerUberZilches = async (id) => {
  const uberZilches = await fetch(`${process.env.REACT_APP_HEROKU_URL}/api/v1/users/${id}/uberZilches`)
  
  const json = uberZilches.json()
  return json; 
}

export const getUserById = async (id) => {
  const uberZilches = await fetch(`${process.env.REACT_APP_HEROKU_URL}/api/v1/users/id/${id}`)
  
  const json = uberZilches.json()
  return json; 
}

export const getGameResults = async (gameId) => {
  const gameResults = await fetch(`${process.env.REACT_APP_HEROKU_URL}/api/v1/games/${gameId}/results`)
  
  const json = gameResults.json()
  return json; 
}

export const getGameZilches = async (gameId) => {
  const gameZilches = await fetch(`${process.env.REACT_APP_HEROKU_URL}/api/v1/games/${gameId}/zilches`)
  
  const json = gameZilches.json()
  return json; 
}

export const getGameUberZilches = async (gameId) => {
  const gameUberZilches = await fetch(`${process.env.REACT_APP_HEROKU_URL}/api/v1/games/${gameId}/uberZilches`)
  
  const json = gameUberZilches.json()
  return json; 
}

export function getWinner(user, user1, user2, playerScore1, playerScore2, result) {

      if(!playerScore1[0]) return result = "INCOMPLETE"

      if(user.userId === user1.userId) {
       // user1 return
       if(playerScore1[0] < playerScore2[1]) {
         return result = 'LOSE'
       } else {
         return result = 'WIN'
       }
      } 

      if(user.userId === user2.userId) {
        // user2 return
        if(playerScore1[0] > playerScore2[1]) {
          return result = 'LOSE'
        } else {
          return result = 'WIN'
        }
      }
      
    }
