import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [user, setUser] = useState();

    async function checkLogin(){
        const data = {email: email, password: password}
        try {
            const response = await fetch("/login", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            console.log('--login response')
            console.log(response)
            return response
        } catch(err){
            console.log(err)
        }
    }
    
    function handleSubmit(e){
        e.preventDefault()
        console.log('click')
        checkLogin()
        // setPassword('')
    }

    return <>
    <form>
        <label htmlFor="email">Email:</label>
        <input type="text" name='email' placeholder="a@gmail.com"
            onChange={(e) => setEmail(e.target.value)} required ></input>
        <label htmlFor="password">Password:</label>
        <input type="password" name='password' placeholder="password"
            onChange={(e) => setPassword(e.target.value)} required ></input>
        <button type="submit" onClick={handleSubmit} >Submit</button>
    </form>

    <div>
        <h3>Hello user {email} {password}</h3>
    </div>
    </>
}

export default Login