import { get } from './request.js';

export const getUsers = async () => {
    const users = await get('/api/v1/users')
    const userIds = await users.map(user => user.userId)
    return userIds
}

export const getWins = (idArray) => {
    idArray.map((id) => {
        get(`/api/v1/${id}/wins`)
        return id
    })
}