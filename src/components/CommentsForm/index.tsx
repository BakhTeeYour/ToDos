import {If} from "../../ui-components/If";
import {CustomEditor} from "../../ui-components/Editor";
import {Button} from "../../ui-components/Button";
import React, {useState} from "react";
import s from './commentsForm.module.scss'

const comments: any = []

export const CommentsForm = () => {
    const [comment, setComment] = useState('');
    const [open, setOpen] = useState(false);

    const handleCurrEl = (comment = '') => {
        setComment(comment)
        setOpen(true);
    };
    return (
        <div className={s.comments_wrapper}>
            <div className={s.comments_title}>Comments</div>
            <If condition={!open && !comment}>
                <div onClick={() => handleCurrEl()} className={s.comments_add}>Write a comment...</div>
            </If>
            <If condition={open}>
                <CustomEditor value={comment} setValue={setComment} height={150} placeholder='Write a comment'/>
                <div className={s.addDescription_btn}>
                    <Button size="base" variant="primary_outlined" disabled={!comment} onClick={() => {
                        comments.push({value: comment, id: Date.now()})
                        setOpen(false);
                        setComment('');
                    }}>Save</Button>
                </div>
            </If>
            <If condition={comments.length > 0}>
                {comments?.map((e: any) => (
                    <div>
                        <div className={s.comments_block} key={e.id} onClick={() => handleCurrEl(e.value)}
                             dangerouslySetInnerHTML={{__html: e.value}}></div>
                        <div className={s.comments_actions}><div>Edit</div><div>Delete</div></div>
                    </div>
                ))}
            </If>
        </div>
    )
}