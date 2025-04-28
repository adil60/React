import {  useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnilneStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

export const Header = () => {

    const [btnName , setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {userName} = useContext(userContext);
    const cartItems =  useSelector( (store) =>  store.cart.items);
 
    return (
      <div className="flex justify-between shadow-lg">
        <div className="logo-container">
          <img className="w-28 h-28 bg-pink-200" 
          // src={require("../../assests/bird-logo.jpg")}
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
          alt="logo" />
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
            <li className="px-4">
            <Link to="/cart">
              Cart
              ({cartItems.length}) 
              </Link>
              </li>
            <button className="login" onClick={()=> {
              btnName==="Login" ? setBtnName("Logout") : setBtnName("Login")}
              }>{btnName}</button>
              <li className="px-4">{userName} </li>
          </ul>
        </div>
      </div>
    )
  }

export default Header;