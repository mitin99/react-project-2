import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './Login'

function MainPage() {
  return (
    <div className='main-container'>
        <Switch>
            <Route exact path={"/login"} component={Login}></Route>
        </Switch>
    </div>
  )
}

export default MainPage