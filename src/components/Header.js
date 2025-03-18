import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnilneStatus";

export const Header = () => {

    const [btnName , setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
 
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={require("../../assests/bird-logo.jpg")} alt="logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li> 
              Online Status  { onlineStatus === true ? "🟢"  : "🔴" }
            </li>
            <li><Link to="/">Home</Link> </li>
            <li> <Link to="/about">About Us</Link> </li>
            <li><Link to="contact">Contact Us</Link> </li>
            <li><Link to="/grocery">Grocery</Link> </li>
            <li>Cart</li>
            <button className="login" onClick={()=> {
              btnName==="Login" ? setBtnName("Logout") : setBtnName("Login")}
              }>{btnName}</button>
          </ul>
        </div>
      </div>
    )
  }

export default Header;