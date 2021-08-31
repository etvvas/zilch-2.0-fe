export const getUser = async (username) => {
  const user = await fetch(`${process.env.REACT_APP_LOCAL_URL}/api/v1/users/${username}`)

  const json = user.json()
  return json;
}

export const getPlayerWins = async (id) => {
  const wins = await fetch(`${process.env.REACT_APP_LOCAL_URL}/api/v1/users/${id}/wins`)
  
  const json = wins.json()
  return json;  
}

//player losses - get all games by a user => length - wins; /api/v1/users/user_id/games
export const getPlayerGames = async (id) => {
  const games = await fetch(`${process.env.REACT_APP_LOCAL_URL}/api/v1/users/${id}/games`)
  
  const json = games.json()
  console.log('losses', json)
  return json; 
}

//player zilches - /api/v1/users/user_id/zilches

//player uberZilches - /api/v1/users/user_id/uberZilches
