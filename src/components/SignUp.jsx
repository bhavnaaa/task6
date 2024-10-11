import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";
import './SignUp.css'; // Import the CSS file

const auth = getAuth(app);

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User signed up");
      navigate("/login");
    } catch (error) {
      console.error("Error signing up: ", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Sign Up</h2>
        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
        </div>
        <button
          onClick={handleSignup}
          className="signup-button"
        >
          Sign Up
        </button>
        <div className="login-text">
          <p>
            Already signed up?{" "}
            <a
              href="/login"
              className="login-link"
            >
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
