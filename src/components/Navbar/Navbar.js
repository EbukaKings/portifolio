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
                            {/* <li><Link to="../../contact-info/Contactinfo.js">Home</Link></li> */}
                                <li>About</li>
                                <li>Works</li>
                                <li>Contact</li>
                            </ul>
                            <div className='collapse-contact'>
                                <img src={email} alt="Email" />
                                <img src={github} alt="GitHub" />
                                <img src={linkdin} alt="LinkedIn" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
