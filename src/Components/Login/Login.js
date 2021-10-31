import React from 'react';
import { useHistory, useLocation } from 'react-router';
import './Login.css'
import icon1 from '../../images/google.png';
import useAuth from '../hook/useAuth';

const Login = () => {
    const {signInUsingGoogle, handleRegistration, handleEmailChange, handlePasswordChange, error, toggleLogin, isLogin } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(res => {
            history.push(redirect_uri);
        });
    }


    return (
        <div className="login">
           
            <div className="boxes">
            <h2 className="title">{isLogin ? "Please Login" : "Please Register"}</h2>
                <form className="from" onSubmit={handleRegistration}>
                    <div className="text-center text-danger error"><p>{error}</p></div>
                
                    <div className="input-box">
                        <input onBlur={handleEmailChange} type="email" placeholder="Email" required/>
                    </div>
                    <div className="input-box">
                        <input onBlur={handlePasswordChange} type="password" placeholder="passsword" required/>
                    </div>
                    <div className="cheakbox">
                    <input  onChange={toggleLogin} type="checkbox"/>
                    <label> Already Registered?</label>
                    </div>
                    <div className="input-button">
                        <input type="submit" value={isLogin ? "Login" : "Register"}/>
                    </div>
               
                </form>
                    <div className="signin">
                        <button className="buttn" onClick={handleGoogleLogin}>Google Signin <img style={{width: "25px"}} src={icon1} alt="" /></button>
                    </div>
            </div>
        </div>
    );
};

export default Login;