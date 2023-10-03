import s from './createTaskForm.module.scss'
import {FC} from "react";

export const CreateTaskForm: FC<any> = ({setOpen}) => {
    return (
        <div className={s.createTaskFrom}>
            <div className={s.createTaskFrom__blur}></div>
            <div className={s.createTaskFrom__wrapper}>
                <div className={s.createTaskFrom__block}>
                    <div className={s.createTaskFrom__content}>
                        <div className={s.createTaskFrom__info}>
                            <div>title</div>
                            <div>description</div>
                            <button onClick={() => setOpen(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}