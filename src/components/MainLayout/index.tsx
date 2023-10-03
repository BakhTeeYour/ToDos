import {FC, ReactNode} from "react";
import {Header} from "../Header";
import {Footer} from "../Footer";

interface IMainLayout {
  title?: string;
  description?: string;
  children: ReactNode
}
export const MainLayout: FC<IMainLayout> = ({title, description, children}) => {
    return (
        <>
        <head>
            <title>{title}</title>
            <meta name='description' content={description}/>
            <meta charSet="utf-8" />
        </head>
            <Header/>
            <main>{children}</main>
            {/*<Footer/>*/}
        </>
    )
}