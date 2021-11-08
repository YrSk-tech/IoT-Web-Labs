import React, { useState } from 'react';
import { NavbarContainer, NavbarLogo, MenuIcon, NavMenu, NavMenuActive, NavLink } from './Navbar.styled';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const Menu = !click ? NavMenu : NavMenuActive;

    return ( <
        NavbarContainer >
        <
        NavbarLogo to = '/'
        onClick = { closeMobileMenu } >
        <
        h3 > OT < /h3> <
        /NavbarLogo> <
        MenuIcon onClick = { handleClick } >
        <
        i className = { click ? 'fas fa-times' : 'fas fa-bars' }
        style = {
            { color: 'white', marginRight: '20px' } }
        /> <
        /MenuIcon> <
        Menu >
        <
        li >
        <
        NavLink to = '/'
        onClick = { closeMobileMenu } >
        Home <
        /NavLink> <
        /li> <
        li >
        <
        NavLink to = '/catalog'
        className = 'nav-links'
        onClick = { closeMobileMenu } >
        Catalog <
        /NavLink> <
        /li> <
        li >
        <
        NavLink to = '/cart'
        className = 'nav-links'
        onClick = { closeMobileMenu } >
        Cart <
        /NavLink> <
        /li> <
        /Menu> <
        /NavbarContainer>
    );
}

export default Navbar;