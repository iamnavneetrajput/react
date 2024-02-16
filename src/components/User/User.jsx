import React from 'react'
import './User.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
const Login = () => {
    return (
        <>
            <div className="main">
                <div className="login">
                    <div className="login-tem">
                    <h1>Login</h1>
                    <p>Hey there! Enter your details to get sign in to your account.</p>
                    <input type="email" placeholder="Email" name="email" />
                    <input type="password" name="password" placeholder="Password" id="password" />
                    <p>Having trouble signing in? <span className='account' href="#">Click here.</span ></p>
                    <button name="sign_in">Sign In</button>
                    <p>Or Sign In with</p>
                    <button><FontAwesomeIcon icon={faGoogle} /> Google</button>
                    <button><FontAwesomeIcon icon={faFacebook} /> Facebook</button>
                    <p>Don't have an account? <span className='account' href="#">Request here.</span ></p>
                </div>
            </div>
            </div>
        </>
    )
}

export default Login;