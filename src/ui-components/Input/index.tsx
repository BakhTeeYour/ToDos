import React, {FC, useState} from "react";
import {IInput} from "./Input";
import s from './input.module.scss'
import classNames from "classnames";
import {If} from "../If";
import {SearchIcon} from "../../components/icons/searchIcon";

export const Input: FC<IInput.IProps> = ({
                                             value,
                                             error = false,
                                             errorText,
                                             placeholder = '',
                                             onChange = () => {
                                             },
                                             onBlur = () => {
                                             },
                                             onFocus = () => {
                                             },
                                             name,
                                             title = '',
                                             type = 'text',
                                             primary = false,
                                             onKeyDown,
                                             withSearchIcon = false
                                         }) => {

    const [active, setActive] = useState(false);

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        setActive(false);
        onBlur(event);
    };
    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        setActive(true);
        onFocus(event);
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event);
    };
    return (
        <div className={s.input_block}>
            {title && <h3 className={primary ? s.primary : s.default}>{title}</h3>}
            <div
                className={classNames(s.input_wrapper, active ? s.input_active : s.input_disActive, error && s.input_error)}
                onFocus={handleFocus}>
                <input
                    type={type}
                    className={s.input_el}
                    value={value}
                    onChange={handleChange}
                    onKeyDown={onKeyDown}
                    onBlur={handleBlur}
                    name={name}
                    placeholder={placeholder}/>
                {withSearchIcon && <div><SearchIcon/></div>}
            </div>
            <If condition={!!errorText}>
                <p className={s.input_error_text}>{errorText}</p>
            </If>
        </div>
    )
}