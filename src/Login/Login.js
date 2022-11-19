import "./Login.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  var isDisabled = false;
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/");
  });
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
          <input type="text" name="login_email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <p>Password</p>
          <input type="password" name="login__password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          <button type="submit" disabled={isDisabled} onClick={() => {logInWithEmailAndPassword(email,password);isDisabled = true}}> Login</button>{" "}
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
