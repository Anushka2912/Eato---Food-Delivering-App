import logo from "../images/logo-eato.jpg";
import userIcon from "../images/user-icon.jpg";
import cartIcon from "../images/shopping-cart.jpg";

const HeaderComponent = () => {
  return (
    <div className="headerContainer">
      <div className="logoContainer">
        <img src={logo} alt="company-logo-image" className="mainLogo" />
      </div>
      <div className="navContainer">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Contact Us</a>
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
