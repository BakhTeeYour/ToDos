import {combineReducers} from "redux";
import {ToDosReducer} from "./todos";

export const rootReducer = () => combineReducers({
    ToDosReducer
})