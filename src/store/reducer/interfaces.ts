import {ITodos} from "./todos/interfaces";
import {IProjects} from "./projects/interfaces";
import {projectsReducer} from "./projects";

export interface IAction<T> {
    type: string,
    payload: T
}

export interface IRootReducer {
    ToDosReducer: ITodos
    projectsReducer: IProjects
}