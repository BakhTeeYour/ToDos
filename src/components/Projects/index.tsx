import {MainLayout} from "../MainLayout";
import s from './projects.module.scss'
import {SearchIcon} from "../icons/searchIcon";
import {useDispatch, useSelector} from "react-redux";
import {IRootReducer} from "../../store/reducer/interfaces";
import {ProjectsForm} from "../ProjectsForm";
import {useEffect} from "react";
import {getProjects} from "../../store/action/projects";

export const Projects = () => {
    const {loading, projects, error} = useSelector((state: IRootReducer) => state.projectsReducer);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProjects());
    }, []);
    return (
        <MainLayout title='Проекты'>
            <div className={s.projects_wrapper}>
                <div className={s.projects_header_block}>
                    <div className={s.projects_title_block}>
                        <h1>Проекты</h1>
                        <button>Create</button>
                    </div>
                    <label className={s.projects_search}>
                        <div><SearchIcon/></div>
                        <input onChange={(e) => {}} type="text" placeholder='Search'/>
                    </label>
                </div>
                <ProjectsForm data={projects}/>
            </div>
        </MainLayout>
    )
}