export interface ITextareaProps {
    title?: string;
    placeholder?: string;
    onChange?: (event: ChangeEventHandler<HTMLTextAreaElement>) => void;
    value?: string;
    name?: string;
    readOnly?: boolean;
    error?: boolean;
    errorText?: string;
    minRows?: number;
    variant? : 'primary' | 'orange'
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
}