import {ICurrProject} from "../todos/interfaces";

export interface IProjects {
    loading: boolean;
    error: null | string;
    projects: ICurrProject[];
    editProject: ICurrProject | null;
}