import {combineReducers} from "redux";
//引入reducer
import counterReducer from "./counterReducer.js";
import researchReducer from "./researchReducer.js";

export default combineReducers({
    counterReducer,
    researchReducer
})