import { combineReducers } from "redux";
import loginReducer from "../reducer/loginReducer"
import userReducer from "../reducer/userReducer"
import questionReducer from "../reducer/questionReducer"
import formReducer from "../reducer/formReducer"

const rootReducer = combineReducers({
    login: loginReducer,
    user: userReducer,
    question: questionReducer,
    form: formReducer
})
export default rootReducer