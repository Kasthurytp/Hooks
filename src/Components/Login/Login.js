import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import {auth} from '../../firebase'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            if(auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

  return (
    <div className='login'>
        <Link to='/' style={{ textDecoration: 'none' }}>
            <h1 className='loginLogo'>Hooks</h1>
        </Link>

        <div className='loginContainer'>
            <h1>Sign in</h1>
            <form>

                <h5>E mail</h5>
                <input type='text' value={email} onChange={ e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type='password' value={password} onChange={ e => setPassword(e.target.value)}/>

                <button className='loginSigninButton' type='submit' onClick={signIn}>Sign In</button>

            </form>

            <p>By signing-in you agree to Hooks'searchConditions of use &
                Sale. Please see our Privacy Notice, our Cookies Noticeand our Interest-Based Ads Notice.
            </p>
            <button className='loginSingupButton' onClick={register}>Create Your Account</button>
        </div>
    </div>
  )
}

export default Login