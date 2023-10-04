import {ToDos} from "./interfaces";
import {Dispatch} from "react";

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

const getTodosSuccess = (data: any[]) => {
    return {
        type: ToDos.GET_TODOS_SUCCESS,
        payload: data
    };
};

export const addTodos = (todo: any[]) => async (dispatch: Dispatch<any>) => {
    try {
        dispatch(getTodosReq());
        dispatch(getTodosSuccess(todo));
    }  catch (e) {
        dispatch(getTodosFail());
    }
}