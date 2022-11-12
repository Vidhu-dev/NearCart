import "./Login.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, renderMatches } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/");
  }, [user, loading]);
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
          <h4>Hi Welcome</h4>
          <p>Name</p>
          <input type="text" name="login__name" value={name} onChange={(e) => setName(e.target.value)}/>
          <p>Email</p>
          <input type="email" name="login__email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <p>Password</p>
          <input type="password" name="login__password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit" onClick={() => registerWithEmailAndPassword(name,email,password)}>Sign Up</button>{" "}
          <div className="login__right__signUp">
            <span>Already have a account?</span> <a href="/login">Sign In Here</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
