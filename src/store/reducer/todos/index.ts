import {ITodos} from "./interfaces";
import {IAction} from "../interfaces";
import {ToDos} from "../../action/todos/interfaces";
import {todos} from "../../../components/consts/initialTodos";

const initialState: ITodos = {
    loading:  false,
    error: null,
    todos: todos
};

export const ToDosReducer = (state = initialState, action: IAction<any>): ITodos => {
    switch (action.type) {
        case ToDos.GET_TODOS_REQ:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case ToDos.GET_TODOS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case ToDos.GET_TODOS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                todos: action.payload
            }
        default:
            return state;
    }
}