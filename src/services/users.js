import { get } from './request.js';

export const getUsers = async () => {
    const users = await get('/api/v1/users')
    const userIds = await users.map(user => Number(user.userId))
    return userIds
}

export const getWins =  async (idArray) => {
      const wins = await idArray.map(id =>
         get(`/api/v1/users/${id}/wins`)
        )
      return Promise.all(wins)
}


export const orderWins = async (winsArray) => {
  const noneZeroWinners = winsArray.filter(n => n.length)
  const totalWins = noneZeroWinners.map(wins => wins)
  return totalWins.sort(function(a, b){
    if (a > b) return -1;
    if (a < b) return 1;
    return 0
  })
}

export const displayLeaders = async (totalWins) => {
  const leaders = totalWins.map((wins, i) => (
    {
      username: wins[0].username,
      wins: wins.length
    }
    ))
  return leaders
}