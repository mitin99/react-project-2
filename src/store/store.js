import { applyMiddleware,  legacy_createStore as createStore } from "redux";
import rootReducer from "./rootReducer";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunkMiddleware  from "redux-thunk";
import  apiMiddleware  from "../api/apiMiddleware"

const composeEnhancers = composeWithDevTools({trace:true, traceLimit:20})
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware, apiMiddleware)))
export default store