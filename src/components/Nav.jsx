import React from 'react';
import logo from "./logo.svg";
import "./nav.css";

const Nav = () => {
    return (
        <div className="mobil-container">
            <img src={logo} alt="brand felirat"/>
            <li className="nav-item menu__item footer-item">About</li>
            <li className="nav-item menu__item footer-item">Careers</li>
            <li className="nav-item menu__item footer-item">Events</li>
            <li className="nav-item menu__item footer-item">Products</li>
            <li className="nav-item menu__item footer-item">Support</li>
        </div>               
    )
}

export default Nav;
