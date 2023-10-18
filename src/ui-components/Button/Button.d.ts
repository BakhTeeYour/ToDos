export declare namespace IButton {
    export interface IProps {
        children: React.ReactNode;
        onClick?: () => void;
        className?: string;
        disabled?: boolean;
        icon?: React.ReactNode;
        iconPosition?: "left" | "right";
        pending?: boolean;
        type?: 'button' | 'submit' | 'reset';
        variant?:
            | 'primary'
            | 'light'
            | 'dark'
            | 'primary_outlined'
            | 'light_outlined'
            | 'dark_outlined';
        size?: 'sm' | 'md' | 'xs' |'xl' | '2xl'| 'base';
    }
}
