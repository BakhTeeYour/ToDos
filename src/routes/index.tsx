import {createBrowserRouter} from 'react-router-dom';
import {ToDos} from "../components/ToDos";
import {Projects} from "../components/Projects";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Projects/>
    },
    {
        path: '/todos',
        element: <ToDos/>
    }
])