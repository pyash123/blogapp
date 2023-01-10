// correct app
import { useState } from "react";
import {initializeApp}from "firebase/app";
import {getDatabase} from "firebase/database";
import 'firebase/compat/auth';
import {set,ref} from "firebase/database";
import firebase from "firebase/compat/app";
import "./enquiry.css";


// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwQ3JmwhqJV5RQiP9G3dPl79TbTMuDDj4",
    authDomain: "yash8aug.firebaseapp.com",
    databaseURL: "https://yash8aug-default-rtdb.firebaseio.com",
    projectId: "yash8aug",
    storageBucket: "yash8aug.appspot.com",
    messagingSenderId: "953978650784",
    appId: "1:953978650784:web:c2c186259641510220c9c5"
}

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = getDatabase(app);
function Enquiry()
{
    const[name,setName] = useState("");
    const[query,setQuery] = useState("");
    const[phone,setPhone] = useState("");
    const[otp,setOtp] = useState("");
    const[final,setFinal] = useState("");

    const hName = (event) => {setName(event.target.value);};
    const hQuery = (event) => {setQuery(event.target.value);};
    const hPhone = (event) => {setPhone(event.target.value);};
    const hOtp = (event) => {setOtp(event.target.value);};
    const hFinal = (event) => {setFinal(event.target.value);};

    const configureCapcha = () => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback':(response) => {
                sendOtp();
                console.log("Recaptcha varified");
            },
            defaultCountry: 'IN'
        });
    }

    const sendOtp = (event) => {
        event.preventDefault();
        configureCapcha();
        let pn = "+91"+phone;
        let av = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(pn, av)
        .then(res=>{
            setFinal(res);
            console.log(res);
            console.log("OTP sent");
            alert("OTP sent");
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const submitOtp = (event) => {
        event.preventDefault();
        final.confirm(otp)
        .then(res=>{
            const d = new Date().toString();
            const n = name + "==>" +d;
            const data = {name,phone,query,d}
            set(ref(db,"visitors/"+n),data)
            .then (res=>{
                console.log(res);
                alert("We will call u in 2 hrs")
                window.location.reload()
            })
            .catch(err=> console.log(err))
        })
        .catch(err=>{
            console.log(err);
            alert("invalid OTP");
            window.location.reload()
        })
    }
    return(
        <>
            <center>
                
                <h1>Contact Me</h1>
                <form onSubmit={sendOtp} className='en'>
                    <div id="sign-in-button"></div>
                    <input type="text" placeholder="enter name" onChange={hName}/>
                    <br/><br/>
                    <textarea placeholder="enter query" rows={3} cols={20} onChange={hQuery}/>
                    <br/><br/>
                    <input type="number" placeholder="enter phone number" onChange={hPhone}/>
                    <br/><br/>
                    <input type="submit" value="Send Otp"/>
                    <br/><br/>
                </form>
                <form onSubmit={submitOtp} className='en'>
                    <input type="number" placeholder="enter otp" onChange={hOtp}/>
                    <br/><br/>
                    <input type="submit" value="Submit Otp"/>
                    <br/><br/>
                </form>
                
            </center>
        </>
    );
}
export default Enquiry;

 