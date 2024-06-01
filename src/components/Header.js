import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = () => {

  const[btnNameReact, setBtnNameReact] = useState("login")
const onLineStatus = useOnlineStatus();

   return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status :{onLineStatus? "✅" :"🔴" }</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button className="login" onClick={()=>{
            btnNameReact === "Login"
            ? setBtnNameReact("Logout")
            : setBtnNameReact("Login")
          }}>
            {btnNameReact}
            </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
