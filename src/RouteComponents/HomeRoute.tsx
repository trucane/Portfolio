import React from 'react';
import Home from '../Components/Home/Home';
import { BasePageContainer } from './BasePage';

export const  HomeRoute = () => {
    return(
        <BasePageContainer children={<Home />}/>)
}