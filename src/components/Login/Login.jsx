import React, { useState } from 'react';
import './Login.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';

function Login() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const signIn = e => {
    e.preventDefault()
    //axios
} 
const register = e => {
    e.preventDefault()
    //axios
}


    return (
        <div className="login">
            {/* <Link to='/'>
                <img className="login_logo" src="https://pbs.twimg.com/media/ERfup7wWsAArWMk?format=jpg&name=small"></img>
            </Link> */}

<div className='login_container'>
<h1>Sign-in</h1>

<form>
    <h5>E-mail</h5>
    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

    <h5>Password</h5>
    <input type='password'value={password} onChange={e => setPassword(e.target.value)}/>

    <button type='submit' onClick={signIn} className='login_signInButton'>Sign In</button>
</form>

<p>
    By sigining in you agree to by pass all GDPR rights
</p>

<button type='submit' onClick={register} className='login_registerButton'>Create Account</button>
</div>

        </div>
    )
}

export default Login
