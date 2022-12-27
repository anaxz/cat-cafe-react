import React from "react";
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

import './Header.css';

function Header() {
    return <>
        <h1>Cat Cafe</h1>
        <Navbar id='navbar'>
            <NavLink className='nav-link' to='home'>Home</NavLink> 
            <NavLink className='nav-link' to='menu'>Menu</NavLink>
            <NavLink className='nav-link' to='contact-us'>Contact us</NavLink>
        </Navbar>
        <Outlet />
    </>
}

export default Header;

// need activateClassName to do current css link but need another script?