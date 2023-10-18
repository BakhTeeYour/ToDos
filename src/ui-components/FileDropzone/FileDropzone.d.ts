export declare namespace IFileDropzone {
    export interface IProps {
        onDrop?: (field: string, value: any,) => void;
        name: string;
        className?: string;
        value?: File[] | File | null
        error? : boolean;
        errorText? : string;
        title?: string;
    }
}