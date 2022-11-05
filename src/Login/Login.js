import React from "react";
import { renderMatches } from "react-router-dom";
import "./Login.css";
import { Link } from "react-router-dom";

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
          <Link className="login__header" to="/">
            <img src="../images/footer/footer__logo.png" alt="" />
            <h3>NearCart</h3>
          </Link>
          <h4>Hi Welcome Back!</h4>
          <p>Email</p>
          <input type="text" name="login__email" />
          <p>Password</p>
          <input type="password" name="login__password" />
          <button type="submit"> Login</button>{" "}
          <div className="login__right__signUp">
            <span>Don't have a account?</span>{" "}
            <Link to="/signup">Sign Up Here</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
