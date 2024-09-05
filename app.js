import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/logo-eato.jpg";
import image from "./assets/user-icon.jpg";

const HeaderComponent = () => {
    return (
        <div className="headerContainer">
            <div className="logoContainer">
                <img src={logo} alt="company-logo-image" className="mainLogo" />
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
                <img src={image} alt="user-icon" className="userIcon" />
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