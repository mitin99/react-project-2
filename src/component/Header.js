import React from 'react'
import UserInfo from './UserInfo'

function Header() {
  return (
    <div className='topnav'>
        <div className='nav-el login'><UserInfo></UserInfo></div>
    </div>
  )
}

export default Header