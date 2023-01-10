import "./login.css";
import { useState, useEffect} from "react";
import { useNavigate} from "react-router-dom";
import { getAuth , signInWithEmailAndPassword } from "firebase/auth";


export default function Login() {
    const nav = useNavigate();
	
	useEffect( () => {
		if( localStorage.getItem("email")!=null)
			nav("/");

	})
	const [email ,setEmail] = useState("");
	const [pw ,setPw] = useState("");
	const [msg ,setMsg] = useState("");


	const hEmail = (event) =>{
		setEmail(event.target.value);
}
	const hPw = (event) => {
		setPw(event.target.value);
}
	const login = (event) => {
		event.preventDefault();
			const auth = getAuth();
			signInWithEmailAndPassword(auth, email , pw)
			.then(res => {
				nav("/");
				localStorage.setItem("un",email);
			})
			.catch( err => setMsg(err.message))
	}
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit = {login}>
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." onChange = {hEmail} />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..."  onChange = {hPw}/>
        <button className="loginButton">Login</button>
      </form>
        <button className="loginRegisterButton">Register</button>
        <h1> {msg} </h1>
    </div>
  );
}