import "./login.css"
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { auth, signInWithGooglePopup, createUserDocFromAuth } from "../utils/firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';




const LoginForm = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    setLoginError("");
    console.log("email:"+email);
    console.log("password:"+password);
    try{
      const userCredential = await signInWithEmailAndPassword(
        auth, 
        email, 
        password
      );
      const user = userCredential.user;
      console.log("User logged in:", user);
      navigate('/');
    } catch (error){
      // alert("Login failed. Please check your email and password.Reason:"+error);
      if(error.code == "auth/invalid-login-credentials"){
        setLoginError("Please check your email and password")
      }
    }
    

  };

  const logGoogleUser = async () => {
    try {
        const user = await signInWithGooglePopup();
        if (user) {
          // 用户已成功登录
          console.log('Google Sign-In Success:', user);
          // 这里可以执行跳转或其他操作
        }
      } catch (error) {
        alert("Fail to open Google Provider:"+error);
      }
  };


  return (
    <div className="d-grid gap-2 center-div form-border">
      {/* <button className="center-item" onClick={logGoogleUser}>Login with Google</button> */}
      <h2>Login in</h2>
    
        <div className="center-item">
          <label htmlFor="emailInput" className="form-label input-box" >Email address</label>
          <input type="email" className={`form-control ${loginError ? "is-invalid" : ""}`} value={email} onChange={handleEmailChange} id="login_email_input" placeholder="name@example.com" />
        </div>

        <div className="center-item">
          <label htmlFor="passwordInput" className="form-label">Password:</label>
          <input type="password" className={`form-control ${loginError ? "is-invalid" : ""}`} value={password} onChange={handlePasswordChange}  id="login_password_input" />
          {loginError && (
                        <div className="invalid-feedback">{loginError}</div>
                    )}
        </div>
        

      <button className="btn btn-primary center-button" onClick={handleLogin}>Login</button>
      <button className="btn btn-primary center-button">
          <Link to="/signup" className="link-no-style">No account? Sign up!</Link>
        </button>
    </div>
  );
}
export default LoginForm;
