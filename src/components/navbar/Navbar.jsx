import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'

import logo from '../../assets/shared/logo.svg'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="navbar">
        <div className="navbar-links">
            <div className="navbar-links_logo">
            <img src={logo} alt='logo'/>
            </div>
            <div className="navbar-links_container">
                <p><Link to="/"><span>00</span> Home</Link></p>
                <p><Link to="/Destination"><span>01</span> Destination</Link></p>
                <p><Link to="/Crewa"><span>02</span> Crew</Link></p>
                <p><Link to="/Technology"><span>03</span> Technology</Link></p>
                
            </div>
        </div>
        <div className="navbar-menu">
            {toggleMenu
            ? <RiCloseLine color="#252B42" size={25} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#252B42" size={25} onClick={() => setToggleMenu(true)} />}
            {toggleMenu && (
            <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
                <p><Link to="/"><span>00</span> Home</Link></p>
                <p><Link to="/Destination"><span>01</span> Destination</Link></p>
                <p><Link to="/Crewa"><span>02</span> Crew</Link></p>
                <p><Link to="/Technology"><span>03</span> Technology</Link></p>
            </div>
            </div>
            )}
        </div>
        </div>
    );
}

export default Navbar