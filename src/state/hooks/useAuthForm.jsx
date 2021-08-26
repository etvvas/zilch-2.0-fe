import {useState} from 'react'

const useAuthForm = () => {
    const [isSignUp, setIsSignUp] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [avatar, setAvatar] = useState('')

    const handleChange = ({target}) => {
        if(target.name === 'username') setUsername(target.value)
        if(target.name === 'password') setPassword(target.value)
        if(target.name === 'avatar') setAvatar(target.value)
      }

    return [username, password, avatar, isSignUp, setIsSignUp, handleChange]
}

export default useAuthForm;