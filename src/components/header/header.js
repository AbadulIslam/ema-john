import logo from "../../images/logo.png"
import './header.css'
import React from 'react';

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo">
            <img src={logo} alt="" />
            </div>
        <nav>
            <ul><a href="/shop">shop</a>
            <a href="review">order review</a>
            <a href="menage">menage inventory</a></ul>
        </nav>
 


        </div>
    );
};

export default Header