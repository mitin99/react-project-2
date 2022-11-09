import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

function UserInfo() {
    const history = useHistory()
    const authState = (state) => {
        return state.users[state.login]
    }
    const loginUser = useSelector(authState)
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch({type:'login/logout'})
        history.push('/')
    }
  return (
    <>
    {
        loginUser && 
        <div className='user-name'>
            Signed in as: {loginUser && loginUser.name}
            <button className='logout-button' onClick={handleClick}>Logout</button>
        </div>
    }
    {
        !loginUser && 
        <div>Not logged in</div>
    }
    </>
  )
}

export default UserInfo