interface ITodo {
    id: string;
    name: string;
    todos: any[]
}
export interface ICurrProject {
    id: string;
    projectName: string;
    projectType: string;
    todos: ITodo[]
}

export interface ITodos {
    loading: boolean;
    error: null | string;
    currProject: ICurrProject
}