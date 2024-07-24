import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./Firebase";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/Profile";
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h3>Login</h3>
      <div className="mb-3">
        <label>Email Address</label>
        <input 
          type="email" 
          className="form-control" 
          placeholder="Enter Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>
      <div className="mb-3 password-container">
        <label>Password</label>
        <input 
          type={showPassword ? "text" : "password"} 
          className="form-control" 
          placeholder="Enter Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <FontAwesomeIcon 
          icon={showPassword ? faEyeSlash : faEye} 
          onClick={() => setShowPassword(!showPassword)} 
          className="password-toggle-icon" 
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        New user <a href="/Registermy">Register Here</a>
      </p>
    </form>
  );
}

export default Login;
