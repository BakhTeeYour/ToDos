import {IProjects} from "./interfaces";
import {IAction} from "../interfaces";
import {Projects} from "../../action/projects/interfaces";

const initialState: IProjects = {
    loading: false,
    error: null,
    projects: []
};

export const projectsReducer = (state = initialState, action: IAction<any>) => {
    switch (action.type) {
        case Projects.GET_PROJECTS_REQ :
            return {
                ...state,
                loading: true,
            };
        case Projects.GET_PROJECTS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case Projects.GET_PROJECTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                projects: action.payload
            }
        default:
            return state
    }
}