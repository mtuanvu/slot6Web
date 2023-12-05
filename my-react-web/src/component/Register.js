import React from "react";
import "./register.css";
const Register = () => {
  return (
    <div>
      <form className="Container">
        <div className="input">
          <label>
            Product
            <input />
          </label>
          <label>
            Name
            <input />
          </label>
          <label>
            Phone Number
            <input />
          </label>
          <label>
            Email
            <input />
          </label>
        </div>
        <div className="button">
          <button>Register</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
