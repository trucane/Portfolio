import React, { ReactNode, useState } from 'react';
import { SideNav } from '../Navigation/SideNav/SideNav';
import { MainHeaderContainer } from '../Navigation/MainHeader/MainHeader';
import './basePage.css';

interface Props {
    children: ReactNode;
}

export const BasePageContainer = ({ children }: Props) => {

    const [toggleSideNav, setToggleSideNav] = useState<boolean>(false);

    const handleToggleSideNav = () => {
        if(!toggleSideNav){
            document.body.classList.add('side-menu-open');
            document.body.classList.remove('side-menu-close');
        }
        if(toggleSideNav){
            document.body.classList.add('side-menu-close');
            document.body.classList.remove('side-menu-open');
        }
        setToggleSideNav(!toggleSideNav);
    };

    return (
        <div className="base-page"  data-id={children}>
            .
            <SideNav show={toggleSideNav}/>
            <div className="main-content">
                <MainHeaderContainer handleToggleSideNav={handleToggleSideNav} toggleSideNav={toggleSideNav}/>
                <div className="content-container">
                    {children}
                    <div className={`sideMenuOverlay ${toggleSideNav ? "showOverlay" : ''}`}></div>
                </div>
            </div>
        </div>
    );
};
