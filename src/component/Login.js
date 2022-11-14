import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, Redirect } from 'react-router'

function Login() {
    const [user, setUser] = useState('')
    const dispatch = useDispatch()
    const { state } = useLocation()
    const login = useSelector(state => state.login)
    const users = Object.values(useSelector(state => state.user))
    const usersCollection = users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)

    const handleLogin = (e) => {
        dispatch({
            type: 'login/userLogin',
            payload: user
        })
        e.preventDefault()
    }
    const handleSelect = (e) => {
        setUser(e.target.value)
    }

    return (
    <>
        {
            !login &&
            <form className='login' onSubmit={handleLogin}>
                <h1>Welcome to the "Would you rather" playground!</h1>
                <h2>Select user to login:</h2>
                <select value={user} onChange={handleSelect}>
                    <option>Select user</option>
                    {usersCollection}
                </select>
                <input type="submit" value="Login"></input>
            </form>
        }
        {login && <Redirect to={state?.from || '/'}></Redirect>}
    </>
    )
}

export default Login