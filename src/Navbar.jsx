import "./Navbar.css";
import { Link } from "react-router-dom";


export default function Navbar() {
  const user = false;
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
            <Link className="link" to="/contact">
              Contact
            </Link></li>
            <li className="topListItem">
            <Link className="link" to="/about">
              About
            </Link></li>
            <li className="topListItem">
            <Link className="link" to="/write">
              Write
            </Link></li>
            <li className="topListItem">
            <Link className="link" to="/settings">
              Settings
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
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
            </ul>
          )}
              <i className=" topIcon fa-solid fa-magnifying-glass"></i>

        </div>
        
        </div>
  )
}

