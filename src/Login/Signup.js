import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="login__left">
        <div className="login__left__greeting">
          <h4>Welcome Back!</h4>
          <h6>Login your account and start shopping</h6>
        </div>
      </div>
      <div className="login__right">
        <div className="login__right__info">
          <div className="login__header">
            <img src="../images/footer/footer__logo.png" alt="" />
            <h3>NearCart</h3>
          </div>
          <h4>Hi Welcome</h4>
          <p>Name</p>
          <input type="text"  name="login__name"/>
          <p>Email</p>
          <input type="email" name="login__email" />
          <p>Password</p>
          <input type="password" name="login__password" />
          <button type="submit">Sign Up</button>{" "}
          <div className="login__right__signUp">
            <span>Already have a account?</span> <a href="">Sign In Here</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
