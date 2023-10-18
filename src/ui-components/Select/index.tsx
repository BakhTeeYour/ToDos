import React, {FC, useEffect, useRef, useState} from 'react';
import classNames from 'classnames';
import {ISelect} from './Select';
import {Chevron} from "../../components/icons/chevron";
import {SelectIcon} from "../../components/icons/SelectIcon";
import {useClickOutside} from "../../hooks/useClickOutside";
import {If} from "../If";
import s from './select.module.scss'

export const Select: FC<ISelect.IProps> = (
    {
        value: initialValue = '',
        options,
        title,
        placeholder,
        listTitle,
        onSelect = () => {
        },
    }) => {

    const [active, setActive] = useState(false);
    const [value, setValue] = useState(initialValue || '');

    const handleChange = (value: string) => {
        setValue(value);
        setActive(false);
    };

    const handleClick = () => {
        setActive(!active);
    };

    useEffect(() => {
        if (initialValue) {
            setValue(initialValue);
        }
    }, [initialValue]);

    const ref = useRef<HTMLDivElement>(null);
    useClickOutside(ref, () => setActive(false))

    const items = options.map((item, index) => (
        <div
            key={index}
            className={classNames(
                value === item.value ? s.select_curr_item : s.select_items,
                s.select_items_wrapper
            )}
            onClick={() => {
                handleChange(item.value);
                onSelect(item);
            }}
        >
            {item.value}

            <If condition={value === item.uid}>
                <div
                    className={s.select_curr_value}>
                    <SelectIcon width={8} color='#3688EA' strokeWidth={2}/>
                </div>
            </If>
        </div>
    ));

    return (
        <div className={s.select_wrapper} ref={ref}>
            {title && <h3 className={s.select_title}>{title}</h3>}
            <div
                className={classNames(
                    active ? s.select_active : s.select_disActive, value ? s.select_value : s.select_NotValue,
                    s.select_current)}
                onClick={handleClick}>
        <span
            className={classNames(value ? s.select_span_value : s.select_placeholder)}>
          {value ? value : placeholder}
        </span>
                <Chevron
                    width={12} color={value ? 'white' : 'black'}
                    className={classNames(!active && s.select_chevron)}
                />
            </div>

            {active && (
                <div className={s.select_list_wrapper}>
                    {items}
                </div>
            )}
        </div>
    );
};
