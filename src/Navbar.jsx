import "./Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import { useEffect , useState } from "react";
import { getAuth , signOut} from "firebase/auth";




export default function Navbar() {
  const user = false;
  const nav = useNavigate();
  const un = localStorage.getItem("un");
	const [username ,setUsername] = useState("");
  const u = localStorage.getItem("un");
  useEffect(() => {
		let u = localStorage.getItem("un");
		if(  u != null)
		{
			setUsername(u);
     
      
		}
  });
		
	
  const lo = (event) =>{
		event.preventDefault();
		const auth = getAuth();
		localStorage.clear();
		signOut(auth)
		.then(res => {
			nav("/login")
		})
		.catch(err =>console.log(err.messgae))
	}
  return(
    <div className ="top ">
        <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"> </i>
        <i className="topIcon fa-brands fa-instagram"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link></li>
            
           
            
            <li className="topListItem">
            <Link className="link" to="/settings">
              Settings
            </Link></li>
            <li className="topListItem">
            <Link className="link" to="/write">
              Write
            </Link></li>
            <li className="topListItem">
            <Link className="link" to="/view">
              View
            </Link></li>
            <li className="topListItem">
            <Link className="link" to="/enquiry">
              Enquiry
            </Link></li>
            

          </ul>

        </div>
        <div className="topRight">
          {user ? (
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          
          ) : (
          <ul className="topList">
            <li className="topListItem">
            {(un == null) && (<Link className="link" to = "/login">Login</Link>)}
            </li>
            <li className="topListItem">
            {(un == null) && (<Link className="link"to = "/register">Register</Link>)}
            </li>
            </ul>
          )}
            <form onSubmit={lo}>
             <input type = "submit"  className = "btn" value = "Logout" />
              
            </form>

            <h3> Welcome user :
              {username}</h3>
        </div>
        
        </div>
  )
}

