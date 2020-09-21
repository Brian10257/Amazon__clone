import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import amazon_logo2 from './img/amazon_logo2.webp';
import { auth } from './firebase';


function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = event  => {
        event.preventDefault(); //this stops the refresh!!!
        // do the login logic...
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) =>{
            // logged in, redirect... to home page
            history.push("/");
        })
        .catch((e) => alert(e.message));
    };

    const register = event => {
        event.preventDefault(); //this stops the refresh!!!
        // do the register logic...
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) =>{
            // create a use and logged in..., redirect to home page
            history.push("/");
        })
        .catch((e) => alert(e.message));
    };
    return (
        <div className="login">
            <Link to='/'>
                <img className="login__logo" alt="HOME" src={amazon_logo2}
            />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form action="">
                    <h5>Email</h5>
                    <input value={email} onChange={event => setEmail (event.target.value)} type="email"/>
                    <h5>Password</h5> 
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                    <button onClick={login} type="submit" className="login__signInButton">Sign in</button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button onClick={register} className="login__registerButton">Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
