import {Projects} from "./interfaces";
import {Dispatch} from "react";
import {customLocalStorage} from "../../../utils/localStorage";
import {ICurrProject} from "../../reducer/todos/interfaces";
import {projects} from "../../../consts/initialTodos";

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

const getProjectsSuccess = (data: ICurrProject[]) => {
    return {
        type: Projects.GET_PROJECTS_SUCCESS,
        payload: data,
    };
};

export const editCurrProject = (editProjects: ICurrProject | null) => {
    return {
        type: Projects.EDIT_PROJECTS,
        payload: editProjects
    }
};


export const getProjects = () => async (dispatch: Dispatch<any>) => {
    try {
        dispatch(getProjectsReq());
        dispatch(getProjectsSuccess(customLocalStorage.get('projects')))
    } catch (e) {
        dispatch(getProjectsFail('Error'))
    }
};

export const addProjects = (newProjects: ICurrProject[], onClose: (close: boolean) => void) => async (dispatch: Dispatch<any>) => {
    try {
        dispatch(getProjectsReq());
        customLocalStorage.set('projects', newProjects)
        dispatch(getProjectsSuccess(newProjects))
        onClose(false)
    } catch (e) {
        dispatch(getProjectsFail('Error'))
    }
}

export const deleteProject = (filteredProjects: ICurrProject[]) => async (dispatch: Dispatch<any>) => {
    try {
        dispatch(getProjectsReq());
        customLocalStorage.set('projects', filteredProjects);
        dispatch(getProjectsSuccess(filteredProjects));
    } catch (e) {
        dispatch(getProjectsFail('Error'));
    }
};

