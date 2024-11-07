import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Toggle from '../toggle/Toggle';
import email from '../../img/email-png.png';
import github from '../../img/github--png.png';
import linkdin from '../../img/linkdin-png.png';


function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const handleHamburgerClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div className='n-wrapper'>
            <div className='n-left'>
                <div className='n-name'>Kings</div>
                <Toggle />
            </div>
            <div className='n-right'>
                <div className='n-list'>
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experiences</li>
                        <li>Portfolio</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
                <div className='navbar-container'>
                    <div className={`hamburger-div ${isActive ? 'active' : ''}`} onClick={handleHamburgerClick}>
                        <div className="hamburger-line"></div>
                        <div className="hamburger-line"></div>
                        <div className="hamburger-line"></div>
                    </div>
                    {isActive && (
                        <div className='nav-bar'>
                            <ul className='navbar-ul'>
                                <li><Link className='underline' to="/Home">Home</Link></li>
                                <li><Link className='underline' to="/About">About</Link></li>
                                <li><Link className='underline' to="/Works">Works</Link></li>
                                <li><Link className='underline' to="/contact-info">Contact Info</Link></li>
                                
                            </ul>
                            <div className='collapse-contact'>
                                <a className='img-link'><img src={email} alt="Email" /></a>
                                <a className='img-link'><img src={github} alt="GitHub" /></a>
                                <a className='img-link'><img src={linkdin} alt="LinkedIn" /></a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
