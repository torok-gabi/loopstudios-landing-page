import React from 'react';
import Nav from "./Nav";
import "./footer.css";
import email from "./images/email.png";
import linkedin from "./images/linkedin.png";
import github from "./images/github.png";
import logo from "./logo.svg";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-menu-container">
                <img className="footer-img" src={logo} alt="logo felirat"/>
                <Nav />
            </div>
            <div className="icon-container">
                <a href="mailto:torok.gabi@gmail.com" target="_blank"><img src={email} alt="email ikon"/></a>
                <a href="https://www.linkedin.com/in/gabi-torok" target="_blank"><img src={linkedin} alt="linkedIn ikon"/></a>
                <a href="https://github.com/torok-gabi" target="_blank"><img src={github} alt="github ikon"/></a>
                <span className="copy">© 2021 Loopstudios. All rights reserved. By Török Gabi</span>
            </div>
        </div>
    )
}

export default Footer;
