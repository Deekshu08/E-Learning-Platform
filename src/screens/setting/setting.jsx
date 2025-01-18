import React from "react";
import "./setting.css";

function Setting() {
  return (
    <div className="edit-profile">
      <div className="settings">
        <h2>Settings</h2>
      </div>

      <div className="setting-options">
        <div className="">
          <h4>
            Change Password
            <input type="password" name="password" placeholder="Set Password" />
          </h4>
          <h4>Notifications</h4>
          <h4>Switch Mode </h4>
          <h4>
            Payment Details <input type="text" name="" />
            <input type="text" name="" />
          </h4>
        </div>

        <div className="support">
          <h4>
            <img src="src\assets\logo\courses.png" /> MY COURSES
          </h4>
          <h4>
            <img src="src\assets\logo\support.png" /> HELP & SUPPORT
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Setting;
