import { useState } from 'react';
import searchIcon from '../images/search-icon.jpg';
import resList from '../utils/mockData';
import RestaurantCard from './ResataurantCard';

const BodyComponent = () => {

    const [topRestaurants, setTopRestaurants] = useState(resList);

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
            <div className="filtersContainer">
                <button 
                    className="all-filter-btn global-btn" 
                    onClick={() => {
                        setTopRestaurants(resList);
                    }}
                >
                All
                </button>  
                <button 
                    className="top-filter-btn global-btn" 
                    onClick={() => {
                        const filteredList = resList.filter(
                            (restaurant) => restaurant.data.rating>4.0
                        );
                        setTopRestaurants(filteredList);
                    }}
                >
                Top Rated Restaurants
                </button>                
            </div>
            <div className="restaurantContainer">
                {topRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default BodyComponent;