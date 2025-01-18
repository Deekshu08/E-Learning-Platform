import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const onclick = () => {
    if (email == "") {
      alert("email is required!");
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(email)) {
        setEmail("");
        alert("Reset password link sent to your email!");
      }
      else{
        alert("Invalid email!")
      }
    }
  };

  return (
    <div className="main-container">
      <img src="src\assets\logo\forgot.png" alt="forgot" />
      <div className="container">
        <h1>Reset email password</h1>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button onClick={onclick}>Send</button>

        <div className="sign-in">
          <p style={{ marginRight: 6 }}>Back To?</p>
          <Link to="/" className="sign">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
