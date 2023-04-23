import About from '../Components/About/About';
import { BasePageContainer } from './BasePage';


export const  AboutRoute = () => {
    return(
        <BasePageContainer children={<About />}/>)
}