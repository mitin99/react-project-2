import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

function AuthRoute({ component:Component,location, ...rest }) {
    let authStatus = useSelector((state) => {
        return state.login
    })
  return (
    <Route
      {...rest}
      render={() =>
        authStatus ? 
        <Component {...rest}/> 
        : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}

export default AuthRoute