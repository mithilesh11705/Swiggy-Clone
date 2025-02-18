import { useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  const handleClick = () => {
    btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
  };
  const onlinestatus=useOnlineStatus();
  return (
    <div className="header">
      <div className="logo">
        <img id="l" src={LOGO_URL} />
      </div>
      <div className="Nav-items">
        <ul>
        <li>
          Online Status:{onlinestatus ? "✅" : "❌" }
        </li>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
          <li>Cart</li>
          <button className="login-btn" onClick={handleClick}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
