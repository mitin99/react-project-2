import { Switch, Route } from 'react-router-dom'
import AuthRoute from './AuthRoute'
import ErrorPage from './ErrorPage'
import Login from './Login'
import QuestionDatabase from './Question/QuestionDatabase'
import QuestionForm from './Question/QuestionForm'
import QuestionLink from './Question/QuestionLink'
import Rankboard from './Rank/Rankboard'

function MainPage() {
  return (
    <div className='main-container'>
        <Switch>
            <Route exact path={"/login"} component={Login}></Route>
            <Route exact path={"/404"} component={ErrorPage}></Route>
            <Route exact path={"/leaderboard"} component={Rankboard}/>
            <AuthRoute path={"/add"} component={QuestionForm}></AuthRoute>
            <AuthRoute path={"/questions/:question_id"} component={QuestionLink}></AuthRoute>
            <AuthRoute path={["/"]} component={QuestionDatabase}></AuthRoute>
        </Switch>
    </div>
  )
}

export default MainPage