import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
// import firebase from 'firebase'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [userName, setuserName] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
           
    }
    const register = e => {
        e.preventDefault()
        auth
        .createUserWithEmailAndPassword(email, password)
        
        .then((auth) => {
           if (auth) {
               
               history.push('/');              
           }
        })
        .catch(error => alert(error.message))

    }
    return (
        <div className = "login">
        <Link to = "/">
        <h3 className="header_logo" >ElecStore</h3>

            {/* <img 
            className = "login_logo"
            src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" alt="" /> */}
       </Link>
       <div className = "login_container">
       <h1>Sign-in</h1>
       <form>
           <h5>Username</h5>
           <input type = "text" value = {userName} onChange ={e => setuserName(e.target.value)} />

           <h5>E-mail</h5>
           <input type = "text" value = {email} onChange ={e => setEmail(e.target.value)} />

           <h5>Password</h5>
           <input type = "password" value = {password} onChange ={e => setPassword(e.target.value)} />

           <button type = "submit" 
           onClick={signIn} className = 'login_signInButton'>Sign In</button>
       </form>
        <p>
        By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
        </p>
        <button
        onClick={register} 
        className = "login_registerButton">Create your Amazon Account</button>
       </div> 
       </div>
    )
}

export default Login
