import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return( 
    <div className="home-container">
        <div className="home-container-left-side set-spacing">
            <div className="content">
                <h1 className="title">Full Stack Software <span className="developer">{`<Developer />`}</span></h1>
                <p className="description">
                    Hello, my name is Henry Leverette. I am a
                    software and web developer based out of Chicago. Developing
                    rich web applications and seamless web experiences. Hire me. Come collab with me.
                </p>
                <Link to='/about'>about me &#8594;</Link>
            </div>
        </div>
        <div className="home-container-right-side set-spacing">
            <img alt='laptop' src='https://fibwave.in/wp-content/uploads/2022/11/Slide-1-Laptop.gif' />
        </div>
    </div>
    );
};

export default Home;
