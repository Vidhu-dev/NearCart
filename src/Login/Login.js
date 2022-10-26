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
          <h4>Hi Welcome Back!</h4>
          <p>Email</p>
          <input type="text" name="login__email" />
          <p>Password</p>
          <input type="password" name="login__password" />
          <button type="submit"> Login</button>{" "}
          <div className="login__right__signUp">
            <span>Don't have a account?</span> <a href="">Sign Up Here</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
