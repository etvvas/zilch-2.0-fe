import { post, get } from "./request";

export function postSignup(username, password, avatar) {
    return post('/api/v1/signup', {
        username,
        password,
        avatar
    })
}
export function postLogin(username, password) {
    return post('/api/v1/login', {
        username,
        password
    })
}

export function getVerify(){
    return get('/api/v1/verify')
}