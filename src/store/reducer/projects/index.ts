import {IProjects} from "./interfaces";
import {IAction} from "../interfaces";
import {Projects} from "../../action/projects/interfaces";
import {ICurrProject} from "../todos/interfaces";

const initialState: IProjects = {
    loading: false,
    error: null,
    projects: [],
    editProject: null
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
        case Projects.EDIT_PROJECTS:
            return {
                ...state,
                loading: false,
                error: null,
                editProject: action.payload
            }
        default:
            return state
    }
}