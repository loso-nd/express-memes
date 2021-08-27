import React, { useState } from 'react'
import { Input, Form } from '../components/styled';
import { useHistory } from 'react-router-dom'

function Auth({ setCurrentUser }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState(null)

    const history = useHistory();

    //handleSubmit function that will handle our fetch
    async function handleSubmit(e) {
        e.preventDefault()
        const user = {
            username,
            password,
            email
        }
        const res = await fetch(`/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user})
        });
        const userData = await res.json();
        if(res.ok){
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
                <h1>Sign Up</h1>
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
                <Input
                    type="text"
                    placeholder="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}>
                </Input>
                <Input submit type="submit" value="Sign up"/>
                {errors ? errors.map((error) => <div>{error}</div>): null} 
            </Form>    
        </>
    )
}
export default Auth;
