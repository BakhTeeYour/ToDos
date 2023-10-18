import {IButton} from "./Button";
import {FC} from "react";
import classNames from 'classnames';
import s from './button.module.scss'

export const Button: FC<IButton.IProps> = ({children, pending, variant, className, onClick, disabled, type, size}) => {
    return (
        <button className={classNames(className, s[size!], s[variant!])}
                onClick={onClick}
                type={type}
                disabled={disabled || pending}>
            {children}
        </button>
    )
}