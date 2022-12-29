
import './App.css';
import Navbar from './Navbar';
import Home from "./Pages/home/Home";
import Settings from "./Pages/settings/Settings";
import Login from "./Pages/login/Login";
import Register from './Pages/register/Register';
import { BrowserRouter as Router, Routes, Route , Link } from "react-router-dom";
import Write from "./Pages/write/Write";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwQ3JmwhqJV5RQiP9G3dPl79TbTMuDDj4",
  authDomain: "yash8aug.firebaseapp.com",
  projectId: "yash8aug",
  storageBucket: "yash8aug.appspot.com",
  messagingSenderId: "953978650784",
  appId: "1:953978650784:web:c2c186259641510220c9c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



function App() {
  
  return (
    <Router>

    <Navbar/>
    <Routes>
    <Route path = "/" element = {<Home/>}/>
    <Route path = "/register" element=  { < Register />}/>
    <Route path = "/login" element = {<Login/>}/>
    <Route path = "/write" element = {<Write/>}/>
    <Route path="/settings"  element = {<Settings/>}/>
      
          
        
       
        </Routes>
    </Router>
     

  
  );
}

export default App;
