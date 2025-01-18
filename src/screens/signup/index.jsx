import React, { useState } from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();


  const onclick = () => {
    if (name === "" || email === "" || pass === "") {
      alert("inputs can not be empty!");
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
        alert("User Account Created!");
        navigate("/", { state: { name, email } });

        setName("");
        setEmail("");
        setPass("");
      }
    }
  };

  return (
    <div className="main-container">
      <img src="src\assets\logo\sign_up.png" alt="sign-up" />
      <div className="container">
        {/* <h1>{name}..{email}..{pass}</h1> */}

        <h1>Let's get started!</h1>
        <p>Create an account to get all features</p>

        <input
          type="text"
          placeholder="Enter your name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          required
        />

        <button onClick={onclick}>Sign Up</button>

        <div className="sign-in">
          <p style={{ marginRight: 10 }}>Already have an account?</p>
          <Link to="/" className="sign">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
