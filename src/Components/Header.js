import { useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import Button from "@mui/material/Button";
const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  const handleClick = () => {
    btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
  };
  const onlinestatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-3 mb-4 ">
      <div className="w-32">
        <img className="" src={LOGO_URL} />
      </div>
      <div className=" flex items-center ">
        <ul className="flex p-6 m-5" >
          <li className="px-4">Online Status:{onlinestatus ? "✅" : "❌"}</li>
          <li className="px-4">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li className="px-4">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="px-4">Cart</li>
          <Button className=" mt-3" variant="contained" onClick={handleClick}>
            {btnName}
          </Button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
