import {Projects} from "./interfaces";
import {Dispatch} from "react";
import {customLocalStorage} from "../../../utils/localStorage";
import {projects} from "../../../components/consts/initialTodos";

const getProjectsReq = () => {
    return {
        type: Projects.GET_PROJECTS_REQ,
        payload: {}
    };
};

const getProjectsFail = (error: string) => {
    return {
        type: Projects.GET_PROJECTS_REQ,
        payload: error
    };
};

const getProjectsSuccess = (data: any[]) => {
    return {
        type: Projects.GET_PROJECTS_SUCCESS,
        payload: data,
    };
};


export const getProjects = () => async (dispatch: Dispatch<any>) => {
    customLocalStorage.set('projects',  projects)
    try {
        dispatch(getProjectsReq());
        dispatch(getProjectsSuccess(customLocalStorage.get('projects')))
    } catch (e) {
        dispatch(getProjectsFail('Error'))
    }
}