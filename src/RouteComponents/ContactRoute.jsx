import {Contact} from '../Components/Contact/Contact';
import { BasePageContainer } from './BasePage';

export const ContactRoute = () => {
    return <BasePageContainer children={<Contact />} />;
};