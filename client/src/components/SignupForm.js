import React, { useState } from 'react'
import { Input, Button, Error, FormField, Label, Textarea} from "../styles.js";
//import { useHistory } from 'react-router-dom'

function SignupForm({ onLogin }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
   // const [bio, setBio] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

   // const history = useHistory();

    //handleSubmit function that will handle our fetch
    function handleSubmit(e) {
        e.preventDefault()
        setIsLoading(true);
            async function signup(){
            const user = {
                username,
                password,
                email
            }
            const res = await fetch(`/log_in`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({user})
            });
            setIsLoading(false);
            if(res.ok){
                const user = await res.json();
                console.log(user)
                onLogin(user);
                //history.push('/')
            } else {
                const err = await res.json();
                setErrors(err.errors)
            }
        }
        signup();
    }

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
                <Label htmlFor="email">Email</Label>    
                <Input
                    type="text"
                    placeholder="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />              
                </FormField>
                <FormField>
                    <Button variant="outline" color="primary"  type="submit">
                        {isLoading ? "Loading..." : "Login"}
                    </Button>
                </FormField>
                <FormField>
                    {errors.map((err) => (
                        <Error key={err}>{err}</Error>
                    ))} 
                </FormField>
            </form>
        </>
    )
}
export default SignupForm;