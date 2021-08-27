import React, { useState } from 'react'
import { Input, Form } from './styled';
import { useHistory } from 'react-router-dom'

function Auth({ setCurrentUser }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState(null)

    const history = useHistory();

    //handleSubmit function that will handle our fetch
    async function handleSubmit(e) {
        e.preventDefault()
        const user = {
            username,
            password
        }
        const res = await fetch(`/log_in`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user})
        });
        const userData = await res.json();
        if(userData.id){
            console.log(userData)
            setCurrentUser(userData);
            history.push('/')
        } else {
            setErrors(userData.message)
        }
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <Input
                    type="text"
                    placeholder="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}>
                </Input>
                <Input
                    type="text"
                    placeholder="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>              
                </Input>

                <Input submit type="submit" value="Log in"/>
                {errors ? errors.map((error) => <div>{error}</div>): null} 
            </Form>
        </>
    )
}

export default Auth;
