import s from './projectsForm.module.scss'
import {FC} from "react";
import {DeleteIcon} from "../icons/deleteIcon";
import {EditIcon} from "../icons/editIcon";
import {useNavigate} from 'react-router-dom';
import {customLocalStorage} from "../../utils/localStorage";
import {ICurrProject} from "../../store/reducer/todos/interfaces";

export const ProjectsForm: FC<
    {
        data: ICurrProject[],
        deleteCurrProject: (currId: string) => void,
        editCurrProject: (currProject: ICurrProject) => void}> = (
    {
        data,
        deleteCurrProject,
        editCurrProject
    }) => {
    const navigate = useNavigate();
    const handleClick = (currProject: ICurrProject) => {
        navigate('/todos')
        customLocalStorage.set('todo', currProject)
    }
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
                    <td style={{cursor: 'pointer'}} onClick={() => handleClick(e)}>{e.projectName}</td>
                    <td>{e.projectType}</td>
                    <td className={s.table_action}>
                        <div onClick={() => editCurrProject(e)}><EditIcon/></div>
                        <div onClick={() => deleteCurrProject(e.id)}><DeleteIcon/></div>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}