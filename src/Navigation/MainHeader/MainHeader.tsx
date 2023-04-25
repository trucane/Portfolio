import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { faBars, faHouse } from '@fortawesome/free-solid-svg-icons';
import './main-header.css';

export const MainHeaderContainer = () => {
    return (
        <div className="main-header-container">
            <div className="main-header-links-container spacing">
                <div className="hamburger-options">
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className="links spacing">
                    {/* <Link to="/"><FontAwesomeIcon icon={faHouse} /></Link> */}
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>

            <div className="main-header-user-container spacing">
                {/* <div className="language">language</div> */}
                {/* <div className="user-icon"><FontAwesomeIcon icon={faUser} /></div>
                <div className="login">login /userName</div> */}
            </div>
        </div>
    );
};
