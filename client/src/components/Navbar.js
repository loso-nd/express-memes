import React from 'react'
import { NavBar, Logo, Nav } from './styled'
import { Link } from "react-router-dom";
import { Button} from '../styles'

function Navbar({ user, setUser })  {
    console.log(user.username)

    function handleLogout(){
        async function logout() {
            const res = await fetch('/logout', { 
                method: 'DELETE', 
            })
            if(res.ok){
                setUser(null)
            };
        };
        logout();
    };

    return (
        <NavBar>
            {user.username ? <h1 style={{margin: '0px 30px', color: "#fff"}}> Welcome {user.username.toUpperCase()},</h1> : null}
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
                {user.admin == "true" ? 
                 <Button as={Link} to="/new">
                    Regex Expressions
                </Button>
                : null }
                <Button variant= "outline" onClick={handleLogout}>
                    Logout
                </Button>
                
            </Nav>
        </NavBar>
    );
}
export default Navbar;