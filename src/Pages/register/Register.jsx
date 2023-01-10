import "./register.css";
import { useState , useEffect } from "react";
import { getAuth , createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


export default function Register() {
    const nav = useNavigate();
	
	useEffect( () => {
		if( localStorage.getItem("un")!=null)
			nav("/");

	})
    const [un , setUn] = useState("");
    const [email , setEmail] = useState("");
	const [pw , setPw] = useState("");
	const [msg , setMsg] = useState("");

    const hUn = (event) => {
	
        setUn(event.target.value);
}

const hEmail = (event) => {
    setEmail(event.target.value);
}
	const hPw = (event) => {
		setPw(event.target.value);
}
	
const reg = (event) => {
    event.preventDefault();
  
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,email,pw)
        .then(res => {
            nav("/login");
        })
        .catch(err =>setMsg(err.message))			
    }
    
    


    return (
        <>
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit  = {reg}>
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..."   onChange = {hUn} />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..."  onChange = {hEmail} />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..."  onChange = {hPw} />
        <button className="registerButton">Register</button>
      </form>
        <button className="registerLoginButton">Login</button>
        <h1> {msg} </h1>
    </div>
    </>
    );
}
