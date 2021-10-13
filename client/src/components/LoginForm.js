import React, { useState } from "react";
import { Button, Error, Input, FormField, Label } from "../styles";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    async function login(){
     const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })
      if(res.ok){
        setIsLoading(false);
        const user = await res.json();
        onLogin(user)
      } else {
        const err = await res.json()
        console.log(err)
        setErrors(console.log)
      }
      };
    login()
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormField>
      <FormField>
        <Button variant="fill" color="primary" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </Button>
      </FormField>
      <FormField>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </FormField>
    </form>
  );
}

export default LoginForm;



// import React, { useState } from 'react'
// import { Input, Button, Error, FormField, Label} from "../styles.js";

// function LoginForm({ onLogin }) {
//     const [username, setUsername] = useState("")
//     const [password, setPassword] = useState("")
//     const [errors, setErrors] = useState([]);

//     //handleSubmit function that will handle our fetch
//     function handleSubmit(e) {
//         e.preventDefault()

//         async function login() {
//         const res = await fetch("/login", {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({username, password})
//         });
//         if(res.ok) {
//             console.log(user)
//             const user = await res.json();
//             onLogin(user);
//         } else {     
//             const err = await res.json()
//             setErrors(err.errors)
//         }
//         };
//         login()
//       };

//     return (
//         <form onSubmit={handleSubmit}>
//             <FormField>
//                 <Label htmlFor="username">Username</Label>
//                 <Input
//                     type="text"
//                     placeholder="username"
//                     name="username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                 />
//             </FormField>
//             <FormField>
//                 <Label htmlFor="password">Password</Label>    
//                 <Input
//                     type="text"
//                     placeholder="password"
//                     name="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />              
//             </FormField>
//             <FormField>
//                 <Button variant="outline" color="primary"  type="submit">
//                     Login
//                 </Button>
//             </FormField>
//             <FormField>
//                 {errors.map((err) => (
//                 <Error key={err}>{err}</Error>
//                 ))}
//             </FormField>
//         </form>
       
//     )
// }
// export default LoginForm;