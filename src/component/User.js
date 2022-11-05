import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

function User() {
  const history = useHistory()
  const selectedUser = state => state.users[state.login]
  const loggedUser = useSelector(selectedUser)
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch({ type: 'login/logout' })
    history.push('/')
  }
  return (
    <>
      {
        loggedUser &&
        <div className='user-info'>
          <div>{loggedUser && loggedUser.name}</div>
          <button className='logout' onClick={handleLogout}>Logout</button>
        </div>
      }
      {!loggedUser && <div>Please log in</div>}
    </>
  )
}

export default User