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
      return Promise.all(wins.sort())
}