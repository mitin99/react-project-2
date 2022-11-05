import { applyMiddleware,  legacy_createStore as createStore } from "redux";
import rootReducer from "./rootReducer";
import { ThunkMiddleware } from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware, apiMiddleware))
export default store