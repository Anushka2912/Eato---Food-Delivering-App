import logo from "../images/logo-eato.jpg";
import userIcon from "../images/user-icon.jpg";
import cartIcon from "../images/shopping-cart.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {

  const [loginBtn, setLoginBtn] = useState("Login")

  return (
    <div className="headerContainer">
      <div className="logoContainer">
        <img src={logo} alt="company-logo-image" className="mainLogo" />
      </div>
      <div className="navContainer">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <button className="login-logout-btn global-btn" onClick={
              () => {
                loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
              }
            }
            >
              {loginBtn}
            </button>
          </li>
        </ul>
      </div>
      <div className="cartContainer">
        <img src={userIcon} alt="user-icon" className="userIcon" />
        <img src={cartIcon} alt="cart-icon" className="cartIcon" />
      </div>
    </div>
  );
};

export default HeaderComponent;
