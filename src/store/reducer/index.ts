import {combineReducers} from "redux";
import {ToDosReducer} from "./todos";
import {projectsReducer} from "./projects";

export const rootReducer = () => combineReducers({
    ToDosReducer,
    projectsReducer,
})