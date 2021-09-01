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
  const uberZilches = await fetch(`${process.env.REACT_APP_LOCAL_URL}/api/v1/users/id/${id}`)
  
  const json = uberZilches.json()
  return json; 
}
