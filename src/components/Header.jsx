import React from 'react';
import logo from "./logo.svg"
import "./headers.css";
import Nav from './Nav';


const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <img className="menu-img" src={logo} alt="logo felirat"/>
                <input type="checkbox" name="hamburger" id="menu__toggle" />
                <label htmlFor="menu__toggle" className="hamburger-button">
                    <span className="hamburger-lines"></span>
                </label>
                <div className="row-container"><Nav /></div>              
                <div className="menu__box">                              
                    <ul className="menu-box-container">
                        <Nav />
                    </ul>
                </div>
            </nav>
            <div className="title-container">
                <h1 className="title">Immersive experiences that deliver</h1>
            </div>
        </header>
    )
}

export default Header;
