import React from 'react'
import { NavBar } from './styled'
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <NavBar>
            <NavLink 
                exact
                activeClassName="active"
                to="/"
            >Home
            </NavLink>
            <NavLink 
                exact
                activeClassName="active"
                to="/items/new"
            >Generate Emotions
            </NavLink>
        </NavBar>
    );
}

export default Navbar;
