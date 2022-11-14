import React, { useState } from 'react'
import { Redirect } from 'react-router'

function ErrorPage() {
    const [state, setState] = useState(false)
  return (
   <>{state && <Redirect to='/'></Redirect>}
     {
        !state && <div>
            <h1>Something went wrong ;.;</h1>
            <button onClick={() => {setState(true)}}>Click here to back to main page</button>
        </div>
     }
   </>

   
  )
}

export default ErrorPage