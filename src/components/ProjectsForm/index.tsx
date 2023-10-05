import s from './projectsForm.module.scss'
import {FC} from "react";
import {DeleteIcon} from "../icons/deleteIcon";
import {EditIcon} from "../icons/editIcon";
import { useNavigate } from 'react-router-dom';
import {customLocalStorage} from "../../utils/localStorage";

export const ProjectsForm: FC<{ data?: any[] }> = ({data}) => {
    const navigate = useNavigate()
    return (
        <table className={s.table}>
            <thead>
            <tr>
                <th>Имя</th>
                <th>Тип</th>
                <th>Действие</th>
            </tr>
            </thead>
            <tbody>
            {data?.map(e => (
                <tr key={e.id}>
                    <td style={{cursor: 'pointer'}}
                        onClick={() => {
                        navigate('/todos')
                        customLocalStorage.set('todo', e)
                    }}>{e.projectName}</td>
                    <td>{e.type}</td>
                    <td className={s.table_action}><EditIcon/> <DeleteIcon/></td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}