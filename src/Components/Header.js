import { useState } from "react";
import { LOGO_URL } from "../Utils/constants";
const Header = () => {

  const [btnName,setbtnName]=useState("Login");

  const handleClick = ()=>{
   btnName==="Login"? setbtnName("Logout"):
    setbtnName("Login");
  }

    return (
      <div className="header">
        <div className="logo">
          <img
            id="l"
            src={LOGO_URL}
          />
        </div>
        <div className="Nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
            <button className="login-btn" onClick={handleClick}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;
