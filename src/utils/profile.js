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
  console.log('utils', json)
  return json; 
}
