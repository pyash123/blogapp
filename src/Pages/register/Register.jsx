import "./register.css";
import axios from "axios";
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import { getAuth , createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


export default function Register() {
  const nav = useNavigate()
 
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [msg , setMsg] = useState("");

  const handleSubmit =  (e) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth,email,password)
    .then(res => {
      nav("/login");
    })
    .catch(err =>setMsg(err.message))
    }
    return (
        <div className="register">
              <span className="registerTitle">Register</span>
       <form className="registerForm" onSubmit={handleSubmit}>
       
        <label>Email</label>
        <input
          type="email"
          className="registerInput"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
      <Link className="link" to ="/login">LOGIN</Link>
      </button>
      <h1> {msg} </h1>
    </div>
    )
} 