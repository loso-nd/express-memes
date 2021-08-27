import React, { useState } from 'react'
import { Input, Button, Error, FormField, Label} from "../styles.js";
//import { useHistory } from 'react-router-dom'

function LoginForm({ onLogin }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

   // const history = useHistory();

    //handleSubmit function that will handle our fetch
    function handleSubmit(e) {
        e.preventDefault()
        setIsLoading(true);

        async function login() {
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
            setIsLoading(false);
            console.log(userData)
            onLogin(userData.id);
            //history.push('/')
        } else {
            setErrors(userData.message)
        }
    };
    login();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <FormField>
                <Label htmlFor="username">Username</Label>
                <Input
                    type="text"
                    placeholder="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                </FormField>
                <FormField>
                <Label htmlFor="password">Password</Label>    
                <Input
                    type="text"
                    placeholder="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />              
                </FormField>
                <FormField>
                    <Button variant="outline" color="primary"  type="submit">
                        {isLoading ? "Loading..." : "Login"}
                    </Button>
                </FormField>
                <FormField>
                    {errors.map((error) => (
                        <Error key={error}>{error}</Error>
                    ))} 
                </FormField>
            </form>
        </>
    )
}
export default LoginForm;