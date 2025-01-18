import React from "react";
import "./userProfile.css";
import { useNavigate, useLocation } from "react-router-dom";

function Profile() {
  const navigation = useNavigate();
  const location = useLocation();
  // const name = location.state?.name;
  // const email = location.state?.email;

  const { name, email } = location.state || {};

  return (
    <div className="main-div">
      <div
        style={{
          backgroundColor: "#fff",
          paddingInline: 100,
          paddingBottom: 30,
          paddingTop: 30, borderRadius:25
        }}
      >
        <div className="profile">
          <img src="src\assets\logo\profile2.png" alt="user" />
        </div>

        <div className="main">
          <div className="username">
            <h1>Hello!</h1>
            <h3>{name}</h3>
            <p>{email}</p>
          </div>

          <div className="setting">
            <button onClick={()=>navigation("/account")}>EDIT PROFILE</button>
            <button onClick={()=>navigation("/") }>LOGOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
