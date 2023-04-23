import React from 'react'
import {Link} from 'react-router-dom'
import './main-header.css'



export const MainHeaderContainer = () => {


    return(
        <div className="main-header-container">
            <div className="main-header-links spacing">
                <Link to="/">Home icon</Link>
                <Link to="/about">About icon</Link>
            </div>

            <div className="main-header-user-container spacing">
                <div className="language">language</div>
                <div className="user-icon">home icon</div>
                <div className="login">login /userName</div>
            </div>
        </div>
    )
}