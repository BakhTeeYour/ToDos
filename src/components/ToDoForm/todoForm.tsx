import {DocumentFileIcon} from "../icons/document";
import {FC} from "react";
import s from './todoForm.module.scss'

export const TodoForm: FC<{title?: string}> = ({title = 'untitled'}) => {
    return (
        <div className={s.todoForm}>
            <div className={s.todoForm_wrapper}>
            <DocumentFileIcon/>
            <p className={title === 'untitled' ? s.todoForm_title : ''}>{title}</p>
            </div>
        </div>
    )
}