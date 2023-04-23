import { PageNotFound } from '../Components/NotFound/PageNotFound';
import { BasePageContainer } from './BasePage';

export const  PageNotFoundRoute = () => {
    return(
        <BasePageContainer children={<PageNotFound />}/>)
}