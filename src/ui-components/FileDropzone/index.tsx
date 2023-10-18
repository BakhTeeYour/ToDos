import classNames from 'classnames';
import {FC, useEffect, useState} from 'react';
import Dropzone from 'react-dropzone';
import {IFileDropzone} from './FileDropzone';
import {If} from "../If";
import s from './fileDropzone.module.scss'
import {ClipIcon} from "../../components/icons/ClipIcon";
import {Modal} from "../Modal";

export const FileDropzone: FC<IFileDropzone.IProps> = (
    {
        onDrop = () => {
        },
        name,
        error = false,
        errorText,
        title = 'Attachments',
    }) => {

    const [files, setFiles] = useState<any>( null);
    const [preview, setPreview] = useState<any>();
    const [open, setOpen] = useState(false);
    useEffect(() => {
        !files?.length && setFiles(null);
    }, [files])

    return (
        <div className={s.file_dropzone_wrapper}>
            <Dropzone onDrop={(file) => {
                setFiles((prev: any) => files ? [...prev, ...file] : file);
                onDrop("file", file[0])
            }}>
                {({getInputProps, getRootProps, isDragActive}) => (
                    <div
                        {...getRootProps()}
                        className={classNames(
                            isDragActive && s.file_dropzone_drag_active, s.file_dropzone_drag
                        )}>
                        <h3 className={s.file_dropzone_title}>{title}</h3>
                        <ClipIcon className={s.clip_icon}/>
                        <input {...getInputProps()} name={name}/>
                    </div>
                )}
            </Dropzone>
            {files && <div className={s.files_block}>{files?.map((e: any, index: number) => (
                <div key={index} className={s.files_wrapper}>
                    <div  className={s.files_curr}
                          onClick={() => {
                              if (e.type === 'image/png' || e.type === 'image/jpeg') {
                                  setPreview(Object.assign(e, {preview: URL.createObjectURL(e)}));
                                  setOpen(true);
                                  return
                              }
                          }}>{e.fileName || e.name}</div>
                    </div>
            ))}
            </div>}
            <If condition={error}>
                <span className={s.file_dropzone_error}>{errorText}</span>
            </If>

            <If condition={open}>
                <Modal onBackdropClick={() => setOpen(false)}>
                        <img src={preview?.preview} alt=""/>
                </Modal>
            </If>
        </div>
    );
};
