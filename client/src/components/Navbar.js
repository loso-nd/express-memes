import React, {useState} from 'react'
import { NavBar, Logo, Nav } from './styled'
import { Link } from "react-router-dom";
import { Button} from '../styles.js'

function Navbar({ user })  {
    console.log(user.id)
    return (
        <NavBar>
            <Logo>
                Regular Expressions
            </Logo>
            <Nav>
                <Button as={Link} to="/">
                    Home
                </Button>
                <Button as={Link} to="/orders">
                    Orders
                </Button>
                <Button as={Link} to="/items/new">
                    Regex Expressions
                </Button>
            </Nav>
        </NavBar>
    );
}
export default Navbar;