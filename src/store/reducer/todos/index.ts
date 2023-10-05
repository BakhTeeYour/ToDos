import {ICurrProject, ITodos} from "./interfaces";
import {IAction} from "../interfaces";
import {ToDos} from "../../action/todos/interfaces";

const initialState: ITodos = {
    loading:  false,
    error: null,
    currProject: {} as unknown as ICurrProject
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
                currProject: action.payload
            }
        case ToDos.ADD_TODOS:
            return {
                ...state,
                loading: false,
                error: null,
            }
        default:
            return state;
    }
}