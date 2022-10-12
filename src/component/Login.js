import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'

function Login() {
    const [user, setUser] = useState('')
    const dispatch = useDispatch()
    const {state} = useLocation()
    const login = useSelector(state => state.login)
    const users = Object.values(useSelector(state => state.users))
    const usersCollection = users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)

    const handleLogin = (e) => {
        dispatch({
            type:'login/userLogin',
            payload: user
        })
        e.preventDefault() 
    }
    const handleSelect = (e) => {
        setUser(e.target.value)
    }
  return (
    <form className='login' onSubmit={handleLogin}>
        <div>Select user to login:</div>
        <select value={user} onChange={handleSelect}>
            <option>{usersCollection}</option>
        </select>
        <input type="submit" value="loginConfirm"></input>
    </form>
  )
}

export default Login