import {ToDos} from "./interfaces";
import {Dispatch} from "react";
import {customLocalStorage} from "../../../utils/localStorage";
import {ICurrProject} from "../../reducer/todos/interfaces";

const getTodosReq = () => {
    return {
        type: ToDos.GET_TODOS_REQ,
        payload: {}
    };
};

const getTodosFail = () => {
    return {
        type: ToDos.GET_TODOS_FAIL,
        payload: {}
    };
};

const getTodosSuccess = (data: ICurrProject) => {
    return {
        type: ToDos.GET_TODOS_SUCCESS,
        payload: data
    };
};


export const getTodos = () => async (dispatch: Dispatch<any>) => {
    try {
        dispatch(getTodosReq());
        dispatch(getTodosSuccess(customLocalStorage.get('todo')))
    } catch (e) {
        dispatch(getTodosFail());
    }
}

export const addTodos = (todo: ICurrProject) => async (dispatch: Dispatch<any>) => {
    try {
        dispatch(getTodosReq());
        customLocalStorage.set('todo', todo)
        dispatch(getTodosSuccess(todo));
    } catch (e) {
        dispatch(getTodosFail());
    }
}