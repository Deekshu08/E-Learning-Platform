import React, { useState } from "react";
import "./index.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigation = useNavigate();
  const location = useLocation();

  const { name, email: signupEmail } = location.state || {};

  const onclick = () => {
    if (email === "" || pass === "") {
      alert("input can not be empty!");
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const passRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (!emailRegex.test(email)) {
        alert("invalid email format!");
        setEmail("");
      } else if (!passRegex.test(pass)) {
        alert(
          "Invalid password! Password must be at least 8 characters long, contain one uppercase letter, and one number."
        );
        setPass("");
      } else {
        alert("Signed in successfully!");
        navigation("profile", {
          state: { name: name || signupEmail, email: email || signupEmail },
        });
        setEmail("");
        setPass("");
      }
    }
  };

  return (
    <div className="mainCon">
      <img src="src\assets\logo\login.png" alt="" />
      <div className="container">
        {/* <h1>{email}{pass}</h1> */}
        <h1>Welcome Back!</h1>

        <p className="text1">Login to your existing account</p>

        <input
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your password"
          required
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <Link to="/forgot" style={{ color: "#23a3f2" }} className="text2">
          Forgot password?
        </Link>

        <button onClick={onclick}>Sign In</button>

        <div className="text3">
          <p>Don't have an account? </p>
          <Link to="/signup" style={{ color: "#23a3f2" }}>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Login;
