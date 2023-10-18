import {CalendarIcon} from "../../components/icons/CalendarIcon";
import React from "react";
import s from './datePicker.module.scss'


export const CustomInput = (
    props: React.HTMLProps<HTMLInputElement>,
    ref: React.Ref<HTMLInputElement>
) => {

    return (
        <div className={s.datePicker_wrapper}>
            <input
                {...props}
                ref={ref}
                className={s.datePicker_input}
            />
            <CalendarIcon
                width={18}
                height={18}
                color="#3688EA"
                className={s.datePicker_icon}
            />
        </div>
    );
};