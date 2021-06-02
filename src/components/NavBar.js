import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
//import { FaBars, FaTimes } from 'react-icons/fa';
import"./NavBar.css"

function NaviBar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)


    return (
        
        <div className="navbar-container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand color=black" href="/">
                Kassandra Cruit               
           </a>
           <a className="navbar-brand" href="/">
                About Me               
           </a>
           <a className="navbar-brand" href="/pages/project">
                Portfolio                
           </a>
           <a className="navbar-brand" href="/pages/contact">
                Contact               
           </a>
                {/* <div classname="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>  
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                        
                        </li>      */}
                {/* </ul> */}
                </nav>
        </div>
        
    )
}

export default NaviBar
