export interface ICurrProject {
    id: number;
    projectName: string;
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