import {FC, useEffect} from "react";
import s from './modal.module.scss'

interface IProps {
    children: JSX.Element;
    onBackdropClick?: () => void;
}

export const Modal: FC<IProps> = ({children, onBackdropClick}) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);
    return (
        <div className={s.modal_wrapper}
             onClick={onBackdropClick}>
            <div className={s.wrapper_fade_in}>
                {children}
            </div>
        </div>
    )
}