import { post } from "./request";

export function postSignup(username, password, avatar) {
    return post('/api/v1/signup', {
        username,
        password,
        avatar
    })
}