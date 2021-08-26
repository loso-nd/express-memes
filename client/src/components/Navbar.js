import React, {useState} from 'react'
import { NavBar } from './styled'
import { NavLink } from "react-router-dom";

function Navbar({ currentUser }) {
    console.log(currentUser)
    return (
        <NavBar>
            <h1 style={{color: '#fff', marginRight:30}}>{currentUser.username}</h1>
                {/* {currentUser.username},</h1>
         {currentUser.username ? <h1 style={{color: '#fff', marginRight:30}}>
                
                {currentUser.username},</h1> :null } */}
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
            <NavLink 
                exact
                activeClassName="active"
                to="/sign_up"
            >Sign up
            </NavLink>
            <NavLink 
                exact
                activeClassName="active"
                to="/log_in"
            >Login
            </NavLink>
        </NavBar>
    );
}
export default Navbar;