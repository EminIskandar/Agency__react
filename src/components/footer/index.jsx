import React from 'react'
import './css/style.css'
import { Link } from "react-router-dom";

import logo from 'img/logo.png'

const Footer = () => (
        <footer id="Footer">
            <div className="Footer__top-items">
                <img src={logo} alt=""/>
                <div className="Footer__privacy-and-social">
                    <nav className="Privacy__links">
                        <a href="/">Privacy Policy</a>
                        <a href="/">Legal</a>
                    </nav>
                    <div className="Social__media">
                        <a href="/"><i className="fab fa-facebook-f"></i></a>
                        <a href="/"><i className="fab fa-twitter"></i></a>
                        <a href="/"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
            <div className="Footer__bottom-items">
                <nav className="Footer__nav">
                    <Link to="/" className="link" > Home </Link>
                    <Link to="/about"  className="link" > About </Link>
                    <Link to="/subsidiaries"  className="link" > Subsidiaries </Link>
                    <Link to="/career"  className="link" > Career </Link>
                    <Link to="/finance" className="link" > Finance </Link>
                    <Link to="/contact" className="link" > Contact </Link>
                </nav>
                <div className="Footer__text">
                    <p>2018 © All rights reserved.</p>
                </div>
            </div>
        </footer> 
    )
export default Footer