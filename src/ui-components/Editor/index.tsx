import {Editor} from "@tinymce/tinymce-react";
import React, {FC} from "react";

export const CustomEditor: FC<{value: string, setValue: (val: string) => void, height: number, placeholder: string}>  = ({value, setValue, height, placeholder}) => {
    return (
        <Editor
            initialValue={value ? value : ''}
            onEditorChange={(newValue) => setValue(newValue)}
            init={{
                height: height,
                apiKey: '1bqrv2cqt31p919b08pcz57lu3me5670g6vwipplz19ug29o',
                menubar: false,
                placeholder: placeholder,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                ],
                toolbar: 'undo redo | formatselect | ' +
                    'bold italic backcolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
        />
    )
}