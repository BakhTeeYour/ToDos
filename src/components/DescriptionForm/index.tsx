import React, {useState} from "react";
import s from './descriptionForm.module.scss'
import {If} from "../../ui-components/If";
import {CustomEditor} from "../../ui-components/Editor";
import {Button} from "../../ui-components/Button";

export const DescriptionForm = () => {
    const [value, setValue] = useState('');
    const [open, setOpen] = useState(false);
    const handleCurrEl = () => {
        setOpen(true);
    };
    return (
        <div className={s.description_wrapper}>
            <div className={s.description}><div className={s.description_title}>Description</div></div>
            <If condition={!value && !open}>
                <div onClick={handleCurrEl} className={s.description_add_title}>Add a more detailed description...</div>
            </If>
            <If condition={!open && !!value}>
                <div onClick={handleCurrEl} dangerouslySetInnerHTML={{__html: value}}></div>
            </If>
            <If condition={open}>
                <CustomEditor value={value} setValue={setValue} height={250} placeholder='Add more details'/>
                <div className={s.description_save_btn}>
                <Button size="base" variant="primary_outlined" onClick={() => setOpen(false)}>Save</Button>
                </div>
            </If>
        </div>
    )
}