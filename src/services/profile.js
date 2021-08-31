export const getUser = async (username) => {
  const user = await fetch(`${process.env.REACT_APP_LOCAL_URL}/api/v1/users/${username}`)

  const json = user.json()
  return json;
}

export const getPlayerWins = async (id) => {
  console.log('id', id)
  const wins = await fetch(`${process.env.REACT_APP_LOCAL_URL}/api/v1/users/${id}/wins`)
  const json = wins.json()
  
  console.log('wins', json);
  return json;  
}
