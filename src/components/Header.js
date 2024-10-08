import React from 'react';
import '../portfolio.css'; // Correctly importing the portfolio CSS

const Header = () => {
    return (
        <header>
            <h1>Nishtha Agrawal</h1>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#extracurricular">Extracurricular</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
