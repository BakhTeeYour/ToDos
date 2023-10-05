import headerStyles from './header.module.scss'
import {FC, useState} from "react";
import {SettingsIcon} from "../icons/settings";
import logo from '../../assets/defaultUser.png';
import {useNavigate} from "react-router-dom";

export const Header: FC = () => {
    const [active, setActive] = useState(true);
    const navigate = useNavigate();
    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.header_wrapper}>
                <div className={headerStyles.header_navbar}>
                    <div className={headerStyles.header_title}>
                        UpTrader
                    </div>
                    <div className={active ? headerStyles.header_rotate : ''} onClick={() => navigate('/')}>
                        <p>Projects</p>
                    </div>
                </div>
                <div className={headerStyles.header_navbar_profile_block}>

                <SettingsIcon/>
                    <img src={logo} alt="logo" width={30} height={30}/>
                </div>
            </div>
        </header>
    )
}