import {FC, ReactNode} from "react";
import {Header} from "../Header";
import {Footer} from "../Footer";
import React from "react";

interface IMainLayout {
  title?: string;
  description?: string;
  children: ReactNode
}
export const MainLayout: FC<IMainLayout> = ({title, description, children}) => {
    return (
        <>
            <Header/>
            <main>{children}</main>
            {/*<Footer/>*/}
        </>
    )
}