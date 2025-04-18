import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnilneStatus";

export const Header = () => {

    const [btnName , setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
 
    return (
      <div className="flex justify-between shadow-lg bg-pink-200 sm:bg-green-200 lg:bg-amber-200">
        <div className="logo-container">
          <img className="w-24 bg-pink-200" src={require("../../assests/bird-logo.jpg")} alt="logo" />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4"> 
              Online Status  { onlineStatus === true ? "🟢"  : "🔴" }
            </li>
            <li className="px-4"><Link to="/">Home</Link> </li>
            <li className="px-4"> <Link to="/about">About Us</Link> </li>
            <li className="px-4"><Link to="contact">Contact Us</Link> </li>
            <li className="px-4"><Link to="/grocery">Grocery</Link> </li>
            <li className="px-4">Cart</li>
            <button className="login" onClick={()=> {
              btnName==="Login" ? setBtnName("Logout") : setBtnName("Login")}
              }>{btnName}</button>
          </ul>
        </div>
      </div>
    )
  }

export default Header;