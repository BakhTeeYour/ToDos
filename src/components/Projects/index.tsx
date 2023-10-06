import {MainLayout} from "../MainLayout";
import s from './projects.module.scss'
import {SearchIcon} from "../icons/searchIcon";
import {useDispatch, useSelector} from "react-redux";
import {IRootReducer} from "../../store/reducer/interfaces";
import {ProjectsForm} from "../ProjectsForm";
import {useEffect, useState} from "react";
import {addProjects, deleteProject, editCurrProject, getProjects} from "../../store/action/projects";
import {If} from "../../ui-components/If";
import {Modal} from "../../ui-components/Modal";

export const Projects = () => {
    const {loading, projects, error, editProject} = useSelector((state: IRootReducer) => state.projectsReducer);
    const [modal, setModal] = useState(false);
    const [projectName, setProjectName] = useState('');
    const [projectType, setProjectType] = useState('');

    const dispatch = useDispatch();
    const handleAddProject = () => {
        const project = {
            id: editProject ? editProject.id : "id" + Math.random().toString(16).slice(2),
            projectName,
            projectType,
            todos: editProject ? editProject.todos : [] as never,
        };

        setProjectType('');
        setProjectName('');

        if (editProject) {
            const editedProjects = projects.filter(e => e.id !== editProject.id);
            dispatch(addProjects([...editedProjects, project], setModal));
            dispatch(editCurrProject(null));
            return;
        }

        dispatch(addProjects(projects ? [...projects, project] : [project], setModal))
    };
    const handleDeleteProject = (currId: string) => {
        const filteredProjects = projects.filter(e => e.id !== currId);
        dispatch(deleteProject(filteredProjects));
    };
    useEffect(() => {
        dispatch(getProjects());
    }, []);
    return (
        <MainLayout title='Проекты'>
            <div className={s.projects_wrapper}>
                <div className={s.projects_header_block}>
                    <div className={s.projects_title_block}>
                        <h1>Проекты</h1>
                        <button onClick={() => setModal(true)}>Create</button>
                    </div>
                    <label className={s.projects_search}>
                        <div><SearchIcon/></div>
                        <input onChange={() => {
                        }} type="text" placeholder='Search'/>
                    </label>
                </div>
                <ProjectsForm
                    data={projects}
                    deleteCurrProject={(currId) => handleDeleteProject(currId)}
                    editCurrProject={(currProject) => {
                        setProjectName(currProject.projectName);
                        setProjectType(currProject.projectType);
                        setModal(true);
                        dispatch(editCurrProject(currProject))
                    }}/>
            </div>
            <If condition={modal}>
                <Modal onBackdropClick={() => setModal(false)}>
                    <div className={s.project_add_wrapper}>
                        <h3>Добавление проекта</h3>
                        <label className={s.project_add_input}>
                            <input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)}
                                   placeholder="Название проекта"/>
                            <input type="text" value={projectType} onChange={(e) => setProjectType(e.target.value)}
                                   placeholder="Тип проекта"/>
                        </label>
                        <div className={s.project_add_button}>
                            <button onClick={handleAddProject}>Добавить</button>
                            <button onClick={() => {
                                setProjectType('');
                                setProjectName('');
                                setModal(false);
                            }}>Отменить
                            </button>
                        </div>
                    </div>
                </Modal>
            </If>
        </MainLayout>
    )
}