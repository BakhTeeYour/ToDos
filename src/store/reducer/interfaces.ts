import {ITodos} from "./todos/interfaces";

export interface IAction<T> {
    type: string,
    payload: T
}

export interface IRootReducer {
    ToDosReducer: ITodos
}