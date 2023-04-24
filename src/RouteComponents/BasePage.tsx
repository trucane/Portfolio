import React, { ReactNode } from 'react';
import { SideNav } from '../Navigation/SideNav/SideNav';
import { MainHeaderContainer } from '../Navigation/MainHeader/MainHeader';
import './basePage.css';

interface Props {
    children: ReactNode;
}

export const BasePageContainer = ({ children }: Props) => {
    return (
        <div className="base-page">
            <SideNav />
            <div className="main-content">
                <MainHeaderContainer />
                <div className="content-container">{children}</div>
            </div>
        </div>
    );
};
