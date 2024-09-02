import { Link as RouterLink } from 'react-router-dom';
import React from "react";
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <div className="auth-buttons">
                    <RouterLink to="/Login" className="auth-button">Login</RouterLink>
                    <RouterLink to="/Register" className="auth-button">Załóż konto</RouterLink>
                </div>
                <ul className="nav-list">
                    <li className="nav-item">
                        <ScrollLink to="home" spy={true} smooth={true} offset={50} duration={500}>Start</ScrollLink>
                    </li>
                    <li className="nav-item">
                        <ScrollLink to="about" spy={true} smooth={true} offset={50} duration={500}>O co chodzi?</ScrollLink>
                    </li>
                    <li className="nav-item">
                        <ScrollLink to="about-us" spy={true} smooth={true} offset={50} duration={500}>O nas</ScrollLink>
                    </li>
                    <li className="nav-item">
                        <ScrollLink to="organizations" spy={true} smooth={true} offset={50} duration={500}>Fundacja i organizacje</ScrollLink>
                    </li>
                    <li className="nav-item">
                        <ScrollLink to="contact" spy={true} smooth={true} offset={50} duration={500}>Kontakt</ScrollLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
