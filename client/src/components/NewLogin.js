import React, { useState} from 'react';
import { Logo, Divider, Button } from './styled'
import styled from 'styled-components';
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

function NewLogin({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <Wrapper>
            <Logo>Regular Expressions</Logo>
            {showLogin ? (
                <>
                <LoginForm onLogin={onLogin} />
                <Divider />
                <p>
                    Don't have an account? &nbsp;
                    <Button color="secondary" onClick={() => setShowLogin(false)}>
                        Sign Up
                    </Button>
                </p>
            </>
            ) : (
                <>
                <SignupForm onLogin={onLogin} />
                <Divider />
                <p>
                    Already have an account? &nbsp;
                    <Button color="secondary" onClick={() => setShowLogin(true)}>
                        Log In
                    </Button>
                </p>
                </>
            )}
        </Wrapper>
    );
}

const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;

export default NewLogin
