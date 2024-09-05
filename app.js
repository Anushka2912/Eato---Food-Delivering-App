import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/logo-eato.jpg";
import userIcon from "./assets/user-icon.jpg";
import cartIcon from "./assets/shopping-cart.jpg";
import resImage from "./assets/pizza-pizza.jpg";

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
                </ul>
            </div>
            <div className="cartContainer">
                <img src={userIcon} alt="user-icon" className="userIcon" />
                <img src={cartIcon} alt="cart-icon" className="cartIcon" />
            </div>
        </div>
    );
};

const RestaurantCard = (props) => {
    return (
        <div className="res-card">
            <div className="res-image-box">
                <img src={resImage} alt="restaurant-image" className="res-img" />
            </div>
            <div className="res-details">
                <h3 style={{margin: '0px'}}>{props.resName}</h3>
                <p style={{margin: '0px'}}>Pizzas, Italian, Pastas, Desserts</p>
            </div>
        </div>
    );
};

const BodyComponent = () => {
    return (
        <div className="bodyContainer">
            <div className="searchContainer">
                <input 
                    type="text" 
                    className="search-input"
                    placeholder="Search..." 
                />
                <button className="search-btn">Search</button>
            </div>
            <div className="restaurantContainer">
                <RestaurantCard resName="Pizza Pizza"/>
                <RestaurantCard resName="KFC"/>
                <RestaurantCard resName="Poulet Rouge"/>
                <RestaurantCard resName="Masakali"/>
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <HeaderComponent />
            <BodyComponent />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);