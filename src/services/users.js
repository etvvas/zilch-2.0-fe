import { get } from './request.js';

export const getUsers = async () => {
    const users = await get('/api/v1/users')
    const userIds = await users.map(user => Number(user.userId))
    return userIds
}

export const getWins = (idArray) => {
      const wins = idArray.map(async id =>
       await get(`/api/v1/users/${id}/wins`)
        )
      return wins
}