import React from "react";
import "./account.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGear,
  faPhoneVolume,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Account() {
  const navigation = useNavigate();

  return (
    <div className="account-container">
      <div className="user-profile">
        <img src="src\assets\logo\user.png" alt="your-image" /> <br />
        <button>
          UPLOAD <img src="src\assets\logo\cameraicon.png" />
        </button>
        <div className="user-detail">
          <h4>
            <FontAwesomeIcon icon={faUser} /> USERNAME <br />
            <input type="text" name="username" placeholder="jenny08" />
          </h4>
          <h4>
            <FontAwesomeIcon icon={faEnvelope} /> EMAIL ADDRESS <br />
            <input type="email" name="email" placeholder="jenny246@gmail.com" />
          </h4>

          <h4>
            <FontAwesomeIcon icon={faPhoneVolume} /> CONTACT <br />
            <input type="tel" name="phone" placeholder="+91 |xxxxxxxxxx" />
          </h4>
        </div>
      </div>
      <div className="gender">
        <h4>GENDER</h4>
        <div className="gender-options">
          <label>
            <input type="radio" name="gender" value="Male" /> Male
          </label>
          <label>
            <input type="radio" name="gender" value="Female" /> Female
          </label>
        </div>
      </div>
      <div className="dob">
        <h4>DATE OF BIRTH</h4>
        <label>
          <input type="date" />
        </label>
      </div>
      <div className="save">
        <button>SAVE</button>
      </div>

      <div className="setting">
        <button onClick={() => navigation("/setting")}>
          SETTINGS <FontAwesomeIcon icon={faGear} />
        </button>
      </div>
    </div>
  );
}

export default Account;
