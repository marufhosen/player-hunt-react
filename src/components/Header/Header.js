import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <a href="/home">Home</a>
                <a href="/history">The Club</a>
                <a href="/players">Players</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;