import React from "react";
import "./login.css";



const Login = () => {
  return (
    <div className="login-container">
      <div id="main">
        <h1>Sign In</h1>
        <input id="email" type="text" placeholder="Email" />
        <input id="password" type="password" placeholder="Password" />
        <button id="submit">Submit</button>
        <p>
          <span>or</span>
        </p>
        <button id="sign-up">Sign Up</button>
      </div>
      <div id="create-acct">
        <h1>Create an Account</h1>
        <input id="email-signup" type="text" placeholder="Email *" />
        <input
          id="confirm-email-signup"
          type="email"
          placeholder="Confirm Email *"
        />
        <input id="password-signup" type="password" placeholder="Password *" />
        <input
          id="confirm-password-signup"
          type="password"
          placeholder="Confirm Password *"
        />
        <button id="create-acct-btn">Create Account</button>
        <button id="return-btn">Return to Login</button>
      </div>
    </div>
  );
};

export default Login;
