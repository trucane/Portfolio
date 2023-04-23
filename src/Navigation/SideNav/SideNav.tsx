import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFileAlt, faTabletScreenButton } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './sideNav.css';

export const SideNav = () => {
    return(
        <div className="side-nav-container">
            {/* replace home icon with logo */}
            <div className="side-nav-main-item">
                <Link to="/"><FontAwesomeIcon icon={faHouse} /></Link>
            </div>
            <div className="side-nav-main-item">
                <Link to="/"><FontAwesomeIcon icon={faFileAlt} /></Link>
            </div>
            <div className="side-nav-main-item">
                <Link to="/"><FontAwesomeIcon icon={faTabletScreenButton} /></Link>
            </div>
        </div>
    )
}