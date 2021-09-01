export const getUser = async (username) => {
  const user = await fetch(`${process.env.REACT_APP_HEROKU_URL}/api/v1/users/${username}`)

  const json = user.json()
  console.log('json', json)
  return json;
}
