import React, {FC} from "react";
import {ITextareaProps} from "./Textarea";
import s from './textarea.module.scss'
import classNames from 'classnames';
import TextareaAutosize from 'react-textarea-autosize';
import {If} from "../If";

const textareaStyle = {
    primary: (condition: boolean) => classNames(s.textarea_style_primary, condition && s.textarea_style_primary_condition),
    orange: () => classNames()
}
export const Textarea: FC<ITextareaProps> = ({
                                                 title,
                                                 placeholder,
                                                 onChange,
                                                 value,
                                                 name,
                                                 readOnly = false,
                                                 error = false,
                                                 errorText,
                                                 minRows = 1,
                                                 variant = 'primary',
                                                 onFocus = () => {
                                                 },
                                             }) => {
    const handleFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
        onFocus(event);
    };
    return (
        <div className={s.textarea_block}>
            <If condition={!!title}>
                <h3 className={variant === 'primary' ? s.primary : s.default}>{title}</h3>
            </If>
            <TextareaAutosize
            minRows={minRows}
            name={name}
            readOnly={readOnly}
            value={value}
            onFocus={handleFocus}
            onChange={onChange}
            placeholder={placeholder}
            className={classNames(s.textarea, textareaStyle[variant](!readOnly), error && s.textarea_error)}
            />
            <If condition={error}>
                <span className={s.textarea_error_text}>{errorText}</span>
            </If>
        </div>
    )
}