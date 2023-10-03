import headerStyles from './header.module.scss'
import {Chevron} from "../icons/chevron";
import {FC, useState} from "react";
import {SearchIcon} from "../icons/searchIcon";
import {SettingsIcon} from "../icons/settings";
import logo from '../../assets/defaultUser.png';

export const Header: FC = () => {
    const [active, setActive] = useState(true);
    const [search, setSearch] = useState('');

    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.header_wrapper}>
                <div className={headerStyles.header_navbar}>
                    <div className={headerStyles.header_title}>
                        UpTrader
                    </div>
                    <div className={active ? headerStyles.header_rotate : ''} onClick={() => setActive(!active)}>
                        <p>Projects</p>
                        <Chevron/>
                    </div>
                    <button>Create</button>
                </div>
                <div className={headerStyles.header_navbar_profile_block}>
                    <label className={headerStyles.header_search}>
                        <div><SearchIcon/></div>
                        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search'/>
                    </label>
                <SettingsIcon/>
                    <img src={logo} alt="logo" width={30} height={30}/>
                </div>
            </div>
        </header>
    )
}