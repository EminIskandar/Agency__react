import React from 'react'
import { Link } from "react-router-dom";

import logo from '../assets/img/logo.png' 
import logo2 from '../assets/img/logo2.png' 


export default function Header() {
     
    const toggleMenu = React.useRef(null)
    const link = React.useRef(null)
    
    
    React.useEffect(() => {
        document.body.addEventListener('click',(event)=>{ 
            var y = event.clientY; 
            const navToggleTop = document.querySelector('.Nav__toggle-menu ul').offsetTop;   
            if(toggleMenu.current.classList[1] === 'nav-right'){
                if( y < navToggleTop  || y > navToggleTop+42 ){
                    toggleMenu.current.classList.remove('nav-right')
                    toggleMenu.current.classList.add('nav-left') 
                }  
            }
        })
 
        link.current.children[0].classList.add('nav-active0')
    }, [])
    
    
    const openToogleMenu = ()=>{
        toggleMenu.current.classList.remove('nav-left')
        toggleMenu.current.classList.add('nav-right')
    }

    return (
        <>
         <header  >
            <div className="Header_items">
                <div className="Logo">
                    <img  src={logo} alt="logo"  /> 
                </div>
                <nav className="Nav__links" ref={link}>
                    <Link to="/" className="link" > Home </Link>
                    <Link to="/about"  className="link"   > About </Link>
                    <Link to="/subsidiaries"  className="link"   > Subsidiaries </Link>
                    <Link to="/career"  className="link"  > Career </Link>
                    <Link to="/finance" className="link"   > Finance </Link>
                    <Link to="/contact" className="link"   > Contact </Link>
                </nav>
                <div className="Nav__toggle-menu">
                    <div className="Logo_2">
                        <img  src={logo2} alt="logo" /> 
                    </div>
                    <ul className="" onClick={openToogleMenu}>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <div className="Toogle-menu"  ref={toggleMenu}>
                        <nav className="Toogle-menu__links">
                        <Link to="/" className="link" > Home </Link>
                        <Link to="/about"  className="link" > About </Link>
                        <Link to="/subsidiaries"  className="link" > Subsidiaries </Link>
                        <Link to="/career"  className="link" > Career </Link>
                        <Link to="/finance" className="link" > Finance </Link>
                        <Link to="/contact" className="link" > Contact </Link>
                        </nav>
                    </div>
                </div>
            </div>
            </header>
        </>
    )
}
