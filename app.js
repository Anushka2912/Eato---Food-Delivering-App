import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/logo-eato.jpg";
import userIcon from "./assets/user-icon.jpg";
import cartIcon from "./assets/shopping-cart.jpg";
import searchIcon from "./assets/search-icon.jpg";

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

const resList = [
    {
    type: "restaurant",
    data: {
        "id": "111",
        "name": "Pizza Pizza",
        "address": "123 Main St, Ottawa, ON K1A 1A1",
        "cuisine": "Pizza",
        "rating": 4.8,
        "delivery_time": "30-45 min",
        "image": "https://i.ibb.co/2yCLtPY/pizza-pizza.jpg"
        }
    },
    {
    type: "restaurant",
    data: {
        "id": "112",
        "name": "KFC",
        "address": "456 King St, Ottawa, ON K2B 2B2",
        "cuisine": "Fast Food",
        "rating": 3.9,
        "delivery_time": "20-30 min",
        "image": "https://i.ibb.co/qydLtQw/kfc.jpg"
        }
    },
    {
    type: "restaurant",
    data: {
        "id": "113",
        "name": "Poulet Rouge",
        "address": "789 Queen St, Ottawa, ON K3C 3C3",
        "cuisine": "Rotisserie Chicken",
        "rating": 4.2,
        "delivery_time": "25-35 min",
        "image": "https://i.ibb.co/42W38xm/poulet-rouge.jpg"
        }
    },
    {
    type: "restaurant",
    data: {
        "id": "114",
        "name": "Masakali",
        "address": "101 Main St, Ottawa, ON K1A 1A1",
        "cuisine": "Indian",
        "rating": 4.5,
        "delivery_time": "30-45 min",
        "image": "https://i.ibb.co/fHhPLdj/masakali.webp"
        }
    },
    {
    type: "restaurant",
    data: {
        "id": "115",
        "name": "Joey",
        "address": "202 Elm St, Ottawa, ON K2A 2B2",
        "cuisine": "Casual Dining",
        "rating": 4.4,
        "delivery_time": "35-50 min",
        "image": "https://i.ibb.co/tsJ86Zq/joey.jpg"
        }
    },
    {
    type: "restaurant",
    data: {
        "id": "116",
        "name": "Tim Hortons",
        "address": "909 Spruce St, Ottawa, ON K1N 5Z5",
        "cuisine": "Coffee & Donuts",
        "rating": 3.9,
        "delivery_time": "15-25 min",
        "image": "https://i.ibb.co/6r7PvGp/tim-hortons.jpg"
        }
    },
    {
    type: "restaurant",
    data: {
        "id": "117",
        "name": "Dal Moro's",
        "address": "404 Pine St, Ottawa, ON K1A 2A2",
        "cuisine": "Italian",
        "rating": 4.3,
        "delivery_time": "20-30 min",
        "image": "https://i.ibb.co/DQMVv3b/dal-moro.jpg"
        }
    },
    {
    type: "restaurant",
    data: {
        "id": "118",
        "name": "A&W",
        "address": "505 Birch St, Ottawa, ON K2B 3C3",
        "cuisine": "Fast Food",
        "rating": 3.8,
        "delivery_time": "25-35 min",
        "image": "https://i.ibb.co/BPkGX7n/a-w.jpg"
        }
    }
]

const RestaurantCard = (props) => {
    
    const { resData } = props;

    return (
        <div className="res-card">
            <div className="res-image-box">
                <img
                    className="res-img"
                    alt="restaurant-image" 
                    src={resData.data.image}
                />
            </div>
            <div className="res-details">
                <div className="res-details-top">
                    <h3>{resData.data.name}</h3>
                    <div className="rating-icon">
                        <p>{resData.data.rating}</p>
                    </div>
                </div>
                <div className="res-details-bottom">
                    <p>{resData.data.delivery_time}</p>
                </div>
            </div>
        </div>
    );
};

const BodyComponent = () => {
    return (
        <div className="bodyContainer">
            <div className="searchContainer">
                <button className="search-btn"><img src={searchIcon} alt="search-icon-image" className="search-icon" /></button>
                <input 
                    type="text" 
                    className="search-input"
                    placeholder="Search..." 
                />
            </div>
            <div className="restaurantContainer">
                {resList.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                ))}
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