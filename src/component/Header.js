import React from 'react'
import { NavLink } from 'react-router-dom'
import UserInfo from './UserInfo'

function Header() {
  return (
    <div className='topnav'>
        <NavLink className="nav-el" activeClassName='active' exact to= {'/'}>Home</NavLink>
        <NavLink className="nav-el" activeClassName='active' exact to= {'/add'}>Add new questions</NavLink>
        <NavLink className="nav-el" activeClassName='active' exact to= {'/leaderboard'}>Rankboard</NavLink>
        <div className='nav-el login'><UserInfo></UserInfo></div>
    </div>
  )
}

export default Header