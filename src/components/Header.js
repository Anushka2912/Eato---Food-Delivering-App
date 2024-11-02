import logo from "../images/logo-eato.jpg";
import userIcon from "../images/user-icon.jpg";
import cartIcon from "../images/shopping-cart.jpg";
import { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const HeaderComponent = () => {

  const [loginBtn, setLoginBtn] = useState("Login")

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(createContext);

  return (
    <div className="flex justify-between items-center gap-10 p-2.5 px-8 border-b border-black headerContainer">
      <div className="logoContainer">
        <img src={logo} alt="company-logo-image" className="w-full max-w-[80px] h-auto mainLogo" />
      </div>
      <div className="w-full flex justify-end navContainer">
        <ul className="flex justify-between items-center gap-5 list-none">
          <li>
            <Link to="/" className="text-black">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-black">About Us</Link>
          </li>
          <li>
            <Link to="/contact" className="text-black">Contact Us</Link>
          </li>
          <li>Online Status: {onlineStatus ? "Online" : "Offline"}</li>
          <li>
            <button className="bg-black border border-black rounded-full text-white py-1 px-4 hover:bg-transparent hover:text-black hover:border-black transition-colors duration-300" 
              onClick={
                () => {
                  loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
                }
              }
            >
              {loginBtn}
            </button>
            <p>{loggedInUser}</p>
          </li>
        </ul>
      </div>
      <div className="flex justify-between gap-2 cartContainer ">
        <img src={userIcon} alt="user-icon" className="w-full max-w-[25px] h-auto userIcon" />
        <img src={cartIcon} alt="cart-icon" className="w-full max-w-[25px] h-auto cartIcon" />
      </div>
    </div>
  );
};

export default HeaderComponent;
