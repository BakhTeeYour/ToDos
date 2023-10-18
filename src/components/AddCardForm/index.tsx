import s from './addCardForm.module.scss';
import React, {FC, useState} from "react";
import {Textarea} from "../../ui-components/Textarea";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {CustomInput} from "../../ui-components/DatePicker/DatePickerInput";
import {Select} from "../../ui-components/Select";
import {FileDropzone} from "../../ui-components/FileDropzone";
import {DescriptionForm} from "../DescriptionForm";
import {CommentsForm} from "../CommentsForm";


const priority = [
    {
        uid: 'low',
        value: 'low'
    },
    {
        uid: 'medium',
        value: 'medium'
    },
    {
        uid: 'high',
        value: 'high'
    },
];



interface IAddCardForm {
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    priority: string;
    files: File[];
    status: string;
    subTodos: any[];
    comments: any[];
}

export const AddCardForm: FC<{ setOpenForm: (open: boolean) => void }> = ({setOpenForm}) => {
    const [title, setTitle] = useState('initial title');

    const [startDate, setStartDate] = useState<Date>();
    const [endDate, setEndDate] = useState<Date>();

    return (
        <div className={s.addCardForm_wrapper}>
            <div style={{display: 'flex'}}>
                <Textarea placeholder="Title"
                          title="Title"
                          value={title}
                          onChange={(event) => setTitle(event.target.value)}/>
                <div style={{cursor: 'pointer', fontSize: '20px'}} onClick={() => setOpenForm(false)}>x</div>
            </div>
             <DescriptionForm/>
            <div className={s.datePicker}>
                <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)}
                            placeholderText='Start date'
                            customInput={React.createElement(React.forwardRef(CustomInput))}/>
                <DatePicker selected={endDate} onChange={(date: any) => setEndDate(date)} placeholderText='End date'
                            customInput={React.createElement(React.forwardRef(CustomInput))}/>
            </div>
            <div className={s.select_block}>
                <Select options={priority} title='Priority' placeholder='Select priority'/>
                <Select options={priority} title='Status' placeholder='Select status'/>
            </div>
            <FileDropzone name='file'/>
            <CommentsForm/>
        </div>)
}