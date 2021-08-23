import React from 'react'
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavBar = styled.nav`
background: #4a5970;
height: 3.2rem;
display: flex;
align-items: center; 
justify-content: center; 


a {
    text-decoration: none;
    padding: 1em;
    color: #fff;
    transition: background 0.3s 0s ease-in-out;
    &:hover {
      background: #ccbba3;
    }
  }
  a.active {
    background: #ccbba3;
  }
`;



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
            >New Item
            </NavLink>
        </NavBar>
    );
}

export default Navbar;
