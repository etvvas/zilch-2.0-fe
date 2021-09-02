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

export const getWinsArray = async () => {
            const users = await getUsers();
            const wins = await getWins(users);
            return Promise.all(wins);
}

export const orderWins = async (winsArray) => {
  const nonZeroWinners = winsArray.filter(n => n.length)
  return nonZeroWinners.sort(function(a, b){
    if (a > b) return -1;
    if (a < b) return 1;
    return 0
  })
}

export const allLeaders = async () => {
  const wins = await getWinsArray();
  const order = await orderWins(wins)
  const leaders = await displayLeaders(order)
  return leaders
}

// export const display = async (array) => {
//   const noZeroLengths = array.filter(n => n.length)
//   const sorted = noZeroLengths.sort(function(a, b){
//     if (a > b) return -1;
//     if (a < b) return 1;
//     return 0
//   })
//   const leaders = sorted.map((wins, i) => (
//      {
//       userId: wins[0].userId,
//       username: wins[0].username,
//       wins: wins.length
//     }
//   ))
//   return leaders
// }

export const displayLeaders = async (totalWins) => {
  const leaders = totalWins.map((wins, i) => (
    {
      userId: wins[0].userId,
      avatar: wins[0].avatar,
      username: wins[0].username,
      wins: wins.length
    }
    ))
  return leaders
}

export const allLeaders = async () => {
  const wins = await getWinsArray();
  const order = await orderWins(wins)
  const leaders = await displayLeaders(order)
  return leaders
}

