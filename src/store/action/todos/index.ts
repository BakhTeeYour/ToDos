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

const addTodosSuccess = (data: any[]) => {
    return {
        type: ToDos.ADD_TODOS,
        payload: data,
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

export const addTodos = (todo: any) => async (dispatch: Dispatch<any>) => {
    try {
        dispatch(getTodosReq());
        dispatch(addTodosSuccess(todo));
    } catch (e) {
        dispatch(getTodosFail());
    }
}