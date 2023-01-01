import "./login.css"
import { useState, useRef ,useEffect} from "react";
import { useNavigate} from "react-router-dom";
import { getAuth , signInWithEmailAndPassword } from "firebase/auth";
import axios from "axios";
import { Link } from "react-router-dom";



export default function Login() {

  useEffect( () => {
		if( localStorage.getItem("email")!=null)
			nav("/");

	})
  const nav = useNavigate()
  

  const [msg ,setMsg] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
			const auth = getAuth();
			signInWithEmailAndPassword(auth, email , password)
			.then(res => {
				nav("/");
        localStorage.setItem("un",email);
			
			})

			.catch( err => setMsg(err.message))
    
			
	}
  return (
   
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="email"
          className="loginInput"
          placeholder="Enter your username..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
      
      <button value = {handleSubmit} className="loginRegisterButton"  >LOGIN</button>
      
    </form>
    <h1>{msg}</h1>
    
  </div>
);
}
