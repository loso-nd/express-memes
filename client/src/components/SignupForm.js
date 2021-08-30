import React, { useState } from 'react'
import { Input, Button, Error, FormField, Label, Textarea} from "../styles";
//import { useHistory } from 'react-router-dom'

function SignupForm({ onLogin }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [bio, setBio] = useState("");
    const [errors, setErrors] = useState([])


   // const history = useHistory();

    //handleSubmit function that will handle our fetch
    function handleSubmit(e) {
        e.preventDefault()
            async function signup(){
            const user = {
                username,
                password,
                email,
                bio
            }
            const res = await fetch(`/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({user})
            });
            const userData = await res.json();
            console.log(userData)
            if(!userData.message) {
                console.log(userData)
                onLogin(userData);
            } else {     
                setErrors(userData.message)
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
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                    rows="3"
                    id="bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    />
                </FormField>
                <FormField>
                    <Button variant="outline" color="primary"  type="submit">
                        Sign Up
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