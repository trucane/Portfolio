import React, {ReactNode} from 'react';
import { SideNav } from '../Navigation/SideNav/SideNav';
import { MainHeaderContainer } from '../Navigation/MainHeader';


interface Props {
    children: ReactNode
}


export const BasePageContainer = ({children}: Props) => {

    return (
        <div className="base-page">
            <SideNav />
            <div className="main-content">
                <MainHeaderContainer />
                <div className="content">{children}</div>
            </div>
        </div>
    )
}