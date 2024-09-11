import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./ResataurantCard";
import SearchContainer from "./Search";

const BodyComponent = () => {
  const [topRestaurants, setTopRestaurants] = useState(resList);

  return (
    <div className="bodyContainer">
        <SearchContainer />
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
                    (restaurant) => restaurant.data.rating > 4 
                );
                setTopRestaurants(filteredList);
            }}
            >
            Top Rated Restaurants
            </button>
        </div>
        <div className="restaurantContainer">{
            topRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
            ))
        }
        </div>
    </div>
  );
};

export default BodyComponent;