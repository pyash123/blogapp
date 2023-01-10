import { useLocation } from "react-router";
import Header from "../../header/Header";
import Navbar from "../../Navbar";
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";

import "./home.css";

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header/>
      <div className="home">
        <Posts/>
        <Sidebar/>
        
        
        
      </div>
    </>
  );
}