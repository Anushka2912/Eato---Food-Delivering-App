import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/logo-eato.PNG";
import image from "./assets/user-icon.png";

const HeaderComponent = () => {
    return (
        <div className="headerContainer">
            <div className="logoContainer">
                <img src={logo} alt="company-logo-image" className="mainLogo"></img>
            </div>
            <div className="navContainer">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Search</li>
                </ul>
            </div>
            <div className="cartContainer">
                <img src={image} alt="user-icon" className="userIcon"></img>
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <HeaderComponent />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);