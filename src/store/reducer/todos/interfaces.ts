export interface ICurrProject {
    id: string;
    projectName: string;
    projectType: string;
    todos: [{
        id: number;
        name: string;
        todos: any[]
    }]
}

export interface ITodos {
    loading: boolean;
    error: null | string;
    currProject: ICurrProject
}